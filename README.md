# @cryptomii/models

Shared TypeScript types and constants of Cryptom: candles, moments, labels, orders, users and the platform configuration.

> Part of **Cryptom**: [core](https://github.com/CryptomII/cryptom-core) · [broker](https://github.com/CryptomII/cryptom-broker) · [trader](https://github.com/CryptomII/cryptom-trader) · [workers](https://github.com/CryptomII/cryptom-workers) · [website](https://github.com/CryptomII/cryptom-website) · **models**

## Installation

The package is installed straight from GitHub, by tag:

```bash
# latest dev build (floating tag)
yarn add git+https://github.com/CryptomII/cryptom-models.git#dev-latest

# a release
yarn add git+https://github.com/CryptomII/cryptom-models.git#vX.Y.Z
```

To move an installed `dev-latest` to the newest build, run `yarn upgrade @cryptomii/models`.

## Usage

```ts
import { Configs, Moment, MomentFull, Pairs, Periods } from '@cryptomii/models';

const pair: Pairs = 'BTCUSDT';
const period: Periods = '1h';
```

## Exports

| Area | Exports |
|---|---|
| Configuration | `Configs` (pairs, timeframes, indicator parameters), `Pairs`, `Periods` |
| Market data | `Candle`, `Indicators`, `Moment`, `MomentFull`, `GlobalCandles`, `GlobalLiveCandles`, `GlobalMoments` |
| Labels | `MomentLabel`, `MomentWithLabel`, `PublicLabel`, `LABEL_TARGETS`, `LabelTarget`, `Outcome`, `resolveOutcome` |
| Trading | `Order`, `OrderType`, `Status`, `TradeRule`, `TradeRules`, `Trendline` |
| Users | `User`, `UserBalances`, `UserSymbols` |
| Messaging | `WebSocketMessage`, `DataValue` |

Everything is exported from the package root; sources are in [`src/models/`](src/models).

## Development

```bash
npm install
npm run build   # compiles src/ to dist/
npm run lint
```

`dist/` is committed: installing from GitHub doesn't run a build.

## Releases

Releases are automated by GitHub Actions: **CI** lints and builds every push and pull request to `dev` and `main`, then **Build and Release** runs on those branches.

| Branch | Tag | Use |
|---|---|---|
| `dev` | `dev-latest` (moved on every build) | Pre-release, used by the other repos today. |
| `main` | `vX.Y.Z` (immutable) | Stable releases. |

The version bump comes from the commit messages:

| Prefix | Bump |
|---|---|
| `fix:` | Patch (`1.0.0` → `1.0.1`) |
| `feat:` | Minor (`1.0.0` → `1.1.0`) |
| `BREAKING:` or `feat!:` | Major (`1.0.0` → `2.0.0`) |

The workflow bumps `package.json`, builds `dist/`, creates the tag and opens a pull request with the new version and build. Merge it to finish the release.
