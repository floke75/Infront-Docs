---
title: "CdapiEquityPeergroupGprvScore"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupGprvScore"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityPeergroupGprvScore"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupGprvScore.html"
defines: ["CdapiEquityPeergroupGprvScore"]
member_count: 7
members: ["growth", "id", "profitability", "risk", "source", "total_score", "value"]
member_groups:
  "Properties": ["growth", "id", "profitability", "risk", "source", "total_score", "value"]
reference_count: 5
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupGprvScoreGrowth", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupGprvScoreProfitability", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupGprvScoreRisk", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupGprvScoreSource", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityPeergroupGprvScoreValue"]
---

# CdapiEquityPeergroupGprvScore

PeergroupGprvScore holds the peer-group-averaged GPRV sub-scores.
Used to compare an individual company's GPRV scores against its peer group average.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.PeergroupGprvScore

```ts
interface CdapiEquityPeergroupGprvScore {
    growth: CdapiEquityPeergroupGprvScoreGrowth;
    id: string;
    profitability: CdapiEquityPeergroupGprvScoreProfitability;
    risk: CdapiEquityPeergroupGprvScoreRisk;
    source: CdapiEquityPeergroupGprvScoreSource;
    total_score: number;
    value: CdapiEquityPeergroupGprvScoreValue;
}
```

### Properties

#### `Readonly` growth

```ts
growth: CdapiEquityPeergroupGprvScoreGrowth
```

Peer group growth sub-scores.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this record (= issuer_id).

#### `Readonly` profitability

```ts
profitability: CdapiEquityPeergroupGprvScoreProfitability
```

Peer group profitability sub-scores.

#### `Readonly` risk

```ts
risk: CdapiEquityPeergroupGprvScoreRisk
```

Peer group risk sub-scores.

#### `Readonly` source

```ts
source: CdapiEquityPeergroupGprvScoreSource
```

Data source — reuses IssuerKeyfigure.Source enum.

##### Remarks

Format: enum

#### `Readonly` total_score

```ts
total_score: number
```

Overall peer group GPRV composite score.

##### Remarks

Format: double

#### `Readonly` value

```ts
value: CdapiEquityPeergroupGprvScoreValue
```

Peer group value sub-scores.
