---
title: "CdapiGetEquityCompaniesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompaniesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetEquityCompaniesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompaniesOptions.html"
defines: ["CdapiGetEquityCompaniesOptions"]
member_count: 7
members: ["company_code?", "company_competitor_source?", "company_financial_auditor_source?", "company_source?", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["company_code?", "company_competitor_source?", "company_financial_auditor_source?", "company_source?", "onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompaniesData"]
reference_count: 5
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompaniesOptionsCompanyCompetitorSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompaniesOptionsCompanyFinancialAuditorSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompaniesOptionsCompanySource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompaniesData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanies"]
---

# CdapiGetEquityCompaniesOptions

Request options for [cdapiGetEquityCompanies](./SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanies.md)

```ts
interface CdapiGetEquityCompaniesOptions {
    company_code?: string | readonly string[];
    company_competitor_source?: CdapiGetEquityCompaniesOptionsCompanyCompetitorSource;
    company_financial_auditor_source?: CdapiGetEquityCompaniesOptionsCompanyFinancialAuditorSource;
    company_source?: CdapiGetEquityCompaniesOptionsCompanySource;
    onData?: CoreDataRequestSuccessCallback<CdapiEquityCompaniesData>;
    onError?: CoreDataRequestErrorCallback<CdapiEquityCompaniesData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiEquityCompaniesData>;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiEquityCompaniesData>

  - CdapiGetEquityCompaniesOptions

### Properties

#### `Optional` ` Readonly`company_code

```ts
company_code?: string | readonly string[]
```

infront internal company code (only for source=INFRONT)

#### `Optional` ` Readonly`company_competitor_source

```ts
company_competitor_source?: CdapiGetEquityCompaniesOptionsCompanyCompetitorSource
```

source for company competitor data

#### `Optional` ` Readonly`company_financial_auditor_source

```ts
company_financial_auditor_source?: CdapiGetEquityCompaniesOptionsCompanyFinancialAuditorSource
```

source for company financial_auditor data

#### `Optional` ` Readonly`company_source

```ts
company_source?: CdapiGetEquityCompaniesOptionsCompanySource
```

source for company data

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiEquityCompaniesData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiEquityCompaniesData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiEquityCompaniesData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally
