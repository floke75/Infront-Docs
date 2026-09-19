---
title: "CdapiStructuredProductDictionary"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductDictionary"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiStructuredProductDictionary"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductDictionary.html"
defines: ["CdapiStructuredProductDictionary"]
member_count: 6
members: ["_meta", "code", "id", "name", "name_de", "name_en"]
member_groups:
  "Properties": ["_meta", "code", "id", "name", "name_de", "name_en"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiStructuredProductDictionary

Dictionary is a generic reference data entry used for categorical lookup values
such as settlement types, quotation types, and legal security types.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.structured_product.Dictionary

```ts
interface CdapiStructuredProductDictionary {
    _meta: BasedefEntityMeta;
    code: string;
    id: number;
    name: string;
    name_de: string;
    name_en: string;
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

Short code for programmatic identification (e.g. "CASH", "PHYSICAL").

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

German display name.

#### `Readonly` name_en

```ts
name_en: string
```

English display name.
