import { UTCTimestamp } from "lightweight-charts";

export function transformTableData(newData: any) {
    const transformedData = newData.map((item: any) => {
      // console.log(
      //   "🚀 ~ transformedData ~  Math.floor(item[0] / 1000) as UTCTimestamp:",
      //   Math.floor(item[0] / 1000) as UTCTimestamp
      // );
      // console.log(
      //   "🚀 ~ transformedData ~  Math.floor(item[0] / 1000) ",
      //   Math.floor(item[0] / 1000)
      // );
      return {
        time: Math.floor(item[0] / 1000) as UTCTimestamp,
        open: parseFloat(item[1]),
        high: parseFloat(item[2]),
        low: parseFloat(item[3]),
        close: parseFloat(item[4]),
      };
    });

    return transformedData
  }