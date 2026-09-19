---
title: "PriipsDataStaticFloatingRateComponent"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFloatingRateComponent"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticFloatingRateComponent"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFloatingRateComponent.html"
defines: ["PriipsDataStaticFloatingRateComponent"]
member_count: 9
members: ["currency", "dayCountConvention", "fixing", "name", "paymentFrequency", "rateType", "tenor", "ttm", "weight"]
member_groups:
  "Properties": ["currency", "dayCountConvention", "fixing", "name", "paymentFrequency", "rateType", "tenor", "ttm", "weight"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCurrency", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFloatingRateComponentDayCountConvention", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFloatingRateComponentRateType"]
---

# PriipsDataStaticFloatingRateComponent

FloatingRateComponent represents an interest rate

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.FloatingRateComponent

```ts
interface PriipsDataStaticFloatingRateComponent {
    currency: PriipsDataStaticCurrency;
    dayCountConvention: PriipsDataStaticFloatingRateComponentDayCountConvention;
    fixing: number;
    name: string;
    paymentFrequency: number;
    rateType: PriipsDataStaticFloatingRateComponentRateType;
    tenor: number;
    ttm: number;
    weight: number;
}
```

### Properties

#### `Readonly` currency

```ts
currency: PriipsDataStaticCurrency
```

Currency of the interest rate

#### `Readonly` dayCountConvention

```ts
dayCountConvention: PriipsDataStaticFloatingRateComponentDayCountConvention
```

Not sure what this is supposed to be, but it is probably not used in the calculation

##### Remarks

Format: enum

#### `Readonly` fixing

```ts
fixing: number
```

Rate fixing level, probably not used in the calculation

##### Remarks

Format: double

#### `Readonly` name

```ts
name: string
```

Name of rate for display purposes

#### `Readonly` paymentFrequency

```ts
paymentFrequency: number
```

Maybe the price frequency of the interest rate, i.e. if it has daily or weekly prices etc.,
or it could be that the payment frequency is kind of tenor, e.g. for 3M Euribor the frequency is 3.
It is probably not used in the calculation

##### Remarks

Format: int32

#### `Readonly` rateType

```ts
rateType: PriipsDataStaticFloatingRateComponentRateType
```

Type of the interest rate (not used for calculation yet)

##### Remarks

Format: enum

#### `Readonly` tenor

```ts
tenor: number
```

Swap rate underlying tenor in month

##### Remarks

Format: int32

#### `Readonly` ttm

```ts
ttm: number
```

Rate time to maturity in years

##### Remarks

Format: double

#### `Readonly` weight

```ts
weight: number
```

Weight of component (usually 1.0)

##### Remarks

Format: double
