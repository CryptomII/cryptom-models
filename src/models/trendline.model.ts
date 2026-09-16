import { Pairs, Periods } from "./configs.model";

/**
 * Represents a trendline in a trading chart, including its price level, number of touches, and optional metadata.
 *
 * Example usage:
 * ```
 * const trendline: Trendline = {
 *   id: '1',
 *   pair: Pairs.BTC_USD,
 *   period: Periods.D1,
 *   line: 50000,
 *   touches: 3,
 *   isTest: true,
 *   isOnlySell: false,
 *   created: new Date(),
 *   updated: new Date(),
 * };
 * ```
 */
export interface Trendline {
  id: string;
  pair: Pairs;
  period: Periods | "compiled";
  line: number;
  touches: number;
  isOnlySell?: boolean;
  created?: Date;
  updated?: Date;
}
