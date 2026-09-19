---
title: "CdapiFundDictionary"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundDictionary"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundDictionary"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundDictionary.html"
defines: ["CdapiFundDictionary"]
member_count: 8
members: ["_meta", "code", "id", "name", "name_de", "name_en", "name_fr", "name_nl"]
member_groups:
  "Properties": ["_meta", "code", "id", "name", "name_de", "name_en", "name_fr", "name_nl"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiFundDictionary

Dictionary is a fund-specific generic reference data entry with multilingual names.
Used for fund-domain coded values (e.g. valuation frequency, asset allocation, sector).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.Dictionary

```ts
interface CdapiFundDictionary {
    _meta: BasedefEntityMeta;
    code: string;
    id: number;
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

Short code for programmatic identification.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this dictionary entry.

##### Remarks

Format: int32

#### `Readonly` name

```ts
name: string
```

Default language display name.

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
