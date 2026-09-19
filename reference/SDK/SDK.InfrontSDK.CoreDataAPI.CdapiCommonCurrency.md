---
title: "CdapiCommonCurrency"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonCurrency"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonCurrency"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonCurrency.html"
defines: ["CdapiCommonCurrency"]
member_count: 10
members: ["_meta", "authority_country_code", "code", "code_isonumeric", "id", "subunit_factor", "subunit_name", "subunit_symbol", "symbol", "symbol_short"]
member_groups:
  "Properties": ["_meta", "authority_country_code", "code", "code_isonumeric", "id", "subunit_factor", "subunit_name", "subunit_symbol", "symbol", "symbol_short"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiCommonCurrency

Currency represents a government-issued unit of exchange.
Can be used as a lightweight descriptor when only id or code is set.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.Currency

```ts
interface CdapiCommonCurrency {
    _meta: BasedefEntityMeta;
    authority_country_code: string;
    code: string;
    code_isonumeric: number;
    id: number;
    subunit_factor: number;
    subunit_name: string;
    subunit_symbol: string;
    symbol: string;
    symbol_short: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` authority_country_code

```ts
authority_country_code: string
```

ISO 3166-1 alpha-2 country code of the issuing authority.

#### `Readonly` code

```ts
code: string
```

ISO 4217 alpha code (e.g. "EUR"). Can be used as a descriptor alone.

#### `Readonly` code_isonumeric

```ts
code_isonumeric: number
```

ISO 4217 numeric code (e.g. 978 for EUR).

##### Remarks

Format: int32

#### `Readonly` id

```ts
id: number
```

##### Remarks

Format: int32

#### `Readonly` subunit_factor

```ts
subunit_factor: number
```

Conversion factor from major to subunit (e.g. 100 for EUR → Cent).

##### Remarks

Format: int32

#### `Readonly` subunit_name

```ts
subunit_name: string
```

Name of the subunit (e.g. "Cent").

#### `Readonly` subunit_symbol

```ts
subunit_symbol: string
```

Symbol of the subunit (e.g. "EUX" for EUR Cent).

#### `Readonly` symbol

```ts
symbol: string
```

UTF-8 full symbol (e.g. "US$" for USD).

#### `Readonly` symbol_short

```ts
symbol_short: string
```

UTF-8 short symbol (e.g. "€" for EUR).
