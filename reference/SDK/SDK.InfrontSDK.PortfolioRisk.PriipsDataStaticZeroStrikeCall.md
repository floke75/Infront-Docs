---
title: "PriipsDataStaticZeroStrikeCall"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticZeroStrikeCall"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticZeroStrikeCall"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticZeroStrikeCall.html"
defines: ["PriipsDataStaticZeroStrikeCall"]
member_count: 9
members: ["componentId", "dates", "executionType", "exerciseDates", "exercisePeriod", "payoffType", "relatedBasketIds", "usesPerformance", "weight"]
member_groups:
  "Properties": ["componentId", "dates", "executionType", "exerciseDates", "exercisePeriod", "payoffType", "relatedBasketIds", "usesPerformance", "weight"]
reference_count: 5
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticZeroStrikeCallExecutionType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticZeroStrikeCallPayoffType"]
---

# PriipsDataStaticZeroStrikeCall

ZeroStrikeCall is handled as a Long Call Option with Strike = 0.
This component needs an underlying basket.
Assuming that the underlying price at the end of the dates is u1, then the payoff is u1 * weight.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.ZeroStrikeCall

```ts
interface PriipsDataStaticZeroStrikeCall {
    componentId: number;
    dates: PriipsDataStaticBasicProductDates;
    executionType: PriipsDataStaticZeroStrikeCallExecutionType;
    exerciseDates: PriipsDataStaticObservationDates;
    exercisePeriod: PriipsDataStaticObservationPeriod;
    payoffType: PriipsDataStaticZeroStrikeCallPayoffType;
    relatedBasketIds: readonly number[];
    usesPerformance: boolean;
    weight: number;
}
```

### Properties

#### `Readonly` componentId

```ts
componentId: number
```

Individual component ID

##### Remarks

Format: int32

#### `Readonly` dates

```ts
dates: PriipsDataStaticBasicProductDates
```

Product dates, the finalRedemptionDate describes the date when the payoff is paid,
and the finalObservationDate is the date when the underlying performance is observed.

#### `Readonly` executionType

```ts
executionType: PriipsDataStaticZeroStrikeCallExecutionType
```

Execution type of the option, e.g. European, American, ...
currently (2021-06-02) only European is supported

##### Remarks

Format: enum

#### `Readonly` exerciseDates

```ts
exerciseDates: PriipsDataStaticObservationDates
```

Exercise dates for execution type Asian (only one of exercisePeriod and exerciseDates should be set)

#### `Readonly` exercisePeriod

```ts
exercisePeriod: PriipsDataStaticObservationPeriod
```

Exercise period for execution type Asian

#### `Readonly` payoffType

```ts
payoffType: PriipsDataStaticZeroStrikeCallPayoffType
```

Payoff feature in case of several underlyings (currenly (2021-06-02) only WorstOf supported)

##### Remarks

Format: enum

#### `Readonly` relatedBasketIds

```ts
relatedBasketIds: readonly number[]
```

Corresponding basket (for now only one basket expected)

#### `Readonly` usesPerformance

```ts
usesPerformance: boolean
```

Not implemented

#### `Readonly` weight

```ts
weight: number
```

Multiplier of the payoff

##### Remarks

Format: double
