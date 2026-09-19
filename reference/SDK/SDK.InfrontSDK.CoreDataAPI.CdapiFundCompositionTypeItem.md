---
title: "CdapiFundCompositionTypeItem"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionTypeItem"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundCompositionTypeItem"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionTypeItem.html"
defines: ["CdapiFundCompositionTypeItem"]
member_count: 6
members: ["code", "name", "name_de", "name_en", "name_fr", "name_nl"]
member_groups:
  "Properties": ["code", "name", "name_de", "name_en", "name_fr", "name_nl"]
---

# CdapiFundCompositionTypeItem

Type identifies the composition dimension (e.g. "ASSET_ALLOCATION", "SECTOR", "REGION").

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.Composition_Type

```ts
interface CdapiFundCompositionTypeItem {
    code: string;
    name: string;
    name_de: string;
    name_en: string;
    name_fr: string;
    name_nl: string;
}
```

### Properties

#### `Readonly` code

```ts
code: string
```

Short code identifying the composition type.

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
