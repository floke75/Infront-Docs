---
title: "PriipsDataStaticFond"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFond"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticFond"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFond.html"
defines: ["PriipsDataStaticFond"]
member_count: 3
members: ["componentId", "payoutType", "weight"]
member_groups:
  "Properties": ["componentId", "payoutType", "weight"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFondPayoutType"]
---

# PriipsDataStaticFond

Fond is the German word for fund, and describes a fund for Category 2 PRIIPs.
However, a basic fund can be represented as a zero strike call.
Deprecated: Use a ZeroStrikeCall to describe a fund.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.Fond

```ts
interface PriipsDataStaticFond {
    componentId: number;
    payoutType: PriipsDataStaticFondPayoutType;
    weight: number;
}
```

### Properties

#### `Readonly` componentId

```ts
componentId: number
```

Component ID of product component

##### Remarks

Format: int32

#### `Readonly` payoutType

```ts
payoutType: PriipsDataStaticFondPayoutType
```

Fund payoff type

##### Remarks

Format: enum

#### `Readonly` weight

```ts
weight: number
```

Payoff multiplier

##### Remarks

Format: double
