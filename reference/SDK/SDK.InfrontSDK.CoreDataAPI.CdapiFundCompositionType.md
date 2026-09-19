---
title: "CdapiFundCompositionType"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionType"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundCompositionType"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionType.html"
defines: ["CdapiFundCompositionType"]
member_count: 7
members: ["_meta", "code", "name", "name_de", "name_en", "name_fr", "name_nl"]
member_groups:
  "Properties": ["_meta", "code", "name", "name_de", "name_en", "name_fr", "name_nl"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiFundCompositionType

CompositionType defines the available composition breakdown types for funds
(e.g. "ASSET_ALLOCATION", "SECTOR", "COUNTRY", "TOP_HOLDINGS").

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.CompositionType

```ts
interface CdapiFundCompositionType {
    _meta: BasedefEntityMeta;
    code: string;
    name: string;
    name_de: string;
    name_en: string;
    name_fr: string;
    name_nl: string;
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

Short code identifying this composition type.

#### `Readonly` name

```ts
name: string
```

Default language name.

#### `Readonly` name_de

```ts
name_de: string
```

German name.

#### `Readonly` name_en

```ts
name_en: string
```

English name.

#### `Readonly` name_fr

```ts
name_fr: string
```

French name.

#### `Readonly` name_nl

```ts
name_nl: string
```

Dutch name.
