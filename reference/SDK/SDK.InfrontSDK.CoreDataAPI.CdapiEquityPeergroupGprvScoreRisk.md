---
title: "CdapiEquityPeergroupGprvScoreRisk"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupGprvScoreRisk"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityPeergroupGprvScoreRisk"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupGprvScoreRisk.html"
defines: ["CdapiEquityPeergroupGprvScoreRisk"]
member_count: 5
members: ["debt_ebitda_ratio_score", "debt_equity_ratio_score", "net_debt_equity_ratio_score", "score", "volatility_3_month_score"]
member_groups:
  "Properties": ["debt_ebitda_ratio_score", "debt_equity_ratio_score", "net_debt_equity_ratio_score", "score", "volatility_3_month_score"]
---

# CdapiEquityPeergroupGprvScoreRisk

Peer group averaged risk sub-scores.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.PeergroupGprvScore_Risk

```ts
interface CdapiEquityPeergroupGprvScoreRisk {
    debt_ebitda_ratio_score: number;
    debt_equity_ratio_score: number;
    net_debt_equity_ratio_score: number;
    score: number;
    volatility_3_month_score: number;
}
```

### Properties

#### `Readonly` debt_ebitda_ratio_score

```ts
debt_ebitda_ratio_score: number
```

Debt-to-EBITDA ratio score. Non-financial companies only.

##### Remarks

Format: int32

#### `Readonly` debt_equity_ratio_score

```ts
debt_equity_ratio_score: number
```

Debt-to-equity ratio score. Financial and non-financial companies.

##### Remarks

Format: int32

#### `Readonly` net_debt_equity_ratio_score

```ts
net_debt_equity_ratio_score: number
```

Net debt-to-equity ratio score. Financial companies only.

##### Remarks

Format: int32

#### `Readonly` score

```ts
score: number
```

Aggregated peer group risk score.

##### Remarks

Format: int32

#### `Readonly` volatility_3_month_score

```ts
volatility_3_month_score: number
```

3-month volatility score. Financial and non-financial companies.

##### Remarks

Format: int32
