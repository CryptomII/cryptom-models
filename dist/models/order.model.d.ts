import { TradeMode } from "./trade-mode.model";
export interface Order {
    id: string;
    user: string;
    pair: string;
    amount: number;
    openPrice: string;
    openTime: Date;
    openMoment: Record<string, any>;
    openTrendline: Record<string, any>;
    openBinanceData: Record<string, any>;
    openStrategy: string;
    /**
     * The trade mode used when opening the order.
     *
     * Possible values are:
     * ```
     * "DAYTRADE" | "SWING" | "SCALPING" | "HODL"
     * ```
     *
     * ===================================================
     *
     * ```
     * "DAYTRADE": The order is intended for day trading.
     * "SWING": The order is intended for weekly or medium-term trading.
     * "SCALPING": The order is intended for scalping.
     * "HODL": The order is intended for long-term holding.
     * ```
    */
    openTradeMode: TradeMode;
    closePrice?: string;
    closeTime?: Date;
    closeMoment?: Record<string, any>;
    closeTrendline?: Record<string, any>;
    closeBinanceData?: Record<string, any>;
    closeStrategy?: string;
    /**
     * The trade mode used when closing the order.
     *
     * Possible values are:
     * ```
     * "DAYTRADE" | "SWING" | "SCALPING" | "HODL"
     * ```
     *
     * ===================================================
     *
     * ```
     * "DAYTRADE": The order is intended for day trading.
     * "SWING": The order is intended for weekly or medium-term trading.
     * "SCALPING": The order is intended for scalping.
     * "HODL": The order is intended for long-term holding.
     * ```
    */
    closeTradeMode?: TradeMode;
    profit?: number;
    isTest?: boolean;
    created?: Date;
    updated?: Date;
}
//# sourceMappingURL=order.model.d.ts.map