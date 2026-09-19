---
title: "PriipsDataStaticConditionalPayment"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticConditionalPayment"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticConditionalPayment"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticConditionalPayment.html"
defines: ["PriipsDataStaticConditionalPayment"]
member_count: 13
members: ["conditionalCouponPerAnno", "conditionalPayoffFactor", "conditionalPayoffPercent", "conditionalPayoffValue", "limit", "linkedBarrierComponentIDs", "nonGuaranteedPayment", "observationDates", "observationLevels", "observationPeriod", "paymentType", "relatedComponentIds", "target"]
member_groups:
  "Properties": ["conditionalCouponPerAnno", "conditionalPayoffFactor", "conditionalPayoffPercent", "conditionalPayoffValue", "limit", "linkedBarrierComponentIDs", "nonGuaranteedPayment", "observationDates", "observationLevels", "observationPeriod", "paymentType", "relatedComponentIds", "target"]
reference_count: 6
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticConditionalPaymentLimit", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationLevel", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticConditionalPaymentPaymentType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticTargetLevel"]
---

# PriipsDataStaticConditionalPayment

ConditionalPayment is a payment that depends on a condition / on a barrier or underlying/interest rate performance, so is a bit
more complex than a usual fix or floating coupon. The payoff of the conditional payment depends on the paymentType (see
paymentType for further information).

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.ConditionalPayment

```ts
interface PriipsDataStaticConditionalPayment {
    conditionalCouponPerAnno: number;
    conditionalPayoffFactor: number;
    conditionalPayoffPercent: number;
    conditionalPayoffValue: number;
    limit: PriipsDataStaticConditionalPaymentLimit;
    linkedBarrierComponentIDs: readonly number[];
    nonGuaranteedPayment: boolean;
    observationDates: PriipsDataStaticObservationDates;
    observationLevels: readonly PriipsDataStaticObservationLevel[];
    observationPeriod: PriipsDataStaticObservationPeriod;
    paymentType: PriipsDataStaticConditionalPaymentPaymentType;
    relatedComponentIds: readonly number[];
    target: PriipsDataStaticTargetLevel;
}
```

### Properties

#### `Readonly` conditionalCouponPerAnno

```ts
conditionalCouponPerAnno: number
```

Specification of conditionalPayoffPercent interpreted as per anno value (not implemented yet)

##### Remarks

Format: double

#### `Readonly` conditionalPayoffFactor

```ts
conditionalPayoffFactor: number
```

For paymentType PartialFixReplacement: number of replacements
For paymentType Altiplano: payoff decrement
For paymentType PerformanceCoupon: leverage / multiplier for the payoff
For limit Upside: this field describes the upside factor, i.e. leverage on the upside (for conditional, memory coupon and
Autocall)

##### Remarks

Format: double

#### `Readonly` conditionalPayoffPercent

```ts
conditionalPayoffPercent: number
```

For paymentType PartialFixReplacement: the replacement
Otherwise: multiplier for the bond notional to describe the payment amount
(i.e. for autocalls usually 1 since the whole bond notional is paid back, for conditionalCoupons it describes the coupon
rate) (it is intended to be used as relative value of bond notional, not a per anno rate)

##### Remarks

Format: double

#### `Readonly` conditionalPayoffValue

```ts
conditionalPayoffValue: number
```

The absolute value of the payment amount, will override conditionalPayoffPercent (not used for Altiplano)

##### Remarks

Format: double

#### `Readonly` limit

```ts
limit: PriipsDataStaticConditionalPaymentLimit
```

With limit we can have additional features such as an upside feature or an withhold feature

##### Remarks

Format: enum

#### `Readonly` linkedBarrierComponentIDs

```ts
linkedBarrierComponentIDs: readonly number[]
```

Links the conditional payment to barriers. For now only implemented for ConditionalCoupon and exactly one barrier
is allowed in the all product components. If the barrier is hit, then the conditional coupon does not pay.

#### `Readonly` nonGuaranteedPayment

```ts
nonGuaranteedPayment: boolean
```

Intended for TargetAutocalls: set false to make the final target autocall payment guaranteed,
i.e. if the target is reached in the very last target autocall payment, then this final coupon is still be paid
Regardless of the target.

#### `Readonly` observationDates

```ts
observationDates: PriipsDataStaticObservationDates
```

The list of dates on which we observe the underlying / interest rate performance (will override observationPeriod)

#### `Readonly` observationLevels

```ts
observationLevels: readonly PriipsDataStaticObservationLevel[]
```

Contains information on the barrier that needs to be observed for some paymentTypes

#### `Readonly` observationPeriod

```ts
observationPeriod: PriipsDataStaticObservationPeriod
```

Period in which we observe the underlying on which the coupon depends

#### `Readonly` paymentType

```ts
paymentType: PriipsDataStaticConditionalPaymentPaymentType
```

Type of conditional payment, e.g. memory coupon, autocall, etc.

##### Remarks

Format: enum

#### `Readonly` relatedComponentIds

```ts
relatedComponentIds: readonly number[]
```

Supposed to be used for Autocalls and TargetAutocalls to describe which component is terminated.
However, currently (2021-06-10) an Autocall terminates the whole product.

#### `Readonly` target

```ts
target: PriipsDataStaticTargetLevel
```

Intended to be used for target autocalls, describes the amount at which the target is reached
