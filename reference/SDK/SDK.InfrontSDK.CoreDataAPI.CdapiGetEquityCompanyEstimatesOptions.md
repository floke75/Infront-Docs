---
title: "CdapiGetEquityCompanyEstimatesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyEstimatesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetEquityCompanyEstimatesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyEstimatesOptions.html"
defines: ["CdapiGetEquityCompanyEstimatesOptions"]
member_count: 21
members: ["balance_sheet_figures_code?", "cash_flow_statement_figures_code?", "chunk_size?", "company_code?", "company_source?", "estimate_source?", "fields?", "has_estimates?", "income_statement_figures_code?", "instrument_id?", "isin?", "issuer_id?", "limit?", "onData?", "onError?", "onFinally?", "period_kpi_figures_code?", "quarter?", "report_type?", "trading_venue_code?", "year?"]
member_groups:
  "Properties": ["balance_sheet_figures_code?", "cash_flow_statement_figures_code?", "chunk_size?", "company_code?", "company_source?", "estimate_source?", "fields?", "has_estimates?", "income_statement_figures_code?", "instrument_id?", "isin?", "issuer_id?", "limit?", "onData?", "onError?", "onFinally?", "period_kpi_figures_code?", "quarter?", "report_type?", "trading_venue_code?", "year?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimatesData"]
reference_count: 7
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyEstimatesOptionsCompanySource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyEstimatesOptionsEstimateSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyEstimatesField", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimatesData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyEstimatesOptionsQuarter", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyEstimatesOptionsReportType", "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyEstimates"]
---

# CdapiGetEquityCompanyEstimatesOptions

Request options for [cdapiGetEquityCompanyEstimates](./SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyEstimates.md)

```ts
interface CdapiGetEquityCompanyEstimatesOptions {
    balance_sheet_figures_code?: string | readonly string[];
    cash_flow_statement_figures_code?: string | readonly string[];
    chunk_size?: number;
    company_code?: string;
    company_source?: CdapiGetEquityCompanyEstimatesOptionsCompanySource;
    estimate_source?: CdapiGetEquityCompanyEstimatesOptionsEstimateSource;
    fields?: string | readonly CdapiGetEquityCompanyEstimatesField[];
    has_estimates?: boolean;
    income_statement_figures_code?: string | readonly string[];
    instrument_id?: string;
    isin?: string;
    issuer_id?: string;
    limit?: number;
    onData?: CoreDataRequestSuccessCallback<CdapiEquityCompanyEstimatesData>;
    onError?: CoreDataRequestErrorCallback<CdapiEquityCompanyEstimatesData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiEquityCompanyEstimatesData>;
    period_kpi_figures_code?: string | readonly string[];
    quarter?: CdapiGetEquityCompanyEstimatesOptionsQuarter;
    report_type?:
        | CdapiGetEquityCompanyEstimatesOptionsReportType
        | readonly CdapiGetEquityCompanyEstimatesOptionsReportType[];
    trading_venue_code?: string
    | readonly string[];
    year?: number;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiEquityCompanyEstimatesData>

  - CdapiGetEquityCompanyEstimatesOptions

### Properties

#### `Optional` ` Readonly`balance_sheet_figures_code

```ts
balance_sheet_figures_code?: string | readonly string[]
```

balance_sheet_figures_code,

#### `Optional` ` Readonly`cash_flow_statement_figures_code

```ts
cash_flow_statement_figures_code?: string | readonly string[]
```

cash_flow_statement_figures_code

#### `Optional` ` Readonly`chunk_size

```ts
chunk_size?: number
```

maximum number of items per chunk - only applies to streaming requests (min: 10, max: 100)

#### `Optional` ` Readonly`company_code

```ts
company_code?: string
```

infront company code

#### `Optional` ` Readonly`company_source

```ts
company_source?: CdapiGetEquityCompanyEstimatesOptionsCompanySource
```

source for company data

#### `Optional` ` Readonly`estimate_source

```ts
estimate_source?: CdapiGetEquityCompanyEstimatesOptionsEstimateSource
```

source for estimate data (INFRONT)

#### `Optional` ` Readonly`fields

```ts
fields?: string | readonly CdapiGetEquityCompanyEstimatesField[]
```

filter for this fields

#### `Optional` ` Readonly`has_estimates

```ts
has_estimates?: boolean
```

only data where estimates are available

#### `Optional` ` Readonly`income_statement_figures_code

```ts
income_statement_figures_code?: string | readonly string[]
```

income_statement_figures_code

#### `Optional` ` Readonly`instrument_id

```ts
instrument_id?: string
```

instrument_id

#### `Optional` ` Readonly`isin

```ts
isin?: string
```

ISIN

#### `Optional` ` Readonly`issuer_id

```ts
issuer_id?: string
```

issuer_id

#### `Optional` ` Readonly`limit

```ts
limit?: number
```

for internal usage of tests

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiEquityCompanyEstimatesData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiEquityCompanyEstimatesData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiEquityCompanyEstimatesData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`period_kpi_figures_code

```ts
period_kpi_figures_code?: string | readonly string[]
```

period_kpi_figures_code

#### `Optional` ` Readonly`quarter

```ts
quarter?: CdapiGetEquityCompanyEstimatesOptionsQuarter
```

quarters (Q1, Q2, Q3, Q4)

#### `Optional` ` Readonly`report_type

```ts
report_type?:
    | CdapiGetEquityCompanyEstimatesOptionsReportType
    | readonly CdapiGetEquityCompanyEstimatesOptionsReportType[]
```

report-type filter (ANNUAL, INTERIM are allowed)

#### `Optional` ` Readonly`trading_venue_code

```ts
trading_venue_code?: string | readonly string[]
```

trading_venue_codes

#### `Optional` ` Readonly`year

```ts
year?: number
```

year-filter
