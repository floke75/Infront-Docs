---
title: "PriipsDataStaticUnderlying"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticUnderlying"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticUnderlying"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticUnderlying.html"
defines: ["PriipsDataStaticUnderlying"]
member_count: 20
members: ["adjustmentFactor", "assetType", "futuresExchange", "hasReinvestedReturns", "identifier", "initialFX", "initialReferencePrice", "limit", "proxyIdentifier", "quotes", "quoteUnit", "ratio", "referencePriceText", "relevantExchange", "takeOutDate", "underlyingCurrency", "underlyingIndexId", "underlyingNameLong", "underlyingNameShort", "weight"]
member_groups:
  "Properties": ["adjustmentFactor", "assetType", "futuresExchange", "hasReinvestedReturns", "identifier", "initialFX", "initialReferencePrice", "limit", "proxyIdentifier", "quotes", "quoteUnit", "ratio", "referencePriceText", "relevantExchange", "takeOutDate", "underlyingCurrency", "underlyingIndexId", "underlyingNameLong", "underlyingNameShort", "weight"]
reference_count: 5
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticUnderlyingAssetType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticIdentifier", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticPerformanceLimit", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticHistoricQuote", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCurrency"]
---

# PriipsDataStaticUnderlying

Underlying contains information on one underlying

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.Underlying

```ts
interface PriipsDataStaticUnderlying {
    adjustmentFactor: number;
    assetType: PriipsDataStaticUnderlyingAssetType;
    futuresExchange: string;
    hasReinvestedReturns: boolean;
    identifier: PriipsDataStaticIdentifier;
    initialFX: number;
    initialReferencePrice: number;
    limit: PriipsDataStaticPerformanceLimit;
    proxyIdentifier: PriipsDataStaticIdentifier;
    quotes: readonly PriipsDataStaticHistoricQuote[];
    quoteUnit: PriipsDataStaticCurrency;
    ratio: number;
    referencePriceText: string;
    relevantExchange: string;
    takeOutDate: string;
    underlyingCurrency: PriipsDataStaticCurrency;
    underlyingIndexId: number;
    underlyingNameLong: string;
    underlyingNameShort: string;
    weight: number;
}
```

### Properties

#### `Readonly` adjustmentFactor

```ts
adjustmentFactor: number
```

Underlying-ratio adjustment (e.g. if the quote currency is GBp, USc, etc. then the is set to 0.01).

##### Remarks

Format: double

#### `Readonly` assetType

```ts
assetType: PriipsDataStaticUnderlyingAssetType
```

Asset type of the underlying, only for viewing on the KIDs

##### Remarks

Format: enum

#### `Readonly` futuresExchange

```ts
futuresExchange: string
```

Exchange where the futures contract is traded (not used in calculation)

#### `Readonly` hasReinvestedReturns

```ts
hasReinvestedReturns: boolean
```

states if underlying history contains reinvested dividends

#### `Readonly` identifier

```ts
identifier: PriipsDataStaticIdentifier
```

Identifier of the underlying

#### `Readonly` initialFX

```ts
initialFX: number
```

Underlying fx rate between underlying and basket currency

##### Remarks

Format: double

#### `Readonly` initialReferencePrice

```ts
initialReferencePrice: number
```

Fixing price of the underlying for the product

##### Remarks

Format: double

#### `Readonly` limit

```ts
limit: PriipsDataStaticPerformanceLimit
```

Individual underlying performance limits - ex fx impact; individual caps and floors for underlyings

#### `Readonly` proxyIdentifier

```ts
proxyIdentifier: PriipsDataStaticIdentifier
```

Proxy underlying if the main underlying does not have enough historic prices for valuation

#### `Readonly` quotes

```ts
quotes: readonly PriipsDataStaticHistoricQuote[]
```

Product related relevant historic quotes, e.g. for asian options or lookback options

#### `Readonly` quoteUnit

```ts
quoteUnit: PriipsDataStaticCurrency
```

Unit of the underlying quote (e.g. XXP for indices)

#### `Readonly` ratio

```ts
ratio: number
```

Weight of the underlying that needs to be printed on the KID, is not used for calculation

##### Remarks

Format: double

#### `Readonly` referencePriceText

```ts
referencePriceText: string
```

BIB needs the correct reference price text for flow products

#### `Readonly` relevantExchange

```ts
relevantExchange: string
```

Exchange of the underlying, not used for calculation

#### `Readonly` takeOutDate

```ts
takeOutDate: string
```

Date is set when the underlying has been "taken out" during the product life cycle.
It is intended to be used for Vario products of DZBank where after each period the underlying with the worst performance
will be kicked out from valuation in the future. This has been intended to be used together with the
conditionalCoupon with PaymentType TakeOut. However, while the conditionalCoupon-TakeOut-feature is implemented,
this takeOutDate-field is not supported yet (2021-06-10)

#### `Readonly` underlyingCurrency

```ts
underlyingCurrency: PriipsDataStaticCurrency
```

Currency of the underlying

#### `Readonly` underlyingIndexId

```ts
underlyingIndexId: number
```

An index ID within the basket

##### Remarks

Format: int32

#### `Readonly` underlyingNameLong

```ts
underlyingNameLong: string
```

Long name of the underlying

#### `Readonly` underlyingNameShort

```ts
underlyingNameShort: string
```

Short name of the underlying

#### `Readonly` weight

```ts
weight: number
```

Weight of the underlying within the basket, e.g. WorstOf baskets have always weight 1,
and if the PayoffType is Sum, then the weight of the underlying can be used to calculate
a weighted linear combination of the underlyings within a basket

##### Remarks

Format: double
