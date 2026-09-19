---
title: "PriipsDataStaticSwaption"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticSwaption"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticSwaption"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticSwaption.html"
defines: ["PriipsDataStaticSwaption"]
member_count: 8
members: ["componentId", "dates", "executionType", "exerciseDates", "exercisePeriod", "optionType", "relatedComponentIds", "weight"]
member_groups:
  "Properties": ["componentId", "dates", "executionType", "exerciseDates", "exercisePeriod", "optionType", "relatedComponentIds", "weight"]
reference_count: 5
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticSwaptionExecutionType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticSwaptionOptionType"]
---

# PriipsDataStaticSwaption

A swaption is an option to enter a swap. It is linked to two bonds.
We assume we have to parties who wants to swap the bond payoffs some time in future.
E.g. the first bond is a fix bond, the second bond is a floating bond, so A will pay fix at first while B pays floating.
At some time in the future they will swap their roles, so from then on A will pay floating payments and B will pay fix
payments. Depending on the optionType we will either consider the payoff from A's or B's point of view.
In the current valuator implementation (2021-06) we always expect 1 fix and 1 (zero-floored) floating bond.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.Swaption

```ts
interface PriipsDataStaticSwaption {
    componentId: number;
    dates: PriipsDataStaticBasicProductDates;
    executionType: PriipsDataStaticSwaptionExecutionType;
    exerciseDates: PriipsDataStaticObservationDates;
    exercisePeriod: PriipsDataStaticObservationPeriod;
    optionType: PriipsDataStaticSwaptionOptionType;
    relatedComponentIds: readonly number[];
    weight: number;
}
```

### Properties

#### `Readonly` componentId

```ts
componentId: number
```

Component ID of the product component swaption

##### Remarks

Format: int32

#### `Readonly` dates

```ts
dates: PriipsDataStaticBasicProductDates
```

The exercise and paydate of the swaption is the finalRedemptionDate, the the fixing date is the finalObservationDate

#### `Readonly` executionType

```ts
executionType: PriipsDataStaticSwaptionExecutionType
```

Not supported, implemented as european

##### Remarks

Format: enum

#### `Readonly` exerciseDates

```ts
exerciseDates: PriipsDataStaticObservationDates
```

Only 1 date for the swaption execution date expected (used for discounting)

#### `Readonly` exercisePeriod

```ts
exercisePeriod: PriipsDataStaticObservationPeriod
```

Not supported

#### `Readonly` optionType

```ts
optionType: PriipsDataStaticSwaptionOptionType
```

Call means: one payment is considered as nominal * weight * (alternativePayment - fixPayment)
Put means: one payment is considered as nominal * weight * (fixPayment - alternativePayment)
And fixPayment is the payment of the first fix bond

##### Remarks

Format: enum

#### `Readonly` relatedComponentIds

```ts
relatedComponentIds: readonly number[]
```

Component IDs of the two bonds that belong to the swaption (only Fix, Floating and ZeroFlooredFloating allowed)

#### `Readonly` weight

```ts
weight: number
```

Multiplier of the payoff

##### Remarks

Format: double
