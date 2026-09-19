---
title: "PriipsDataStaticBarrierLet"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBarrierLet"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticBarrierLet"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBarrierLet.html"
defines: ["PriipsDataStaticBarrierLet"]
member_count: 10
members: ["barrierlevel", "couponFixingDate", "couponPeriod", "exerciseDates", "exercisePeriod", "notional", "observationPeriod", "paymentValueDate", "strikelevel", "weight"]
member_groups:
  "Properties": ["barrierlevel", "couponFixingDate", "couponPeriod", "exerciseDates", "exercisePeriod", "notional", "observationPeriod", "paymentValueDate", "strikelevel", "weight"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLevel", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationDates"]
---

# PriipsDataStaticBarrierLet

A BarrierLet has the same behaviour as a usual (cap/floor)let but additionally it has a barrier and it belongs to an
InterestRateBarrier (instead of an InterestRateOption). If the barrier is active, then the payoff is the same as the payoff of
the Let. Otherwise, if the barrier is knocked-out, then the payoff is zero.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.BarrierLet

```ts
interface PriipsDataStaticBarrierLet {
    barrierlevel: PriipsDataStaticLevel;
    couponFixingDate: string;
    couponPeriod: PriipsDataStaticObservationPeriod;
    exerciseDates: PriipsDataStaticObservationDates;
    exercisePeriod: PriipsDataStaticObservationPeriod;
    notional: number;
    observationPeriod: PriipsDataStaticObservationPeriod;
    paymentValueDate: string;
    strikelevel: PriipsDataStaticLevel;
    weight: number;
}
```

### Properties

#### `Readonly` barrierlevel

```ts
barrierlevel: PriipsDataStaticLevel
```

Describes the barrier (if the interest rate is above / lower than the barrier (depending on observationType),
then the barrier his hit)

#### `Readonly` couponFixingDate

```ts
couponFixingDate: string
```

Last observation date for the barrier

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

#### `Readonly` notional

```ts
notional: number
```

Not supported, use notional of InterestRateBarrier instead

##### Remarks

Format: double

#### `Readonly` observationPeriod

```ts
observationPeriod: PriipsDataStaticObservationPeriod
```

Observation period for the barrier. If it is not set, then the observation period will start at
couponPeriod.Begin and end at couponFixingDate

#### `Readonly` paymentValueDate

```ts
paymentValueDate: string
```

Payment date

#### `Readonly` strikelevel

```ts
strikelevel: PriipsDataStaticLevel
```

Describes the strike for the payoff

#### `Readonly` weight

```ts
weight: number
```

Payoff multiplier

##### Remarks

Format: double
