---
title: "PriipsDataStaticCurrency"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCurrency"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticCurrency"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCurrency.html"
defines: ["PriipsDataStaticCurrency"]
member_count: 2
members: ["edgId", "isoCode"]
member_groups:
  "Properties": ["edgId", "isoCode"]
---

# PriipsDataStaticCurrency

Currency describes a currency

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.Currency

```ts
interface PriipsDataStaticCurrency {
    edgId: number;
    isoCode: string;
}
```

### Properties

#### `Readonly` edgId

```ts
edgId: number
```

INTERNAL: IQ ID from xtp.currencies

##### Remarks

Format: int32

#### `Readonly` isoCode

```ts
isoCode: string
```

ISO Code
