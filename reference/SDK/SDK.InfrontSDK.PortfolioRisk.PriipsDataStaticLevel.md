---
title: "PriipsDataStaticLevel"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLevel"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticLevel"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLevel.html"
defines: ["PriipsDataStaticLevel"]
member_count: 3
members: ["currency", "level", "value"]
member_groups:
  "Properties": ["currency", "level", "value"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCurrency"]
---

# PriipsDataStaticLevel

Level describes a certain level of an underlying price, e.g. to describe barriers or strikes

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.Level

```ts
interface PriipsDataStaticLevel {
    currency: PriipsDataStaticCurrency;
    level: number;
    value: number;
}
```

### Properties

#### `Readonly` currency

```ts
currency: PriipsDataStaticCurrency
```

Currency of the price, usually the price of the underlying

#### `Readonly` level

```ts
level: number
```

A relative value of the price, usually with respect to the initial reference price

##### Remarks

Format: double

#### `Readonly` value

```ts
value: number
```

An absolute value of the price

##### Remarks

Format: double
