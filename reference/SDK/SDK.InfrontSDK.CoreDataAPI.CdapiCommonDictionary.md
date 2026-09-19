---
title: "CdapiCommonDictionary"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonDictionary"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonDictionary"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonDictionary.html"
defines: ["CdapiCommonDictionary"]
member_count: 10
members: ["code", "name", "name_de", "name_en", "name_long", "name_long_de", "name_long_en", "name_short", "name_short_de", "name_short_en"]
member_groups:
  "Properties": ["code", "name", "name_de", "name_en", "name_long", "name_long_de", "name_long_en", "name_short", "name_short_de", "name_short_en"]
---

# CdapiCommonDictionary

Dictionary is a generic reference data entry for categorical lookup values
across multiple sources (EDI, WM, XID).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.Dictionary

```ts
interface CdapiCommonDictionary {
    code: string;
    name: string;
    name_de: string;
    name_en: string;
    name_long: string;
    name_long_de: string;
    name_long_en: string;
    name_short: string;
    name_short_de: string;
    name_short_en: string;
}
```

### Properties

#### `Readonly` code

```ts
code: string
```

Short code for programmatic identification. Available from all sources.

#### `Readonly` name

```ts
name: string
```

Default language display name. Available from all sources.

#### `Readonly` name_de

```ts
name_de: string
```

German display name. Source: WM.

#### `Readonly` name_en

```ts
name_en: string
```

English display name. Sources: EDI, WM, XID.

#### `Readonly` name_long

```ts
name_long: string
```

Long-form default display name. Source: WM.

#### `Readonly` name_long_de

```ts
name_long_de: string
```

Long-form German display name. Source: WM.

#### `Readonly` name_long_en

```ts
name_long_en: string
```

Long-form English display name. Source: WM.

#### `Readonly` name_short

```ts
name_short: string
```

Short-form default display name. Source: WM.

#### `Readonly` name_short_de

```ts
name_short_de: string
```

Short-form German display name. Source: WM.

#### `Readonly` name_short_en

```ts
name_short_en: string
```

Short-form English display name. Source: WM.
