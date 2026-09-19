---
title: "CdapiEquityPeergroupGprvScoreProfitability"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupGprvScoreProfitability"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityPeergroupGprvScoreProfitability"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupGprvScoreProfitability.html"
defines: ["CdapiEquityPeergroupGprvScoreProfitability"]
member_count: 6
members: ["earnings_before_tax_margin_score", "ebit_margin_score", "ebitda_margin_score", "net_profit_margin_average_3_year_score", "net_profit_margin_score", "score"]
member_groups:
  "Properties": ["earnings_before_tax_margin_score", "ebit_margin_score", "ebitda_margin_score", "net_profit_margin_average_3_year_score", "net_profit_margin_score", "score"]
---

# CdapiEquityPeergroupGprvScoreProfitability

Peer group averaged profitability sub-scores.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.PeergroupGprvScore_Profitability

```ts
interface CdapiEquityPeergroupGprvScoreProfitability {
    earnings_before_tax_margin_score: number;
    ebit_margin_score: number;
    ebitda_margin_score: number;
    net_profit_margin_average_3_year_score: number;
    net_profit_margin_score: number;
    score: number;
}
```

### Properties

#### `Readonly` earnings_before_tax_margin_score

```ts
earnings_before_tax_margin_score: number
```

EBT margin score. Financial companies only.

##### Remarks

Format: int32

#### `Readonly` ebit_margin_score

```ts
ebit_margin_score: number
```

EBIT margin score. Non-financial companies only.

##### Remarks

Format: int32

#### `Readonly` ebitda_margin_score

```ts
ebitda_margin_score: number
```

EBITDA margin score. Non-financial companies only.

##### Remarks

Format: int32

#### `Readonly` net_profit_margin_average_3_year_score

```ts
net_profit_margin_average_3_year_score: number
```

3-year average net profit margin score. Financial companies only.

##### Remarks

Format: int32

#### `Readonly` net_profit_margin_score

```ts
net_profit_margin_score: number
```

Net profit margin score. Financial and non-financial companies.

##### Remarks

Format: int32

#### `Readonly` score

```ts
score: number
```

Aggregated peer group profitability score.

##### Remarks

Format: int32
