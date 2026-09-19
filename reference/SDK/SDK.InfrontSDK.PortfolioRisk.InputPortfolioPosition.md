---
title: "InputPortfolioPosition"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.InputPortfolioPosition"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > InputPortfolioPosition"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.InputPortfolioPosition.html"
defines: ["InputPortfolioPosition"]
member_count: 11
members: ["assetClass", "currency", "feed?", "isin", "issuer?", "name", "positionId", "shortName?", "ticker?", "vwdKey?", "weight"]
member_groups:
  "Properties": ["assetClass", "currency", "feed?", "isin", "issuer?", "name", "positionId", "shortName?", "ticker?", "vwdKey?", "weight"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.RiskListPosition"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskPositionAssetClass", "SDK.InfrontSDK.PortfolioRisk.RiskListPosition"]
---

# InputPortfolioPosition

InputPortfolioPosition defines the position information that needs to be delivered by the application.

```ts
interface InputPortfolioPosition {
    assetClass: PriipsDataServicesRiskvaluatorRiskPositionAssetClass;
    currency: string;
    feed?: number;
    isin: string;
    issuer?: string;
    name: string;
    positionId: string | number;
    shortName?: string;
    ticker?: string;
    vwdKey?: string;
    weight: number;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.PortfolioRisk.InputPortfolioPosition))

- InputPortfolioPosition

  - RiskListPosition

### Properties

#### assetClass

```ts
assetClass: PriipsDataServicesRiskvaluatorRiskPositionAssetClass
```

asset class, sometimes also called symbol classification

#### currency

```ts
currency: string
```

iso3 string, base currency for this position

#### `Optional` feed

```ts
feed?: number
```

ids feed of the instrument

#### isin

```ts
isin: string
```

ISIN of the instrument

#### `Optional` issuer

```ts
issuer?: string
```

ignore for now: issuer information, not yet specified

#### name

```ts
name: string
```

name of the position in its original system

#### positionId

```ts
positionId: string | number
```

id of the position in its original system

#### `Optional` shortName

```ts
shortName?: string
```

shortName of the position in its original system

#### `Optional` ticker

```ts
ticker?: string
```

ids ticker of the instrument

#### `Optional` vwdKey

```ts
vwdKey?: string
```

vwd key of the instrument. sometimes also called instrumentKey

#### weight

```ts
weight: number
```

the weight of the position in portfolio, sometimes also called volume or entryQuantity
