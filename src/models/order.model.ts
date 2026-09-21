/* eslint-disable @typescript-eslint/no-explicit-any */

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

// Market Buy response {
//   symbol: 'BNBETH',
//   orderId: 4480553,
//   clientOrderId: 'rCGiCG08PGy7AwvbrG5d83',
//   transactTime: 1509049376261,
//   price: '0.00000000',
//   origQty: '1.00000000',
//   executedQty: '1.00000000',
//   status: 'FILLED',
//   timeInForce: 'GTC',
//   type: 'MARKET',
//   side: 'BUY' }
// //order id: 4480553

// Limit Buy response {
//   symbol: 'BNBETH',
//   orderId: 4480717,
//   clientOrderId: 'te38xGILZUXrPZHnTQPH6h',
//   transactTime: 1509049732437,
//   price: '0.00402030',
//   origQty: '5.00000000',
//   executedQty: '5.00000000',
//   status: 'FILLED',
//   timeInForce: 'GTC',
//   type: 'LIMIT',
//   side: 'BUY' }
// //order id: 4480717
