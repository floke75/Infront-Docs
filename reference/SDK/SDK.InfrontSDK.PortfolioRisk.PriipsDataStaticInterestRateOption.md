---
title: "PriipsDataStaticInterestRateOption"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInterestRateOption"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticInterestRateOption"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInterestRateOption.html"
defines: ["PriipsDataStaticInterestRateOption"]
member_count: 10
members: ["componentId", "dates", "executionType", "floatingRate", "lets", "levelType", "notional", "optionType", "usesPerformance", "weight"]
member_groups:
  "Properties": ["componentId", "dates", "executionType", "floatingRate", "lets", "levelType", "notional", "optionType", "usesPerformance", "weight"]
reference_count: 6
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInterestRateOptionExecutionType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFloatingRate", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLet", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInterestRateOptionLevelType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInterestRateOptionOptionType"]
---

# PriipsDataStaticInterestRateOption

InterestRateOption describes an option depending interest rates instead of underlyings.
It has the same behaviour as a usual Option where the strike is stored in the lets.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.InterestRateOption

```ts
interface PriipsDataStaticInterestRateOption {
    componentId: number;
    dates: PriipsDataStaticBasicProductDates;
    executionType: PriipsDataStaticInterestRateOptionExecutionType;
    floatingRate: PriipsDataStaticFloatingRate;
    lets: readonly PriipsDataStaticLet[];
    levelType: PriipsDataStaticInterestRateOptionLevelType;
    notional: number;
    optionType: PriipsDataStaticInterestRateOptionOptionType;
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

Not relevant, use dates in Lets instead for calculation

#### `Readonly` executionType

```ts
executionType: PriipsDataStaticInterestRateOptionExecutionType
```

Not used

##### Remarks

Format: enum

#### `Readonly` floatingRate

```ts
floatingRate: PriipsDataStaticFloatingRate
```

List of interest rates that is to be observed by the option

#### `Readonly` lets

```ts
lets: readonly PriipsDataStaticLet[]
```

Let is a collective term for both caplet and floorlet. Each caplet and floorlet has to be defined explicitly.
This is some kind of coupon payments depending on the interest rate.

#### `Readonly` levelType

```ts
levelType: PriipsDataStaticInterestRateOptionLevelType
```

Determines if we use the strike.level or strike.value of the lets

##### Remarks

Format: enum

#### `Readonly` notional

```ts
notional: number
```

Multiplier to the payoff

##### Remarks

Format: double

#### `Readonly` optionType

```ts
optionType: PriipsDataStaticInterestRateOptionOptionType
```

Option type, i.e. Call for caplets or Put for floorlets, see optionType for further payoff information.
This single field defines for all lets in an InterestRateOption if they are caplets or floorlets, so one
InterestRateOption can only have either caplets or floorlets.

##### Remarks

Format: enum

#### `Readonly` usesPerformance

```ts
usesPerformance: boolean
```

Not used

#### `Readonly` weight

```ts
weight: number
```

Not used, use the weights in the lets or interest rates instead

##### Remarks

Format: double
