import { PairEnum, PairEnumKeys, PairEnumKeysUpperCased } from '../pair-enum'
import { SymbolEnumKeys } from '../symbol-enum'

const EnumKeys = Object.keys(PairEnum).map(p => p) as unknown as PairEnumKeys[]

export namespace PairEnumExtensions {
  export function extractCryptoSymbol(pair: PairEnumKeysUpperCased): SymbolEnumKeys {
    const symbol = pair.toUpperCase().replace('USDT', '') as SymbolEnumKeys

    if (!symbol) {
      // throw error?
    }

    return symbol
  }

  export function toUpper(pair: PairEnumKeys): PairEnumKeysUpperCased {
    return pair.toUpperCase() as unknown as PairEnumKeysUpperCased
  }

  export function getAllPairNames(): PairEnumKeys[] {
    return EnumKeys
  }
}