---
title: "PriipsDataStaticRateUnderlying"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticRateUnderlying"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticRateUnderlying"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticRateUnderlying.html"
defines: ["PriipsDataStaticRateUnderlying"]
member_count: 5
members: ["rate", "ratio", "takeOutDate", "underlyingIndexId", "weight"]
member_groups:
  "Properties": ["rate", "ratio", "takeOutDate", "underlyingIndexId", "weight"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFloatingRate"]
---

# PriipsDataStaticRateUnderlying

Interest rate as component in a basket

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.RateUnderlying

```ts
interface PriipsDataStaticRateUnderlying {
    rate: PriipsDataStaticFloatingRate;
    ratio: number;
    takeOutDate: string;
    underlyingIndexId: number;
    weight: number;
}
```

### Properties

#### `Readonly` rate

```ts
rate: PriipsDataStaticFloatingRate
```

Interest rate information

#### `Readonly` ratio

```ts
ratio: number
```

Percentage weight in basket

##### Remarks

Format: double

#### `Readonly` takeOutDate

```ts
takeOutDate: string
```

Date when this underlying is kicked out of the valuation (not implemented yet)

#### `Readonly` underlyingIndexId

```ts
underlyingIndexId: number
```

ID within the basket

##### Remarks

Format: int32

#### `Readonly` weight

```ts
weight: number
```

Number of underlying units / weight of the interest rate within the basket

##### Remarks

Format: double
