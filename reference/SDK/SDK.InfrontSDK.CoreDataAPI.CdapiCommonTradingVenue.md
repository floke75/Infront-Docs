---
title: "CdapiCommonTradingVenue"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingVenue"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonTradingVenue"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingVenue.html"
defines: ["CdapiCommonTradingVenue"]
member_count: 12
members: ["_meta", "closing_time", "country_code", "id", "internal_code", "name", "name_de", "name_en", "name_long", "opening_time", "provider_description", "wm_code"]
member_groups:
  "Properties": ["_meta", "closing_time", "country_code", "id", "internal_code", "name", "name_de", "name_en", "name_long", "opening_time", "provider_description", "wm_code"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiCommonTradingVenue

TradingVenue represents a physical or virtual market where instruments are traded.
Can be used as a lightweight descriptor when only the id field is populated.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.TradingVenue

```ts
interface CdapiCommonTradingVenue {
    _meta: BasedefEntityMeta;
    closing_time: string;
    country_code: string;
    id: number;
    internal_code: string;
    name: string;
    name_de: string;
    name_en: string;
    name_long: string;
    opening_time: string;
    provider_description: string;
    wm_code: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` closing_time

```ts
closing_time: string
```

Closing time of the trading session (local time of the venue).

#### `Readonly` country_code

```ts
country_code: string
```

ISO 3166-1 alpha-2 country code of the trading venue.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this trading venue.

##### Remarks

Format: int32

#### `Readonly` internal_code

```ts
internal_code: string
```

Infront internal trading venue code.

#### `Readonly` name

```ts
name: string
```

Default language name of the trading venue.

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

#### `Readonly` name_long

```ts
name_long: string
```

Long-form name.

#### `Readonly` opening_time

```ts
opening_time: string
```

Opening time of the trading session (local time of the venue).

#### `Readonly` provider_description

```ts
provider_description: string
```

Human-readable description of the data provider for this venue.

#### `Readonly` wm_code

```ts
wm_code: string
```

WM Datenservice trading venue code.
