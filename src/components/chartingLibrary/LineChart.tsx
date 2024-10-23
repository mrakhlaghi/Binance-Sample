import clsx from "clsx";
import {
  createChart,
  ColorType,
  ISeriesApi,
  IChartApi,
} from "lightweight-charts";
import React, { useEffect, useRef } from "react";

// Define types for the component's props
interface ChartComponentProps {
  data: { time: string; value: number }[];
  className?: string;
  colors?: {
    backgroundColor?: string;
    lineColor?: string;
    textColor?: string;
    areaTopColor?: string;
    areaBottomColor?: string;
  };
  localization?: {
    locale: string;
    dateFormat: string;
  };
}

export const LineChart: React.FC<ChartComponentProps> = (props) => {
  const {
    data,
    className,
    colors: {
      backgroundColor = "white",
      lineColor = "#2962FF",
      textColor = "black",
      areaTopColor = "#2962FF",
      areaBottomColor = "rgba(41, 98, 255, 0.28)",
    } = {},
    localization: { locale = "en-US", dateFormat = "dd MMM 'yy" } = {},
  } = props;

  // Ref to store the chart container div element
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current?.clientWidth,
        });
      }
    };

    // Create chart when component is mounted
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
        // fontFamily: "Arial",
        fontFamily: " 'Trebuchet MS'",
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });
    chartRef.current = chart;

    chart.timeScale().fitContent();

    // Add area series to chart
    const newSeries: ISeriesApi<"Area"> = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });

    newSeries.setData(data);

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return (
    <div
      className={clsx(className)}
      ref={chartContainerRef}
      style={{ width: "100%", height: "600px" }}
    />
  );
};

export default LineChart;
