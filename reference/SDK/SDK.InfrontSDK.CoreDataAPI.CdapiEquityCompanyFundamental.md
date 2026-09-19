---
title: "CdapiEquityCompanyFundamental"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamental"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyFundamental"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamental.html"
defines: ["CdapiEquityCompanyFundamental"]
member_count: 5
members: ["currency_code", "id", "isins", "source", "taxonomies"]
member_groups:
  "Properties": ["currency_code", "id", "isins", "source", "taxonomies"]
reference_count: 4
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalId", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalIsins", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalSource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalTaxonomies"]
---

# CdapiEquityCompanyFundamental

CompanyFundamental holds company financial statement data organised by taxonomy.
Covers income statement, balance sheet, cash flow statement, and KPIs.
Available for sources INFRONT and MORNINGSTAR.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyFundamental

```ts
interface CdapiEquityCompanyFundamental {
    currency_code: string;
    id: CdapiEquityCompanyFundamentalId;
    isins: CdapiEquityCompanyFundamentalIsins;
    source: CdapiEquityCompanyFundamentalSource;
    taxonomies: CdapiEquityCompanyFundamentalTaxonomies;
}
```

### Properties

#### `Readonly` currency_code

```ts
currency_code: string
```

ISO 4217 currency code for all figures.
Deprecated — use the currency_code field within each Years entry instead.

#### `Readonly` id

```ts
id: CdapiEquityCompanyFundamentalId
```

Composite lookup key for this record.

#### `Readonly` isins

```ts
isins: CdapiEquityCompanyFundamentalIsins
```

ISINs associated with this issuer.

#### `Readonly` source

```ts
source: CdapiEquityCompanyFundamentalSource
```

Data source for this record.

##### Remarks

Format: enum

#### `Readonly` taxonomies

```ts
taxonomies: CdapiEquityCompanyFundamentalTaxonomies
```

Financial statement data organised by statement type.
