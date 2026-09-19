---
title: "CdapiEquityIssuerEstimateKeyfigure"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuerEstimateKeyfigure"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityIssuerEstimateKeyfigure"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuerEstimateKeyfigure.html"
defines: ["CdapiEquityIssuerEstimateKeyfigure"]
member_count: 28
members: ["_meta", "dividend_payout_ratio", "dividend_yield", "earnings_per_share_growth_1_year", "earnings_yield", "ebit_margin", "ebitda_margin", "enterprise_value_ebit_ratio", "enterprise_value_ebitda_ratio", "enterprise_value_sales_ratio", "growth_net_sales", "id", "net_profit_margin", "operating_margin", "outlook_code", "outlook_number_of_analysts", "outlook_score", "price_bookvalue_ratio", "price_earnings_earnings_per_share_growth_ratio", "price_earnings_ratio", "price_sales_ratio", "primary_listing_currency_code", "report_currency_code", "return_on_equity", "source", "target_price_mean_upside", "target_price_median_upside", "target_price_upside_date"]
member_groups:
  "Properties": ["_meta", "dividend_payout_ratio", "dividend_yield", "earnings_per_share_growth_1_year", "earnings_yield", "ebit_margin", "ebitda_margin", "enterprise_value_ebit_ratio", "enterprise_value_ebitda_ratio", "enterprise_value_sales_ratio", "growth_net_sales", "id", "net_profit_margin", "operating_margin", "outlook_code", "outlook_number_of_analysts", "outlook_score", "price_bookvalue_ratio", "price_earnings_earnings_per_share_growth_ratio", "price_earnings_ratio", "price_sales_ratio", "primary_listing_currency_code", "report_currency_code", "return_on_equity", "source", "target_price_mean_upside", "target_price_median_upside", "target_price_upside_date"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuerEstimateKeyfigureOutlookCode", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityIssuerEstimateKeyfigureSource"]
---

# CdapiEquityIssuerEstimateKeyfigure

IssuerEstimateKeyfigure holds forward-looking (consensus estimate) key figures at issuer level.
Available for sources INFRONT and STANDARD_AND_POORS.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.IssuerEstimateKeyfigure

```ts
interface CdapiEquityIssuerEstimateKeyfigure {
    _meta: BasedefEntityMeta;
    dividend_payout_ratio: number;
    dividend_yield: number;
    earnings_per_share_growth_1_year: number;
    earnings_yield: number;
    ebit_margin: number;
    ebitda_margin: number;
    enterprise_value_ebit_ratio: number;
    enterprise_value_ebitda_ratio: number;
    enterprise_value_sales_ratio: number;
    growth_net_sales: number;
    id: string;
    net_profit_margin: number;
    operating_margin: number;
    outlook_code: CdapiEquityIssuerEstimateKeyfigureOutlookCode;
    outlook_number_of_analysts: number;
    outlook_score: number;
    price_bookvalue_ratio: number;
    price_earnings_earnings_per_share_growth_ratio: number;
    price_earnings_ratio: number;
    price_sales_ratio: number;
    primary_listing_currency_code: string;
    report_currency_code: string;
    return_on_equity: number;
    source: CdapiEquityIssuerEstimateKeyfigureSource;
    target_price_mean_upside: number;
    target_price_median_upside: number;
    target_price_upside_date: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` dividend_payout_ratio

```ts
dividend_payout_ratio: number
```

Consensus estimate for dividend payout ratio.

##### Remarks

Format: double

#### `Readonly` dividend_yield

```ts
dividend_yield: number
```

Consensus estimate for dividend yield.

##### Remarks

Format: double

#### `Readonly` earnings_per_share_growth_1_year

```ts
earnings_per_share_growth_1_year: number
```

Consensus estimate for year-on-year EPS growth.

##### Remarks

Format: double

#### `Readonly` earnings_yield

```ts
earnings_yield: number
```

