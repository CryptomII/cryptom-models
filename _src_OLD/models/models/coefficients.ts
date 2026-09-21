/* eslint-disable semi */

import { PairEnumKeys, PeriodEnumKeys } from '../enums'

export interface Coefficients {
  coefficient: number
  createdAt: number
  id: string
  pair: PairEnumKeys
  period: PeriodEnumKeys
  updatedAt: number
}