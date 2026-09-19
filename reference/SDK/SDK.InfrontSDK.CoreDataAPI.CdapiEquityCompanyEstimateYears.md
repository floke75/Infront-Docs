---
title: "CdapiEquityCompanyEstimateYears"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateYears"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyEstimateYears"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateYears.html"
defines: ["CdapiEquityCompanyEstimateYears"]
member_count: 15
members: ["actual", "currency_code", "from_date", "high", "is_estimate", "low", "mean", "median", "number_of_contributors", "quarter", "report_date", "report_type", "to_date", "unit", "year"]
member_groups:
  "Properties": ["actual", "currency_code", "from_date", "high", "is_estimate", "low", "mean", "median", "number_of_contributors", "quarter", "report_date", "report_type", "to_date", "unit", "year"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateYearsQuarter", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateYearsReportType", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateUnit"]
---

# CdapiEquityCompanyEstimateYears

Years holds a single period's consensus estimate for a financial figure.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyEstimate_Years

```ts
interface CdapiEquityCompanyEstimateYears {
    actual: number;
    currency_code: string;
    from_date: string;
    high: number;
    is_estimate: boolean;
    low: number;
    mean: number;
    median: number;
    number_of_contributors: number;
    quarter: CdapiEquityCompanyEstimateYearsQuarter;
    report_date: string;
    report_type: CdapiEquityCompanyEstimateYearsReportType;
    to_date: string;
    unit: CdapiEquityCompanyEstimateUnit;
    year: number;
}
```

### Properties

#### `Readonly` actual

```ts
actual: number
```

Actual reported value — populated when is_estimate is false (replaces mean/median/high/low).

##### Remarks

Format: double

#### `Readonly` currency_code

```ts
currency_code: string
```

ISO 4217 currency code for this estimate.

#### `Readonly` from_date

```ts
from_date: string
```

Start date of the estimate period. ISO-8601 recommended. Source: INFRONT.

#### `Readonly` high

```ts
high: number
```

Highest individual analyst estimate.

##### Remarks

Format: double

#### `Readonly` is_estimate

```ts
is_estimate: boolean
```

If true, this is a forward estimate; if false, this is an actual reported figure.

#### `Readonly` low

```ts
low: number
```

Lowest individual analyst estimate.

##### Remarks

Format: double

#### `Readonly` mean

```ts
mean: number
```

Consensus mean estimate.

##### Remarks

Format: double

#### `Readonly` median

```ts
median: number
```

Consensus median estimate.

##### Remarks

Format: double

#### `Readonly` number_of_contributors

```ts
number_of_contributors: number
```

Number of analysts contributing to this consensus estimate.

##### Remarks

Format: int32

#### `Readonly` quarter

```ts
quarter: CdapiEquityCompanyEstimateYearsQuarter
```

Fiscal quarter (Q1–Q4) if applicable.

##### Remarks

Format: enum

#### `Readonly` report_date

```ts
report_date: string
```

Date on which the estimate was published. ISO-8601 recommended. Source: INFRONT.

#### `Readonly` report_type

```ts
report_type: CdapiEquityCompanyEstimateYearsReportType
```

Report type for this estimate period.

##### Remarks

Format: enum

#### `Readonly` to_date

```ts
to_date: string
```

End date of the estimate period. ISO-8601 recommended.

#### `Readonly` unit

```ts
unit: CdapiEquityCompanyEstimateUnit
```

Unit in which the estimate is expressed. Source: INFRONT.

#### `Readonly` year

```ts
year: number
```

Fiscal year number (e.g. 2024).

##### Remarks

Format: int32