Consensus estimate for earnings yield (EPS / share price).

##### Remarks

Format: double

#### `Readonly` ebit_margin

```ts
ebit_margin: number
```

Consensus estimate for EBIT margin.

##### Remarks

Format: double

#### `Readonly` ebitda_margin

```ts
ebitda_margin: number
```

Consensus estimate for EBITDA margin.

##### Remarks

Format: double

#### `Readonly` enterprise_value_ebit_ratio

```ts
enterprise_value_ebit_ratio: number
```

Consensus estimate for EV/EBIT ratio.

##### Remarks

Format: double

#### `Readonly` enterprise_value_ebitda_ratio

```ts
enterprise_value_ebitda_ratio: number
```

Consensus estimate for EV/EBITDA ratio.

##### Remarks

Format: double

#### `Readonly` enterprise_value_sales_ratio

```ts
enterprise_value_sales_ratio: number
```

Consensus estimate for EV/Sales ratio.

##### Remarks

Format: double

#### `Readonly` growth_net_sales

```ts
growth_net_sales: number
```

Consensus estimate for net sales growth.

##### Remarks

Format: double

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this record (= issuer_id).

#### `Readonly` net_profit_margin

```ts
net_profit_margin: number
```

Consensus estimate for net profit margin.

##### Remarks

Format: double

#### `Readonly` operating_margin

```ts
operating_margin: number
```

Consensus estimate for operating margin (EBIT / net sales).

##### Remarks

Format: double

#### `Readonly` outlook_code

```ts
outlook_code: CdapiEquityIssuerEstimateKeyfigureOutlookCode
```

Average analyst recommendation as an enum code (e.g. BUY, HOLD, SELL).

##### Remarks

Format: enum

#### `Readonly` outlook_number_of_analysts

```ts
outlook_number_of_analysts: number
```

Number of analysts contributing to the outlook consensus.

##### Remarks

Format: int32

#### `Readonly` outlook_score

```ts
outlook_score: number
```

Aggregate analyst outlook score (numeric representation of the average_code).

##### Remarks

Format: double

#### `Readonly` price_bookvalue_ratio

```ts
price_bookvalue_ratio: number
```

Consensus estimate for price-to-book value ratio.

##### Remarks

Format: double

#### `Readonly` price_earnings_earnings_per_share_growth_ratio

```ts
price_earnings_earnings_per_share_growth_ratio: number
```

Consensus estimate for PEG ratio (P/E divided by EPS growth rate).

##### Remarks

Format: double

#### `Readonly` price_earnings_ratio

```ts
price_earnings_ratio: number
```

Consensus estimate for price-to-earnings ratio.

##### Remarks

Format: double

#### `Readonly` price_sales_ratio

```ts
price_sales_ratio: number
```

Consensus estimate for price-to-sales ratio.

##### Remarks

Format: double

#### `Readonly` primary_listing_currency_code

```ts
primary_listing_currency_code: string
```

ISO 4217 currency code of the primary listing of this issuer.

#### `Readonly` report_currency_code

```ts
report_currency_code: string
```

ISO 4217 currency code used in the financial reports of this issuer.

#### `Readonly` return_on_equity

```ts
return_on_equity: number
```

Consensus estimate for return on equity (ROE).

##### Remarks

Format: double

#### `Readonly` source

```ts
source: CdapiEquityIssuerEstimateKeyfigureSource
```

Data source for these estimate key figures.

##### Remarks

Format: enum

#### `Readonly` target_price_mean_upside

```ts
target_price_mean_upside: number
```

Percentage upside from the current price to the mean analyst target price.

##### Remarks

Format: double

#### `Readonly` target_price_median_upside

```ts
target_price_median_upside: number
```

Percentage upside from the current price to the median analyst target price.

##### Remarks

Format: double

#### `Readonly` target_price_upside_date

```ts
target_price_upside_date: string
```

Date used for the target price upside calculation. ISO-8601 recommended.
