---
title: "PriipsDataStaticBasicData"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticBasicData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicData.html"
defines: ["PriipsDataStaticBasicData"]
member_count: 18
members: ["additionalLiability", "assetPoolId", "dayCountConvention", "debtSeniority", "deliveryType", "denomination", "isCleanPrice", "issuePrice", "issuer", "issuerId", "isZeroCost", "openEnd", "parties", "privatePlacement", "productCurrency", "quanto", "quotationType", "ratings"]
member_groups:
  "Properties": ["additionalLiability", "assetPoolId", "dayCountConvention", "debtSeniority", "deliveryType", "denomination", "isCleanPrice", "issuePrice", "issuer", "issuerId", "isZeroCost", "openEnd", "parties", "privatePlacement", "productCurrency", "quanto", "quotationType", "ratings"]
reference_count: 8
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicDataAdditionalLiability", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicDataDayCountConvention", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicDataDebtSeniority", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicDataDeliveryType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticPartyData", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCurrency", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicDataQuotationType", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCreditAssessment"]
---

# PriipsDataStaticBasicData

BasicData contains general static data information each structured product has.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.BasicData

```ts
interface PriipsDataStaticBasicData {
    additionalLiability: PriipsDataStaticBasicDataAdditionalLiability;
    assetPoolId: string;
    dayCountConvention: PriipsDataStaticBasicDataDayCountConvention;
    debtSeniority: PriipsDataStaticBasicDataDebtSeniority;
    deliveryType: PriipsDataStaticBasicDataDeliveryType;
    denomination: number;
    isCleanPrice: boolean;
    issuePrice: number;
    issuer: string;
    issuerId: number;
    isZeroCost: boolean;
    openEnd: boolean;
    parties: readonly PriipsDataStaticPartyData[];
    privatePlacement: boolean;
    productCurrency: PriipsDataStaticCurrency;
    quanto: boolean;
    quotationType: PriipsDataStaticBasicDataQuotationType;
    ratings: readonly PriipsDataStaticCreditAssessment[];
}
```

### Properties

#### `Readonly` additionalLiability

```ts
additionalLiability: PriipsDataStaticBasicDataAdditionalLiability
```

Determines the additional liability

##### Remarks

Format: enum

#### `Readonly` assetPoolId

```ts
assetPoolId: string
```

Asset pool ID to mark emissions that belong to a Sustainable Asset Pool

#### `Readonly` dayCountConvention

```ts
dayCountConvention: PriipsDataStaticBasicDataDayCountConvention
```

General day count convention

##### Remarks

Format: enum

#### `Readonly` debtSeniority

```ts
debtSeniority: PriipsDataStaticBasicDataDebtSeniority
```

DebtSeniority to determine the CRM

##### Remarks

Format: enum

#### `Readonly` deliveryType

```ts
deliveryType: PriipsDataStaticBasicDataDeliveryType
```

Determines the delivery type, will not have an effect on the calculation

##### Remarks

Format: enum

#### `Readonly` denomination

```ts
denomination: number
```

General denomination of the product

##### Remarks

Format: double

#### `Readonly` isCleanPrice

```ts
isCleanPrice: boolean
```

True if the product price is clean

#### `Readonly` issuePrice

```ts
issuePrice: number
```

INTERNAL: Price at issuance (is not used in Murdock but in Hanibal for DZ Adhoc products to set an ask price)

##### Remarks

Format: double

#### `Readonly` issuer

```ts
issuer: string
```

The issuer of the product

#### `Readonly` issuerId

```ts
issuerId: number
```

Customer ID or issuerID, used e. g. to determine the CRM

##### Remarks

Format: int32

#### `Readonly` isZeroCost

```ts
isZeroCost: boolean
```

Set true if the product is zero cost, i.e. ask price is zero

#### `Readonly` openEnd

```ts
openEnd: boolean
```

Set true if the product has no final redemption date but is open-ended

#### `Readonly` parties

```ts
parties: readonly PriipsDataStaticPartyData[]
```

INTERNAL: Additional information on related parties, not used for calculation, intended for UBP to be viewed on their KID

#### `Readonly` privatePlacement

```ts
privatePlacement: boolean
```

Set true if the product is privately placed (and so does not need to have a valid ISIN)

#### `Readonly` productCurrency

```ts
productCurrency: PriipsDataStaticCurrency
```

Currency of the product

#### `Readonly` quanto

```ts
quanto: boolean
```

Set true if the product is a quanto product so valuator can neglect the currency fluctuations

#### `Readonly` quotationType

```ts
quotationType: PriipsDataStaticBasicDataQuotationType
```

Describes the quotation type of the product

##### Remarks

Format: enum

#### `Readonly` ratings

```ts
ratings: readonly PriipsDataStaticCreditAssessment[]
```

Determines the issuer ratings for the CRM
