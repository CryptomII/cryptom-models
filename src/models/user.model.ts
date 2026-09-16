import _Binance from 'node-binance-api';
import { Order } from './order.model';

export interface User {
	id: string;
	name: string;
	email: string;
	binanceKey?: string;
	binanceSecret?: string;
	balances?: Record<string, UserBalances>;
	binance?: _Binance;
	orders?: Order[];
}

export interface UserBalances {
	available: string;
	onOrder: string;
}