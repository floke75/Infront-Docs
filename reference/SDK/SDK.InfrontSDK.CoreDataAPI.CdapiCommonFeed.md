---
title: "CdapiCommonFeed"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonFeed"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonFeed"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonFeed.html"
defines: ["CdapiCommonFeed"]
member_count: 6
members: ["_meta", "code", "country_code", "delay", "id", "name"]
member_groups:
  "Properties": ["_meta", "code", "country_code", "delay", "id", "name"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiCommonFeed

Feed is the technical counterpart of a trading venue —
the market data feed delivering prices from that venue.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.Feed

```ts
interface CdapiCommonFeed {
    _meta: BasedefEntityMeta;
    code: string;
    country_code: string;
    delay: number;
    id: number;
    name: string;
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

Feed code — short alphanumeric identifier.

#### `Readonly` country_code

```ts
country_code: string
```

ISO 3166-1 alpha-2 country code of the feed's associated market.

#### `Readonly` delay

```ts
delay: number
```

Delivery delay in seconds (0 = real-time).

##### Remarks

Format: int32

#### `Readonly` id

```ts
id: number
```

Internal unique feed identifier (= IDS feed number).

##### Remarks

Format: int32

#### `Readonly` name

```ts
name: string
```

Human-readable name of the feed.
