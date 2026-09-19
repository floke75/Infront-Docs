---
title: "PriipsDataStaticHistoricQuote"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticHistoricQuote"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticHistoricQuote"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticHistoricQuote.html"
defines: ["PriipsDataStaticHistoricQuote"]
member_count: 2
members: ["date", "spot"]
member_groups:
  "Properties": ["date", "spot"]
---

# PriipsDataStaticHistoricQuote

Historic underlying prices

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.HistoricQuote

```ts
interface PriipsDataStaticHistoricQuote {
    date: string;
    spot: number;
}
```

### Properties

#### `Readonly` date

```ts
date: string
```

Date of the price in yyyy-MM-dd

#### `Readonly` spot

```ts
spot: number
```

Underlying price

##### Remarks

Format: double
