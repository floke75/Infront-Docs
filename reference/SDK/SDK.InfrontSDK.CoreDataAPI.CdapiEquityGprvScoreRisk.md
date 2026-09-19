---
title: "CdapiEquityGprvScoreRisk"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreRisk"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityGprvScoreRisk"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreRisk.html"
defines: ["CdapiEquityGprvScoreRisk"]
member_count: 5
members: ["debt_ebitda_ratio", "debt_equity_ratio", "net_debt_equity_ratio", "score", "volatility_3_month"]
member_groups:
  "Properties": ["debt_ebitda_ratio", "debt_equity_ratio", "net_debt_equity_ratio", "score", "volatility_3_month"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreValueDetail"]
---

# CdapiEquityGprvScoreRisk

Risk sub-score based on leverage and volatility metrics.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.GprvScore_Risk

```ts
interface CdapiEquityGprvScoreRisk {
    debt_ebitda_ratio: CdapiEquityGprvScoreValueDetail;
    debt_equity_ratio: CdapiEquityGprvScoreValueDetail;
    net_debt_equity_ratio: CdapiEquityGprvScoreValueDetail;
    score: number;
    volatility_3_month: CdapiEquityGprvScoreValueDetail;
}
```

### Properties

#### `Readonly` debt_ebitda_ratio

```ts
debt_ebitda_ratio: CdapiEquityGprvScoreValueDetail
```

Debt-to-EBITDA ratio. Applicable to non-financial companies only.

#### `Readonly` debt_equity_ratio

```ts
debt_equity_ratio: CdapiEquityGprvScoreValueDetail
```

Debt-to-equity ratio. Applicable to financial and non-financial companies.

#### `Readonly` net_debt_equity_ratio

```ts
net_debt_equity_ratio: CdapiEquityGprvScoreValueDetail
```

Net debt-to-equity ratio. Applicable to financial companies only.

#### `Readonly` score

```ts
score: number
```

Aggregated risk score (0–100).

##### Remarks

Format: int32

#### `Readonly` volatility_3_month

```ts
volatility_3_month: CdapiEquityGprvScoreValueDetail
```

3-month price volatility. Applicable to financial and non-financial companies.
