# @cryptomii/models

Shared types and models for Cryptom applications. This package contains TypeScript type definitions, interfaces, enums, and utility types used across the Cryptom organization.

## Installation

### Production (Stable Release)

Install a specific version tag:

```bash
npm install git+https://github.com/CryptomII/cryptom-models.git#v1.0.0
```

### Development (Testing Pre-release)

Install the latest dev build:

```bash
npm install git+https://github.com/CryptomII/cryptom-models.git#dev
```

The `dev` tag is a floating tag that always points to the latest build from the `dev` branch, making it perfect for testing pre-release changes.

## Usage

Once installed, you can import types and models:

```typescript
import { Candle, User, PairEnum, PairEnumKeys } from '@cryptomii/models';

// Use the types
const candle: Candle = {
  timestamp: Date.now(),
  numberOfTrades: 100,
  closePrice: '50000',
  // ... other properties
};

const pair: PairEnumKeys = 'btcusdt';
```

### Available Exports

The package exports all types from the following modules:

- **Models**: `User`, `Candle`, `Order`, `Balance`, `Trendline`, `TradeInfo`, `Settings`, `Dollar`, `Coefficients`, `OrderSimulator`, `OrderSimulatorLive`, `UserPair`, `WsMoment`
- **Enums**: `PairEnum`, `PeriodEnum`, `SymbolEnum` with their respective key types
- **Enum Extensions**: `PairEnumExtensions`, `PeriodEnumExtensions`
- **Custom Types**: `Binary`, `EmptyObject`, `Year`, `Month`, `Day`, `IntRange`
- **DTOs**: `LastPriceDTODictionary`, `LastPriceSymbolDTODictionary`
- **Domain Types**: `PairPeriodProps`

## Commit Conventions

This repository uses semantic versioning based on commit messages. The GitHub Actions workflow automatically determines the version bump type:

| Commit Prefix | Version Bump | Example |
|---------------|--------------|---------|
| `fix:` | Patch (1.0.0 → 1.0.1) | `fix: correct type export` |
| `feat:` | Minor (1.0.0 → 1.1.0) | `feat: add new OrderStatus type` |
| `BREAKING:` or `feat!:` | Major (1.0.0 → 2.0.0) | `BREAKING: rename User to Account` |

### Examples

```bash
# Patch version bump
git commit -m "fix: correct PairEnum type definition"

# Minor version bump
git commit -m "feat: add new TradeStatus enum"

# Major version bump
git commit -m "BREAKING: rename User interface to Account"
# or
git commit -m "feat!: remove deprecated OrderSimulator type"
```

## Versioning Strategy

| Branch | Tag | Usage |
|--------|-----|-------|
| `dev` | `dev` (floating) | Testing/pre-release - always latest dev build |
| `main` | `vX.Y.Z` (fixed) | Production releases - immutable version tags |

### Tagging Behavior

- **dev branch**: When code is merged to `dev`, the workflow updates the floating `dev` tag to point to the latest build. This allows consumers to always get the latest dev version by installing `#dev`.

- **main branch**: When code is merged to `main`, the workflow creates a new immutable version tag (e.g., `v1.2.0`) based on the commit message conventions.

## Development Workflow

### For Contributors

1. Make changes to TypeScript files in the `src/` directory
2. Use proper commit prefixes (`fix:`, `feat:`, `BREAKING:`)
3. Create a pull request and merge to `dev` or `main`
4. GitHub Actions automatically:
   - Builds the `dist/` folder
   - Bumps the version based on commit messages
   - Creates a PR with the build artifacts
   - Tags the release (`dev` tag or `vX.Y.Z`)

### Local Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# The dist/ folder will be created with compiled JavaScript and declaration files
```

## Important Notes

### dist/ Folder in Git

Since this package is installed via GitHub URL (not npm registry), the compiled `dist/` folder **must be committed to git**. This is different from standard npm packages but necessary for this installation method. The GitHub Actions workflow handles building and committing the `dist/` folder automatically.

### Import Paths

All types are exported from the main entry point:

```typescript
import { TypeName } from '@cryptomii/models';
```

You can also import from specific sub-paths if needed:

```typescript
import { Candle } from '@cryptomii/models/dist/models/models/candle';
```

However, using the main entry point is recommended for better compatibility.

## Repository Structure

```
cryptom-models/
├── .github/
│   └── workflows/
│       └── build-and-release.yml  # Automated build and release workflow
├── src/                            # Source TypeScript files
│   ├── index.ts                    # Main entry point
│   ├── custom-types/               # Custom type definitions
│   │   ├── domain-related/         # Domain-specific types
│   │   └── generic/                # Generic utility types
│   └── models/                     # Data models and enums
│       ├── enums/                  # Enum definitions
│       └── models/                 # Interface definitions
├── dist/                           # Compiled output (committed)
├── package.json
├── tsconfig.json
└── README.md
```

## License

[Add your license here]

## Support

For issues, questions, or contributions, please open an issue or pull request in the [GitHub repository](https://github.com/CryptomII/cryptom-models).
