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
    closePrice?: string;
    closeTime?: Date;
    closeMoment?: Record<string, any>;
    closeTrendline?: Record<string, any>;
    closeBinanceData?: Record<string, any>;
    profit?: number;
    isTest?: boolean;
    created?: Date;
    updated?: Date;
}
//# sourceMappingURL=order.model.d.ts.map