---
title: "CdapiCommonListing"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonListing"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonListing"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonListing.html"
defines: ["CdapiCommonListing"]
member_count: 18
members: ["_meta", "country_code", "currency_code", "first_exchange_trading_date", "has_after_hour_trading", "id", "ids_feed_number", "ids_ticker", "last_exchange_trading_date", "mic", "name", "name_short", "normal_market_size", "sedol", "segment", "standard_market_size_esma", "trading_venue_code", "vwd_key"]
member_groups:
  "Properties": ["_meta", "country_code", "currency_code", "first_exchange_trading_date", "has_after_hour_trading", "id", "ids_feed_number", "ids_ticker", "last_exchange_trading_date", "mic", "name", "name_short", "normal_market_size", "sedol", "segment", "standard_market_size_esma", "trading_venue_code", "vwd_key"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonListingMic", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonListingSegment"]
---

# CdapiCommonListing

Listing represents an instrument listed on an exchange that can be traded.
Can be used as a lightweight descriptor when only the id field is populated.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.Listing

```ts
interface CdapiCommonListing {
    _meta: BasedefEntityMeta;
    country_code: string;
    currency_code: string;
    first_exchange_trading_date: string;
    has_after_hour_trading: boolean;
    id: string;
    ids_feed_number: number;
    ids_ticker: string;
    last_exchange_trading_date: string;
    mic: CdapiCommonListingMic;
    name: string;
    name_short: string;
    normal_market_size: number;
    sedol: string;
    segment: CdapiCommonListingSegment;
    standard_market_size_esma: number;
    trading_venue_code: string;
    vwd_key: string;
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

#### `Readonly` currency_code

```ts
currency_code: string
```

ISO 4217 alpha-3 trading currency code (e.g. "EUR", "USD").

#### `Readonly` first_exchange_trading_date

```ts
first_exchange_trading_date: string
```

Date on which the instrument was first traded on this exchange. ISO-8601 recommended.

#### `Readonly` has_after_hour_trading

```ts
has_after_hour_trading: boolean
```

If true, after-hours trading is available for this listing.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this listing.

#### `Readonly` ids_feed_number

```ts
ids_feed_number: number
```

Internal feed number in the Infront data universe — identifies the exchange/data source.

##### Remarks

Format: int32

#### `Readonly` ids_ticker

```ts
ids_ticker: string
```

Internal ticker in the Infront data universe — identifies the underlying instrument.

#### `Readonly` last_exchange_trading_date

```ts
last_exchange_trading_date: string
```

Date on which the instrument was last traded (if delisted). ISO-8601 recommended.

#### `Readonly` mic

```ts
mic: CdapiCommonListingMic
```

ISO 10383 MIC codes for segment and operating entity.

#### `Readonly` name

```ts
name: string
```

Full name of the listing.

#### `Readonly` name_short

```ts
name_short: string
```

Short name of the listing.

#### `Readonly` normal_market_size

```ts
normal_market_size: number
```

Normal market size (NMS) — exchange-defined equivalent of the ESMA SMS.

##### Remarks

Format: int32

#### `Readonly` sedol

```ts
sedol: string
```

SEDOL — 7-digit code identifying securities listed on the UK securities market.

#### `Readonly` segment

```ts
segment: CdapiCommonListingSegment
```

Market segment within the trading venue (e.g. Prime Standard, SME Growth Market).

#### `Readonly` standard_market_size_esma

```ts
standard_market_size_esma: number
```

Standard market size (SMS) per ESMA/MiFID II — used for pre-trade transparency waivers.

##### Remarks

Format: int32

#### `Readonly` trading_venue_code

```ts
trading_venue_code: string
```

Code identifying the trading venue where this listing is traded.

#### `Readonly` vwd_key

```ts
vwd_key: string
```

vwd key — legacy identifier combining instrument and trading venue information.
