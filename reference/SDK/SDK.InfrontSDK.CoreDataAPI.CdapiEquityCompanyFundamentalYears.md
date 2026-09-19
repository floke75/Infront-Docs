---
title: "CdapiEquityCompanyFundamentalYears"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalYears"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyFundamentalYears"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalYears.html"
defines: ["CdapiEquityCompanyFundamentalYears"]
member_count: 12
members: ["currency_code", "from_date", "id", "report_date", "report_type", "to_date", "unit", "value", "value_eur", "value_source", "value_usd", "year"]
member_groups:
  "Properties": ["currency_code", "from_date", "id", "report_date", "report_type", "to_date", "unit", "value", "value_eur", "value_source", "value_usd", "year"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalYearsReportType", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalUnit", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalYearsValueSource"]
---

# CdapiEquityCompanyFundamentalYears

Years holds a single year's data point for a financial figure.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyFundamental_Years

```ts
interface CdapiEquityCompanyFundamentalYears {
    currency_code: string;
    from_date: string;
    id: number;
    report_date: string;
    report_type: CdapiEquityCompanyFundamentalYearsReportType;
    to_date: string;
    unit: CdapiEquityCompanyFundamentalUnit;
    value: number;
    value_eur: number;
    value_source: CdapiEquityCompanyFundamentalYearsValueSource;
    value_usd: number;
    year: number;
}
```

### Properties

#### `Readonly` currency_code

```ts
currency_code: string
```

ISO 4217 currency code in which this value is reported. Source: INFRONT.

#### `Readonly` from_date

```ts
from_date: string
```

Start date of the reporting period. ISO-8601 recommended. Source: INFRONT.

#### `Readonly` id

```ts
id: number
```

Internal identifier for this specific data point.

##### Remarks

Format: int32

#### `Readonly` report_date

```ts
report_date: string
```

Reporting date of the financial statement. ISO-8601 recommended. Source: INFRONT.

#### `Readonly` report_type

```ts
report_type: CdapiEquityCompanyFundamentalYearsReportType
```

Report type for this period (ANNUAL, INTERIM, etc.).

##### Remarks

Format: enum

#### `Readonly` to_date

```ts
to_date: string
```

End date of the reporting period. ISO-8601 recommended.

#### `Readonly` unit

```ts
unit: CdapiEquityCompanyFundamentalUnit
```

Unit in which the value is expressed (e.g. millions). Source: INFRONT.

#### `Readonly` value

```ts
value: number
```

Reported figure value in the report currency.

##### Remarks

Format: double

#### `Readonly` value_eur

```ts
value_eur: number
```

Value converted to EUR — only available for figures calculated by the Quant team.

##### Remarks

Format: double

#### `Readonly` value_source

```ts
value_source: CdapiEquityCompanyFundamentalYearsValueSource
```

Source of the value (CALCULATED, USER_INPUT, or ML_INPUT). Source: INFRONT.

##### Remarks

Format: enum

#### `Readonly` value_usd

```ts
value_usd: number
```

Value converted to USD — only available for figures calculated by the Quant team.

##### Remarks

Format: double

#### `Readonly` year

```ts
year: number
```

Fiscal year number (e.g. 2023).

##### Remarks

Format: int32
