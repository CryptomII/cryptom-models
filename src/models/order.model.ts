export interface Order {
	id: string;
	user: string;
	pair: string;
	amount: number;
	openPrice: string;
	openTime: Date;
	closePrice?: string;
	closeTime?: Date;
	profit?: number;
	isTest?: number;
	created: Date;
	updated: Date;
}
