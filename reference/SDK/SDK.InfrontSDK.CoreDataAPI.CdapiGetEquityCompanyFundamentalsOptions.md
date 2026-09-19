---
title: "CdapiGetEquityCompanyFundamentalsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyFundamentalsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetEquityCompanyFundamentalsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyFundamentalsOptions.html"
defines: ["CdapiGetEquityCompanyFundamentalsOptions"]
member_count: 21
members: ["balance_sheet_figures_code?", "cash_flow_statement_figures_code?", "chunk_size?", "company_code?", "company_source?", "fields?", "fundamental_source?", "has_fundamentals?", "income_statement_figures_code?", "instrument_id?", "isin?", "issuer_id?", "limit?", "onData?", "onError?", "onFinally?", "period_kpi_figures_code?", "report_type?", "snapshot_kpi_figures_code?", "trading_venue_code?", "year?"]
member_groups:
  "Properties": ["balance_sheet_figures_code?", "cash_flow_statement_figures_code?", "chunk_size?", "company_code?", "company_source?", "fields?", "fundamental_source?", "has_fundamentals?", "income_statement_figures_code?", "instrument_id?", "isin?", "issuer_id?", "limit?", "onData?", "onError?", "onFinally?", "period_kpi_figures_code?", "report_type?", "snapshot_kpi_figures_code?", "trading_venue_code?", "year?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalsData"]
reference_count: 6
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyFundamentalsOptionsCompanySource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyFundamentalsField", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyFundamentalsOptionsFundamentalSource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalsData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyFundamentalsOptionsReportType", "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyFundamentals"]
---

# CdapiGetEquityCompanyFundamentalsOptions

Request options for [cdapiGetEquityCompanyFundamentals](./SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyFundamentals.md)

```ts
interface CdapiGetEquityCompanyFundamentalsOptions {
    balance_sheet_figures_code?: string | readonly string[];
    cash_flow_statement_figures_code?: string | readonly string[];
    chunk_size?: number;
    company_code?: string;
    company_source?: CdapiGetEquityCompanyFundamentalsOptionsCompanySource;
    fields?: string | readonly CdapiGetEquityCompanyFundamentalsField[];
    fundamental_source?: CdapiGetEquityCompanyFundamentalsOptionsFundamentalSource;
    has_fundamentals?: boolean;
    income_statement_figures_code?: string | readonly string[];
    instrument_id?: string | readonly string[];
    isin?: string | readonly string[];
    issuer_id?: string;
    limit?: number;
    onData?: CoreDataRequestSuccessCallback<CdapiEquityCompanyFundamentalsData>;
    onError?: CoreDataRequestErrorCallback<CdapiEquityCompanyFundamentalsData>;
    onFinally?: CoreDataRequestFinallyCallback<
        CdapiEquityCompanyFundamentalsData,
    >;
    period_kpi_figures_code?: string
    | readonly string[];
    report_type?:
        | CdapiGetEquityCompanyFundamentalsOptionsReportType
        | readonly CdapiGetEquityCompanyFundamentalsOptionsReportType[];
    snapshot_kpi_figures_code?: string
    | readonly string[];
    trading_venue_code?: string | readonly string[];
    year?: number;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiEquityCompanyFundamentalsData>

  - CdapiGetEquityCompanyFundamentalsOptions

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
company_source?: CdapiGetEquityCompanyFundamentalsOptionsCompanySource
```

source for company data

#### `Optional` ` Readonly`fields

```ts
fields?: string | readonly CdapiGetEquityCompanyFundamentalsField[]
```

filter for this fields

#### `Optional` ` Readonly`fundamental_source

```ts
fundamental_source?: CdapiGetEquityCompanyFundamentalsOptionsFundamentalSource
```

source for fundamental data (INFRONT)

#### `Optional` ` Readonly`has_fundamentals

```ts
has_fundamentals?: boolean
```

only data where fundamentals are available

#### `Optional` ` Readonly`income_statement_figures_code

```ts
income_statement_figures_code?: string | readonly string[]
```

income_statement_figures_code

#### `Optional` ` Readonly`instrument_id

```ts
instrument_id?: string | readonly string[]
```

only first instrument_id in the array is requested

#### `Optional` ` Readonly`isin

```ts
isin?: string | readonly string[]
```

only first ISIN in the array is requested

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
onData?: CoreDataRequestSuccessCallback<CdapiEquityCompanyFundamentalsData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiEquityCompanyFundamentalsData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiEquityCompanyFundamentalsData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`period_kpi_figures_code

```ts
period_kpi_figures_code?: string | readonly string[]
```

period_kpi_figures_code

#### `Optional` ` Readonly`report_type

```ts
report_type?:
    | CdapiGetEquityCompanyFundamentalsOptionsReportType
    | readonly CdapiGetEquityCompanyFundamentalsOptionsReportType[]
```

report-type filter (ANNUAL, INTERIM are allowed)

#### `Optional` ` Readonly`snapshot_kpi_figures_code

```ts
snapshot_kpi_figures_code?: string | readonly string[]
```

snapshot_kpi_figures_code

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
