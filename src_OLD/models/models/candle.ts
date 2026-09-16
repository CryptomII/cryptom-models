/* eslint-disable semi */
export interface Candle {
  timestamp: number,
  numberOfTrades: number,
  closePrice: string,
  highPrice: string,
  lowPrice: string,
  openPrice: string,
  baseAssetVolume: string,
  quoteAssetVolume: string,
  takerBuyBaseAssetVolume: string,
  takerBuyQuoteAssetVolume: string,
}