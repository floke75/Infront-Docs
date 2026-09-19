---
title: "CdapiEquityGprvScoreValue"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreValue"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityGprvScoreValue"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreValue.html"
defines: ["CdapiEquityGprvScoreValue"]
member_count: 5
members: ["dividend_yield", "enterprise_value_ebitda_ratio", "price_bookvalue_ratio", "price_earnings_ratio", "score"]
member_groups:
  "Properties": ["dividend_yield", "enterprise_value_ebitda_ratio", "price_bookvalue_ratio", "price_earnings_ratio", "score"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreValueDetail"]
---

# CdapiEquityGprvScoreValue

Value sub-score based on valuation multiples.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.GprvScore_Value

```ts
interface CdapiEquityGprvScoreValue {
    dividend_yield: CdapiEquityGprvScoreValueDetail;
    enterprise_value_ebitda_ratio: CdapiEquityGprvScoreValueDetail;
    price_bookvalue_ratio: CdapiEquityGprvScoreValueDetail;
    price_earnings_ratio: CdapiEquityGprvScoreValueDetail;
    score: number;
}
```

### Properties

#### `Readonly` dividend_yield

```ts
dividend_yield: CdapiEquityGprvScoreValueDetail
```

Dividend yield. Applicable to financial and non-financial companies.

#### `Readonly` enterprise_value_ebitda_ratio

```ts
enterprise_value_ebitda_ratio: CdapiEquityGprvScoreValueDetail
```

EV/EBITDA ratio. Applicable to non-financial companies only.

#### `Readonly` price_bookvalue_ratio

```ts
price_bookvalue_ratio: CdapiEquityGprvScoreValueDetail
```

P/B ratio. Applicable to financial companies only.

#### `Readonly` price_earnings_ratio

```ts
price_earnings_ratio: CdapiEquityGprvScoreValueDetail
```

P/E ratio. Applicable to financial and non-financial companies.

#### `Readonly` score

```ts
score: number
```

Aggregated value score (0–100).

##### Remarks

Format: int32
