---
title: "PriipsDataStaticOption"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticOption"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticOption"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticOption.html"
defines: ["PriipsDataStaticOption"]
member_count: 14
members: ["asianFloorLevel", "componentId", "dates", "executionType", "exerciseDates", "exercisePeriod", "levelType", "observationPeriod", "optionType", "payoffType", "relatedBasketIds", "strikelevel", "usesPerformance", "weight"]
member_groups:
  "Properties": ["asianFloorLevel", "componentId", "dates", "executionType", "exerciseDates", "exercisePeriod", "levelType", "observationPeriod", "optionType", "payoffType", "relatedBasketIds", "strikelevel", "usesPerformance", "weight"]
reference_count: 8
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticOptionExecutionType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticOptionLevelType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticOptionOptionType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticOptionPayoffType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLevel"]
---

# PriipsDataStaticOption

The option needs an underlying basket to observe.
Assume the initial fixing price of the underlying is u0 and that the simulated underlying price at the final observation date
of the option is u1. Assume, we have an option with option type Call.
The payoff is weight * MAX(u1 - strike.Value, 0) if levelType is UsesValue. (u0 will be relevant when levelType is UsesLevel or
for usesPerformance = true)

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.Option

```ts
interface PriipsDataStaticOption {
    asianFloorLevel: number;
    componentId: number;
    dates: PriipsDataStaticBasicProductDates;
    executionType: PriipsDataStaticOptionExecutionType;
    exerciseDates: PriipsDataStaticObservationDates;
    exercisePeriod: PriipsDataStaticObservationPeriod;
    levelType: PriipsDataStaticOptionLevelType;
    observationPeriod: PriipsDataStaticObservationPeriod;
    optionType: PriipsDataStaticOptionOptionType;
    payoffType: PriipsDataStaticOptionPayoffType;
    relatedBasketIds: readonly number[];
    strikelevel: PriipsDataStaticLevel;
    usesPerformance: boolean;
    weight: number;
}
```

### Properties

#### `Readonly` asianFloorLevel

```ts
asianFloorLevel: number
```

Local floor level with respect to initial basket value (this field requires levelType = usesLevel).
When we have an Asian option, each Asianing spot that is considered will be set to at least asianFloorLevel *
initialReferencePrice (or basket price when we have more than 1 underlying).

##### Remarks

Format: double

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

Dates of the option, the finalRedemptionDate describes the payment date,
finalObservationDate is in case of European option the observation date

#### `Readonly` executionType

```ts
executionType: PriipsDataStaticOptionExecutionType
```

Execution type, i.e. European, Asian, American etc.

##### Remarks

Format: enum

#### `Readonly` exerciseDates

```ts
exerciseDates: PriipsDataStaticObservationDates
```

Only for Asian options: list of dates when asianing is considered. When exerciseDates are used, exercisePeriod will be
ignored.

#### `Readonly` exercisePeriod

```ts
exercisePeriod: PriipsDataStaticObservationPeriod
```

Only for Asian options: period when asianing is considered

#### `Readonly` levelType

```ts
levelType: PriipsDataStaticOptionLevelType
```

Determines if we use the Level or Value field in strikelevel.
If levelType is UsesLevel, the payoff for a call option is weight * MAX(u1/u0 - strike.Level, 0).

##### Remarks

Format: enum

#### `Readonly` observationPeriod

```ts
observationPeriod: PriipsDataStaticObservationPeriod
```

Only for European and American options

#### `Readonly` optionType

```ts
optionType: PriipsDataStaticOptionOptionType
```

Option type, i.e. Call or Put

##### Remarks

Format: enum

#### `Readonly` payoffType

```ts
payoffType: PriipsDataStaticOptionPayoffType
```

Payoff feature of the option with respect to the underlying (e.g. considering a multi-underlying-basket the values u1 and
u0 can be performance of the worst or the best underlying or some linear combination of the underlyings or something else)

##### Remarks

Format: enum

#### `Readonly` relatedBasketIds

```ts
relatedBasketIds: readonly number[]
```

Relevant basket ID of the basket that contains the underlying we want to observe (for now only one basket expected)

#### `Readonly` strikelevel

```ts
strikelevel: PriipsDataStaticLevel
```

Strike of the option

#### `Readonly` usesPerformance

```ts
usesPerformance: boolean
```

Set to true to change payoff to consider underlying performance instead of absolute values
for Call to weight * MAX(u1/u0 - strike.Value/u0, 0) or weight * MAX(u1/u0 - strike.Level, 0) depending on the levelType.
For Put the payoff would be weight * MAX(strike.Value/u0 - u1/u0, 0) or weight * MAX(strike.Level - u1/u0, 0).

#### `Readonly` weight

```ts
weight: number
```

Multiplier for the payoff

##### Remarks

Format: double
