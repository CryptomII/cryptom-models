/* eslint-disable semi */

import { PairEnumKeysUpperCased } from '../enums'

export interface UserPair {
  chatId: string
  createdAt: number
  id: string
  multiplier?: number
  pair: PairEnumKeysUpperCased
  status: string
  updatedAt: number
}