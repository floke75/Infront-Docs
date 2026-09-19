---
title: "PriipsDataStaticInflationSwap"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInflationSwap"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticInflationSwap"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInflationSwap.html"
defines: ["PriipsDataStaticInflationSwap"]
member_count: 11
members: ["componentId", "dates", "dayCountConventionFixedLeg", "dayCountConventionFloatingLeg", "fixedRate", "inflationCurve", "nominal", "relatedBasketIndexId", "swapType", "useInflationIndexTracker", "weightFloatingLeg"]
member_groups:
  "Properties": ["componentId", "dates", "dayCountConventionFixedLeg", "dayCountConventionFloatingLeg", "fixedRate", "inflationCurve", "nominal", "relatedBasketIndexId", "swapType", "useInflationIndexTracker", "weightFloatingLeg"]
reference_count: 5
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInflationSwapDayCountConventionFixedLeg", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInflationSwapDayCountConventionFloatingLeg", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFloatingRate", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInflationSwapSwapType"]
---

# PriipsDataStaticInflationSwap

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.InflationSwap

```ts
interface PriipsDataStaticInflationSwap {
    componentId: number;
    dates: PriipsDataStaticBasicProductDates;
    dayCountConventionFixedLeg: PriipsDataStaticInflationSwapDayCountConventionFixedLeg;
    dayCountConventionFloatingLeg: PriipsDataStaticInflationSwapDayCountConventionFloatingLeg;
    fixedRate: number;
    inflationCurve: PriipsDataStaticFloatingRate;
    nominal: number;
    relatedBasketIndexId: number;
    swapType: PriipsDataStaticInflationSwapSwapType;
    useInflationIndexTracker: boolean;
    weightFloatingLeg: number;
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

#### `Readonly` dates

```ts
dates: PriipsDataStaticBasicProductDates
```

The finalRedemptionDate is the final payment date of the swap.

#### `Readonly` dayCountConventionFixedLeg

```ts
dayCountConventionFixedLeg: PriipsDataStaticInflationSwapDayCountConventionFixedLeg
```

Day count convention used to calculate accruals on the fixed leg of the inflation swap.

##### Remarks

Format: enum

#### `Readonly` dayCountConventionFloatingLeg

```ts
dayCountConventionFloatingLeg: PriipsDataStaticInflationSwapDayCountConventionFloatingLeg
```

Day count convention used to calculate accruals on the floating leg of the inflation swap.

##### Remarks

Format: enum

#### `Readonly` fixedRate

```ts
fixedRate: number
```

Fixed rate per annuum of the inflation swap

##### Remarks

Format: float

#### `Readonly` inflationCurve

```ts
inflationCurve: PriipsDataStaticFloatingRate
```

This field contains information on the inflation curve

#### `Readonly` nominal

```ts
nominal: number
```

Notional / fix payoff of the inflation swap

##### Remarks

Format: double

#### `Readonly` relatedBasketIndexId

```ts
relatedBasketIndexId: number
```

Relevant basket ID of the basket that contains
the index linked to the inflation swap

##### Remarks

Format: int32

#### `Readonly` swapType

```ts
swapType: PriipsDataStaticInflationSwapSwapType
```

Inflation swap type

##### Remarks

Format: enum

#### `Readonly` useInflationIndexTracker

```ts
useInflationIndexTracker: boolean
```

whether to use an index to track the inflation, or a curve otherwise
If set to true, the basket id must refer to the index, otherwise the inflation curve must be non null

#### `Readonly` weightFloatingLeg

```ts
weightFloatingLeg: number
```

Multiplier for the payoff, considering the notional as well as the product payments

##### Remarks

Format: double
