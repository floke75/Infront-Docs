---
title: "CdapiCommonCountry"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonCountry"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonCountry"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonCountry.html"
defines: ["CdapiCommonCountry"]
member_count: 7
members: ["_meta", "code", "code_isoalpha_3", "code_isonumeric", "currency_code", "id", "name_long"]
member_groups:
  "Properties": ["_meta", "code", "code_isoalpha_3", "code_isonumeric", "currency_code", "id", "name_long"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiCommonCountry

Country represents a geopolitical region / sovereign state.
Can be used as a lightweight descriptor when only id or code is set.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.Country

```ts
interface CdapiCommonCountry {
    _meta: BasedefEntityMeta;
    code: string;
    code_isoalpha_3: string;
    code_isonumeric: number;
    currency_code: string;
    id: number;
    name_long: string;
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

ISO 3166-1 alpha-2 code (e.g. "DE"). Can be used as a descriptor alone.

#### `Readonly` code_isoalpha_3

```ts
code_isoalpha_3: string
```

ISO 3166-1 alpha-3 code (e.g. "DEU").

#### `Readonly` code_isonumeric

```ts
code_isonumeric: number
```

ISO 3166-1 numeric code (e.g. 276 for Germany).

##### Remarks

Format: int32

#### `Readonly` currency_code

```ts
currency_code: string
```

ISO 4217 currency code of the primary currency used in this country.

#### `Readonly` id

```ts
id: number
```

##### Remarks

Format: int32

#### `Readonly` name_long

```ts
name_long: string
```

Long-form name.
