/* eslint-disable semi */

import { PairEnumKeysUpperCased } from '../enums'

export interface OrderSimulatorLive {
  amount?: number
  analyzerClose?: string
  analyzerOpen?: string
  chatId?: string
  createdAt: number
  dollar?: number
  id: string
  idClose?: string
  idOpen: string
  idTrendLineClose?: string
  idTrendLineOpen: string
  orderIdClose?: string
  orderIdOpen: string
  orderStatusClose?: string
  orderStatusOpen: string
  pair: PairEnumKeysUpperCased
  priceClose?: number
  priceOpen: number
  priceTrendLineClose?: string
  priceTrendLineOpen: string
  profit?: number
  timestampClose?: number
  timestampOpen: number
  tradeTypeClose?: string
  tradeTypeOpen: string
  updatedAt: number
}