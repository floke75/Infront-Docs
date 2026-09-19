---
title: "PriipsDataStaticFixedStrike"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFixedStrike"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticFixedStrike"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFixedStrike.html"
defines: ["PriipsDataStaticFixedStrike"]
member_count: 3
members: ["date", "edgID", "spot"]
member_groups:
  "Properties": ["date", "edgID", "spot"]
---

# PriipsDataStaticFixedStrike

FixedStrike stores the current strike level for each underlying of a Cliquet Option

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.FixedStrike

```ts
interface PriipsDataStaticFixedStrike {
    date: string;
    edgID: number;
    spot: number;
}
```

### Properties

#### `Readonly` date

```ts
date: string
```

Date when it has been fixed

#### `Readonly` edgID

```ts
edgID: number
```

INTERNAL: Underlying ID

##### Remarks

Format: int32

#### `Readonly` spot

```ts
spot: number
```

Strike level

##### Remarks

Format: double
