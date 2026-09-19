---
title: "CdapiEquityPeergroupGprvScoreValue"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupGprvScoreValue"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityPeergroupGprvScoreValue"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupGprvScoreValue.html"
defines: ["CdapiEquityPeergroupGprvScoreValue"]
member_count: 5
members: ["dividend_yield_score", "enterprise_value_ebitda_ratio_score", "price_bookvalue_ratio_score", "price_earnings_ratio_score", "score"]
member_groups:
  "Properties": ["dividend_yield_score", "enterprise_value_ebitda_ratio_score", "price_bookvalue_ratio_score", "price_earnings_ratio_score", "score"]
---

# CdapiEquityPeergroupGprvScoreValue

Peer group averaged value sub-scores.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.PeergroupGprvScore_Value

```ts
interface CdapiEquityPeergroupGprvScoreValue {
    dividend_yield_score: number;
    enterprise_value_ebitda_ratio_score: number;
    price_bookvalue_ratio_score: number;
    price_earnings_ratio_score: number;
    score: number;
}
```

### Properties

#### `Readonly` dividend_yield_score

```ts
dividend_yield_score: number
```

Dividend yield score. Financial and non-financial companies.

##### Remarks

Format: int32

#### `Readonly` enterprise_value_ebitda_ratio_score

```ts
enterprise_value_ebitda_ratio_score: number
```

EV/EBITDA ratio score. Non-financial companies only.

##### Remarks

Format: int32

#### `Readonly` price_bookvalue_ratio_score

```ts
price_bookvalue_ratio_score: number
```

P/B ratio score. Financial companies only.

##### Remarks

Format: int32

#### `Readonly` price_earnings_ratio_score

```ts
price_earnings_ratio_score: number
```

P/E ratio score. Financial and non-financial companies.

##### Remarks

Format: int32

#### `Readonly` score

```ts
score: number
```

Aggregated peer group value score.

##### Remarks

Format: int32
