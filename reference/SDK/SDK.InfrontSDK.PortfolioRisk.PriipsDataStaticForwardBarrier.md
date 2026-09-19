---
title: "PriipsDataStaticForwardBarrier"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardBarrier"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticForwardBarrier"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardBarrier.html"
defines: ["PriipsDataStaticForwardBarrier"]
member_count: 19
members: ["barrierHits", "barrierLevel", "componentId", "dates", "exerciseDates", "exercisePeriod", "forwardType", "levelType", "notional", "observationPeriod", "observationType", "optionType", "payoffType", "relatedBasketIds", "relatedComponentIds", "roll", "strikeLevel", "usesPerformance", "weight"]
member_groups:
  "Properties": ["barrierHits", "barrierLevel", "componentId", "dates", "exerciseDates", "exercisePeriod", "forwardType", "levelType", "notional", "observationPeriod", "observationType", "optionType", "payoffType", "relatedBasketIds", "relatedComponentIds", "roll", "strikeLevel", "usesPerformance", "weight"]
reference_count: 11
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBarrierHit", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLevel", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardBarrierForwardType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardBarrierLevelType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardBarrierObservationType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardBarrierOptionType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardBarrierPayoffType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticRollMethod"]
---

# PriipsDataStaticForwardBarrier

The ForwardBarrier payoff is either the payoff defined by the optionType or the payoff can be 0 if the barrier is knocked-out
(see observationType comment). If the barrier has a payoff != 0, then the payoff will be the same as the payoff described by
the optionType.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.ForwardBarrier

```ts
interface PriipsDataStaticForwardBarrier {
    barrierHits: readonly PriipsDataStaticBarrierHit[];
    barrierLevel: PriipsDataStaticLevel;
    componentId: number;
    dates: PriipsDataStaticBasicProductDates;
    exerciseDates: PriipsDataStaticObservationDates;
    exercisePeriod: PriipsDataStaticObservationPeriod;
    forwardType: PriipsDataStaticForwardBarrierForwardType;
    levelType: PriipsDataStaticForwardBarrierLevelType;
    notional: number;
    observationPeriod: PriipsDataStaticObservationPeriod;
    observationType: PriipsDataStaticForwardBarrierObservationType;
    optionType: PriipsDataStaticForwardBarrierOptionType;
    payoffType: PriipsDataStaticForwardBarrierPayoffType;
    relatedBasketIds: readonly number[];
    relatedComponentIds: readonly number[];
    roll: PriipsDataStaticRollMethod;
    strikeLevel: PriipsDataStaticLevel;
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

#### `Readonly` barrierLevel

```ts
barrierLevel: PriipsDataStaticLevel
```

Describes the barrier (if the underlying price is above / lower than the barrier (depending on observationType),
then the barrier his hit)

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
(note that the other fields might be used by valuator as well)

#### `Readonly` exerciseDates

```ts
exerciseDates: PriipsDataStaticObservationDates
```

Date lists for accrualCall or accrualPut

#### `Readonly` exercisePeriod

```ts
exercisePeriod: PriipsDataStaticObservationPeriod
```

Are not used yet, probably intended to be used for some kind of asian options

#### `Readonly` forwardType

```ts
forwardType: PriipsDataStaticForwardBarrierForwardType
```

Represents the type of the forward but it not used in the calculation

##### Remarks

Format: enum

#### `Readonly` levelType

```ts
levelType: PriipsDataStaticForwardBarrierLevelType
```

Determines if we use the Level or Value field in barrierLevel and strikeLevel

##### Remarks

Format: enum

#### `Readonly` notional

```ts
notional: number
```

Multiplier for the payoff

##### Remarks

Format: double

#### `Readonly` observationPeriod

```ts
observationPeriod: PriipsDataStaticObservationPeriod
```

Period during which we need to check if the barrier has been hit or not.
To be used for continuous observation.

#### `Readonly` observationType

```ts
observationType: PriipsDataStaticForwardBarrierObservationType
```

Observation type, e.g. UpIn, DownIn, UpOut, DownOut, see observationType for further information

##### Remarks

Format: enum

#### `Readonly` optionType

```ts
optionType: PriipsDataStaticForwardBarrierOptionType
```

Can be AccrualCall, AccrualPut, Call or Put, and everything else is the handled as Forward

##### Remarks

Format: enum

#### `Readonly` payoffType

```ts
payoffType: PriipsDataStaticForwardBarrierPayoffType
```

Payoff feature of the barrier with respect to the underlying (e.g. considering a multi-underlying-basket the payoff
can either be performance of the worst or the best underlying or some linear combination of the underlyings)

##### Remarks

Format: enum

#### `Readonly` relatedBasketIds

```ts
relatedBasketIds: readonly number[]
```

Relevant underlying basket ID (for now only one basket expected)

#### `Readonly` relatedComponentIds

```ts
relatedComponentIds: readonly number[]
```

Not intended to be used

#### `Readonly` roll

```ts
roll: PriipsDataStaticRollMethod
```

Roll method of the forward but it is not used in the calculation

#### `Readonly` strikeLevel

```ts
strikeLevel: PriipsDataStaticLevel
```

Describes the strike for the payoff

#### `Readonly` usesPerformance

```ts
usesPerformance: boolean
```

Set to true to change payoff to consider underlying performance instead of absolute values.
See ForwardOption.usePerformance for further information

#### `Readonly` weight

```ts
weight: number
```

Multiplier of the payoff

##### Remarks

Format: double
