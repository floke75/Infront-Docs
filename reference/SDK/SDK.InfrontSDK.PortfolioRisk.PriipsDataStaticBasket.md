---
title: "PriipsDataStaticBasket"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasket"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticBasket"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasket.html"
defines: ["PriipsDataStaticBasket"]
member_count: 11
members: ["basketCurrency", "basketId", "initialFX", "linkedNotional", "physicalDeliveryLevel", "physicalDeliveryObservationPeriod", "physicalDeliveryObservationType", "rates", "underlyings", "usage", "weight"]
member_groups:
  "Properties": ["basketCurrency", "basketId", "initialFX", "linkedNotional", "physicalDeliveryLevel", "physicalDeliveryObservationPeriod", "physicalDeliveryObservationType", "rates", "underlyings", "usage", "weight"]
reference_count: 7
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCurrency", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticLevel", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasketPhysicalDeliveryObservationType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticRateUnderlying", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticUnderlying", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasketUsage"]
---

# PriipsDataStaticBasket

A Basket contains a set of underlyings

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.Basket

```ts
interface PriipsDataStaticBasket {
    basketCurrency: PriipsDataStaticCurrency;
    basketId: number;
    initialFX: number;
    linkedNotional: number;
    physicalDeliveryLevel: PriipsDataStaticLevel;
    physicalDeliveryObservationPeriod: PriipsDataStaticObservationPeriod;
    physicalDeliveryObservationType: PriipsDataStaticBasketPhysicalDeliveryObservationType;
    rates: readonly PriipsDataStaticRateUnderlying[];
    underlyings: readonly PriipsDataStaticUnderlying[];
    usage: PriipsDataStaticBasketUsage;
    weight: number;
}
```

### Properties

#### `Readonly` basketCurrency

```ts
basketCurrency: PriipsDataStaticCurrency
```

Currency of a basket (optional) when the customer likes to calculate an FX risk into the product with
multi-underlying-basket

#### `Readonly` basketId

```ts
basketId: number
```

ID of the basket

##### Remarks

Format: int32

#### `Readonly` initialFX

```ts
initialFX: number
```

Basket fx rate between basket and product currency (needs basketCurrency)

##### Remarks

Format: double

#### `Readonly` linkedNotional

```ts
linkedNotional: number
```

Notional amount the basket needs to represent (especially for subscription products).
It will be linked to the product components that do not have an own notional, such as options.

##### Remarks

Format: double

#### `Readonly` physicalDeliveryLevel

```ts
physicalDeliveryLevel: PriipsDataStaticLevel
```

Barrier level for physical delivery. Set this in a basket with usage = PhysicalDelivery to indicate at which
point delivery switches from cash to physical. Uses Level only, value can be set for informational purposes.

#### `Readonly` physicalDeliveryObservationPeriod

```ts
physicalDeliveryObservationPeriod: PriipsDataStaticObservationPeriod
```

ObservationPeriod for physical delivery (if unset, assume observation at product's FinalObservationDate)

#### `Readonly` physicalDeliveryObservationType

```ts
physicalDeliveryObservationType: PriipsDataStaticBasketPhysicalDeliveryObservationType
```

Observation type for physicalDeliveryLevel. Possible values: UpIn or DownIn.

##### Remarks

Format: enum

#### `Readonly` rates

```ts
rates: readonly PriipsDataStaticRateUnderlying[]
```

Basket interest-rate elements, used if for example conditional coupons depend on interest rates instead of underlyings.
Keep in mind that many product components have their own list of interest rates.

#### `Readonly` underlyings

```ts
underlyings: readonly PriipsDataStaticUnderlying[]
```

List of underlyings, regular basket elements (e.g. equity, fx-rate, commodity)

#### `Readonly` usage

```ts
usage: PriipsDataStaticBasketUsage
```

Determines the purpose of this basket

##### Remarks

Format: enum

#### `Readonly` weight

```ts
weight: number
```

Weight of the basket, usually 1/initialReferencePrice for single underlying baskets, or 0.01 as a multiplier for indices

##### Remarks

Format: double
