---
title: "PriipsDataStaticProductPayment"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductPayment"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticProductPayment"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductPayment.html"
defines: ["PriipsDataStaticProductPayment"]
member_count: 16
members: ["cap", "clientPutRight", "conditionalPayments", "couponFixingDate", "couponPeriod", "firstPeriodStartDate", "fixCouponPerAnno", "fixCouponValue", "floor", "hasLockIn", "issuerCallRight", "paymentValueDate", "realizedPayment", "relatedComponentId", "spread", "weightAdjustmentFactor"]
member_groups:
  "Properties": ["cap", "clientPutRight", "conditionalPayments", "couponFixingDate", "couponPeriod", "firstPeriodStartDate", "fixCouponPerAnno", "fixCouponValue", "floor", "hasLockIn", "issuerCallRight", "paymentValueDate", "realizedPayment", "relatedComponentId", "spread", "weightAdjustmentFactor"]
reference_count: 3
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticConditionalPayment", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLevel"]
---

# PriipsDataStaticProductPayment

ProductPayment describes a coupon payment and belongs to a bond

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.ProductPayment

```ts
interface PriipsDataStaticProductPayment {
    cap: number;
    clientPutRight: boolean;
    conditionalPayments: readonly PriipsDataStaticConditionalPayment[];
    couponFixingDate: string;
    couponPeriod: PriipsDataStaticObservationPeriod;
    firstPeriodStartDate: string;
    fixCouponPerAnno: number;
    fixCouponValue: number;
    floor: number;
    hasLockIn: boolean;
    issuerCallRight: boolean;
    paymentValueDate: string;
    realizedPayment: PriipsDataStaticLevel;
    relatedComponentId: number;
    spread: number;
    weightAdjustmentFactor: number;
}
```

### Properties

#### `Readonly` cap

```ts
cap: number
```

Local cap for floating payments

##### Remarks

Format: double

#### `Readonly` clientPutRight

```ts
clientPutRight: boolean
```

Flag for putable (client) feature (not implemented)

#### `Readonly` conditionalPayments

```ts
conditionalPayments: readonly PriipsDataStaticConditionalPayment[]
```

List of additional conditional payments

#### `Readonly` couponFixingDate

```ts
couponFixingDate: string
```

Supposed to be the observation date for float coupons, but probably not used

#### `Readonly` couponPeriod

```ts
couponPeriod: PriipsDataStaticObservationPeriod
```

The interest rates gives a per anno rate, so we need a coupon period to determine the period duration
and to get the payoff by multiplying the rate with the duration per year.

#### `Readonly` firstPeriodStartDate

```ts
firstPeriodStartDate: string
```

First date of first coupon period for calculation of DCC_Act_Act_ICMA (in denominator)

#### `Readonly` fixCouponPerAnno

```ts
fixCouponPerAnno: number
```

Coupon per anno in percent - amount related to period length and day count convention,
only either fixCouponPerAnno or fixCoupon may be set

##### Remarks

Format: double

#### `Readonly` fixCouponValue

```ts
fixCouponValue: number
```

Fix coupon amount in currency - unrelated to period length,
only either fixCouponPerAnno or fixCoupon may be set

##### Remarks

Format: double

#### `Readonly` floor

```ts
floor: number
```

Local floor for floating payment

##### Remarks

Format: double

#### `Readonly` hasLockIn

```ts
hasLockIn: boolean
```

Locks past payments as floor for future payments (not implemented, use conditionalPayment with paymentType Lockin instead)

#### `Readonly` issuerCallRight

```ts
issuerCallRight: boolean
```

Flag for callable (issuer) feature (not implemented)

#### `Readonly` paymentValueDate

```ts
paymentValueDate: string
```

Payment date of the payment

#### `Readonly` realizedPayment

```ts
realizedPayment: PriipsDataStaticLevel
```

If this payment has been paid in the past then realizedPayment contains the paid amount (relevant for target autocalls)

#### `Readonly` relatedComponentId

```ts
relatedComponentId: number
```

Bond component ID where this payment belongs to

##### Remarks

Format: int32

#### `Readonly` spread

```ts
spread: number
```

Period specific spread/margin for floating payments

##### Remarks

Format: double

#### `Readonly` weightAdjustmentFactor

```ts
weightAdjustmentFactor: number
```

Adjusts the bond's weight / payment amount for this single payment (default 0 means no adjustment)

##### Remarks

Format: double
