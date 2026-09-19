---
title: "CdapiEquityGprvScore"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScore"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityGprvScore"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScore.html"
defines: ["CdapiEquityGprvScore"]
member_count: 9
members: ["_meta", "growth", "id", "metric_header", "profitability", "risk", "source", "total_score", "value"]
member_groups:
  "Properties": ["_meta", "growth", "id", "metric_header", "profitability", "risk", "source", "total_score", "value"]
reference_count: 6
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreGrowth", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreProfitability", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreRisk", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreSource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreValue"]
---

# CdapiEquityGprvScore

GprvScore holds the GPRV composite score for an issuer.
GPRV stands for Growth, Profitability, Risk, and Value — four scored dimensions
used to rank equities within their peer group. Scores are relative percentile ranks
expressed on a scale of 0–100 with breakpoints at [0, 20, 40, 60, 80, 100].

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.GprvScore

```ts
interface CdapiEquityGprvScore {
    _meta: BasedefEntityMeta;
    growth: CdapiEquityGprvScoreGrowth;
    id: string;
    metric_header: readonly number[];
    profitability: CdapiEquityGprvScoreProfitability;
    risk: CdapiEquityGprvScoreRisk;
    source: CdapiEquityGprvScoreSource;
    total_score: number;
    value: CdapiEquityGprvScoreValue;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` growth

```ts
growth: CdapiEquityGprvScoreGrowth
```

Growth dimension score and contributing metrics.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this record (= issuer_id).

#### `Readonly` metric_header

```ts
metric_header: readonly number[]
```

Peer group distribution breakpoints for the score scale [0, 20, 40, 60, 80, 100].

#### `Readonly` profitability

```ts
profitability: CdapiEquityGprvScoreProfitability
```

Profitability dimension score and contributing metrics.

#### `Readonly` risk

```ts
risk: CdapiEquityGprvScoreRisk
```

Risk dimension score and contributing metrics.

#### `Readonly` source

```ts
source: CdapiEquityGprvScoreSource
```

Data source — reuses IssuerKeyfigure.Source enum.

##### Remarks

Format: enum

#### `Readonly` total_score

```ts
total_score: number
```

Overall GPRV composite score (0–100), aggregated from all four sub-scores.

##### Remarks

Format: double

#### `Readonly` value

```ts
value: CdapiEquityGprvScoreValue
```

Value dimension score and contributing metrics.
