import { PairEnumKeys, PairEnumKeysUpperCased } from '../pair-enum';
import { SymbolEnumKeys } from '../symbol-enum';
export declare namespace PairEnumExtensions {
    function extractCryptoSymbol(pair: PairEnumKeysUpperCased): SymbolEnumKeys;
    function toUpper(pair: PairEnumKeys): PairEnumKeysUpperCased;
    function getAllPairNames(): PairEnumKeys[];
}
//# sourceMappingURL=pair-enum.extensions.d.ts.map