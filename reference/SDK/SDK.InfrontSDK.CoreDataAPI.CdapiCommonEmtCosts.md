---
title: "CdapiCommonEmtCosts"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtCosts"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEmtCosts"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtCosts.html"
defines: ["CdapiCommonEmtCosts"]
member_count: 5
members: ["_meta", "ex_ante", "ex_post", "id", "source"]
member_groups:
  "Properties": ["_meta", "ex_ante", "ex_post", "id", "source"]
reference_count: 4
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtCostsExAnte", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtCostsExPost", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtCostsSource"]
---

# CdapiCommonEmtCosts

EmtCosts holds the EMT ex-ante (forward-looking) and ex-post (historical) cost disclosures
as required under MiFID II. Source: INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EmtCosts

```ts
interface CdapiCommonEmtCosts {
    _meta: BasedefEntityMeta;
    ex_ante: CdapiCommonEmtCostsExAnte;
    ex_post: CdapiCommonEmtCostsExPost;
    id: number;
    source: CdapiCommonEmtCostsSource;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` ex_ante

```ts
ex_ante: CdapiCommonEmtCostsExAnte
```

Ex-ante (forward-looking) cost disclosures.

#### `Readonly` ex_post

```ts
ex_post: CdapiCommonEmtCostsExPost
```

Ex-post (historical) cost disclosures.

#### `Readonly` id

```ts
id: number
```

##### Remarks

Format: int32

#### `Readonly` source

```ts
source: CdapiCommonEmtCostsSource
```

##### Remarks

Format: enum
