---
title: "CdapiCommonEsgRiskClarityData"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEsgRiskClarityData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEsgRiskClarityData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEsgRiskClarityData.html"
defines: ["CdapiCommonEsgRiskClarityData"]
member_count: 3
members: ["meta", "relevance", "score"]
member_groups:
  "Properties": ["meta", "relevance", "score"]
---

# CdapiCommonEsgRiskClarityData

Data holds score, relevance, metadata, and names for a single ESG risk dimension.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EsgRiskClarity_Data

```ts
interface CdapiCommonEsgRiskClarityData {
    meta: string;
    relevance: number;
    score: number;
}
```

### Properties

#### `Readonly` meta

```ts
meta: string
```

Metadata qualifier for the score (e.g. data availability flags).

#### `Readonly` relevance

```ts
relevance: number
```

Relevance indicator — significance of this dimension for the issuer's industry.

##### Remarks

Format: int32

#### `Readonly` score

```ts
score: number
```

Numeric ESG risk score for this dimension.

##### Remarks

Format: int32
