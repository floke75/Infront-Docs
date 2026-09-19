---
title: "CdapiCommonTickSize"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTickSize"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonTickSize"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonTickSize.html"
defines: ["CdapiCommonTickSize"]
member_count: 3
members: ["_meta", "id", "table"]
member_groups:
  "Properties": ["_meta", "id", "table"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTickSizeTable"]
---

# CdapiCommonTickSize

TickSize defines the minimum price movement (tick) for different price ranges.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.TickSize

```ts
interface CdapiCommonTickSize {
    _meta: BasedefEntityMeta;
    id: number;
    table: readonly CdapiCommonTickSizeTable[];
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` id

```ts
id: number
```

##### Remarks

Format: int32

#### `Readonly` table

```ts
table: readonly CdapiCommonTickSizeTable[]
```

Ordered list of tick size rules by ascending price range.
