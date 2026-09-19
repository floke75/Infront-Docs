---
title: "PriipsDataStaticBasicProductDates"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticBasicProductDates"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates.html"
defines: ["PriipsDataStaticBasicProductDates"]
member_count: 7
members: ["finalObservationDate", "finalRedemption", "initialFixingDate", "investmentPolicyChange", "issueDate", "subscriptionPeriod", "valueDate"]
member_groups:
  "Properties": ["finalObservationDate", "finalRedemption", "initialFixingDate", "investmentPolicyChange", "issueDate", "subscriptionPeriod", "valueDate"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticObservationPeriod"]
---

# PriipsDataStaticBasicProductDates

BasicProductDates contains information on all kind of dates for a product or product component

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.BasicProductDates

```ts
interface PriipsDataStaticBasicProductDates {
    finalObservationDate: string;
    finalRedemption: string;
    initialFixingDate: string;
    investmentPolicyChange: string;
    issueDate: string;
    subscriptionPeriod: PriipsDataStaticObservationPeriod;
    valueDate: string;
}
```

### Properties

#### `Readonly` finalObservationDate

```ts
finalObservationDate: string
```

Final observation date of a product or product component

#### `Readonly` finalRedemption

```ts
finalRedemption: string
```

Maturity of the product or end date of a product component
(e.g. bonds that are paid before redemption can have another finalRedemptionDate than the product does)

#### `Readonly` initialFixingDate

```ts
initialFixingDate: string
```

Date when underlying is fixed (for product dates) or
date of the first observation date of an product component

#### `Readonly` investmentPolicyChange

```ts
investmentPolicyChange: string
```

Date of an investment policy change ("Anlagepolitikwechsel") to reset the MRM history (intended to be used for structured
fonds)

#### `Readonly` issueDate

```ts
issueDate: string
```

Issue date of the product or start date of a product component

#### `Readonly` subscriptionPeriod

```ts
subscriptionPeriod: PriipsDataStaticObservationPeriod
```

Subscription period, period before issuance where the initial fixing price
of the underlyings are set, not used for calculation

#### `Readonly` valueDate

```ts
valueDate: string
```

Value date of the product (not used for calculation)
