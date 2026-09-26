# cryptom-models: guide for Claude

`@cryptomii/models`: the TypeScript types and constants shared by every Cryptom repository (candles, moments, labels, orders, users, messages, configuration). It's installed from GitHub by tag, not from npm. A change here reaches the other repos only when they upgrade it, and a breaking change breaks them at their next upgrade.

Platform-wide context: [`../CLAUDE.md`](../CLAUDE.md). The user writes in Brazilian Portuguese: answer in Portuguese; code, comments and docs in English.

## Commands

```bash
npm install
npm run build      # tsc: src/ → dist/
npm run lint       # eslint src
```

## Layout

| Path | Content |
|---|---|
| `src/index.ts` | `export * from './models'`. |
| `src/models/index.ts` | Barrel of every model file. |
| `src/models/configs.model.ts` | `Configs` (pairs, periods, indicator parameters), `Pairs`, `Periods`. |
| `src/models/candle.model.ts` · `indicators.model.ts` · `moment.model.ts` | `Candle` (from node-binance-api), `Indicators`, `Moment = Candle & Indicators`. |
| `src/models/moment-full.model.ts` | `MomentFull`: `Moment` + every field suffixed `_5m` `_1h` `_4h` `_1d` `_1w`. |
| `src/models/moment-label.model.ts` | `MomentLabel`, `LABEL_TARGETS` (5, 10, 20, 30, 40, 50), `LabelTarget`, `Outcome`, `resolveOutcome`, `PublicLabel`, `MomentWithLabel`. |
| `src/models/order.model.ts` · `trade-rule.model.ts` · `trendline.model.ts` · `user.model.ts` | Trading and account types (`Order`, `OrderType`, `Status`, `TradeRule(s)`, `Trendline`, `User`, `UserBalances`, `UserSymbols`). |
| `src/models/websocket-message.model.ts` | `WebSocketMessage` and its `type` union; `DataValue`. |
| `src/models/global-*.model.ts` | In-memory map types of core/trader (`GlobalCandles`, `GlobalLiveCandles`, `GlobalMoments`). |
| `dist/` | Compiled output, **committed**: installing from GitHub doesn't build. |
| `_src_OLD/` | Previous generation of the models; not exported. |

## Data model

A **moment** is one closed candle plus its indicators, for one pair and one timeframe. Prices and volumes are strings (Binance format), indicators are numbers, times are epoch **milliseconds** (`closeTime` = next `openTime` − 1). Every stored row uses ms; `_toMs` guards remain only for the µs timestamps of the 2025+ Binance dump files.

### Moment: `LIVE.moments.btcusdt_1h`, 2026-08-20 13:00 UTC

```json
{
  "_id": "6ab07be8e319e482ab6e53b4",
  "low": "71132.00000000",
  "high": "72108.80000000",
  "open": "71952.04000000",
  "close": "71691.99000000",
  "trades": 445326,
  "volume": "2151.90860000",
  "openTime": 1787230800000,
  "closeTime": 1787234399999,
  "quoteVolume": "154276127.43848190",
  "baseAssetVolume": "1203.61262000",
  "quoteAssetVolume": "86282659.62067230",
  "smaShort": 68672.63366666686,
  "smaLong": 64324.82184999993,
  "emaShort": 70970.35994224304,
  "emaLong": 69436.56681361703,
  "rsi": 78.81,
  "standardDeviationShort": 2732.464582790599,
  "standardDeviationLong": 2615.490160375319,
  "macd": 1420.9580756248324,
  "signal": 1343.5448022220564,
  "histogram": 77.41327340277599
}
```

| Field | Meaning |
|---|---|
| `open` `high` `low` `close` · `volume` · `trades` | The candle; `volume` in the base asset. |
| `smaShort` / `smaLong` | SMA 30 / 200 of the closes. |
| `emaShort` / `emaLong` | EMA 11 / 26. |
| `rsi` | RSI 14, 2 decimals. Overbought > 70, oversold < 30. |
| `macd` · `signal` · `histogram` | MACD 12/26/9, EMA-based (optional in the type, always set on stored rows). |
| `standardDeviationShort` / `Long` | Population standard deviation of the last 60 / 90 closes, in price units. |
| `quoteVolume` · `baseAssetVolume` · `quoteAssetVolume` | Meaning depends on the source: see below. |

