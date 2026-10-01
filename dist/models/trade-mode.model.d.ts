/**
 * Represents the different trade modes available for orders.
 *
 * Possible values are:
 * ```
 * "DAYTRADE" | "SWING" | "SCALPING" | "HODL"
 * ```
 *
 * ===================================================
 *
 * ```
 * "DAYTRADE": Fast trades within a single day or two.
 * "SWING": The order is intended for weekly or medium-term trading.
 * "SCALPING": Fast trades with quick entries and exits. Faster than day trading.
 * "HODL": The order is intended for long-term holding.
 * ```
 */
export type TradeMode = TradeModes;
export declare enum TradeModes {
    DAYTRADE = "DAYTRADE",
    SWING = "SWING",
    SCALPING = "SCALPING",
    HODL = "HODL"
}
//# sourceMappingURL=trade-mode.model.d.ts.map