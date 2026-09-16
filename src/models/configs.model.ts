/**
 * **Configs** contains the configuration settings for the application, including environment variables, API keys, database URIs, trading pairs, periods, and indicator settings.
 *
 * It is used throughout the application to access these settings in a centralized manner.
 *
 */
export const Configs: Configs = {
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
  ] as const,
  periods: [
    "1m",
    "5m",
    "1h",
    "4h",
    // '12h',
    "1d",
    "1w",
  ] as const,

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

export type Pairs = (typeof Configs.pairs)[number];
export type Periods = (typeof Configs.periods)[number];

type Configs = {
  pairs: readonly [
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
  ];
  periods: readonly ["1m", "5m", "1h", "4h", "1d", "1w"];
  indicators: {
    sma: {
      long: number;
      short: number;
    };
    ema: {
      long: number;
      short: number;
    };
    macd: {
      long: number;
      short: number;
      signal: number;
    };
    rsi: {
      period: number;
      max: number;
      min: number;
    };
    standardDeviation: {
      long: number;
      short: number;
    };
  };
};
