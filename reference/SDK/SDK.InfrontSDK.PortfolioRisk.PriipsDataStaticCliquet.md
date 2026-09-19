---
title: "PriipsDataStaticCliquet"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCliquet"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticCliquet"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCliquet.html"
defines: ["PriipsDataStaticCliquet"]
member_count: 11
members: ["componentId", "dates", "globalCap", "globalFloor", "optionPayoffType", "pastPayoff", "payoffType", "relatedBasketIds", "selectionDates", "strikes", "weight"]
member_groups:
  "Properties": ["componentId", "dates", "globalCap", "globalFloor", "optionPayoffType", "pastPayoff", "payoffType", "relatedBasketIds", "selectionDates", "strikes", "weight"]
reference_count: 5
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCliquetOptionPayoffType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCliquetPayoffType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticSelectionDate", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticFixedStrike"]
---

# PriipsDataStaticCliquet

Cliquet describes a cliquet option. At maturity it pays the sum or a product of call performances or digital coupons
on each period. Moreover at the beginning of each period the Cliquet has a re-strike at 100% of the price,
i.e. the strike of the Cliquet is always set to the underlying spot at the beginning of the period.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.Cliquet

```ts
interface PriipsDataStaticCliquet {
    componentId: number;
    dates: PriipsDataStaticBasicProductDates;
    globalCap: number;
    globalFloor: number;
    optionPayoffType: PriipsDataStaticCliquetOptionPayoffType;
    pastPayoff: number;
    payoffType: PriipsDataStaticCliquetPayoffType;
    relatedBasketIds: readonly number[];
    selectionDates: readonly PriipsDataStaticSelectionDate[];
    strikes: readonly PriipsDataStaticFixedStrike[];
    weight: number;
}
```

### Properties

#### `Readonly` componentId

```ts
componentId: number
```

Component ID of the product component

##### Remarks

Format: int32

#### `Readonly` dates

```ts
dates: PriipsDataStaticBasicProductDates
```

Dates of the cliquet option, the finalRedemptionDate is the payment date

#### `Readonly` globalCap

```ts
globalCap: number
```

Cap level for overall payoff at the end

##### Remarks

Format: double

#### `Readonly` globalFloor

```ts
globalFloor: number
```

Floor level for overall payoff at the end

##### Remarks

Format: double

#### `Readonly` optionPayoffType

```ts
optionPayoffType: PriipsDataStaticCliquetOptionPayoffType
```

Determines how to aggregate the cliquet payoffs for the payoff of the option at maturity.
It is supposed to be the sum, product or minimum of past performances

##### Remarks

Format: enum

#### `Readonly` pastPayoff

```ts
pastPayoff: number
```

If we already have past performances we have to determine the aggregated payoff in the past

##### Remarks

Format: double

#### `Readonly` payoffType

```ts
payoffType: PriipsDataStaticCliquetPayoffType
```

Describes the underlying basket aggregator in case we have a multi-underlying basket.
In case of Cliquet for a multi-underlying basket only BestOf and Sum is allowed because
For now for only these two the Restrike-feature is implemented in the valuator (2021-06-10).

##### Remarks

Format: enum

#### `Readonly` relatedBasketIds

```ts
relatedBasketIds: readonly number[]
```

Corresponding underlying basket ID (for now only one basket expected)

#### `Readonly` selectionDates

```ts
selectionDates: readonly PriipsDataStaticSelectionDate[]
```

Decribes the dates of the Cliquet option when the underlying performance is observed

#### `Readonly` strikes

```ts
strikes: readonly PriipsDataStaticFixedStrike[]
```

Last fixing for cliquet (absolute value), if no fixings are available the current underlying
price will be used

#### `Readonly` weight

```ts
weight: number
```

Multiplier for the payoff

##### Remarks

Format: double
