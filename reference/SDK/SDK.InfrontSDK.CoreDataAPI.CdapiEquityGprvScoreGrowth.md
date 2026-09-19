---
title: "CdapiEquityGprvScoreGrowth"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreGrowth"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityGprvScoreGrowth"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreGrowth.html"
defines: ["CdapiEquityGprvScoreGrowth"]
member_count: 5
members: ["earnings_before_tax_growth_1_year", "gross_profit_growth_1_year", "growth_net_sales", "net_sales_cagr_3_year", "score"]
member_groups:
  "Properties": ["earnings_before_tax_growth_1_year", "gross_profit_growth_1_year", "growth_net_sales", "net_sales_cagr_3_year", "score"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreValueDetail"]
---

# CdapiEquityGprvScoreGrowth

Growth sub-score based on revenue and income growth metrics.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.GprvScore_Growth

```ts
interface CdapiEquityGprvScoreGrowth {
    earnings_before_tax_growth_1_year: CdapiEquityGprvScoreValueDetail;
    gross_profit_growth_1_year: CdapiEquityGprvScoreValueDetail;
    growth_net_sales: CdapiEquityGprvScoreValueDetail;
    net_sales_cagr_3_year: CdapiEquityGprvScoreValueDetail;
    score: number;
}
```

### Properties

#### `Readonly` earnings_before_tax_growth_1_year

```ts
earnings_before_tax_growth_1_year: CdapiEquityGprvScoreValueDetail
```

EBT growth (1-year). Applicable to financial companies only.

#### `Readonly` gross_profit_growth_1_year

```ts
gross_profit_growth_1_year: CdapiEquityGprvScoreValueDetail
```

Gross profit growth (1-year). Applicable to non-financial companies only.

#### `Readonly` growth_net_sales

```ts
growth_net_sales: CdapiEquityGprvScoreValueDetail
```

Net sales growth. Applicable to financial and non-financial companies.

#### `Readonly` net_sales_cagr_3_year

```ts
net_sales_cagr_3_year: CdapiEquityGprvScoreValueDetail
```

3-year net sales CAGR. Applicable to financial and non-financial companies.

#### `Readonly` score

```ts
score: number
```

Aggregated growth score (0–100).

##### Remarks

Format: int32
