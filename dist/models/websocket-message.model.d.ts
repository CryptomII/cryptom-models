export interface WebSocketMessage {
    /**
     * Type of the message
     *
     * `log | event | candle | moment | trade`
     */
    type: WebSocketMessageType;
    pair: string;
    period: string;
    to?: string;
    data: DataValue;
}
type WebSocketMessageType = 'registered' | 'log' | 'event' | 'live_candle' | 'candle' | 'moment' | 'trade';
export type DataValue = Record<string, any>;
export {};
//# sourceMappingURL=websocket-message.model.d.ts.map