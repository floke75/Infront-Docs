---
title: "CdapiEquityListCompanyFundamentalsRequest"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityListCompanyFundamentalsRequest"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityListCompanyFundamentalsRequest"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityListCompanyFundamentalsRequest.html"
defines: ["CdapiEquityListCompanyFundamentalsRequest"]
member_count: 19
members: ["balance_sheet_figures_code", "cash_flow_statement_figures_code", "chunk_size", "company_code", "company_source", "date", "fields", "fundamental_source", "has_fundamentals", "income_statement_figures_code", "instrument_id", "isin", "issuer_id", "limit", "period_kpi_figures_code", "report_type", "snapshot_kpi_figures_code", "trading_venue_code", "year"]
member_groups:
  "Properties": ["balance_sheet_figures_code", "cash_flow_statement_figures_code", "chunk_size", "company_code", "company_source", "date", "fields", "fundamental_source", "has_fundamentals", "income_statement_figures_code", "instrument_id", "isin", "issuer_id", "limit", "period_kpi_figures_code", "report_type", "snapshot_kpi_figures_code", "trading_venue_code", "year"]
reference_count: 4
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityListCompanyFundamentalsRequestCompanySource", "SDK.InfrontSDK.CoreDataAPI.BasedefFilterParamString", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityListCompanyFundamentalsRequestFundamentalSource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityListCompanyFundamentalsRequestReportType"]
---

# CdapiEquityListCompanyFundamentalsRequest

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.ListCompanyFundamentalsRequest

```ts
interface CdapiEquityListCompanyFundamentalsRequest {
    balance_sheet_figures_code: readonly string[];
    cash_flow_statement_figures_code: readonly string[];
    chunk_size: number;
    company_code: string;
    company_source: CdapiEquityListCompanyFundamentalsRequestCompanySource;
    date: BasedefFilterParamString;
    fields: string;
    fundamental_source: CdapiEquityListCompanyFundamentalsRequestFundamentalSource;
    has_fundamentals: boolean;
    income_statement_figures_code: readonly string[];
    instrument_id: readonly string[];
    isin: readonly string[];
    issuer_id: string;
    limit: number;
    period_kpi_figures_code: readonly string[];
    report_type: readonly CdapiEquityListCompanyFundamentalsRequestReportType[];
    snapshot_kpi_figures_code: readonly string[];
    trading_venue_code: readonly string[];
    year: number;
}
```

### Properties

#### `Readonly` balance_sheet_figures_code

```ts
balance_sheet_figures_code: readonly string[]
```

balance_sheet_figures_code,

#### `Readonly` cash_flow_statement_figures_code

```ts
cash_flow_statement_figures_code: readonly string[]
```

cash_flow_statement_figures_code

#### `Readonly` chunk_size

```ts
chunk_size: number
```

maximum number of items per chunk - only applies to streaming requests (min: 10, max: 100)

##### Remarks

Format: int32

#### `Readonly` company_code

```ts
company_code: string
```

infront company code

#### `Readonly` company_source

```ts
company_source: CdapiEquityListCompanyFundamentalsRequestCompanySource
```

source for company data

##### Remarks

Format: enum

#### `Readonly` date

```ts
date: BasedefFilterParamString
```

date-filter, please specify an UTC-date!

#### `Readonly` fields

```ts
fields: string
```

filter for this fields

##### Remarks

Format: field-mask

#### `Readonly` fundamental_source

```ts
fundamental_source: CdapiEquityListCompanyFundamentalsRequestFundamentalSource
```

source for fundamental data (INFRONT)

##### Remarks

Format: enum

#### `Readonly` has_fundamentals

```ts
has_fundamentals: boolean
```

only data where fundamentals are available

#### `Readonly` income_statement_figures_code

```ts
income_statement_figures_code: readonly string[]
```

income_statement_figures_code

#### `Readonly` instrument_id

```ts
instrument_id: readonly string[]
```

only first instrument_id in the array is requested

#### `Readonly` isin

```ts
isin: readonly string[]
```

only first ISIN in the array is requested

#### `Readonly` issuer_id

```ts
issuer_id: string
```

issuer_id

#### `Readonly` limit

```ts
limit: number
```

for internal usage of tests

##### Remarks

Format: int32

#### `Readonly` period_kpi_figures_code

```ts
period_kpi_figures_code: readonly string[]
```

period_kpi_figures_code

#### `Readonly` report_type

```ts
report_type: readonly CdapiEquityListCompanyFundamentalsRequestReportType[]
```

report-type filter (ANNUAL, INTERIM are allowed)

#### `Readonly` snapshot_kpi_figures_code

```ts
snapshot_kpi_figures_code: readonly string[]
```

snapshot_kpi_figures_code

#### `Readonly` trading_venue_code

```ts
trading_venue_code: readonly string[]
```

trading_venue_codes

#### `Readonly` year

```ts
year: number
```

year-filter

##### Remarks

Format: int32
