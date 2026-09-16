import { Pairs, Periods } from './configs.model';
import { Candle } from './candle.model';
export type GlobalCandles = Map<Pairs, Map<Periods, Record<string, Candle>>>;
export type GlobalLiveCandles = Map<Pairs, Map<Periods, Candle>>;
//# sourceMappingURL=global-candles.model.d.ts.map