import _Binance from "node-binance-api";
import { Order } from "./order.model";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isTest?: boolean;
  isAutoTrading?: boolean;
  emailVisibility?: boolean;
  isSimulator?: boolean;
  verified?: boolean;
  binanceKey?: string;
  binanceSecret?: string;
  minimumInvestment?: number;
  symbols?: Record<string, UserSymbols>;
  balances?: Record<string, UserBalances>;
  binance?: _Binance;
  orders?: Order[];
  created?: Date;
  updated?: Date;
}

export interface UserBalances {
  available: string;
  onOrder: string;
}

export interface UserSymbols {
  minimumInvestment: number;
}

const s = {
  symbols: {
    BNBETH: {
      minimumInvestment: 10, // USD
    },
  },
};
