---
title: "PriipsDataStaticLet"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLet"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticLet"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLet.html"
defines: ["PriipsDataStaticLet"]
member_count: 9
members: ["couponFixingDate", "couponPeriod", "exerciseDates", "exercisePeriod", "fixedRate", "notional", "paymentValueDate", "strikelevel", "weight"]
member_groups:
  "Properties": ["couponFixingDate", "couponPeriod", "exerciseDates", "exercisePeriod", "fixedRate", "notional", "paymentValueDate", "strikelevel", "weight"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLevel"]
---

# PriipsDataStaticLet

Let is a collective term for both caplet and floorlet. Each caplet and floorlet has to be defined explicitly.
This is some kind of coupon payments depending on the interest rate in an InterestRateOption.
Depending on the optionType of the InterestRateOption and on the cap, floor and margin of the floatingRates in the
InterestRateOption, the payoff of a let is
MAX(floor, MIN(PayoffOfOptionType(strike, floatingRateSpot) + margin, cap)) * weight * duration * nominal

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.Let

```ts
interface PriipsDataStaticLet {
    couponFixingDate: string;
    couponPeriod: PriipsDataStaticObservationPeriod;
    exerciseDates: PriipsDataStaticObservationDates;
    exercisePeriod: PriipsDataStaticObservationPeriod;
    fixedRate: number;
    notional: number;
    paymentValueDate: string;
    strikelevel: PriipsDataStaticLevel;
    weight: number;
}
```

### Properties

#### `Readonly` couponFixingDate

```ts
couponFixingDate: string
```

Valuation date

#### `Readonly` couponPeriod

```ts
couponPeriod: PriipsDataStaticObservationPeriod
```

The interest rates gives a per anno rate, so we need a coupon period to determine the period duration
and to get the payoff by multiplying the rate with the duration per year.

#### `Readonly` exerciseDates

```ts
exerciseDates: PriipsDataStaticObservationDates
```

Not supported

#### `Readonly` exercisePeriod

```ts
exercisePeriod: PriipsDataStaticObservationPeriod
```

Not supported

#### `Readonly` fixedRate

```ts
fixedRate: number
```

interest rate that has been already fixed in the past

##### Remarks

Format: double

#### `Readonly` notional

```ts
notional: number
```

Not supported, use notional of InterestRateOption instead

##### Remarks

Format: double

#### `Readonly` paymentValueDate

```ts
paymentValueDate: string
```

Payment date

#### `Readonly` strikelevel

```ts
strikelevel: PriipsDataStaticLevel
```

Strike of the caplet or floorlet

#### `Readonly` weight

```ts
weight: number
```

Multiplier for payoff

##### Remarks

Format: double
