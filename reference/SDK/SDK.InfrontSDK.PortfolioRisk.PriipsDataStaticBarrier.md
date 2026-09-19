---
title: "PriipsDataStaticBarrier"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBarrier"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticBarrier"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBarrier.html"
defines: ["PriipsDataStaticBarrier"]
member_count: 17
members: ["barrierHits", "barrierLevel", "componentId", "dates", "exerciseDates", "exercisePeriod", "levelType", "observationDates", "observationPeriod", "observationType", "optionType", "payoffType", "relatedBasketIds", "relatedComponentIds", "strikeLevel", "usesPerformance", "weight"]
member_groups:
  "Properties": ["barrierHits", "barrierLevel", "componentId", "dates", "exerciseDates", "exercisePeriod", "levelType", "observationDates", "observationPeriod", "observationType", "optionType", "payoffType", "relatedBasketIds", "relatedComponentIds", "strikeLevel", "usesPerformance", "weight"]
reference_count: 9
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBarrierHit", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLevel", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBarrierLevelType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBarrierObservationType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBarrierOptionType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBarrierPayoffType"]
---

# PriipsDataStaticBarrier

Barrier payoff is like an option payoff but additionally the payoff can be 0 if the barrier is knocked-out (see observationType
comment). If the barrier has a payoff != 0, then the payoff will be the same as the payoff of the option with the same
features. See Option for the payoff description.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.Barrier

```ts
interface PriipsDataStaticBarrier {
    barrierHits: readonly PriipsDataStaticBarrierHit[];
    barrierLevel: PriipsDataStaticLevel;
    componentId: number;
    dates: PriipsDataStaticBasicProductDates;
    exerciseDates: PriipsDataStaticObservationDates;
    exercisePeriod: PriipsDataStaticObservationPeriod;
    levelType: PriipsDataStaticBarrierLevelType;
    observationDates: PriipsDataStaticObservationDates;
    observationPeriod: PriipsDataStaticObservationPeriod;
    observationType: PriipsDataStaticBarrierObservationType;
    optionType: PriipsDataStaticBarrierOptionType;
    payoffType: PriipsDataStaticBarrierPayoffType;
    relatedBasketIds: readonly number[];
    relatedComponentIds: readonly number[];
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

Component ID

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

Are not used yet, probably intended to be used for some kind of asian options which is not supported yet

#### `Readonly` exercisePeriod

```ts
exercisePeriod: PriipsDataStaticObservationPeriod
```

Are not used yet, probably intended to be used for some kind of asian options which is not supported yet

#### `Readonly` levelType

```ts
levelType: PriipsDataStaticBarrierLevelType
```

Determines if we use the Level or Value field in barrierLevel and strikeLevel

##### Remarks

Format: enum

#### `Readonly` observationDates

```ts
observationDates: PriipsDataStaticObservationDates
```

List of dates at which we check if the barrier is hit (will override observationPeriod if both is set)

#### `Readonly` observationPeriod

```ts
observationPeriod: PriipsDataStaticObservationPeriod
```

Period during which we need to check if the barrier has been hit or not.
To be used for continuous observation.

#### `Readonly` observationType

```ts
observationType: PriipsDataStaticBarrierObservationType
```

Observation type, e.g. UpIn, DownIn, UpOut, DownOut, see observationType for further information

##### Remarks

Format: enum

#### `Readonly` optionType

```ts
optionType: PriipsDataStaticBarrierOptionType
```

Option type, e.g. Call or Put. Please check OptionType to get information on the payoff.

##### Remarks

Format: enum

#### `Readonly` payoffType

```ts
payoffType: PriipsDataStaticBarrierPayoffType
```

Payoff feature of the barrier with respect to the underlying (e.g. considering a multi-underlying-basket the payoff
can either be performance of the worst or the best underlying or some linear combination of the underlyings)

##### Remarks

Format: enum

#### `Readonly` relatedBasketIds

```ts
relatedBasketIds: readonly number[]
```

Relevant basket ID (for now only one basket expected)

#### `Readonly` relatedComponentIds

```ts
relatedComponentIds: readonly number[]
```

Not intended to be used

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
See Option.usePerformance for further information

#### `Readonly` weight

```ts
weight: number
```

Payoff multiplier

##### Remarks

Format: double
