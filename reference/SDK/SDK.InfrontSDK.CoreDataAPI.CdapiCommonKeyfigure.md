---
title: "CdapiCommonKeyfigure"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonKeyfigure"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonKeyfigure"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonKeyfigure.html"
defines: ["CdapiCommonKeyfigure"]
member_count: 56
members: ["_meta", "alpha_1_month", "alpha_1_week", "alpha_1_year", "alpha_10_year", "alpha_3_month", "alpha_3_year", "alpha_5_year", "alpha_6_month", "average_turnover_1_month", "average_turnover_1_week", "average_turnover_3_month", "beta_1_month", "beta_1_week", "beta_1_year", "beta_10_year", "beta_3_month", "beta_3_year", "beta_5_year", "beta_6_month", "calculation_timestamp", "high_price_52_week", "high_price_52_week_date", "high_price_alltime", "high_price_alltime_date", "high_price_current_year", "high_price_current_year_date", "last_price", "low_price_52_week", "low_price_52_week_date", "low_price_alltime", "low_price_alltime_date", "low_price_current_year", "low_price_current_year_date", "performance_1_day", "performance_1_month", "performance_1_week", "performance_1_year", "performance_10_year", "performance_3_month", "performance_3_year", "performance_5_year", "performance_6_month", "performance_current_year", "performance_current_year_absolute", "performance_since_inception", "performance_since_inception_date", "vola_1_month", "vola_1_week", "vola_1_year", "vola_10_year", "vola_3_month", "vola_3_year", "vola_5_year", "vola_6_month", "vola_current_year"]
member_groups:
  "Properties": ["_meta", "alpha_1_month", "alpha_1_week", "alpha_1_year", "alpha_10_year", "alpha_3_month", "alpha_3_year", "alpha_5_year", "alpha_6_month", "average_turnover_1_month", "average_turnover_1_week", "average_turnover_3_month", "beta_1_month", "beta_1_week", "beta_1_year", "beta_10_year", "beta_3_month", "beta_3_year", "beta_5_year", "beta_6_month", "calculation_timestamp", "high_price_52_week", "high_price_52_week_date", "high_price_alltime", "high_price_alltime_date", "high_price_current_year", "high_price_current_year_date", "last_price", "low_price_52_week", "low_price_52_week_date", "low_price_alltime", "low_price_alltime_date", "low_price_current_year", "low_price_current_year_date", "performance_1_day", "performance_1_month", "performance_1_week", "performance_1_year", "performance_10_year", "performance_3_month", "performance_3_year", "performance_5_year", "performance_6_month", "performance_current_year", "performance_current_year_absolute", "performance_since_inception", "performance_since_inception_date", "vola_1_month", "vola_1_week", "vola_1_year", "vola_10_year", "vola_3_month", "vola_3_year", "vola_5_year", "vola_6_month", "vola_current_year"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiCommonKeyfigure

Keyfigure holds listing-level price performance and risk key figures.
Covers period returns, volatility, beta, alpha, price extremes, and turnover
across multiple time horizons.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.Keyfigure

```ts
interface CdapiCommonKeyfigure {
    _meta: BasedefEntityMeta;
    alpha_1_month: number;
    alpha_1_week: number;
    alpha_1_year: number;
    alpha_10_year: number;
    alpha_3_month: number;
    alpha_3_year: number;
    alpha_5_year: number;
    alpha_6_month: number;
    average_turnover_1_month: number;
    average_turnover_1_week: number;
    average_turnover_3_month: number;
    beta_1_month: number;
    beta_1_week: number;
    beta_1_year: number;
    beta_10_year: number;
    beta_3_month: number;
    beta_3_year: number;
    beta_5_year: number;
    beta_6_month: number;
    calculation_timestamp: string;
    high_price_52_week: number;
    high_price_52_week_date: string;
    high_price_alltime: number;
    high_price_alltime_date: string;
    high_price_current_year: number;
    high_price_current_year_date: string;
    last_price: number;
    low_price_52_week: number;
    low_price_52_week_date: string;
    low_price_alltime: number;
    low_price_alltime_date: string;
    low_price_current_year: number;
    low_price_current_year_date: string;
    performance_1_day: number;
    performance_1_month: number;
    performance_1_week: number;
    performance_1_year: number;
    performance_10_year: number;
    performance_3_month: number;
    performance_3_year: number;
    performance_5_year: number;
    performance_6_month: number;
    performance_current_year: number;
    performance_current_year_absolute: number;
    performance_since_inception: number;
    performance_since_inception_date: string;
    vola_1_month: number;
    vola_1_week: number;
    vola_1_year: number;
    vola_10_year: number;
    vola_3_month: number;
    vola_3_year: number;
    vola_5_year: number;
    vola_6_month: number;
    vola_current_year: number;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` alpha_1_month

```ts
alpha_1_month: number
```

##### Remarks

Format: double

#### `Readonly` alpha_1_week

```ts
alpha_1_week: number
```

Alpha over last 1 week — excess return vs. benchmark adjusted for beta.
Positive = outperformance; negative = underperformance.

##### Remarks

Format: double

#### `Readonly` alpha_1_year

```ts
alpha_1_year: number
```

##### Remarks

Format: double

#### `Readonly` alpha_10_year

```ts
alpha_10_year: number
```

##### Remarks

Format: double

#### `Readonly` alpha_3_month

```ts
alpha_3_month: number
```

##### Remarks

Format: double

#### `Readonly` alpha_3_year

```ts
alpha_3_year: number
```

##### Remarks

Format: double

#### `Readonly` alpha_5_year

```ts
alpha_5_year: number
```

##### Remarks

Format: double

#### `Readonly` alpha_6_month

```ts
alpha_6_month: number
```

##### Remarks

Format: double

#### `Readonly` average_turnover_1_month

```ts
average_turnover_1_month: number
```

Average daily turnover over the last 1 month.

##### Remarks

Format: double

#### `Readonly` average_turnover_1_week

```ts
average_turnover_1_week: number
```

Average daily turnover over the last 1 week.

##### Remarks

Format: double

#### `Readonly` average_turnover_3_month

```ts
average_turnover_3_month: number
```

Average daily turnover over the last 3 months.

##### Remarks

Format: double

#### `Readonly` beta_1_month

```ts
beta_1_month: number
```

##### Remarks

Format: double

#### `Readonly` beta_1_week

```ts
beta_1_week: number
```

Beta over last 1 week — sensitivity of the stock's return to market movements.
Values > 1 = amplifies market moves ("aggressive"); < 1 = attenuates moves ("defensive").

##### Remarks

Format: double

#### `Readonly` beta_1_year

```ts
beta_1_year: number
```

##### Remarks

Format: double

#### `Readonly` beta_10_year

```ts
beta_10_year: number
```

##### Remarks

Format: double

#### `Readonly` beta_3_month

```ts
beta_3_month: number
```

##### Remarks

Format: double

#### `Readonly` beta_3_year

```ts
beta_3_year: number
```

##### Remarks

Format: double

#### `Readonly` beta_5_year

```ts
beta_5_year: number
```

##### Remarks

Format: double

#### `Readonly` beta_6_month

```ts
beta_6_month: number
```

##### Remarks

Format: double

#### `Readonly` calculation_timestamp

```ts
calculation_timestamp: string
```

Timestamp at which these key figures were last calculated. ISO-8601 recommended.

#### `Readonly` high_price_52_week

```ts
high_price_52_week: number
```

Highest traded price within the last 52 weeks.

##### Remarks

Format: double

#### `Readonly` high_price_52_week_date

```ts
high_price_52_week_date: string
```

Date of the 52-week high.

#### `Readonly` high_price_alltime

```ts
high_price_alltime: number
```

All-time high traded price.

##### Remarks

Format: double

#### `Readonly` high_price_alltime_date

```ts
high_price_alltime_date: string
```

Date of the all-time high.

#### `Readonly` high_price_current_year

```ts
high_price_current_year: number
```

Highest traded price within the current calendar year.

##### Remarks

Format: double

#### `Readonly` high_price_current_year_date

```ts
high_price_current_year_date: string
```

Date of the current calendar year's high. ISO-8601 recommended.

#### `Readonly` last_price

```ts
last_price: number
```

##### Remarks

Format: double

#### `Readonly` low_price_52_week

```ts
low_price_52_week: number
```

Lowest traded price within the last 52 weeks.

##### Remarks

Format: double

#### `Readonly` low_price_52_week_date

```ts
low_price_52_week_date: string
```

Date of the 52-week low.

#### `Readonly` low_price_alltime

```ts
low_price_alltime: number
```

All-time low traded price.

##### Remarks

Format: double

#### `Readonly` low_price_alltime_date

```ts
low_price_alltime_date: string
```

Date of the all-time low.

#### `Readonly` low_price_current_year

```ts
low_price_current_year: number
```

Lowest traded price within the current calendar year.

##### Remarks

Format: double

#### `Readonly` low_price_current_year_date

```ts
low_price_current_year_date: string
```

Date of the current calendar year's low. ISO-8601 recommended.

#### `Readonly` performance_1_day

```ts
performance_1_day: number
```

% price change over the last 1 trading day.

##### Remarks

Format: double

#### `Readonly` performance_1_month

```ts
performance_1_month: number
```

% price change over the last 1 month.

##### Remarks

Format: double

#### `Readonly` performance_1_week

```ts
performance_1_week: number
```

% price change over the last 1 week.

##### Remarks

Format: double

#### `Readonly` performance_1_year

```ts
performance_1_year: number
```

% price change over the last 1 year.

##### Remarks

Format: double

#### `Readonly` performance_10_year

```ts
performance_10_year: number
```

% price change over the last 10 years.

##### Remarks

Format: double

#### `Readonly` performance_3_month

```ts
performance_3_month: number
```

% price change over the last 3 months.

##### Remarks

Format: double

#### `Readonly` performance_3_year

```ts
performance_3_year: number
```

% price change over the last 3 years.

##### Remarks

Format: double

#### `Readonly` performance_5_year

```ts
performance_5_year: number
```

% price change over the last 5 years.

##### Remarks

Format: double

#### `Readonly` performance_6_month

```ts
performance_6_month: number
```

% price change over the last 6 months.

##### Remarks

Format: double

#### `Readonly` performance_current_year

```ts
performance_current_year: number
```

% price change from start of current calendar year (year-to-date).

##### Remarks

Format: double

#### `Readonly` performance_current_year_absolute

```ts
performance_current_year_absolute: number
```

Absolute price change from start of current calendar year.

##### Remarks

Format: double

#### `Readonly` performance_since_inception

```ts
performance_since_inception: number
```

% price change since the instrument's inception date.

##### Remarks

Format: double

#### `Readonly` performance_since_inception_date

```ts
performance_since_inception_date: string
```

Inception date used for the since-inception performance calculation. ISO-8601 recommended.

#### `Readonly` vola_1_month

```ts
vola_1_month: number
```

##### Remarks

Format: double

#### `Readonly` vola_1_week

```ts
vola_1_week: number
```

##### Remarks

Format: double

#### `Readonly` vola_1_year

```ts
vola_1_year: number
```

##### Remarks

Format: double

#### `Readonly` vola_10_year

```ts
vola_10_year: number
```

##### Remarks

Format: double

#### `Readonly` vola_3_month

```ts
vola_3_month: number
```

##### Remarks

Format: double

#### `Readonly` vola_3_year

```ts
vola_3_year: number
```

##### Remarks

Format: double

#### `Readonly` vola_5_year

```ts
vola_5_year: number
```

##### Remarks

Format: double

#### `Readonly` vola_6_month

```ts
vola_6_month: number
```

##### Remarks

Format: double

#### `Readonly` vola_current_year

```ts
vola_current_year: number
```

Annualised price volatility for the current calendar year.

##### Remarks

Format: double
