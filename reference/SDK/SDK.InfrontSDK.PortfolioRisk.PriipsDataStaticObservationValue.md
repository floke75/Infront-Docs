---
title: "PriipsDataStaticObservationValue"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationValue"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticObservationValue"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationValue.html"
defines: ["PriipsDataStaticObservationValue"]
member_count: 3
members: ["currency", "underlyingIndexId", "value"]
member_groups:
  "Properties": ["currency", "underlyingIndexId", "value"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCurrency"]
---

# PriipsDataStaticObservationValue

ObservationValue contains absolute barrier values for underlyings, belongs to an ObservationLevelValue

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.ObservationValue

```ts
interface PriipsDataStaticObservationValue {
    currency: PriipsDataStaticCurrency;
    underlyingIndexId: number;
    value: number;
}
```

### Properties

#### `Readonly` currency

```ts
currency: PriipsDataStaticCurrency
```

The currency of the underlying

#### `Readonly` underlyingIndexId

```ts
underlyingIndexId: number
```

UnderlyingIndexId in a Basket.Underlyings

##### Remarks

Format: int32

#### `Readonly` value

```ts
value: number
```

The absolute barrier value for the underlying

##### Remarks

Format: double
