---
title: "PriipsDataStaticInterestRateBarrier"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInterestRateBarrier"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticInterestRateBarrier"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInterestRateBarrier.html"
defines: ["PriipsDataStaticInterestRateBarrier"]
member_count: 12
members: ["componentId", "dates", "executionType", "floatingRate", "lets", "levelType", "notional", "observationType", "optionType", "relatedComponentIds", "usesPerformance", "weight"]
member_groups:
  "Properties": ["componentId", "dates", "executionType", "floatingRate", "lets", "levelType", "notional", "observationType", "optionType", "relatedComponentIds", "usesPerformance", "weight"]
reference_count: 7
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInterestRateBarrierExecutionType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFloatingRate", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBarrierLet", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInterestRateBarrierLevelType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInterestRateBarrierObservationType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInterestRateBarrierOptionType"]
---

# PriipsDataStaticInterestRateBarrier

InterestRateBarrier describes a barrier option depending interest rates instead of underlyings.
It has the same behaviour as a usual barrier where the strikes and barriers is stored in the lets.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.InterestRateBarrier

```ts
interface PriipsDataStaticInterestRateBarrier {
    componentId: number;
    dates: PriipsDataStaticBasicProductDates;
    executionType: PriipsDataStaticInterestRateBarrierExecutionType;
    floatingRate: PriipsDataStaticFloatingRate;
    lets: readonly PriipsDataStaticBarrierLet[];
    levelType: PriipsDataStaticInterestRateBarrierLevelType;
    notional: number;
    observationType: PriipsDataStaticInterestRateBarrierObservationType;
    optionType: PriipsDataStaticInterestRateBarrierOptionType;
    relatedComponentIds: readonly number[];
    usesPerformance: boolean;
    weight: number;
}
```

### Properties

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

#### `Readonly` executionType

```ts
executionType: PriipsDataStaticInterestRateBarrierExecutionType
```

Not used, european type assumed

##### Remarks

Format: enum

#### `Readonly` floatingRate

```ts
floatingRate: PriipsDataStaticFloatingRate
```

List of interest rates that is to be observed by the barrier option

#### `Readonly` lets

```ts
lets: readonly PriipsDataStaticBarrierLet[]
```

Let is a collective term for both caplet and floorlet. Each caplet and floorlet has to be defined explicitly.
This is some kind of coupon payments depending on the interest rate. The lets store the barrier and strike values.

#### `Readonly` levelType

```ts
levelType: PriipsDataStaticInterestRateBarrierLevelType
```

Determines if we use the strike/barrier.level or strike/barrier.value of the BarrierLets

##### Remarks

Format: enum

#### `Readonly` notional

```ts
notional: number
```

Notional, kind of multiplier to the payoff

##### Remarks

Format: double

#### `Readonly` observationType

```ts
observationType: PriipsDataStaticInterestRateBarrierObservationType
```

Observation type, e.g. UpIn, DownIn, UpOut, DownOut, see observationType for further information

##### Remarks

Format: enum

#### `Readonly` optionType

```ts
optionType: PriipsDataStaticInterestRateBarrierOptionType
```

Option type, i.e. Call for Cap lets or Put for Floor lets, see optionType for further payoff information

##### Remarks

Format: enum

#### `Readonly` relatedComponentIds

```ts
relatedComponentIds: readonly number[]
```

Not used

#### `Readonly` usesPerformance

```ts
usesPerformance: boolean
```

Not used

#### `Readonly` weight

```ts
weight: number
```

Not used for calculation, please use weights in the lets for calculation

##### Remarks

Format: double
