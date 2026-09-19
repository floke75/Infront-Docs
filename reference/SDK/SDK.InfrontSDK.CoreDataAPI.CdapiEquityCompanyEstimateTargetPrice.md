---
title: "CdapiEquityCompanyEstimateTargetPrice"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateTargetPrice"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyEstimateTargetPrice"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyEstimateTargetPrice.html"
defines: ["CdapiEquityCompanyEstimateTargetPrice"]
member_count: 16
members: ["currency_code", "date", "date_upside", "high", "high_upside", "id", "low", "low_upside", "mean", "mean_upside", "median", "median_upside", "number_of_estimates", "price_upside", "rel_std_dev", "std_dev"]
member_groups:
  "Properties": ["currency_code", "date", "date_upside", "high", "high_upside", "id", "low", "low_upside", "mean", "mean_upside", "median", "median_upside", "number_of_estimates", "price_upside", "rel_std_dev", "std_dev"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityTargetPriceTpId"]
---

# CdapiEquityCompanyEstimateTargetPrice

TargetPrice holds the consensus analyst target price distribution for an issuer.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyEstimate_TargetPrice

```ts
interface CdapiEquityCompanyEstimateTargetPrice {
    currency_code: string;
    date: string;
    date_upside: string;
    high: number;
    high_upside: number;
    id: CdapiEquityTargetPriceTpId;
    low: number;
    low_upside: number;
    mean: number;
    mean_upside: number;
    median: number;
    median_upside: number;
    number_of_estimates: number;
    price_upside: number;
    rel_std_dev: number;
    std_dev: number;
}
```

### Properties

#### `Readonly` currency_code

```ts
currency_code: string
```

ISO 4217 currency code in which target prices are expressed.

#### `Readonly` date

```ts
date: string
```

Date of the target price snapshot. ISO-8601 recommended.

#### `Readonly` date_upside

```ts
date_upside: string
```

Date used for the upside calculation. ISO-8601 recommended.

#### `Readonly` high

```ts
high: number
```

Highest individual analyst target price.

##### Remarks

Format: double

#### `Readonly` high_upside

```ts
high_upside: number
```

Percentage upside from current price to the highest target price.

##### Remarks

Format: double

#### `Readonly` id

```ts
id: CdapiEquityTargetPriceTpId
```

Composite identifier for this target price record.

#### `Readonly` low

```ts
low: number
```

Lowest individual analyst target price.

##### Remarks

Format: double

#### `Readonly` low_upside

```ts
low_upside: number
```

Percentage upside from current price to the lowest target price.

##### Remarks

Format: double

#### `Readonly` mean

```ts
mean: number
```

Mean (average) analyst target price.

##### Remarks

Format: double

#### `Readonly` mean_upside

```ts
mean_upside: number
```

Percentage upside from current price to the mean target price.

##### Remarks

Format: double

#### `Readonly` median

```ts
median: number
```

Median analyst target price.

##### Remarks

Format: double

#### `Readonly` median_upside

```ts
median_upside: number
```

Percentage upside from current price to the median target price.

##### Remarks

Format: double

#### `Readonly` number_of_estimates

```ts
number_of_estimates: number
```

Number of analyst estimates contributing to this target price consensus.

##### Remarks

Format: int32

#### `Readonly` price_upside

```ts
price_upside: number
```

Percentage upside calculated relative to the current market price.

##### Remarks

Format: double

#### `Readonly` rel_std_dev

```ts
rel_std_dev: number
```

Relative standard deviation (std_dev / mean) — measures consensus dispersion.

##### Remarks

Format: double

#### `Readonly` std_dev

```ts
std_dev: number
```

Standard deviation of the analyst target price distribution.

##### Remarks

Format: double
