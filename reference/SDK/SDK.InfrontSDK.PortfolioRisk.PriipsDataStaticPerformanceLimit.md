---
title: "PriipsDataStaticPerformanceLimit"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticPerformanceLimit"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticPerformanceLimit"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticPerformanceLimit.html"
defines: ["PriipsDataStaticPerformanceLimit"]
member_count: 2
members: ["lowerLimit", "upperLimit"]
member_groups:
  "Properties": ["lowerLimit", "upperLimit"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLevel"]
---

# PriipsDataStaticPerformanceLimit

Underlying limits

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.PerformanceLimit

```ts
interface PriipsDataStaticPerformanceLimit {
    lowerLimit: PriipsDataStaticLevel;
    upperLimit: PriipsDataStaticLevel;
}
```

### Properties

#### `Readonly` lowerLimit

```ts
lowerLimit: PriipsDataStaticLevel
```

Floor

#### `Readonly` upperLimit

```ts
upperLimit: PriipsDataStaticLevel
```

Cap
