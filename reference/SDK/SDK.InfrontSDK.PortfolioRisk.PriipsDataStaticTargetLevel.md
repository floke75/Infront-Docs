---
title: "PriipsDataStaticTargetLevel"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticTargetLevel"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticTargetLevel"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticTargetLevel.html"
defines: ["PriipsDataStaticTargetLevel"]
member_count: 2
members: ["amount", "type"]
member_groups:
  "Properties": ["amount", "type"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticTargetLevelType"]
---

# PriipsDataStaticTargetLevel

TargetLevel describes the target level for a target autocall, i.e. the autocall occurs when the specific cumulated coupon
amount or a number of coupons paid is reached

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.TargetLevel

```ts
interface PriipsDataStaticTargetLevel {
    amount: number;
    type: PriipsDataStaticTargetLevelType;
}
```

### Properties

#### `Readonly` amount

```ts
amount: number
```

Depending on the type it describes the target coupon amount or the target number of coupons

##### Remarks

Format: double

#### `Readonly` type

```ts
type: PriipsDataStaticTargetLevelType
```

Determines if the target level depends on the coupon amount or number of coupons

##### Remarks

Format: enum
