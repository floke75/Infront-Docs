---
title: "PriipsDataStaticMaximumGuaranteedFund"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticMaximumGuaranteedFund"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticMaximumGuaranteedFund"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticMaximumGuaranteedFund.html"
defines: ["PriipsDataStaticMaximumGuaranteedFund"]
member_count: 12
members: ["componentId", "dates", "finalObservationDate", "guaranteeObservationFrequency", "guaranteePrice", "guaranteeType", "lossObservationFrequency", "maximumLoss", "paymentDates", "relatedBasketIds", "startingObservationDate", "weight"]
member_groups:
  "Properties": ["componentId", "dates", "finalObservationDate", "guaranteeObservationFrequency", "guaranteePrice", "guaranteeType", "lossObservationFrequency", "maximumLoss", "paymentDates", "relatedBasketIds", "startingObservationDate", "weight"]
reference_count: 4
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticMaximumGuaranteedFundGuaranteeObservationFrequency", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticMaximumGuaranteedFundGuaranteeType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticMaximumGuaranteedFundLossObservationFrequency"]
---

# PriipsDataStaticMaximumGuaranteedFund

MaximumGuaranteedFund is a fund that pays back in tranches the maximum
value of a fund observed during specific dates

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.MaximumGuaranteedFund

```ts
interface PriipsDataStaticMaximumGuaranteedFund {
    componentId: number;
    dates: PriipsDataStaticBasicProductDates;
    finalObservationDate: string;
    guaranteeObservationFrequency: PriipsDataStaticMaximumGuaranteedFundGuaranteeObservationFrequency;
    guaranteePrice: number;
    guaranteeType: PriipsDataStaticMaximumGuaranteedFundGuaranteeType;
    lossObservationFrequency: PriipsDataStaticMaximumGuaranteedFundLossObservationFrequency;
    maximumLoss: number;
    paymentDates: readonly string[];
    relatedBasketIds: readonly number[];
    startingObservationDate: string;
    weight: number;
}
```

### Properties

#### `Readonly` componentId

```ts
componentId: number
```

Component ID for product component

##### Remarks

Format: int32

#### `Readonly` dates

```ts
dates: PriipsDataStaticBasicProductDates
```

Dates of the component, finalRedemptionDate is the paymentDate

#### `Readonly` finalObservationDate

```ts
finalObservationDate: string
```

The final observation date

#### `Readonly` guaranteeObservationFrequency

```ts
guaranteeObservationFrequency: PriipsDataStaticMaximumGuaranteedFundGuaranteeObservationFrequency
```

The frequency observation for the guarantee level

##### Remarks

Format: enum

#### `Readonly` guaranteePrice

```ts
guaranteePrice: number
```

The guaranteed price

##### Remarks

Format: double

#### `Readonly` guaranteeType

```ts
guaranteeType: PriipsDataStaticMaximumGuaranteedFundGuaranteeType
```

The product category to identify fund type

##### Remarks

Format: enum

#### `Readonly` lossObservationFrequency

```ts
lossObservationFrequency: PriipsDataStaticMaximumGuaranteedFundLossObservationFrequency
```

The frequency observation for the loss

##### Remarks

Format: enum

#### `Readonly` maximumLoss

```ts
maximumLoss: number
```

The maximum loss per period

##### Remarks

Format: double

#### `Readonly` paymentDates

```ts
paymentDates: readonly string[]
```

The payment dates where we get the (guaranteed) fund back

#### `Readonly` relatedBasketIds

```ts
relatedBasketIds: readonly number[]
```

Corresponding underlying basket ID (for now only one basket expected)

#### `Readonly` startingObservationDate

```ts
startingObservationDate: string
```

The starting observation date

#### `Readonly` weight

```ts
weight: number
```

Payoff multiplier

##### Remarks

Format: double
