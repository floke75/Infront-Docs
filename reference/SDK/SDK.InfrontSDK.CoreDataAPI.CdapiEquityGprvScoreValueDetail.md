---
title: "CdapiEquityGprvScoreValueDetail"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreValueDetail"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityGprvScoreValueDetail"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityGprvScoreValueDetail.html"
defines: ["CdapiEquityGprvScoreValueDetail"]
member_count: 3
members: ["metric", "score", "value"]
member_groups:
  "Properties": ["metric", "score", "value"]
---

# CdapiEquityGprvScoreValueDetail

ValueDetail holds the raw value, peer group distribution metrics, and percentile score
for a single GPRV input metric.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.GprvScore_ValueDetail

```ts
interface CdapiEquityGprvScoreValueDetail {
    metric: readonly number[];
    score: number;
    value: number;
}
```

### Properties

#### `Readonly` metric

```ts
metric: readonly number[]
```

Peer group distribution breakpoints corresponding to the metric_header scale.

#### `Readonly` score

```ts
score: number
```

Percentile score of this issuer within the peer group for this metric (0–100).

##### Remarks

Format: int32

#### `Readonly` value

```ts
value: number
```

The actual metric value for this issuer.

##### Remarks

Format: double
