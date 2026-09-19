---
title: "CdapiCommonTradingCalendar"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingCalendar"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonTradingCalendar"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingCalendar.html"
defines: ["CdapiCommonTradingCalendar"]
member_count: 7
members: ["_meta", "country_code", "day", "id", "name", "name_en", "trading_venue_code"]
member_groups:
  "Properties": ["_meta", "country_code", "day", "id", "name", "name_en", "trading_venue_code"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiCommonTradingCalendar

TradingCalendar delivers the holiday schedule for a trading venue.
Each entry represents one non-trading day (exchange holiday).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.TradingCalendar

```ts
interface CdapiCommonTradingCalendar {
    _meta: BasedefEntityMeta;
    country_code: string;
    day: string;
    id: number;
    name: string;
    name_en: string;
    trading_venue_code: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` country_code

```ts
country_code: string
```

ISO 3166-1 alpha-2 country code of the trading venue.

#### `Readonly` day

```ts
day: string
```

Date of the exchange holiday. ISO-8601 recommended (e.g. "2024-12-25").

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this calendar entry.

##### Remarks

Format: int32

#### `Readonly` name

```ts
name: string
```

Default language holiday name (e.g. "Christmas Day").

#### `Readonly` name_en

```ts
name_en: string
```

English holiday name.

#### `Readonly` trading_venue_code

```ts
trading_venue_code: string
```

Code of the trading venue this holiday applies to.
