---
title: "PriipsDataStaticBarrierHit"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBarrierHit"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticBarrierHit"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBarrierHit.html"
defines: ["PriipsDataStaticBarrierHit"]
member_count: 2
members: ["barrierHitDate", "underlyingIndexId"]
member_groups:
  "Properties": ["barrierHitDate", "underlyingIndexId"]
---

# PriipsDataStaticBarrierHit

Describes a barrier hit

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.BarrierHit

```ts
interface PriipsDataStaticBarrierHit {
    barrierHitDate: string;
    underlyingIndexId: number;
}
```

### Properties

#### `Readonly` barrierHitDate

```ts
barrierHitDate: string
```

Date when the underlying has been hit

#### `Readonly` underlyingIndexId

```ts
underlyingIndexId: number
```

ID of the underlying that hit the underlying

##### Remarks

Format: int32
