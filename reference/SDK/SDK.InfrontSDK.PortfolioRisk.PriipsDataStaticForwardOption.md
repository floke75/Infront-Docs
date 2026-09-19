---
title: "PriipsDataStaticForwardOption"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardOption"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticForwardOption"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardOption.html"
defines: ["PriipsDataStaticForwardOption"]
member_count: 15
members: ["componentId", "dates", "executionType", "exerciseDates", "exercisePeriod", "forwardType", "levelType", "notional", "optionType", "payoffType", "relatedBasketIds", "roll", "strikelevel", "usesPerformance", "weight"]
member_groups:
  "Properties": ["componentId", "dates", "executionType", "exerciseDates", "exercisePeriod", "forwardType", "levelType", "notional", "optionType", "payoffType", "relatedBasketIds", "roll", "strikelevel", "usesPerformance", "weight"]
reference_count: 10
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardOptionExecutionType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardOptionForwardType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardOptionLevelType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardOptionOptionType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardOptionPayoffType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticRollMethod", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLevel"]
---

# PriipsDataStaticForwardOption

The ForwardOption needs an underlying basket to observe.
Assume the initial fixing price of the underlying is u0 and that the simulated underlying price at the final observation date
of the option is u1.
Assume we have an option with option type Call.
The payoff is weight * MAX(u1 - strike.Value, 0) if levelType is UsesValue. It is actually the same as a usual Option.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.ForwardOption

```ts
interface PriipsDataStaticForwardOption {
    componentId: number;
    dates: PriipsDataStaticBasicProductDates;
    executionType: PriipsDataStaticForwardOptionExecutionType;
    exerciseDates: PriipsDataStaticObservationDates;
    exercisePeriod: PriipsDataStaticObservationPeriod;
    forwardType: PriipsDataStaticForwardOptionForwardType;
    levelType: PriipsDataStaticForwardOptionLevelType;
    notional: number;
    optionType: PriipsDataStaticForwardOptionOptionType;
    payoffType: PriipsDataStaticForwardOptionPayoffType;
    relatedBasketIds: readonly number[];
    roll: PriipsDataStaticRollMethod;
    strikelevel: PriipsDataStaticLevel;
    usesPerformance: boolean;
    weight: number;
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

Dates of the option, the finalRedemptionDate describes the payment date,
finalObservationDate is in case of European option the observation date

#### `Readonly` executionType

```ts
executionType: PriipsDataStaticForwardOptionExecutionType
```

Execution type, i.e. European, Asian, American etc.

##### Remarks

Format: enum

#### `Readonly` exerciseDates

```ts
exerciseDates: PriipsDataStaticObservationDates
```

Not supported yet

#### `Readonly` exercisePeriod

```ts
exercisePeriod: PriipsDataStaticObservationPeriod
```

Not supported yet

#### `Readonly` forwardType

```ts
forwardType: PriipsDataStaticForwardOptionForwardType
```

Not used

##### Remarks

Format: enum

#### `Readonly` levelType

```ts
levelType: PriipsDataStaticForwardOptionLevelType
```

If levelType is UsesLevel, the payoff for e.g. a call option is weight * MAX(u1/u0 - strike.Level, 0).

##### Remarks

Format: enum

#### `Readonly` notional

```ts
notional: number
```

Not used

##### Remarks

Format: double

#### `Readonly` optionType

```ts
optionType: PriipsDataStaticForwardOptionOptionType
```

Option type, e.g. Call or Put

##### Remarks

Format: enum

#### `Readonly` payoffType

```ts
payoffType: PriipsDataStaticForwardOptionPayoffType
```

Not supported yet

##### Remarks

Format: enum

#### `Readonly` relatedBasketIds

```ts
relatedBasketIds: readonly number[]
```

Relevant basket ID of the basket that contains the underlying we want to observe (for now only one basket expected)

#### `Readonly` roll

```ts
roll: PriipsDataStaticRollMethod
```

Not used

#### `Readonly` strikelevel

```ts
strikelevel: PriipsDataStaticLevel
```

Strike of the option

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

Multiplier for the payoff

##### Remarks

Format: double
