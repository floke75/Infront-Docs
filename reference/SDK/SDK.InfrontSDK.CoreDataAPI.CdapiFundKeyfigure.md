---
title: "CdapiFundKeyfigure"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundKeyfigure"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundKeyfigure"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundKeyfigure.html"
defines: ["CdapiFundKeyfigure"]
member_count: 36
members: ["_meta", "annualized_return_1_year", "annualized_return_10_year", "annualized_return_3_year", "annualized_return_5_year", "annualized_return_current_year", "calendar_year_return_1_year_back", "calendar_year_return_2_year_back", "calendar_year_return_3_year_back", "calendar_year_return_4_year_back", "calendar_year_return_5_year_back", "cumulated_return_1_month", "cumulated_return_1_year", "cumulated_return_10_year", "cumulated_return_3_month", "cumulated_return_3_year", "cumulated_return_5_year", "cumulated_return_6_month", "cumulated_return_current_year", "cumulated_return_since_start", "diamond_rating", "diamond_rating_date", "id", "maximum_drawdown_1_year", "maximum_drawdown_2_year", "maximum_drawdown_3_year", "maximum_drawdown_4_year", "maximum_drawdown_5_year", "tracking_error_1_month", "tracking_error_1_week", "tracking_error_1_year", "tracking_error_10_year", "tracking_error_3_month", "tracking_error_3_year", "tracking_error_5_year", "tracking_error_6_month"]
member_groups:
  "Properties": ["_meta", "annualized_return_1_year", "annualized_return_10_year", "annualized_return_3_year", "annualized_return_5_year", "annualized_return_current_year", "calendar_year_return_1_year_back", "calendar_year_return_2_year_back", "calendar_year_return_3_year_back", "calendar_year_return_4_year_back", "calendar_year_return_5_year_back", "cumulated_return_1_month", "cumulated_return_1_year", "cumulated_return_10_year", "cumulated_return_3_month", "cumulated_return_3_year", "cumulated_return_5_year", "cumulated_return_6_month", "cumulated_return_current_year", "cumulated_return_since_start", "diamond_rating", "diamond_rating_date", "id", "maximum_drawdown_1_year", "maximum_drawdown_2_year", "maximum_drawdown_3_year", "maximum_drawdown_4_year", "maximum_drawdown_5_year", "tracking_error_1_month", "tracking_error_1_week", "tracking_error_1_year", "tracking_error_10_year", "tracking_error_3_month", "tracking_error_3_year", "tracking_error_5_year", "tracking_error_6_month"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiFundKeyfigure

Keyfigure holds fund-specific performance and risk key figures at listing level.
Covers cumulated and annualised returns across multiple horizons,
calendar year returns, maximum drawdown, and tracking error.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.Keyfigure

```ts
interface CdapiFundKeyfigure {
    _meta: BasedefEntityMeta;
    annualized_return_1_year: number;
    annualized_return_10_year: number;
    annualized_return_3_year: number;
    annualized_return_5_year: number;
    annualized_return_current_year: number;
    calendar_year_return_1_year_back: number;
    calendar_year_return_2_year_back: number;
    calendar_year_return_3_year_back: number;
    calendar_year_return_4_year_back: number;
    calendar_year_return_5_year_back: number;
    cumulated_return_1_month: number;
    cumulated_return_1_year: number;
    cumulated_return_10_year: number;
    cumulated_return_3_month: number;
    cumulated_return_3_year: number;
    cumulated_return_5_year: number;
    cumulated_return_6_month: number;
    cumulated_return_current_year: number;
    cumulated_return_since_start: number;
    diamond_rating: number;
    diamond_rating_date: string;
    id: string;
    maximum_drawdown_1_year: number;
    maximum_drawdown_2_year: number;
    maximum_drawdown_3_year: number;
    maximum_drawdown_4_year: number;
    maximum_drawdown_5_year: number;
    tracking_error_1_month: number;
    tracking_error_1_week: number;
    tracking_error_1_year: number;
    tracking_error_10_year: number;
    tracking_error_3_month: number;
    tracking_error_3_year: number;
    tracking_error_5_year: number;
    tracking_error_6_month: number;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` annualized_return_1_year

```ts
annualized_return_1_year: number
```

Annualised return over 1 year.

##### Remarks

Format: double

#### `Readonly` annualized_return_10_year

```ts
annualized_return_10_year: number
```

Annualised return over 10 years.

##### Remarks

Format: double

#### `Readonly` annualized_return_3_year

```ts
annualized_return_3_year: number
```

Annualised return over 3 years (compound annual growth rate).

##### Remarks

Format: double

#### `Readonly` annualized_return_5_year

```ts
annualized_return_5_year: number
```

Annualised return over 5 years.

##### Remarks

Format: double

#### `Readonly` annualized_return_current_year

```ts
annualized_return_current_year: number
```

Annualised return for the current calendar year (year-to-date, annualised).

##### Remarks

Format: double

#### `Readonly` calendar_year_return_1_year_back

```ts
calendar_year_return_1_year_back: number
```

Calendar year return for the full year ending 31 Dec of 1 year ago.

##### Remarks

Format: double

#### `Readonly` calendar_year_return_2_year_back

```ts
calendar_year_return_2_year_back: number
```

Calendar year return for the full year ending 31 Dec of 2 years ago.

##### Remarks

Format: double

#### `Readonly` calendar_year_return_3_year_back

```ts
calendar_year_return_3_year_back: number
```

Calendar year return for the full year ending 31 Dec of 3 years ago.

##### Remarks

Format: double

#### `Readonly` calendar_year_return_4_year_back

```ts
calendar_year_return_4_year_back: number
```

Calendar year return for the full year ending 31 Dec of 4 years ago.

##### Remarks

Format: double

#### `Readonly` calendar_year_return_5_year_back

```ts
calendar_year_return_5_year_back: number
```

Calendar year return for the full year ending 31 Dec of 5 years ago.

##### Remarks

Format: double

#### `Readonly` cumulated_return_1_month

```ts
cumulated_return_1_month: number
```

Cumulated (total) return over 1 month — percentage change in NAV over the period.

##### Remarks

Format: double

#### `Readonly` cumulated_return_1_year

```ts
cumulated_return_1_year: number
```

Cumulated return over 1 year.

##### Remarks

Format: double

#### `Readonly` cumulated_return_10_year

```ts
cumulated_return_10_year: number
```

Cumulated return over 10 years.

##### Remarks

Format: double

#### `Readonly` cumulated_return_3_month

```ts
cumulated_return_3_month: number
```

Cumulated return over 3 months.

##### Remarks

Format: double

#### `Readonly` cumulated_return_3_year

```ts
cumulated_return_3_year: number
```

Cumulated return over 3 years.

##### Remarks

Format: double

#### `Readonly` cumulated_return_5_year

```ts
cumulated_return_5_year: number
```

Cumulated return over 5 years.

##### Remarks

Format: double

#### `Readonly` cumulated_return_6_month

```ts
cumulated_return_6_month: number
```

Cumulated return over 6 months.

##### Remarks

Format: double

#### `Readonly` cumulated_return_current_year

```ts
cumulated_return_current_year: number
```

Cumulated return since the start of the current calendar year (year-to-date).

##### Remarks

Format: double

#### `Readonly` cumulated_return_since_start

```ts
cumulated_return_since_start: number
```

Cumulated return since fund inception.

##### Remarks

Format: double

#### `Readonly` diamond_rating

```ts
diamond_rating: number
```

Infront proprietary Diamond Rating — a composite fund quality score.

##### Remarks

Format: int32

#### `Readonly` diamond_rating_date

```ts
diamond_rating_date: string
```

Date of the most recent Diamond Rating. ISO-8601 recommended.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this listing.

#### `Readonly` maximum_drawdown_1_year

```ts
maximum_drawdown_1_year: number
```

Maximum Drawdown (MDD) over 1 year — the largest peak-to-trough NAV decline
expressed as a percentage. Measures the worst-case loss from a high point.

##### Remarks

Format: double

#### `Readonly` maximum_drawdown_2_year

```ts
maximum_drawdown_2_year: number
```

Maximum Drawdown over 2 years.

##### Remarks

Format: double

#### `Readonly` maximum_drawdown_3_year

```ts
maximum_drawdown_3_year: number
```

Maximum Drawdown over 3 years.

##### Remarks

Format: double

#### `Readonly` maximum_drawdown_4_year

```ts
maximum_drawdown_4_year: number
```

Maximum Drawdown over 4 years.

##### Remarks

Format: double

#### `Readonly` maximum_drawdown_5_year

```ts
maximum_drawdown_5_year: number
```

Maximum Drawdown over 5 years.

##### Remarks

Format: double

#### `Readonly` tracking_error_1_month

```ts
tracking_error_1_month: number
```

Tracking error over 1 month.

##### Remarks

Format: double

#### `Readonly` tracking_error_1_week

```ts
tracking_error_1_week: number
```

Tracking error over 1 week — annualised standard deviation of the difference
between the fund's returns and its benchmark index returns.
A low tracking error indicates the fund closely tracks its benchmark.

##### Remarks

Format: double

#### `Readonly` tracking_error_1_year

```ts
tracking_error_1_year: number
```

Tracking error over 1 year.

##### Remarks

Format: double

#### `Readonly` tracking_error_10_year

```ts
tracking_error_10_year: number
```

Tracking error over 10 years.

##### Remarks

Format: double

#### `Readonly` tracking_error_3_month

```ts
tracking_error_3_month: number
```

Tracking error over 3 months.

##### Remarks

Format: double

#### `Readonly` tracking_error_3_year

```ts
tracking_error_3_year: number
```

Tracking error over 3 years.

##### Remarks

Format: double

#### `Readonly` tracking_error_5_year

```ts
tracking_error_5_year: number
```

Tracking error over 5 years.

##### Remarks

Format: double

#### `Readonly` tracking_error_6_month

```ts
tracking_error_6_month: number
```

Tracking error over 6 months.

##### Remarks

Format: double
