/* eslint-disable semi */

import { PairEnumKeys, PairEnumKeysUpperCased, PeriodEnumKeys } from '../enums'

export interface Trendline {
  createdAt: number
  id: string
  isOnlySell: boolean
  line: number
  pair: PairEnumKeys
  period?: PeriodEnumKeys // TODO:  should not be nullable if database was completely consistent
  updatedAt: number
}

export type TrendlineDictionary = Record<PairEnumKeysUpperCased, Array<Trendline>>