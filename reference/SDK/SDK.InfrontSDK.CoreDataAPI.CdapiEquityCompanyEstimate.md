---
title: "CdapiEquityCompanyEstimate"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimate"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyEstimate"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimate.html"
defines: ["CdapiEquityCompanyEstimate"]
member_count: 8
members: ["analysts", "currency_code", "id", "isins", "outlook", "source", "target_price", "taxonomies"]
member_groups:
  "Properties": ["analysts", "currency_code", "id", "isins", "outlook", "source", "target_price", "taxonomies"]
reference_count: 7
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateAnalysts", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateId", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateIsins", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateOutlook", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateSource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateTargetPrice", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateTaxonomies"]
---

# CdapiEquityCompanyEstimate

CompanyEstimate holds consensus analyst estimate data for a company's financial figures.
Available for sources INFRONT and STANDARD_AND_POORS.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyEstimate

```ts
interface CdapiEquityCompanyEstimate {
    analysts: readonly CdapiEquityCompanyEstimateAnalysts[];
    currency_code: string;
    id: CdapiEquityCompanyEstimateId;
    isins: CdapiEquityCompanyEstimateIsins;
    outlook: CdapiEquityCompanyEstimateOutlook;
    source: CdapiEquityCompanyEstimateSource;
    target_price: CdapiEquityCompanyEstimateTargetPrice;
    taxonomies: CdapiEquityCompanyEstimateTaxonomies;
}
```

### Properties

#### `Readonly` analysts

```ts
analysts: readonly CdapiEquityCompanyEstimateAnalysts[]
```

List of contributing analysts.

#### `Readonly` currency_code

```ts
currency_code: string
```

ISO 4217 currency code for all figures.
Deprecated — use the currency_code field within each Years entry instead.

#### `Readonly` id

```ts
id: CdapiEquityCompanyEstimateId
```

Composite lookup key for this record.

#### `Readonly` isins

```ts
isins: CdapiEquityCompanyEstimateIsins
```

ISINs associated with this issuer.

#### `Readonly` outlook

```ts
outlook: CdapiEquityCompanyEstimateOutlook
```

Consensus analyst recommendation outlook.

#### `Readonly` source

```ts
source: CdapiEquityCompanyEstimateSource
```

Data source for this record.

##### Remarks

Format: enum

#### `Readonly` target_price

```ts
target_price: CdapiEquityCompanyEstimateTargetPrice
```

Consensus analyst target price data.

#### `Readonly` taxonomies

```ts
taxonomies: CdapiEquityCompanyEstimateTaxonomies
```

Financial estimate figures organised by statement type.
