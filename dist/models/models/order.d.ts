import { PairEnumKeysUpperCased } from '../enums';
export interface Order {
    amount?: number;
    analyzerClose?: string;
    analyzerOpen?: string;
    chatId: string;
    createdAt: number;
    dollar?: number;
    id: string;
    idClose?: string;
    idOpen: string;
    idTrendLineClose?: string;
    idTrendLineOpen: string;
    isTest?: boolean;
    orderIdClose?: string;
    orderIdOpen: string;
    orderStatusClose?: string;
    orderStatusOpen: string;
    pair: PairEnumKeysUpperCased;
    priceClose?: number;
    priceOpen: number;
    priceTrendLineClose?: string;
    priceTrendLineOpen: string;
    profit?: number;
    timestampClose?: number;
    timestampOpen: number;
    tradeTypeClose?: string;
    tradeTypeOpen: string;
    updatedAt: number;
}
//# sourceMappingURL=order.d.ts.map