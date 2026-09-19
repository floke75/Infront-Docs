---
title: "PriipsDataCalculationQuotes"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataCalculationQuotes"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataCalculationQuotes"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataCalculationQuotes.html"
defines: ["PriipsDataCalculationQuotes"]
member_count: 6
members: ["ask", "bid", "fair", "identifier", "spots", "timestamp"]
member_groups:
  "Properties": ["ask", "bid", "fair", "identifier", "spots", "timestamp"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticIdentifier", "SDK.InfrontSDK.PortfolioRisk.PriipsDataCalculationSpot"]
---

# PriipsDataCalculationQuotes

Quotes contains information on daily changing product information such as product prices and costs

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.calculation.Quotes

```ts
interface PriipsDataCalculationQuotes {
    ask: number;
    bid: number;
    fair: number;
    identifier: PriipsDataStaticIdentifier;
    spots: readonly PriipsDataCalculationSpot[];
    timestamp: string;
}
```

### Properties

#### `Readonly` ask

```ts
ask: number
```

ask value (contains fair value and entry costs)

##### Remarks

Format: double

#### `Readonly` bid

```ts
bid: number
```

bid value (ask value without exit costs)

##### Remarks

Format: double

#### `Readonly` fair

```ts
fair: number
```

fair value of the product

##### Remarks

Format: double

#### `Readonly` identifier

```ts
identifier: PriipsDataStaticIdentifier
```

product identifier (because customers send the product static data and their quotes in separate
files, so we need the identifier in the quotes block to match the prices with the static data)

#### `Readonly` spots

```ts
spots: readonly PriipsDataCalculationSpot[]
```

stores the current underlying spot of underlyings that are relevant for the product.
These spots are given by the customer in their input file and they are optional.
If they send a spot, we will use it as the current underlying spot for our calculations
instead of using the current underlying price from our DB.

#### `Readonly` timestamp

```ts
timestamp: string
```

timestamp of the quotes
