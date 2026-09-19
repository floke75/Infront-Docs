---
title: "CdapiFundComposition"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundComposition"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundComposition"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundComposition.html"
defines: ["CdapiFundComposition"]
member_count: 4
members: ["_meta", "date", "items", "type"]
member_groups:
  "Properties": ["_meta", "date", "items", "type"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionItem", "SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionTypeItem"]
---

# CdapiFundComposition

Composition holds the portfolio breakdown of a fund by asset type, sector, region,
or other dimensions at a specific date.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.Composition

```ts
interface CdapiFundComposition {
    _meta: BasedefEntityMeta;
    date: string;
    items: readonly CdapiFundCompositionItem[];
    type: CdapiFundCompositionTypeItem;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` date

```ts
date: string
```

Date of this composition snapshot. ISO-8601 recommended.

#### `Readonly` items

```ts
items: readonly CdapiFundCompositionItem[]
```

Ordered list of composition items for this breakdown type.

#### `Readonly` type

```ts
type: CdapiFundCompositionTypeItem
```

Composition type (e.g. asset allocation, sector, region, top holdings).
