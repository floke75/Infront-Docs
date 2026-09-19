---
title: "PriipsDataCalculationSpot"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataCalculationSpot"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataCalculationSpot"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataCalculationSpot.html"
defines: ["PriipsDataCalculationSpot"]
member_count: 3
members: ["identifier", "spot", "timestamp"]
member_groups:
  "Properties": ["identifier", "spot", "timestamp"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticIdentifier"]
---

# PriipsDataCalculationSpot

Spot stores an underlying price for a specific date

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.calculation.Spot

```ts
interface PriipsDataCalculationSpot {
    identifier: PriipsDataStaticIdentifier;
    spot: number;
    timestamp: string;
}
```

### Properties

#### `Readonly` identifier

```ts
identifier: PriipsDataStaticIdentifier
```

underlying identifier

#### `Readonly` spot

```ts
spot: number
```

spot of the underlying

##### Remarks

Format: double

#### `Readonly` timestamp

```ts
timestamp: string
```

timestampf of the underlying price
