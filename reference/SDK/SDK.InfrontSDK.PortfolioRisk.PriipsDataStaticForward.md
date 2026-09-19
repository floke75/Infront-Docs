---
title: "PriipsDataStaticForward"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForward"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticForward"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForward.html"
defines: ["PriipsDataStaticForward"]
member_count: 9
members: ["componentId", "contracts", "dates", "levelType", "notional", "payoffType", "relatedBasketIds", "usesPerformance", "weight"]
member_groups:
  "Properties": ["componentId", "contracts", "dates", "levelType", "notional", "payoffType", "relatedBasketIds", "usesPerformance", "weight"]
reference_count: 4
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardContract", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardLevelType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticForwardPayoffType"]
---

# PriipsDataStaticForward

A Forward depends on an underlying basket. It can have several contracts and each contract represents a payoff. Most of the
time such a forward is used to describe the exchange of a notional from one currency to another one. The payoff is then the sum
of the contract payoffs.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.Forward

```ts
interface PriipsDataStaticForward {
    componentId: number;
    contracts: readonly PriipsDataStaticForwardContract[];
    dates: PriipsDataStaticBasicProductDates;
    levelType: PriipsDataStaticForwardLevelType;
    notional: number;
    payoffType: PriipsDataStaticForwardPayoffType;
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

Component ID of product component

##### Remarks

Format: int32

#### `Readonly` contracts

```ts
contracts: readonly PriipsDataStaticForwardContract[]
```

List of forward contracts

#### `Readonly` dates

```ts
dates: PriipsDataStaticBasicProductDates
```

Dates of the forward, however only the contract dates are relevant for calculation

#### `Readonly` levelType

```ts
levelType: PriipsDataStaticForwardLevelType
```

Determines if we use the Level or Value field in strikelevel in the contracts

##### Remarks

Format: enum

#### `Readonly` notional

```ts
notional: number
```

Notional field is only informational, the contract notionals are relevant

##### Remarks

Format: double

#### `Readonly` payoffType

```ts
payoffType: PriipsDataStaticForwardPayoffType
```

Payoff type, determines what the underlyingSpot is in case of an multi-underlying-basket

##### Remarks

Format: enum

#### `Readonly` relatedBasketIds

```ts
relatedBasketIds: readonly number[]
```

Relevant underlying basket ID (for now only one basket expected)

#### `Readonly` usesPerformance

```ts
usesPerformance: boolean
```

When set to true the payoff considers the performance instead of the absolute value and will be changed to
underlyingSpot / initialReferencePrice - strike.Value / intitialReferencePrice

#### `Readonly` weight

```ts
weight: number
```

Multiplier for the forward payoff

##### Remarks

Format: double
