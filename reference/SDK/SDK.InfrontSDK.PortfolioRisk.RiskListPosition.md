---
title: "RiskListPosition"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.RiskListPosition"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > RiskListPosition"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.RiskListPosition.html"
defines: ["RiskListPosition"]
member_count: 13
members: ["assetClass", "currency", "feed?", "isin", "issuer?", "latestVersion?", "name", "portfolioId", "positionId", "shortName?", "ticker?", "vwdKey?", "weight"]
member_groups:
  "Properties": ["assetClass", "currency", "feed?", "isin", "issuer?", "latestVersion?", "name", "portfolioId", "positionId", "shortName?", "ticker?", "vwdKey?", "weight"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.InputPortfolioPosition"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskPositionAssetClass", "SDK.InfrontSDK.PortfolioRisk.InputPortfolioPosition"]
---

# RiskListPosition

InputPortfolioPosition defines the position information that needs to be delivered by the application.

```ts
interface RiskListPosition {
    assetClass: PriipsDataServicesRiskvaluatorRiskPositionAssetClass;
    currency: string;
    feed?: number;
    isin: string;
    issuer?: string;
    latestVersion?: string;
    name: string;
    portfolioId: string;
    positionId: string;
    shortName?: string;
    ticker?: string;
    vwdKey?: string;
    weight: number;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.RiskListPosition))

- InputPortfolioPosition

  - RiskListPosition

### Properties

#### assetClass

```ts
assetClass: PriipsDataServicesRiskvaluatorRiskPositionAssetClass
```

asset class, sometimes also called symbol classification

Inherited from InputPortfolioPosition.assetClass

#### currency

```ts
currency: string
```

iso3 string, base currency for this position

Inherited from InputPortfolioPosition.currency

#### `Optional` feed

```ts
feed?: number
```

ids feed of the instrument

Inherited from InputPortfolioPosition.feed

#### isin

```ts
isin: string
```

ISIN of the instrument

Inherited from InputPortfolioPosition.isin

#### `Optional` issuer

```ts
issuer?: string
```

ignore for now: issuer information, not yet specified

Inherited from InputPortfolioPosition.issuer

#### `Optional` ` Readonly`latestVersion

```ts
latestVersion?: string
```

latest version

#### name

```ts
name: string
```

name of the position in its original system

Inherited from InputPortfolioPosition.name

#### `Readonly` portfolioId

```ts
portfolioId: string
```

"portfolioId" used in client application

#### `Readonly` positionId

```ts
positionId: string
```

"positionId" used in client application

Overrides InputPortfolioPosition.positionId

#### `Optional` shortName

```ts
shortName?: string
```

shortName of the position in its original system

Inherited from InputPortfolioPosition.shortName

#### `Optional` ticker

```ts
ticker?: string
```

ids ticker of the instrument

Inherited from InputPortfolioPosition.ticker

#### `Optional` vwdKey

```ts
vwdKey?: string
```

vwd key of the instrument. sometimes also called instrumentKey

Inherited from InputPortfolioPosition.vwdKey

#### weight

```ts
weight: number
```

the weight of the position in portfolio, sometimes also called volume or entryQuantity

Inherited from InputPortfolioPosition.weight
