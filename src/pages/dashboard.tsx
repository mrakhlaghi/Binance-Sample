import BreadCrumbs from "../components/BreadCrumbs";
import MultiRHFSelect from "../components/multiRHFSelect/MultiRHFSelect";
import CandleSticksChart from "../components/chartingLibrary/CandleSticksChart";
import { useDarkMode } from "../context/DarkModeContext";
import IButton from "../components/IButton";
import { useEffect, useState } from "react";
import { SymbolType, TimeFrame } from "../types";
import clsx from "clsx";
import { transformTableData } from "../utils/transformTableData";
import { useLocation, useSearchParams } from "react-router-dom";
import { getSymbolData, getSymbolLivePrice } from "../services/dataService";
import Loading from "../components/Loading";

export default function Dashboard() {
  const { isDarkMode } = useDarkMode();
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("1m");
  const [chartSymbol, setChartSymbol] = useState<SymbolType>("BTCUSDT");
  const [rawData, setRawData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<any>(true);
  const [liveSymbolPrice, setLiveSymbolPrice] = useState<any>(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();

  const setTimeFrameParams = (interval: TimeFrame) => {
    let limit;
    if (interval == "1h") {
      limit = 24;
    } else if (interval == "15m") {
      limit = 96;
    } else if (interval == "5m") {
      limit = 288;
    } else if (interval == "1m") {
      limit = 1440;
    }
    searchParams.set("interval", interval);
    searchParams.set("limit", limit + "");
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const changeSymbolLivePrice = async () => {
      try {
        searchParams.get("symbol");
        const data = await getSymbolLivePrice(
          searchParams.get("symbol") as SymbolType
        );
        const price = Number(data?.price).toFixed(2);
        setLiveSymbolPrice(price);
      } catch (error) {
        console.error("Error fetching live price:", error);
        setLiveSymbolPrice("0.00");
      }
    };
    const intervalId = setInterval(changeSymbolLivePrice, 3000);
    return () => clearInterval(intervalId);
  }, [searchParams]);

  useEffect(() => {
    if (!searchParams.get("symbol")) {
      searchParams.set("symbol", "BTCUSDT");
      setSearchParams(searchParams);
    } else {
      setChartSymbol(searchParams.get("symbol") as SymbolType);
    }

    if (!searchParams.get("interval")) {
      searchParams.set("interval", "1m");
      setSearchParams(searchParams);
    } else {
      setTimeFrame(searchParams.get("interval") as TimeFrame);
    }
  }, [searchParams]);

  const getTableData = async () => {
    setIsLoading(true);
    await getSymbolData(search).then((data) => {
      setRawData(transformTableData(data));
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getTableData();
  }, [search]);

  const lightOptionSeries = {
    upColor: "#FCD535",
    downColor: "#ef5350",
    wickUpColor: "#FCD535",
    wickDownColor: "#ef5350",
    borderVisible: false,
    timeVisible: true,
  };
  const darkOptionSeries = {
    upColor: "#26a69a",
    downColor: "#ef5350",
    wickUpColor: "#26a69a",
    wickDownColor: "#ef5350",
    borderVisible: false,
    timeVisible: true,
  };
  const symbolDetails: Record<
    string,
    { name: string; shortName: string; imgSrc: string }
  > = {
    BTCUSDT: {
      name: "Bitcoin ",
      shortName: "(BTC)",
      imgSrc: "/images/BTC.png",
    },
    ETHUSDT: {
      name: "Ethereum",
      shortName: "(ETH)",
      imgSrc: "/images/eth.png",
    },
    TRXUSDT: { name: "Tron", shortName: "(TRX)", imgSrc: "/images/trx.webp" },
  };

  const currentSymbol = symbolDetails[chartSymbol];

  return (
    <div className="flex w-full h-full flex-wrap md:flex-nowrap px-7 ">
      <div className="flex flex-col justify-center items-start  w-full h-full gap-y-5 ">
        <BreadCrumbs
          className="w-full flex justify-start items-start text-secondary-800 "
          routes={["Home", "Crypto prices", "Bitcoin Price", "TWD"]}
        />
        <div className="w-full flex flex-col justify-start items-start">
          <div className="w-full  flex flex-col gap-y-5 sm:flex-row   sm:justify-between md:items-center md:px-3  ">
            <div className="flex flex-col justify-center items-start gap-x-3">
              {currentSymbol && (
                <div className="flex justify-start items-center gap-x-3">
                  <img
                    src={currentSymbol.imgSrc}
                    className="w-10 h-10 rounded-full"
                    alt={chartSymbol}
                  />

                  <div className="flex flex-col justify-center items-start">
                    <span className="  text-secondary-700 md:text-2xl font-semibold">
                      {currentSymbol.name}{" "}
                      <span className="text-sm md:text-base text-secondary-400">
                        {currentSymbol.shortName}
                      </span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            <MultiRHFSelect
              searchParamsLabel="symbol"
              label="Symbol"
              options={[
                { value: "BTCUSDT", label: "BTCUSDT" },
                { value: "ETHUSDT", label: "ETHUSDT" },
                { value: "TRXUSDT", label: "TRXUSDT" },
              ]}
              wrapperClass="max-w-60 z-10 flex flex-col justify-between items-center"
              className=" w-full  flex  justify-start items-center gap-x-5 gap-y-2"
              // onChangeSelect={(value: string) => setChartSymbol(value)}
            />
          </div>
          <div className="w-full h-full  flex  justify-start items-center mt-5">
            <span className="text-[#FFFFFF] text-base pl-3 sm:text-xl md:text-2xl  font-semibold">
              $ {liveSymbolPrice || "0.00"}
            </span>
          </div>
          <div className="flex justify-start items-center gap-x-2 mt-2">
            {[
              { title: "1m" },
              { title: "5m" },
              { title: "15m" },
              { title: "1h" },
            ].map((item, index) => {
              return (
                <IButton
                  key={`${index}-interval`}
                  title={item.title}
                  className={clsx(
                    " !max-w-8  h-6  !py-4 !text-secondary-900 !text-xs px-6 !rounded-full text-nowrap border border-secondary-500/50 focus:!ring-0 focus:!ring-offset-0  ",
                    timeFrame == item.title ? "!border-primary-900" : ""
                  )}
                  onclick={() => setTimeFrameParams(item.title as TimeFrame)}
                />
              );
            })}
          </div>

          {isLoading ? (
            <div className=" w-full h-full min-h-96 flex justify-center items-center">
              <Loading />
            </div>
          ) : (
            rawData.length > 0 &&
            !isLoading && (
              <>
                <CandleSticksChart
                  chartSymbol={chartSymbol}
                  timeFrame={timeFrame}
                  className="mt-5"
                  candleOptionsSeries={
                    isDarkMode ? lightOptionSeries : darkOptionSeries
                  }
                  // initialData={candleData}
                  rawData={rawData}
                  backgroundColor="transparent"
                  // backgroundColor={isDarkMode ? "#000000" : "#ffff"}
                  textColor={isDarkMode ? "#ffff" : "black"}
                />
              </>
            )
          )}

          {}
        </div>
      </div>
    </div>
  );
}
