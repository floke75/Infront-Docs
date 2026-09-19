---
title: "CdapiCommonRegion"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonRegion"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonRegion"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonRegion.html"
defines: ["CdapiCommonRegion"]
member_count: 3
members: ["_meta", "code", "id"]
member_groups:
  "Properties": ["_meta", "code", "id"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiCommonRegion

Region represents a geographic grouping of countries (e.g. "EU" for Europe).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.Region

```ts
interface CdapiCommonRegion {
    _meta: BasedefEntityMeta;
    code: string;
    id: number;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` code

```ts
code: string
```

Short region code (e.g. "EU", "APAC").

#### `Readonly` id

```ts
id: number
```

##### Remarks

Format: int32
