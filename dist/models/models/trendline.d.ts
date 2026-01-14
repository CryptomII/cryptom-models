import { PairEnumKeys, PairEnumKeysUpperCased, PeriodEnumKeys } from '../enums';
export interface Trendline {
    createdAt: number;
    id: string;
    isOnlySell: boolean;
    line: number;
    pair: PairEnumKeys;
    period?: PeriodEnumKeys;
    updatedAt: number;
}
export type TrendlineDictionary = Record<PairEnumKeysUpperCased, Array<Trendline>>;
//# sourceMappingURL=trendline.d.ts.map