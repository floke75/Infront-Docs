---
title: "CdapiEquityPeergroupGprvScoreGrowth"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupGprvScoreGrowth"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityPeergroupGprvScoreGrowth"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupGprvScoreGrowth.html"
defines: ["CdapiEquityPeergroupGprvScoreGrowth"]
member_count: 5
members: ["earnings_before_tax_growth_1_year_score", "gross_profit_growth_1_year_score", "growth_net_sales_score", "net_sales_cagr_3_year_score", "score"]
member_groups:
  "Properties": ["earnings_before_tax_growth_1_year_score", "gross_profit_growth_1_year_score", "growth_net_sales_score", "net_sales_cagr_3_year_score", "score"]
---

# CdapiEquityPeergroupGprvScoreGrowth

Peer group averaged growth sub-scores.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.PeergroupGprvScore_Growth

```ts
interface CdapiEquityPeergroupGprvScoreGrowth {
    earnings_before_tax_growth_1_year_score: number;
    gross_profit_growth_1_year_score: number;
    growth_net_sales_score: number;
    net_sales_cagr_3_year_score: number;
    score: number;
}
```

### Properties

#### `Readonly` earnings_before_tax_growth_1_year_score

```ts
earnings_before_tax_growth_1_year_score: number
```

EBT growth score. Financial companies only.

##### Remarks

Format: int32

#### `Readonly` gross_profit_growth_1_year_score

```ts
gross_profit_growth_1_year_score: number
```

Gross profit growth score. Non-financial companies only.

##### Remarks

Format: int32

#### `Readonly` growth_net_sales_score

```ts
growth_net_sales_score: number
```

Net sales growth score. Financial and non-financial companies.

##### Remarks

Format: int32

#### `Readonly` net_sales_cagr_3_year_score

```ts
net_sales_cagr_3_year_score: number
```

3-year net sales CAGR score. Financial and non-financial companies.

##### Remarks

Format: int32

#### `Readonly` score

```ts
score: number
```

Aggregated peer group growth score.

##### Remarks

Format: int32
