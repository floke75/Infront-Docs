---
title: "PriipsDataStaticObservationPeriod"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticObservationPeriod"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod.html"
defines: ["PriipsDataStaticObservationPeriod"]
member_count: 2
members: ["begin", "end"]
member_groups:
  "Properties": ["begin", "end"]
---

# PriipsDataStaticObservationPeriod

ObservationPeriod describes the start and end of a period

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.ObservationPeriod

```ts
interface PriipsDataStaticObservationPeriod {
    begin: string;
    end: string;
}
```

### Properties

#### `Readonly` begin

```ts
begin: string
```

Start of the period

#### `Readonly` end

```ts
end: string
```

End of the period
