import { Moment } from "./moment.model";

/**
 * Extends the Moment interface to include full candle data for multiple timeframes (5m, 1h, 4h, 1d, 1w).
 * This interface adds properties for low, high, open, close, trades, volume, openTime, closeTime, quoteVolume, baseAssetVolume, quoteAssetVolume, rsi, smaShort, smaLong, emaShort, emaLong, macd, signal, histogram, and standard deviations for each timeframe.
 *
 * ```json
 * {
 *    ...candle,
 *    ...indicators,
 *    low_5m: "...",
 *    high_5m: "...",
 *    open_5m: "...",
 *    close_5m: "...",
 *    trades_5m: 0,
 *    volume_5m: "...",
 *    openTime_5m: 0,
 *    closeTime_5m: 0,
 *    quoteVolume_5m: "...",
 *    baseAssetVolume_5m: "...",
 *    quoteAssetVolume_5m: "...",
 *    rsi_5m: 0,
 *    smaShort_5m: 0,
 *    smaLong_5m: 0,
 *    emaShort_5m: 0,
 *    emaLong_5m: 0,
 *    macd_5m: 0,
 *    signal_5m: 0,
 *    histogram_5m: 0,
 *    standardDeviationShort_5m: 0,
 *    standardDeviationLong_5m: 0,
 *    ...moment_1h,
 *    ...moment_4h,
 *    ...moment_1d,
 *    ...moment_1w,
 * }
 * ```
 */
export interface MomentFull extends Moment {
  // 5m candle data
  low_5m: string;
  high_5m: string;
  open_5m: string;
  close_5m: string;
  trades_5m: number;
  volume_5m: string;
  openTime_5m: number;
  closeTime_5m: number;
  quoteVolume_5m?: string;
  baseAssetVolume_5m?: string;
  quoteAssetVolume_5m: string;
  rsi_5m: number;
  smaShort_5m: number;
  smaLong_5m: number;
  emaShort_5m: number;
  emaLong_5m: number;
  macd_5m: number | undefined;
  signal_5m: number | undefined;
  histogram_5m: number | undefined;
  standardDeviationShort_5m: number;
  standardDeviationLong_5m: number;
  // 1h candle data
  low_1h: string;
  high_1h: string;
  open_1h: string;
  close_1h: string;
  trades_1h: number;
  volume_1h: string;
  openTime_1h: number;
  closeTime_1h: number;
  quoteVolume_1h?: string;
  baseAssetVolume_1h?: string;
  quoteAssetVolume_1h: string;
  rsi_1h: number;
  smaShort_1h: number;
  smaLong_1h: number;
  emaShort_1h: number;
  emaLong_1h: number;
  macd_1h: number | undefined;
  signal_1h: number | undefined;
  histogram_1h: number | undefined;
  standardDeviationShort_1h: number;
  standardDeviationLong_1h: number;
  // 4h candle data
  low_4h: string;
  high_4h: string;
  open_4h: string;
  close_4h: string;
  trades_4h: number;
  volume_4h: string;
  openTime_4h: number;
  closeTime_4h: number;
  quoteVolume_4h?: string;
  baseAssetVolume_4h?: string;
  quoteAssetVolume_4h: string;
  rsi_4h: number;
  smaShort_4h: number;
  smaLong_4h: number;
  emaShort_4h: number;
  emaLong_4h: number;
  macd_4h: number | undefined;
  signal_4h: number | undefined;
  histogram_4h: number | undefined;
  standardDeviationShort_4h: number;
  standardDeviationLong_4h: number;
  // 1d candle data
  low_1d: string;
  high_1d: string;
  open_1d: string;
  close_1d: string;
  trades_1d: number;
  volume_1d: string;
  openTime_1d: number;
  closeTime_1d: number;
  quoteVolume_1d?: string;
  baseAssetVolume_1d?: string;
  quoteAssetVolume_1d: string;
  rsi_1d: number;
  smaShort_1d: number;
  smaLong_1d: number;
  emaShort_1d: number;
  emaLong_1d: number;
  macd_1d: number | undefined;
  signal_1d: number | undefined;
  histogram_1d: number | undefined;
  standardDeviationShort_1d: number;
  standardDeviationLong_1d: number;
  // 1w candle data
  low_1w: string;
  high_1w: string;
  open_1w: string;
  close_1w: string;
  trades_1w: number;
  volume_1w: string;
  openTime_1w: number;
  closeTime_1w: number;
  quoteVolume_1w?: string;
  baseAssetVolume_1w?: string;
  quoteAssetVolume_1w: string;
  rsi_1w: number;
  smaShort_1w: number;
  smaLong_1w: number;
  emaShort_1w: number;
  emaLong_1w: number;
  macd_1w: number | undefined;
  signal_1w: number | undefined;
  histogram_1w: number | undefined;
  standardDeviationShort_1w: number;
  standardDeviationLong_1w: number;
}