A moment exists only once every indicator is warmed up (200 candles, for the SMA 200). MongoDB adds `_id`.

### MomentFull: `LIVE.market_moments.btcusdt`, 2026-08-20 14:30 UTC

One document per closed `1m` candle: the `1m` moment without suffix, plus the latest moment of every other timeframe **already closed when the `1m` candle closed** (`closeTime_<p> <= closeTime`, so one closing with the minute counts), with the suffixes `_5m` `_1h` `_4h` `_1d` `_1w`. Its `_1h` layer is the Moment above.

```json
{
  "_id": "6ab05687204fc7dd49bf792d",
  "low": "71416.00000000", "high": "71487.80000000", "open": "71450.16000000", "close": "71449.13000000",
  "trades": 9390, "volume": "27.18073000", "openTime": 1787236200000, "closeTime": 1787236259999,
  "quoteVolume": "1941922.90163880", "baseAssetVolume": "14.32198000", "quoteAssetVolume": "1023230.07691650",
  "rsi": 33.72, "smaShort": 71702.07999999679, "smaLong": 71839.7376000008, "emaShort": 71562.33842837602, "emaLong": 71636.98495573548,
  "macd": -66.67025086036301, "signal": -41.58154654954782, "histogram": -25.088704310815196,
  "standardDeviationShort": 153.9717361107946, "standardDeviationLong": 205.49411433345537,
  "low_5m": "71364.01000000", "high_5m": "71704.00000000", "open_5m": "71660.94000000", "close_5m": "71450.16000000",
  "trades_5m": 34847, "volume_5m": "152.60886000", "openTime_5m": 1787235900000, "closeTime_5m": 1787236199999,
  "quoteVolume_5m": "10919807.17973420", "baseAssetVolume_5m": "58.20221000", "quoteAssetVolume_5m": "4164540.66450410",
  "rsi_5m": 40.58, "smaShort_5m": 71770.61500000079, "smaLong_5m": 70364.54325000006, "emaShort_5m": 71676.74738971365, "emaLong_5m": 71748.68394309831,
  "macd_5m": -64.61534189159283, "signal_5m": -42.90415479052268, "histogram_5m": -21.711187101070152,
  "standardDeviationShort_5m": 197.24919607074565, "standardDeviationLong_5m": 771.7814428305338,
  "low_1h": "71132.00000000", "high_1h": "72108.80000000", "open_1h": "71952.04000000", "close_1h": "71691.99000000",
  "trades_1h": 445326, "volume_1h": "2151.90860000", "openTime_1h": 1787230800000, "closeTime_1h": 1787234399999,
  "quoteVolume_1h": "154276127.43848190", "baseAssetVolume_1h": "1203.61262000", "quoteAssetVolume_1h": "86282659.62067230",
  "rsi_1h": 78.81, "smaShort_1h": 68672.63366666686, "smaLong_1h": 64324.82184999993, "emaShort_1h": 70970.35994224304, "emaLong_1h": 69436.56681361703,
  "macd_1h": 1420.9580756248324, "signal_1h": 1343.5448022220564, "histogram_1h": 77.41327340277599,
  "standardDeviationShort_1h": 2732.464582790599, "standardDeviationLong_1h": 2615.490160375319,
  "low_4h": "69772.36000000", "high_4h": "72490.00000000", "open_4h": "69816.45000000", "close_4h": "71927.07000000",
  "trades_4h": 1531290, "volume_4h": "11048.62740000", "openTime_4h": 1787212800000, "closeTime_4h": 1787227199999,
  "quoteVolume_4h": "791582876.50838400", "baseAssetVolume_4h": "5815.28980000", "quoteAssetVolume_4h": "416389925.31439180",
  "rsi_4h": 89.08, "smaShort_4h": 64954.93266666674, "smaLong_4h": 64416.17225000008, "emaShort_4h": 68015.87525107125, "emaLong_4h": 66100.33617341501,
  "macd_4h": 1708.8475147600402, "signal_4h": 1018.9820603167989, "histogram_4h": 689.8654544432413,
  "standardDeviationShort_4h": 1878.2744324514101, "standardDeviationLong_4h": 1565.5574681183966,
  "low_1d": "64166.00000000", "high_1d": "70000.00000000", "open_1d": "64725.42000000", "close_1d": "69334.79000000",
  "trades_1d": 4160596, "volume_1d": "29054.29976000", "openTime_1d": 1787097600000, "closeTime_1d": 1787183999999,
  "quoteVolume_1d": "1954769139.09319090", "baseAssetVolume_1d": "15646.86527000", "quoteAssetVolume_1d": "1052899268.55794110",
  "rsi_1d": 73.47, "smaShort_1d": 64365.55999999995, "smaLong_1d": 69034.93799999988, "emaShort_1d": 64808.76275426492, "emaLong_1d": 64369.121100567194,
  "macd_1d": 373.085591365023, "signal_1d": 3.3715573020084264, "histogram_1d": 369.71403406301454,
  "standardDeviationShort_1d": 1814.8380018461396, "standardDeviationLong_1d": 4092.163405160679,
  "low_1w": "62535.24000000", "high_1w": "65391.14000000", "open_1w": "64901.59000000", "close_1w": "62900.00000000",
  "trades_1w": 11149277, "volume_1w": "73434.18872000", "openTime_1w": 1786320000000, "closeTime_1w": 1786924799999,
  "quoteVolume_1w": null, "baseAssetVolume_1w": null, "quoteAssetVolume_1w": "4676300109.41588880",
  "rsi_1w": 38.81, "smaShort_1w": 69699.31700000005, "smaLong_1w": 63233.29704999998, "emaShort_1w": 65434.106469950035, "emaLong_1w": 70629.80667616022,
  "macd_1w": -4896.95123006565, "signal_1w": -5307.11231227271, "histogram_1w": 410.16108220706064,
  "standardDeviationShort_1w": 20499.30735800682, "standardDeviationLong_1w": 17822.699799320333
}
```

