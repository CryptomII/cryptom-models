export interface TradeRule {
    id?: string;
    /**
     * `Break` indicates that trading for this symbol is currently paused.
     * `Trading` indicates that trading for this symbol is active.
    */
    status: Status;
    symbol: string;
    minPrice: string;
    maxPrice: string;
    tickSize: string;
    stepSize: string;
    minQty: string;
    maxQty: string;
    minNotional?: string;
    baseAssetPrecision: number;
    quoteAssetPrecision: number;
    orderTypes: OrderType[];
    icebergAllowed: boolean;
    created?: Date;
    updated?: Date;
}
export declare enum OrderType {
    Limit = "LIMIT",
    LimitMaker = "LIMIT_MAKER",
    Market = "MARKET",
    StopLoss = "STOP_LOSS",
    StopLossLimit = "STOP_LOSS_LIMIT",
    TakeProfit = "TAKE_PROFIT",
    TakeProfitLimit = "TAKE_PROFIT_LIMIT"
}
export declare enum Status {
    Break = "BREAK",
    Trading = "TRADING"
}
export type TradeRules = Record<string, TradeRule>;
//# sourceMappingURL=trade-rule.model.d.ts.map