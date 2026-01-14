"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PairEnumExtensions = void 0;
const pair_enum_1 = require("../pair-enum");
const EnumKeys = Object.keys(pair_enum_1.PairEnum).map(p => p);
var PairEnumExtensions;
(function (PairEnumExtensions) {
    function extractCryptoSymbol(pair) {
        const symbol = pair.toUpperCase().replace('USDT', '');
        if (!symbol) {
            // throw error?
        }
        return symbol;
    }
    PairEnumExtensions.extractCryptoSymbol = extractCryptoSymbol;
    function toUpper(pair) {
        return pair.toUpperCase();
    }
    PairEnumExtensions.toUpper = toUpper;
    function getAllPairNames() {
        return EnumKeys;
    }
    PairEnumExtensions.getAllPairNames = getAllPairNames;
})(PairEnumExtensions || (exports.PairEnumExtensions = PairEnumExtensions = {}));
//# sourceMappingURL=pair-enum.extensions.js.map