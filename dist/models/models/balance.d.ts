import { SymbolEnumKeys } from '../enums';
export interface Balance {
    available: number;
    chatId: string;
    createdAt: number;
    id: string;
    onOrder: number;
    pair: string;
    updatedAt: number;
}
export type BalanceDictionary = Record<SymbolEnumKeys, Balance>;
//# sourceMappingURL=balance.d.ts.map