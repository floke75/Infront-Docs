---
title: "PriipsDataStaticProductEvents"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductEvents"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticProductEvents"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductEvents.html"
defines: ["PriipsDataStaticProductEvents"]
member_count: 2
members: ["bestIns", "refixings"]
member_groups:
  "Properties": ["bestIns", "refixings"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBestIn", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticRefixing"]
---

# PriipsDataStaticProductEvents

Further product events that do not belong to some product component but for underlyings

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.ProductEvents

```ts
interface PriipsDataStaticProductEvents {
    bestIns: readonly PriipsDataStaticBestIn[];
    refixings: readonly PriipsDataStaticRefixing[];
}
```

### Properties

#### `Readonly` bestIns

```ts
bestIns: readonly PriipsDataStaticBestIn[]
```

Picks the worst or best underlying price during an observation period as initial underlying fixing

#### `Readonly` refixings

```ts
refixings: readonly PriipsDataStaticRefixing[]
```

Resets the initial reference price for an underlying
