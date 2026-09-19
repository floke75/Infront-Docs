---
title: "PriipsDataStaticFloatingRate"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFloatingRate"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticFloatingRate"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFloatingRate.html"
defines: ["PriipsDataStaticFloatingRate"]
member_count: 5
members: ["cap", "floor", "interpolationRates", "margin", "rates"]
member_groups:
  "Properties": ["cap", "floor", "interpolationRates", "margin", "rates"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInterpolationRate", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFloatingRateComponent"]
---

# PriipsDataStaticFloatingRate

FloatingRate is a kind of basket of interest rates

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.FloatingRate

```ts
interface PriipsDataStaticFloatingRate {
    cap: number;
    floor: number;
    interpolationRates: readonly PriipsDataStaticInterpolationRate[];
    margin: number;
    rates: readonly PriipsDataStaticFloatingRateComponent[];
}
```

### Properties

#### `Readonly` cap

```ts
cap: number
```

Rate cap, i.e. linear combination of the rates is considered to be at most the value of the cap

##### Remarks

Format: double

#### `Readonly` floor

```ts
floor: number
```

Rate floor, i.e. linear combination of the rates is considered to be at least the value of the floor

##### Remarks

Format: double

#### `Readonly` interpolationRates

```ts
interpolationRates: readonly PriipsDataStaticInterpolationRate[]
```

Not implemented

#### `Readonly` margin

```ts
margin: number
```

Additional margin rate (can be negative, can be overwritten by productPayment.Spread),
i.e. the linear combination of the rates is considered to be rate + margin

##### Remarks

Format: double

#### `Readonly` rates

```ts
rates: readonly PriipsDataStaticFloatingRateComponent[]
```

List of interest rates
