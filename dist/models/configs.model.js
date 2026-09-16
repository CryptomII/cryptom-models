"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configs = void 0;
/**
 * **Configs** contains the configuration settings for the application, including environment variables, API keys, database URIs, trading pairs, periods, and indicator settings.
 *
 * It is used throughout the application to access these settings in a centralized manner.
 *
 */
exports.Configs = {
    pairs: [
        "BTCUSDT",
        "ETHUSDT",
        "BNBUSDT",
        "LTCUSDT",
        "ADAUSDT",
        "XRPUSDT",
        "SOLUSDT",
        "DOTUSDT",
        "DOGEUSDT",
        "AAVEUSDT",
        "LINKUSDT",
        "ENJUSDT",
    ],
    periods: [
        "1m",
        "5m",
        "1h",
        "4h",
        // '12h',
        "1d",
        "1w",
    ],
    // ================================================================
    // == INDICATORS ==================================================
    // ================================================================
    indicators: {
        sma: {
            long: 200,
            short: 30,
        },
        ema: {
            long: 26,
            short: 11,
        },
        macd: {
            long: 26,
            short: 12,
            signal: 9,
        },
        rsi: {
            period: 14,
            max: 70,
            min: 30,
        },
        standardDeviation: {
            long: 90,
            short: 60,
        },
    },
};
//# sourceMappingURL=configs.model.js.map