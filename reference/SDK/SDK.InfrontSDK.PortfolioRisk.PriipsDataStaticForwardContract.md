---
title: "PriipsDataStaticForwardContract"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardContract"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticForwardContract"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardContract.html"
defines: ["PriipsDataStaticForwardContract"]
member_count: 9
members: ["dates", "executionType", "exerciseDates", "exercisePeriod", "forwardType", "notional", "roll", "strikelevel", "weight"]
member_groups:
  "Properties": ["dates", "executionType", "exerciseDates", "exercisePeriod", "forwardType", "notional", "roll", "strikelevel", "weight"]
reference_count: 7
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardContractExecutionType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardContractForwardType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticRollMethod", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLevel"]
---

# PriipsDataStaticForwardContract

ForwardContract is a forward contract product component.
The payoff of a forward is like a combination of a long call option and a short put option at strike 0.
I. e. the payoff for each forward contract is underlyingSpot - strike. (strike is the strikelevel in the forwardcontract)

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.ForwardContract

```ts
interface PriipsDataStaticForwardContract {
    dates: PriipsDataStaticBasicProductDates;
    executionType: PriipsDataStaticForwardContractExecutionType;
    exerciseDates: PriipsDataStaticObservationDates;
    exercisePeriod: PriipsDataStaticObservationPeriod;
    forwardType: PriipsDataStaticForwardContractForwardType;
    notional: number;
    roll: PriipsDataStaticRollMethod;
    strikelevel: PriipsDataStaticLevel;
    weight: number;
}
```

### Properties

#### `Readonly` dates

```ts
dates: PriipsDataStaticBasicProductDates
```

Dates of the forward contract, the finalRedemptionDate is the payment date of the contract.
In case of Asian executionType, the asianing period is from issueDate to finalObservationDate.

#### `Readonly` executionType

```ts
executionType: PriipsDataStaticForwardContractExecutionType
```

Execution type, i.e. European, Asian, American etc.

##### Remarks

Format: enum

#### `Readonly` exerciseDates

```ts
exerciseDates: PriipsDataStaticObservationDates
```

Exactly one date expected here to represent the last observation date to determine the underlyingSpot

#### `Readonly` exercisePeriod

```ts
exercisePeriod: PriipsDataStaticObservationPeriod
```

ExercisePeriod is not intended to be used

#### `Readonly` forwardType

```ts
forwardType: PriipsDataStaticForwardContractForwardType
```

Represents the type of the forward but it not used in the calculation

##### Remarks

Format: enum

#### `Readonly` notional

```ts
notional: number
```

Notional of a contract is a multiplier for the payoff

##### Remarks

Format: double

#### `Readonly` roll

```ts
roll: PriipsDataStaticRollMethod
```

Roll method of the forward but it is not used in the calculation

#### `Readonly` strikelevel

```ts
strikelevel: PriipsDataStaticLevel
```

Strike of the forward

#### `Readonly` weight

```ts
weight: number
```

Multiplier for the payoff

##### Remarks

Format: double
