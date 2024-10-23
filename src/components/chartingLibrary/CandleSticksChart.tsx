import {
  ColorType,
  createChart,
  IChartApi,
  ISeriesApi,
  UTCTimestamp,
} from "lightweight-charts";
import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { CandleSticksChartProps } from "../../types";
import { transformTableData } from "../../utils/transformTableData";
import { getSymbolData } from "../../services/dataService";
import { useLocation } from "react-router-dom";

const CandleSticksChart: React.FC<CandleSticksChartProps> = ({
  // initialData,
  className,
  backgroundColor = "white",
  textColor = "black",
  candleOptionsSeries,
  rawData,
}) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  // const [lastUpdated, setLastUpdated] = useState<any>(null);
  const { search } = useLocation();



  // function getTimeDifference(entryTimeMs: number) {
  //   const now = Date.now();

  //   const differenceMs = now - entryTimeMs;

  //   const differenceSeconds = Math.floor(differenceMs / 1000 / 60 / 60 - 3.5);
  //   const differenceMinutes = Math.floor(differenceMs / (1000 * 60));
  //   const differenceHours = Math.floor(differenceMs / (1000 * 60 * 60));
  //   const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  //   setLastUpdated(differenceSeconds);
  // }

  useEffect(() => {
    if (!chartContainerRef.current) return;
    if (rawData.length <= 0) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
        fontFamily: "'Trebuchet MS'",
      },
      localization: {
        // locale: "en-US",
        timeFormatter: (time: UTCTimestamp) => {
          const date = new Date(time * 1000); // Convert from timestamp to milliseconds
          const years = date.getFullYear();
          const months = (date.getMonth() + 1).toString().padStart(2, "0");
          const days = date.getDate().toString().padStart(2, "0");
          const hours = date.getHours().toString().padStart(2, "0");
          const minutes = date.getMinutes().toString().padStart(2, "0");
          // const seconds = date.getUTCSeconds().toString().padStart(2, "0");
          return `${days}:${months}:${years}   ${hours}:${minutes}`;
        },
      },
      grid: {
        vertLines: {
          color: "#c4c4c4",
        },

        horzLines: {
          color: "#c4c4c450",
        },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
    });

    const candlestickSeries = chart.addCandlestickSeries(candleOptionsSeries);
    candlestickSeries.priceScale().applyOptions({
      autoScale: false,
      scaleMargins: {
        top: 0.1,
        bottom: 0.2,
      },
    });

    seriesRef.current = candlestickSeries;
    chartRef.current = chart;

    candlestickSeries.setData(rawData);

    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current!.clientWidth });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [backgroundColor, textColor, candleOptionsSeries, rawData]);

  useEffect(() => {
    const updateLastCandle = async () => {
      const newData = await getSymbolData(search);
      const transformedData = transformTableData(newData);
      const lastCandleNewData = transformedData.pop();
      const lastCandleOldData = rawData.pop();
      const newCandle = { ...lastCandleNewData, time: lastCandleOldData.time };
      rawData.push(newCandle);
      const newRawData = rawData;

      if (lastCandleNewData && lastCandleOldData) {
        if (seriesRef.current && newRawData) {
          seriesRef.current?.setData(newRawData);
          // getTimeDifference(lastCandleNewData.time);
        }
      }
    };

    const intervalId = setInterval(updateLastCandle, 3000);

    return () => clearInterval(intervalId);
  }, [rawData, search]);

  useEffect(() => {
    const updateTableData = async () => {
      const newData = await getSymbolData(search);
      const transformedNewData = transformTableData(newData);
      if (seriesRef.current && newData) {
        seriesRef.current?.setData(transformedNewData);
      }
    };

    const intervalId = setInterval(updateTableData, 60000);

    return () => clearInterval(intervalId);
  }, [rawData, search]);

  return (
    <>
      <div className="full w-full flex justify-start items-center "></div>
      <div
        ref={chartContainerRef}
        className={clsx(
          "border border-secondary-200 rounded-xl overflow-hidden ",
          className
        )}
        style={{ width: "100%", height: "400px" }}
      />
      {/* <div className=" w-full flex justify-end items-center  ">
        Last Updated : {lastUpdated} ago
      </div> */}
    </>
  );
};

export default CandleSticksChart;
