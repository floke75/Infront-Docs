---
title: "CdapiEquityGprvScoreProfitability"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreProfitability"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityGprvScoreProfitability"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreProfitability.html"
defines: ["CdapiEquityGprvScoreProfitability"]
member_count: 6
members: ["earnings_before_tax_margin", "ebit_margin", "ebitda_margin", "net_profit_margin", "net_profit_margin_average_3_year", "score"]
member_groups:
  "Properties": ["earnings_before_tax_margin", "ebit_margin", "ebitda_margin", "net_profit_margin", "net_profit_margin_average_3_year", "score"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreValueDetail"]
---

# CdapiEquityGprvScoreProfitability

Profitability sub-score based on margin metrics.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.GprvScore_Profitability

```ts
interface CdapiEquityGprvScoreProfitability {
    earnings_before_tax_margin: CdapiEquityGprvScoreValueDetail;
    ebit_margin: CdapiEquityGprvScoreValueDetail;
    ebitda_margin: CdapiEquityGprvScoreValueDetail;
    net_profit_margin: CdapiEquityGprvScoreValueDetail;
    net_profit_margin_average_3_year: CdapiEquityGprvScoreValueDetail;
    score: number;
}
```

### Properties

#### `Readonly` earnings_before_tax_margin

```ts
earnings_before_tax_margin: CdapiEquityGprvScoreValueDetail
```

EBT margin. Applicable to financial companies only.

#### `Readonly` ebit_margin

```ts
ebit_margin: CdapiEquityGprvScoreValueDetail
```

EBIT margin. Applicable to non-financial companies only.

#### `Readonly` ebitda_margin

```ts
ebitda_margin: CdapiEquityGprvScoreValueDetail
```

EBITDA margin. Applicable to non-financial companies only.

#### `Readonly` net_profit_margin

```ts
net_profit_margin: CdapiEquityGprvScoreValueDetail
```

Net profit margin. Applicable to financial and non-financial companies.

#### `Readonly` net_profit_margin_average_3_year

```ts
net_profit_margin_average_3_year: CdapiEquityGprvScoreValueDetail
```

3-year average net profit margin. Applicable to financial companies only.

#### `Readonly` score

```ts
score: number
```

Aggregated profitability score (0–100).

##### Remarks

Format: int32
