---
title: "PriipsDataStaticInsurancePayment"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInsurancePayment"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticInsurancePayment"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInsurancePayment.html"
defines: ["PriipsDataStaticInsurancePayment"]
member_count: 4
members: ["amount", "frequency", "startingFromYear", "upToYear"]
member_groups:
  "Properties": ["amount", "frequency", "startingFromYear", "upToYear"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticInsurancePaymentFrequency"]
---

# PriipsDataStaticInsurancePayment

A payment occuring for life insurances.
It can yield to a positive payoff,
as in the case of a refund,
or to a negative payoff, for instance an
investment premium paid with a given frequency
or a management cost based on the performance
of the underlying fund.
We track these payments for each path
separately

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.InsurancePayment

```ts
interface PriipsDataStaticInsurancePayment {
    amount: number;
    frequency: PriipsDataStaticInsurancePaymentFrequency;
    startingFromYear: number;
    upToYear: number;
}
```

### Properties

#### `Readonly` amount

```ts
amount: number
```

The amount in percent of the refund

##### Remarks

Format: double

#### `Readonly` frequency

```ts
frequency: PriipsDataStaticInsurancePaymentFrequency
```

The frequency of the refund

##### Remarks

Format: enum

#### `Readonly` startingFromYear

```ts
startingFromYear: number
```

Payment occurring only
starting from a given year

##### Remarks

Format: double

#### `Readonly` upToYear

```ts
upToYear: number
```

Payment occurring only
until up to a given year

##### Remarks

Format: double
