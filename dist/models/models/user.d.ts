import { BalanceDictionary } from './balance';
import { UserPair } from './user-pair';
export interface User {
    apocalipse?: boolean;
    autoTradeMode?: boolean;
    balance?: BalanceDictionary;
    binanceKey?: string;
    binanceSecret?: string;
    chatId: string;
    createdAt: number;
    currentBalance?: number;
    email?: string;
    id: string;
    initialBalance: number;
    isActive: boolean;
    isSleeping: boolean;
    language: string;
    lastName?: string;
    moneyForEntries: string;
    moneyForEntriesDownTrend: string;
    moneyForEntriesUpTrend: string;
    name?: string;
    onlyBuy?: boolean;
    onlySell?: boolean;
    stopLoss?: number;
    token: string;
    updatedAt: number;
    userPairs: Array<UserPair>;
    username?: string;
    watchSimulator?: boolean;
}
//# sourceMappingURL=user.d.ts.map