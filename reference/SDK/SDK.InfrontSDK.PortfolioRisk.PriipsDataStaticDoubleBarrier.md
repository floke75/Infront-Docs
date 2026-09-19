---
title: "PriipsDataStaticDoubleBarrier"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticDoubleBarrier"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticDoubleBarrier"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticDoubleBarrier.html"
defines: ["PriipsDataStaticDoubleBarrier"]
member_count: 19
members: ["barrierHits", "componentId", "dates", "exerciseDates", "exercisePeriod", "levelType", "lowerBarrierLevel", "lowerObservationType", "lowerPayoffType", "observationPeriod", "optionType", "relatedBasketIds", "relatedComponentIds", "strikeLevel", "upperBarrierLevel", "upperObservationType", "upperPayoffType", "usesPerformance", "weight"]
member_groups:
  "Properties": ["barrierHits", "componentId", "dates", "exerciseDates", "exercisePeriod", "levelType", "lowerBarrierLevel", "lowerObservationType", "lowerPayoffType", "observationPeriod", "optionType", "relatedBasketIds", "relatedComponentIds", "strikeLevel", "upperBarrierLevel", "upperObservationType", "upperPayoffType", "usesPerformance", "weight"]
reference_count: 11
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBarrierHit", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticDoubleBarrierLevelType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLevel", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticDoubleBarrierLowerObservationType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticDoubleBarrierLowerPayoffType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticDoubleBarrierOptionType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticDoubleBarrierUpperObservationType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticDoubleBarrierUpperPayoffType"]
---

# PriipsDataStaticDoubleBarrier

A DoubleBarrier has the same behaviour as a barrier option.
The difference is here is that we have 2 conditions that can knock-in or knock-out the option. The observationTypes of these
two conditions must fit together, e.g. if the upper one is DownIn, then the lower one must be UpIn or DownOut. or the other way
round, when the upper one is DownIn, then the lower one should not be UpOut because this would not define the behaviour between
the barriers clearly.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.DoubleBarrier

```ts
interface PriipsDataStaticDoubleBarrier {
    barrierHits: readonly PriipsDataStaticBarrierHit[];
    componentId: number;
    dates: PriipsDataStaticBasicProductDates;
    exerciseDates: PriipsDataStaticObservationDates;
    exercisePeriod: PriipsDataStaticObservationPeriod;
    levelType: PriipsDataStaticDoubleBarrierLevelType;
    lowerBarrierLevel: PriipsDataStaticLevel;
    lowerObservationType: PriipsDataStaticDoubleBarrierLowerObservationType;
    lowerPayoffType: PriipsDataStaticDoubleBarrierLowerPayoffType;
    observationPeriod: PriipsDataStaticObservationPeriod;
    optionType: PriipsDataStaticDoubleBarrierOptionType;
    relatedBasketIds: readonly number[];
    relatedComponentIds: readonly number[];
    strikeLevel: PriipsDataStaticLevel;
    upperBarrierLevel: PriipsDataStaticLevel;
    upperObservationType: PriipsDataStaticDoubleBarrierUpperObservationType;
    upperPayoffType: PriipsDataStaticDoubleBarrierUpperPayoffType;
    usesPerformance: boolean;
    weight: number;
}
```

### Properties

#### `Readonly` barrierHits

```ts
barrierHits: readonly PriipsDataStaticBarrierHit[]
```

To document the barrier hits in the past. A barrier is hit when
(a) for observationType UpIn and UpOut: underlyingPrice > barrier, or
(b) for observationType DownIn and DownOut: underlyingPrice < barrier.
When the barrier option is knocked-out by one barrier it cannot be knocked in again by another one.

#### `Readonly` componentId

```ts
componentId: number
```

Component ID of the product component

##### Remarks

Format: int32

#### `Readonly` dates

```ts
dates: PriipsDataStaticBasicProductDates
```

Dates of the barrier, the finalRedemptionDate describes the payment date

#### `Readonly` exerciseDates

```ts
exerciseDates: PriipsDataStaticObservationDates
```

Exercise dates for asian options (not implemented yet for double barrier)

#### `Readonly` exercisePeriod

```ts
exercisePeriod: PriipsDataStaticObservationPeriod
```

Exercise period for asian option (not implemented yet for double barrier)

#### `Readonly` levelType

```ts
levelType: PriipsDataStaticDoubleBarrierLevelType
```

Determines if we use the Level or Value field in barrierLevel and strikeLevel

##### Remarks

Format: enum

#### `Readonly` lowerBarrierLevel

```ts
lowerBarrierLevel: PriipsDataStaticLevel
```

Describes the lower barrier that can knock-in or knock-out the option

#### `Readonly` lowerObservationType

```ts
lowerObservationType: PriipsDataStaticDoubleBarrierLowerObservationType
```

Observation type for the lower barrier, e.g. UpIn, DownIn, UpOut, DownOut, see observationType for further information

##### Remarks

Format: enum

#### `Readonly` lowerPayoffType

```ts
lowerPayoffType: PriipsDataStaticDoubleBarrierLowerPayoffType
```

Payoff feature of the lower barrier with respect to the underlying (e.g. considering a multi-underlying-basket the payoff
can either be performance of the worst or the best underlying or some linear combination of the underlyings)

##### Remarks

Format: enum

#### `Readonly` observationPeriod

```ts
observationPeriod: PriipsDataStaticObservationPeriod
```

Period during which we need to check if the barrier has been hit or not.
To be used for continuous observation.

#### `Readonly` optionType

```ts
optionType: PriipsDataStaticDoubleBarrierOptionType
```

Option type, e.g. Call or Put. Please check OptionType to get information on the payoff.

##### Remarks

Format: enum

#### `Readonly` relatedBasketIds

```ts
relatedBasketIds: readonly number[]
```

Relating underlying basket ID that the barrier observes (for now only one basket expected)

#### `Readonly` relatedComponentIds

```ts
relatedComponentIds: readonly number[]
```

Not used

#### `Readonly` strikeLevel

```ts
strikeLevel: PriipsDataStaticLevel
```

Describes the strike for the payoff

#### `Readonly` upperBarrierLevel

```ts
upperBarrierLevel: PriipsDataStaticLevel
```

Describes the upper barrier that can knock-in or knock-out the option

#### `Readonly` upperObservationType

```ts
upperObservationType: PriipsDataStaticDoubleBarrierUpperObservationType
```

Observation type for the upper barrier, e.g. UpIn, DownIn, UpOut, DownOut, see observationType for further information

##### Remarks

Format: enum

#### `Readonly` upperPayoffType

```ts
upperPayoffType: PriipsDataStaticDoubleBarrierUpperPayoffType
```

Payoff feature of the upper barrier with respect to the underlying (e.g. considering a multi-underlying-basket the payoff
can either be performance of the worst or the best underlying or some linear combination of the underlyings)

##### Remarks

Format: enum

#### `Readonly` usesPerformance

```ts
usesPerformance: boolean
```

Set to true to change payoff to consider underlying performance instead of absolute values.
See Option.usePerformance for further information

#### `Readonly` weight

```ts
weight: number
```

Multiplier for the payoff

##### Remarks

Format: double
