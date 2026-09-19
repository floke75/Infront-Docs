---
title: "PriipsDataProductPortfolio"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataProductPortfolio"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataProductPortfolio"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataProductPortfolio.html"
defines: ["PriipsDataProductPortfolio"]
member_count: 7
members: ["clientID", "currency", "displayName", "positions", "source", "time", "version"]
member_groups:
  "Properties": ["clientID", "currency", "displayName", "positions", "source", "time", "version"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCurrency", "SDK.InfrontSDK.PortfolioRisk.PriipsDataProductPortfolioPosition"]
---

# PriipsDataProductPortfolio

Portfolio describes a portfolio of financial instruments

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.product.Portfolio

```ts
interface PriipsDataProductPortfolio {
    clientID: string;
    currency: PriipsDataStaticCurrency;
    displayName: string;
    positions: readonly PriipsDataProductPortfolioPosition[];
    source: string;
    time: string;
    version: string;
}
```

### Properties

#### `Readonly` clientID

```ts
clientID: string
```

Machine-readable identifier of the portfolio (portfolio store: clientID)
Must not contain the characters "/", ":", "+" and "#".
Will be considered an unique identifier for this portfolio in its scope. Scope could e. g. be a backend-tenant-user combination.
Used to be called "name".

#### `Readonly` currency

```ts
currency: PriipsDataStaticCurrency
```

Currency of the portfolio

#### `Readonly` displayName

```ts
displayName: string
```

Human-readable name of the portfolio. This can be an arbitrary string and is intended for display.
Deliberately not calling this field "name" to avoid confusion with #1.

#### `Readonly` positions

```ts
positions: readonly PriipsDataProductPortfolioPosition[]
```

Positions of the portfolio. Can be referenced by their array index.

#### `Readonly` source

```ts
source: string
```

Machine-readable source identifier of the portfolio.
Must not contain the characters "/", ":", "+" and "#".
Will be considered a namespace for clientIDs. If empty, a default may be assumed. May be limited by implementations to an enum of
allowed values.

#### `Readonly` time

```ts
time: string
```

Validity date/time of the portfolio (i. e. one arbitrary point in time at which this portfolio was valid)

##### Remarks

Format: date-time

#### `Readonly` version

```ts
version: string
```

Client-supplied version string, should be lexicographically ordered by recency (i. e. 00020 > 0001b)
Must not contain the characters "/", ":", "+" and "#".
