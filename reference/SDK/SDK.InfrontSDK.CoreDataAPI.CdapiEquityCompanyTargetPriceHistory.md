---
title: "CdapiEquityCompanyTargetPriceHistory"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyTargetPriceHistory"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyTargetPriceHistory"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyTargetPriceHistory.html"
defines: ["CdapiEquityCompanyTargetPriceHistory"]
member_count: 12
members: ["close_price", "currency_code", "date", "high", "id", "low", "mean", "median", "number_of_estimates", "rel_std_dev", "source", "std_dev"]
member_groups:
  "Properties": ["close_price", "currency_code", "date", "high", "id", "low", "mean", "median", "number_of_estimates", "rel_std_dev", "source", "std_dev"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyTargetPriceHistorySource"]
---

# CdapiEquityCompanyTargetPriceHistory

CompanyTargetPriceHistory holds a time-series of consensus target price snapshots
for an issuer, alongside the corresponding closing price at each snapshot date.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyTargetPriceHistory

```ts
interface CdapiEquityCompanyTargetPriceHistory {
    close_price: number;
    currency_code: string;
    date: string;
    high: number;
    id: string;
    low: number;
    mean: number;
    median: number;
    number_of_estimates: number;
    rel_std_dev: number;
    source: CdapiEquityCompanyTargetPriceHistorySource;
    std_dev: number;
}
```

### Properties

#### `Readonly` close_price

```ts
close_price: number
```

Closing market price of the instrument on this date.

##### Remarks

Format: double

#### `Readonly` currency_code

```ts
currency_code: string
```

ISO 4217 currency code in which prices are expressed.

#### `Readonly` date

```ts
date: string
```

Date of this target price snapshot. ISO-8601 recommended.

#### `Readonly` high

```ts
high: number
```

Highest individual analyst target price at this snapshot.

##### Remarks

Format: double

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this record.

#### `Readonly` low

```ts
low: number
```

Lowest individual analyst target price at this snapshot.

##### Remarks

Format: double

#### `Readonly` mean

```ts
mean: number
```

Mean analyst target price at this snapshot.

##### Remarks

Format: double

#### `Readonly` median

```ts
median: number
```

Median analyst target price at this snapshot date.

##### Remarks

Format: double

#### `Readonly` number_of_estimates

```ts
number_of_estimates: number
```

Number of analyst estimates at this snapshot.

##### Remarks

Format: int32

#### `Readonly` rel_std_dev

```ts
rel_std_dev: number
```

Relative standard deviation (std_dev / mean) at this snapshot.

##### Remarks

Format: double

#### `Readonly` source

```ts
source: CdapiEquityCompanyTargetPriceHistorySource
```

Data source for this target price history record.

##### Remarks

Format: enum

#### `Readonly` std_dev

```ts
std_dev: number
```

Standard deviation of the analyst target price distribution at this snapshot.

##### Remarks

Format: double
