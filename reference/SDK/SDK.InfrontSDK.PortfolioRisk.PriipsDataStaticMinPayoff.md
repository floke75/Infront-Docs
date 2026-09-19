---
title: "PriipsDataStaticMinPayoff"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticMinPayoff"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticMinPayoff"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticMinPayoff.html"
defines: ["PriipsDataStaticMinPayoff"]
member_count: 2
members: ["type", "value"]
member_groups:
  "Properties": ["type", "value"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticMinPayoffType"]
---

# PriipsDataStaticMinPayoff

MinPayoff contains the minimal payoff of the product for a holding period

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.MinPayoff

```ts
interface PriipsDataStaticMinPayoff {
    type: PriipsDataStaticMinPayoffType;
    value: number;
}
```

### Properties

#### `Readonly` type

```ts
type: PriipsDataStaticMinPayoffType
```

Classification of holding period (i. e. whether this is the 1Y, the RHP or the RHP/2 period).

##### Remarks

Format: enum

#### `Readonly` value

```ts
value: number
```

minimal / guaranteed payoff

##### Remarks

Format: double
