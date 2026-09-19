---
title: "PriipsDataRiskfiguresGreeks"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataRiskfiguresGreeks"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataRiskfiguresGreeks"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataRiskfiguresGreeks.html"
defines: ["PriipsDataRiskfiguresGreeks"]
member_count: 9
members: ["delta", "gamma", "interestRate", "rho", "theta", "underlyingIdentifiers", "underlyingValues", "vega", "volatilities"]
member_groups:
  "Properties": ["delta", "gamma", "interestRate", "rho", "theta", "underlyingIdentifiers", "underlyingValues", "vega", "volatilities"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticIdentifier"]
---

# PriipsDataRiskfiguresGreeks

Risk figures for options and structured products

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.riskfigures.Greeks

```ts
interface PriipsDataRiskfiguresGreeks {
    delta: readonly number[];
    gamma: readonly number[];
    interestRate: number;
    rho: number;
    theta: number;
    underlyingIdentifiers: readonly PriipsDataStaticIdentifier[];
    underlyingValues: readonly number[];
    vega: readonly number[];
    volatilities: readonly number[];
}
```

### Properties

#### `Readonly` delta

```ts
delta: readonly number[]
```

Delta, the sensitivity to change of the underlying, repeated per underlying
(i. e. indexes correspond to the indexes in the position's Basket[Usage==Valuation])

#### `Readonly` gamma

```ts
gamma: readonly number[]
```

Gamma, the sensitivity to quadratic changes of the underlying, repeated per underlying

#### `Readonly` interestRate

```ts
interestRate: number
```

The value of the interest rate

##### Remarks

Format: double

#### `Readonly` rho

```ts
rho: number
```

Rho, the sensitivity to change of the interest rate

##### Remarks

Format: double

#### `Readonly` theta

```ts
theta: number
```

Theta, the sensitivity to change of time

##### Remarks

Format: double

#### `Readonly` underlyingIdentifiers

```ts
underlyingIdentifiers: readonly PriipsDataStaticIdentifier[]
```

The list of underlyings of the position

#### `Readonly` underlyingValues

```ts
underlyingValues: readonly number[]
```

The current value of the underlyings

#### `Readonly` vega

```ts
vega: readonly number[]
```

Vega, the sensitivity to change of the volatility, repeated per underlying

#### `Readonly` volatilities

```ts
volatilities: readonly number[]
```

The volatility values