### Volume fields by source

| Source | `quoteAssetVolume` | `quoteVolume` | `baseAssetVolume` |
|---|---|---|---|
| Binance WebSocket (core, live) | total quote volume | taker-buy quote volume | taker-buy base volume |
| Binance dumps (`CORE.logs`, history up to 2026-08-31) | taker-buy quote volume | total quote volume | taker-buy base volume |
| Binance REST (boot catch-ups, `latest_data`) | total quote volume | absent (`null` in a MomentFull) | absent |

Rows from different sources sit in the same collections, so never read these three fields as one series without checking the source; `volume × close` approximates the total quote volume everywhere.

These examples are what `Moment` and `MomentFull` describe at runtime. The types say `string` for prices/volumes and `number` for indicators and times; `quoteVolume` and `baseAssetVolume` are optional, and `macd`/`signal`/`histogram` may be `undefined`.

## Releases

- **CI** (`ci.yml`) lints and builds pushes and pull requests to `dev` and `main`. When it passes, **Build and Release** (`build-and-release.yml`) bumps `package.json` from the commit prefixes (`fix:` patch, `feat:` minor, `BREAKING:`/`feat!:` major), builds `dist/`, tags, and opens a pull request with the version and build. Merge it to finish.
- `dev` → floating tag `dev-latest`, which every repo installs today. `main` → immutable `vX.Y.Z`.
- Consumers pin `dev-latest` to a commit in their lockfile: after a release, run `yarn upgrade @cryptomii/models` in each consumer and check that the lockfile diff is that one package.

## Rules for changes

- Add a model as `src/models/<name>.model.ts` and export it from `src/models/index.ts`.
- Prefer additive changes (new optional fields, new types). Renaming or removing a field is breaking: update every consumer in the same effort (core, broker, trader, workers, website).
- `Configs` duplicates what each service has in its own `config`: change them together, and remember that indicator parameters change the meaning of every stored moment.
- Never edit `dist/` by hand; the release workflow builds it.

## Keeping this file and the README current

Update this file and [`README.md`](README.md) in the same change as the code whenever you add, rename or remove an export, change a type that describes stored data, change `Configs`, or change the build or release flow; and when you find or fix a known issue (with the date). Refresh the examples from real rows if the data shape changes. This file is for Claude: precise paths, rules and the consumer impact. The README is for people: install, use, release. Keep both detailed, organized and short, and reflect type changes in [`../CLAUDE.md`](../CLAUDE.md) and in the docs of the repos that use them.
