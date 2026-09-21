/* eslint-disable semi */

import { SymbolEnumKeys } from '../enums'

export interface Balance {
  available: number
  chatId: string
  createdAt: number
  id: string
  onOrder: number
  pair: string // Can be SymbolEnumKeys or PairEnumKeysUpperCased depending on usage
  updatedAt: number
}

export type BalanceDictionary = Record<SymbolEnumKeys, Balance>