---
title: "PriipsDataStaticBestInValue"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBestInValue"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticBestInValue"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBestInValue.html"
defines: ["PriipsDataStaticBestInValue"]
member_count: 2
members: ["current", "edgID"]
member_groups:
  "Properties": ["current", "edgID"]
---

# PriipsDataStaticBestInValue

BestInValue records for an underlying the best or worst underlying price in the past.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.BestInValue

```ts
interface PriipsDataStaticBestInValue {
    current: number;
    edgID: number;
}
```

### Properties

#### `Readonly` current

```ts
current: number
```

Current fixing value, i.e. for WorstOf/BestOf: worst/best fixing
For Average: Average of fixings in the past

##### Remarks

Format: double

#### `Readonly` edgID

```ts
edgID: number
```

INTERNAL: Underlying ID

##### Remarks

Format: int32
