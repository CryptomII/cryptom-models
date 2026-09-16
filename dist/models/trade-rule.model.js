"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.OrderType = void 0;
var OrderType;
(function (OrderType) {
    OrderType["Limit"] = "LIMIT";
    OrderType["LimitMaker"] = "LIMIT_MAKER";
    OrderType["Market"] = "MARKET";
    OrderType["StopLoss"] = "STOP_LOSS";
    OrderType["StopLossLimit"] = "STOP_LOSS_LIMIT";
    OrderType["TakeProfit"] = "TAKE_PROFIT";
    OrderType["TakeProfitLimit"] = "TAKE_PROFIT_LIMIT";
})(OrderType || (exports.OrderType = OrderType = {}));
var Status;
(function (Status) {
    Status["Break"] = "BREAK";
    Status["Trading"] = "TRADING";
})(Status || (exports.Status = Status = {}));
// {
//   "BTCUSDT": {
//     "status": "TRADING",
//     "minPrice": "0.01000000",
//     "maxPrice": "1000000.00000000",
//     "tickSize": "0.01000000",
//     "stepSize": "0.00001000",
//     "minQty": "0.00001000",
//     "maxQty": "9000.00000000",
//     "baseAssetPrecision": 8,
//     "quoteAssetPrecision": 8,
//     "orderTypes": [
//       "LIMIT",
//       "LIMIT_MAKER",
//       "MARKET",
//       "STOP_LOSS",
//       "STOP_LOSS_LIMIT",
//       "TAKE_PROFIT",
//       "TAKE_PROFIT_LIMIT"
//     ],
//     "icebergAllowed": true,
//     "symbol": "BTCUSDT"
//   },
//   "ETHUSDT": {
//     "status": "TRADING",
//     "minPrice": "0.01000000",
//     "maxPrice": "1000000.00000000",
//     "tickSize": "0.01000000",
//     "stepSize": "0.00010000",
//     "minQty": "0.00010000",
//     "maxQty": "9000.00000000",
//     "baseAssetPrecision": 8,
//     "quoteAssetPrecision": 8,
//     "orderTypes": [
//       "LIMIT",
//       "LIMIT_MAKER",
//       "MARKET",
//       "STOP_LOSS",
//       "STOP_LOSS_LIMIT",
//       "TAKE_PROFIT",
//       "TAKE_PROFIT_LIMIT"
//     ],
//     "icebergAllowed": true,
//     "symbol": "ETHUSDT"
//   },
//   "BNBUSDT": {
//     "status": "TRADING",
//     "minPrice": "0.01000000",
//     "maxPrice": "100000.00000000",
//     "tickSize": "0.01000000",
//     "stepSize": "0.00100000",
//     "minQty": "0.00100000",
//     "maxQty": "900000.00000000",
//     "baseAssetPrecision": 8,
//     "quoteAssetPrecision": 8,
//     "orderTypes": [
//       "LIMIT",
//       "LIMIT_MAKER",
//       "MARKET",
//       "STOP_LOSS",
//       "STOP_LOSS_LIMIT",
//       "TAKE_PROFIT",
//       "TAKE_PROFIT_LIMIT"
//     ],
//     "icebergAllowed": true,
//     "symbol": "BNBUSDT"
//   },
//   "LTCUSDT": {
//     "status": "TRADING",
//     "minPrice": "0.01000000",
//     "maxPrice": "100000.00000000",
//     "tickSize": "0.01000000",
//     "stepSize": "0.00100000",
//     "minQty": "0.00100000",
//     "maxQty": "90000.00000000",
//     "baseAssetPrecision": 8,
//     "quoteAssetPrecision": 8,
//     "orderTypes": [
//       "LIMIT",
//       "LIMIT_MAKER",
//       "MARKET",
//       "STOP_LOSS",
//       "STOP_LOSS_LIMIT",
//       "TAKE_PROFIT",
//       "TAKE_PROFIT_LIMIT"
//     ],
//     "icebergAllowed": true,
//     "symbol": "LTCUSDT"
//   },
//   "ADAUSDT": {
//     "status": "TRADING",
//     "minPrice": "0.00010000",
//     "maxPrice": "1000.00000000",
//     "tickSize": "0.00010000",
//     "stepSize": "0.10000000",
//     "minQty": "0.10000000",
//     "maxQty": "900000.00000000",
//     "baseAssetPrecision": 8,
//     "quoteAssetPrecision": 8,
//     "orderTypes": [
//       "LIMIT",
//       "LIMIT_MAKER",
//       "MARKET",
//       "STOP_LOSS",
//       "STOP_LOSS_LIMIT",
//       "TAKE_PROFIT",
//       "TAKE_PROFIT_LIMIT"
//     ],
//     "icebergAllowed": true,
//     "symbol": "ADAUSDT"
//   },
//   "XRPUSDT": {
//     "status": "TRADING",
//     "minPrice": "0.00010000",
//     "maxPrice": "10000.00000000",
//     "tickSize": "0.00010000",
//     "stepSize": "0.10000000",
//     "minQty": "0.10000000",
//     "maxQty": "9222449.00000000",
//     "baseAssetPrecision": 8,
//     "quoteAssetPrecision": 8,
//     "orderTypes": [
//       "LIMIT",
//       "LIMIT_MAKER",
//       "MARKET",
//       "STOP_LOSS",
//       "STOP_LOSS_LIMIT",
//       "TAKE_PROFIT",
//       "TAKE_PROFIT_LIMIT"
//     ],
//     "icebergAllowed": true,
//     "symbol": "XRPUSDT"
//   },
//   "LINKUSDT": {
//     "status": "TRADING",
//     "minPrice": "0.00100000",
//     "maxPrice": "10000.00000000",
//     "tickSize": "0.00100000",
//     "stepSize": "0.01000000",
//     "minQty": "0.01000000",
//     "maxQty": "90000.00000000",
//     "baseAssetPrecision": 8,
//     "quoteAssetPrecision": 8,
//     "orderTypes": [
//       "LIMIT",
//       "LIMIT_MAKER",
//       "MARKET",
//       "STOP_LOSS",
//       "STOP_LOSS_LIMIT",
//       "TAKE_PROFIT",
//       "TAKE_PROFIT_LIMIT"
//     ],
//     "icebergAllowed": true,
//     "symbol": "LINKUSDT"
//   },
//   "ENJUSDT": {
//     "status": "TRADING",
//     "minPrice": "0.00001000",
//     "maxPrice": "1000.00000000",
//     "tickSize": "0.00001000",
//     "stepSize": "0.10000000",
//     "minQty": "0.10000000",
//     "maxQty": "900000.00000000",
//     "baseAssetPrecision": 8,
//     "quoteAssetPrecision": 8,
//     "orderTypes": [
//       "LIMIT",
//       "LIMIT_MAKER",
//       "MARKET",
//       "STOP_LOSS",
//       "STOP_LOSS_LIMIT",
//       "TAKE_PROFIT",
//       "TAKE_PROFIT_LIMIT"
//     ],
//     "icebergAllowed": true,
//     "symbol": "ENJUSDT"
//   },
//   "DOGEUSDT": {
//     "status": "TRADING",
//     "minPrice": "0.00001000",
//     "maxPrice": "1000.00000000",
//     "tickSize": "0.00001000",
//     "stepSize": "1.00000000",
//     "minQty": "1.00000000",
//     "maxQty": "9000000.00000000",
//     "baseAssetPrecision": 8,
//     "quoteAssetPrecision": 8,
//     "orderTypes": [
//       "LIMIT",
//       "LIMIT_MAKER",
//       "MARKET",
//       "STOP_LOSS",
//       "STOP_LOSS_LIMIT",
//       "TAKE_PROFIT",
//       "TAKE_PROFIT_LIMIT"
//     ],
//     "icebergAllowed": true,
//     "symbol": "DOGEUSDT"
//   },
//   "EURUSDT": {
//     "status": "TRADING",
//     "minPrice": "0.90000000",
//     "maxPrice": "1.40000000",
//     "tickSize": "0.00010000",
//     "stepSize": "0.10000000",
//     "minQty": "0.10000000",
//     "maxQty": "6000000.00000000",
//     "baseAssetPrecision": 8,
//     "quoteAssetPrecision": 8,
//     "orderTypes": [
//       "LIMIT",
//       "LIMIT_MAKER",
//       "MARKET",
//       "STOP_LOSS",
//       "STOP_LOSS_LIMIT",
//       "TAKE_PROFIT",
//       "TAKE_PROFIT_LIMIT"
//     ],
//     "icebergAllowed": true,
//     "symbol": "EURUSDT"
//   },
//   "SOLUSDT": {
//     "status": "TRADING",
//     "minPrice": "0.01000000",
//     "maxPrice": "10000.00000000",
//     "tickSize": "0.01000000",
//     "stepSize": "0.00100000",
//     "minQty": "0.00100000",
//     "maxQty": "90000.00000000",
//     "baseAssetPrecision": 8,
//     "quoteAssetPrecision": 8,
//     "orderTypes": [
//       "LIMIT",
//       "LIMIT_MAKER",
//       "MARKET",
//       "STOP_LOSS",
//       "STOP_LOSS_LIMIT",
//       "TAKE_PROFIT",
//       "TAKE_PROFIT_LIMIT"
//     ],
//     "icebergAllowed": true,
//     "symbol": "SOLUSDT"
//   },
//   "AUDUSDT": {
//     "status": "BREAK",
//     "minPrice": "0.00010000",
//     "maxPrice": "1000.00000000",
//     "tickSize": "0.00010000",
//     "stepSize": "1.00000000",
//     "minQty": "1.00000000",
//     "maxQty": "9000000.00000000",
//     "baseAssetPrecision": 8,
//     "quoteAssetPrecision": 8,
//     "orderTypes": [
//       "LIMIT",
//       "LIMIT_MAKER",
//       "MARKET",
//       "STOP_LOSS",
//       "STOP_LOSS_LIMIT",
//       "TAKE_PROFIT",
//       "TAKE_PROFIT_LIMIT"
//     ],
//     "icebergAllowed": true,
//     "symbol": "AUDUSDT"
//   },
//   "DOTUSDT": {
//     "status": "TRADING",
//     "minPrice": "0.00100000",
//     "maxPrice": "10000.00000000",
//     "tickSize": "0.00100000",
//     "stepSize": "0.01000000",
//     "minQty": "0.01000000",
//     "maxQty": "90000.00000000",
//     "baseAssetPrecision": 8,
//     "quoteAssetPrecision": 8,
//     "orderTypes": [
//       "LIMIT",
//       "LIMIT_MAKER",
//       "MARKET",
//       "STOP_LOSS",
//       "STOP_LOSS_LIMIT",
//       "TAKE_PROFIT",
//       "TAKE_PROFIT_LIMIT"
//     ],
//     "icebergAllowed": true,
//     "symbol": "DOTUSDT"
//   },
//   "USDTBRL": {
//     "status": "TRADING",
//     "minPrice": "4.30000000",
//     "maxPrice": "6.50000000",
//     "tickSize": "0.00010000",
//     "stepSize": "0.10000000",
//     "minQty": "0.10000000",
//     "maxQty": "9222449.00000000",
//     "baseAssetPrecision": 8,
//     "quoteAssetPrecision": 8,
//     "orderTypes": [
//       "LIMIT",
//       "LIMIT_MAKER",
//       "MARKET",
//       "STOP_LOSS",
//       "STOP_LOSS_LIMIT",
//       "TAKE_PROFIT",
//       "TAKE_PROFIT_LIMIT"
//     ],
//     "icebergAllowed": true,
//     "symbol": "USDTBRL"
//   },
//   "AAVEUSDT": {
//     "status": "TRADING",
//     "minPrice": "0.01000000",
//     "maxPrice": "100000.00000000",
//     "tickSize": "0.01000000",
//     "stepSize": "0.00100000",
//     "minQty": "0.00100000",
//     "maxQty": "900000.00000000",
//     "baseAssetPrecision": 8,
//     "quoteAssetPrecision": 8,
//     "orderTypes": [
//       "LIMIT",
//       "LIMIT_MAKER",
//       "MARKET",
//       "STOP_LOSS",
//       "STOP_LOSS_LIMIT",
//       "TAKE_PROFIT",
//       "TAKE_PROFIT_LIMIT"
//     ],
//     "icebergAllowed": true,
//     "symbol": "AAVEUSDT"
//   }
// }
//# sourceMappingURL=trade-rule.model.js.map