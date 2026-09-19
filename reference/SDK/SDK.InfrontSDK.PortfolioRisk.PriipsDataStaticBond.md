---
title: "PriipsDataStaticBond"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBond"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticBond"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBond.html"
defines: ["PriipsDataStaticBond"]
member_count: 14
members: ["componentId", "couponRate", "couponType", "currency", "dates", "dayCountConvention", "floatingRate", "isCreditRiskProtected", "leverage", "nominal", "paymentFrequency", "rawSchedule", "weight", "withholdsNominal"]
member_groups:
  "Properties": ["componentId", "couponRate", "couponType", "currency", "dates", "dayCountConvention", "floatingRate", "isCreditRiskProtected", "leverage", "nominal", "paymentFrequency", "rawSchedule", "weight", "withholdsNominal"]
reference_count: 7
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBondCouponType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCurrency", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBondDayCountConvention", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFloatingRate", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBondPaymentFrequency", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticSchedule"]
---

# PriipsDataStaticBond

A Bond pays its fixed nominal at its final redemption date. It allows the product to have coupons.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.Bond

```ts
interface PriipsDataStaticBond {
    componentId: number;
    couponRate: number;
    couponType: PriipsDataStaticBondCouponType;
    currency: PriipsDataStaticCurrency;
    dates: PriipsDataStaticBasicProductDates;
    dayCountConvention: PriipsDataStaticBondDayCountConvention;
    floatingRate: PriipsDataStaticFloatingRate;
    isCreditRiskProtected: boolean;
    leverage: number;
    nominal: number;
    paymentFrequency: PriipsDataStaticBondPaymentFrequency;
    rawSchedule: PriipsDataStaticSchedule;
    weight: number;
    withholdsNominal: boolean;
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

#### `Readonly` couponRate

```ts
couponRate: number
```

Contains the coupon rate for fix coupons but is not used in the calculation but only to be sent to the template manager.
Please use the fixCouponPerAnno or fixCouponValue field of productPayment if you want to set the coupon rate for
Calculation.

##### Remarks

Format: double

#### `Readonly` couponType

```ts
couponType: PriipsDataStaticBondCouponType
```

Determines the type of the product payments of the bond

##### Remarks

Format: enum

#### `Readonly` currency

```ts
currency: PriipsDataStaticCurrency
```

Currency of the bond nominal (field number 3)

#### `Readonly` dates

```ts
dates: PriipsDataStaticBasicProductDates
```

The finalRedemptionDate is the payment date of the bond notional. In case of early redemptions (e.g. when we have
autocalls), it can happen that the product is terminated before finalRedemptionDate. However, the finalObservationDate
determines if the bond notional is paid or not in this case, i.e. as long as the finalObservationDate of the bond is before
the termination by the autocall then the bond payoff will be paid at the finalRedemptionDate

#### `Readonly` dayCountConvention

```ts
dayCountConvention: PriipsDataStaticBondDayCountConvention
```

Determines the day count convention for the calculation of floating coupons or coupons where fixCouponPerAnno is used (and
for clean price calculation)

##### Remarks

Format: enum

#### `Readonly` floatingRate

```ts
floatingRate: PriipsDataStaticFloatingRate
```

In case the couponType is Floating or ZeroFlooredFloating, this field contains information on the interest rate

#### `Readonly` isCreditRiskProtected

```ts
isCreditRiskProtected: boolean
```

Flag for bonds with coupons that are not affected by credit link
(only for credit linked products, probably also only for products calculated by swedish model)

#### `Readonly` leverage

```ts
leverage: number
```

Deprecated: Leverage is not correctly used anywhere and redundant (weight or FloatingRateComponent.Weight instead)

##### Remarks

Format: double

#### `Readonly` nominal

```ts
nominal: number
```

Notional / fix payoff of the bond

##### Remarks

Format: double

#### `Readonly` paymentFrequency

```ts
paymentFrequency: PriipsDataStaticBondPaymentFrequency
```

When using dayCountConvention DCC_ACT_ACT_ICMA we will need to set the payment frequency for calculation.
This field stores the payment frequency of the coupons.

##### Remarks

Format: enum

#### `Readonly` rawSchedule

```ts
rawSchedule: PriipsDataStaticSchedule
```

Contains information on payment dates that is not used for calculation but to be used by the mapper and template manager
(intended for DZBank)

#### `Readonly` weight

```ts
weight: number
```

Multiplier for the payoff, considering the notional as well as the product payments

##### Remarks

Format: double

#### `Readonly` withholdsNominal

```ts
withholdsNominal: boolean
```

Flag for suppressing nominal payment at maturity (i.e. when you want to have only coupon / product payments without paying
the notional at the end)
