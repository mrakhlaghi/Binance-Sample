import { UTCTimestamp } from "lightweight-charts";

export type ReactSelectOption = {
    value: string | number| null,
    label: string
}

 export interface Candle {
    time: UTCTimestamp;
    open: number;
    high: number;
    low: number;
    close: number;
  }
  
  // Define component props
  export interface CandleSticksChartProps {
    className?: string; 
    backgroundColor?: string; 
    textColor?: string; 
    candleOptionsSeries: {
      upColor: string;
      downColor: string;
      wickUpColor: string;
      wickDownColor: string;
      borderVisible: boolean;
    };
    chartSymbol :string,
    timeFrame:string,
    rawData: any[],
  }

  export type TimeFrame = "1m"|"5m"|"15m"|"1h"|"4h"|"1d"
  export type SymbolType = "BTCUSDT"|"ETHUSDT"|"TRXUSDT"