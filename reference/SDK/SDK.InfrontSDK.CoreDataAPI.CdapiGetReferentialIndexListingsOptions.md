---
title: "CdapiGetReferentialIndexListingsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetReferentialIndexListingsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetReferentialIndexListingsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetReferentialIndexListingsOptions.html"
defines: ["CdapiGetReferentialIndexListingsOptions"]
member_count: 32
members: ["asset_class_category_code?", "asset_class_group_code?", "cfi_code?", "chunk_size?", "composition_listing_id?", "country_code?", "currency_code?", "eet_sfdr_pai_source?", "eet_spi_source?", "esg_risk_source?", "id?", "ids_feed_code?", "ids_feed_number?", "ids_ticker?", "instrument_id?", "isin?", "issuer_id?", "lei?", "limit?", "listing_id?", "nsin?", "offset?", "onData?", "onError?", "onFinally?", "operating_mic_code?", "preferred_trading_venue_strategy_code?", "rating_source?", "search_string?", "segment_mic_code?", "trading_venue_code?", "vwd_key?"]
member_groups:
  "Properties": ["asset_class_category_code?", "asset_class_group_code?", "cfi_code?", "chunk_size?", "composition_listing_id?", "country_code?", "currency_code?", "eet_sfdr_pai_source?", "eet_spi_source?", "esg_risk_source?", "id?", "ids_feed_code?", "ids_feed_number?", "ids_ticker?", "instrument_id?", "isin?", "issuer_id?", "lei?", "limit?", "listing_id?", "nsin?", "offset?", "onData?", "onError?", "onFinally?", "operating_mic_code?", "preferred_trading_venue_strategy_code?", "rating_source?", "search_string?", "segment_mic_code?", "trading_venue_code?", "vwd_key?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiReferentialListingsIndexData"]
reference_count: 7
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetReferentialIndexListingsOptionsEetSfdrPaiSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetReferentialIndexListingsOptionsEetSpiSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetReferentialIndexListingsOptionsEsgRiskSource", "SDK.InfrontSDK.CoreDataAPI.CdapiReferentialListingsIndexData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetReferentialIndexListingsOptionsPreferredTradingVenueStrategyCode", "SDK.InfrontSDK.CoreDataAPI.CdapiGetReferentialIndexListingsOptionsRatingSource", "SDK.InfrontSDK.CoreDataAPI.cdapiGetReferentialIndexListings"]
---

# CdapiGetReferentialIndexListingsOptions

Request options for [cdapiGetReferentialIndexListings](./SDK.InfrontSDK.CoreDataAPI.cdapiGetReferentialIndexListings.md)

```ts
interface CdapiGetReferentialIndexListingsOptions {
    asset_class_category_code?: string | readonly string[];
    asset_class_group_code?: string | readonly string[];
    cfi_code?: string | readonly string[];
    chunk_size?: number;
    composition_listing_id?: string;
    country_code?: string | readonly string[];
    currency_code?: string | readonly string[];
    eet_sfdr_pai_source?: CdapiGetReferentialIndexListingsOptionsEetSfdrPaiSource;
    eet_spi_source?: CdapiGetReferentialIndexListingsOptionsEetSpiSource;
    esg_risk_source?: CdapiGetReferentialIndexListingsOptionsEsgRiskSource;
    id?: string | readonly string[];
    ids_feed_code?: string | readonly string[];
    ids_feed_number?: number | readonly number[];
    ids_ticker?: string | readonly string[];
    instrument_id?: string | readonly string[];
    isin?: string | readonly string[];
    issuer_id?: string | readonly string[];
    lei?: string | readonly string[];
    limit?: number;
    listing_id?: string | readonly string[];
    nsin?: string | readonly string[];
    offset?: number;
    onData?: CoreDataRequestSuccessCallback<CdapiReferentialListingsIndexData>;
    onError?: CoreDataRequestErrorCallback<CdapiReferentialListingsIndexData>;
    onFinally?: CoreDataRequestFinallyCallback<
        CdapiReferentialListingsIndexData,
    >;
    operating_mic_code?: string
    | readonly string[];
    preferred_trading_venue_strategy_code?: CdapiGetReferentialIndexListingsOptionsPreferredTradingVenueStrategyCode;
    rating_source?: CdapiGetReferentialIndexListingsOptionsRatingSource;
    search_string?: string;
    segment_mic_code?: string | readonly string[];
    trading_venue_code?: string | readonly string[];
    vwd_key?: string | readonly string[];
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiReferentialListingsIndexData>

  - CdapiGetReferentialIndexListingsOptions

### Properties

#### `Optional` ` Readonly`asset_class_category_code

```ts
asset_class_category_code?: string | readonly string[]
```

category code of the asset class, e.g. LEVERAGE for leverage products

#### `Optional` ` Readonly`asset_class_group_code

```ts
asset_class_group_code?: string | readonly string[]
```

group code of the asset class, e.g. LEVERAGE_WARR for warrants

#### `Optional` ` Readonly`cfi_code

```ts
cfi_code?: string | readonly string[]
```

search for cfi code (Classification of financial instrument)

#### `Optional` ` Readonly`chunk_size

```ts
chunk_size?: number
```

maximum number of items per chunk - only applies to streaming requests (min: 10, max: 100)

#### `Optional` ` Readonly`composition_listing_id

```ts
composition_listing_id?: string
```

listing_id of the composition to get all referentials

#### `Optional` ` Readonly`country_code

```ts
country_code?: string | readonly string[]
```

country code in isoalpha2

#### `Optional` ` Readonly`currency_code

```ts
currency_code?: string | readonly string[]
```

currency code in isoalpha3

#### `Optional` ` Readonly`eet_sfdr_pai_source

```ts
eet_sfdr_pai_source?: CdapiGetReferentialIndexListingsOptionsEetSfdrPaiSource
```

source for sfdr-pai data

#### `Optional` ` Readonly`eet_spi_source

```ts
eet_spi_source?: CdapiGetReferentialIndexListingsOptionsEetSpiSource
```

source for sustainability data

#### `Optional` ` Readonly`esg_risk_source

```ts
esg_risk_source?: CdapiGetReferentialIndexListingsOptionsEsgRiskSource
```

the esg_risk source (e.g. CLARITY)

#### `Optional` ` Readonly`id

```ts
id?: string | readonly string[]
```

identifier on listing level for Infront data universe

#### `Optional` ` Readonly`ids_feed_code

```ts
ids_feed_code?: string | readonly string[]
```

ids-feedcode for Infront data universe (linked to ids-feednumber)

#### `Optional` ` Readonly`ids_feed_number

```ts
ids_feed_number?: number | readonly number[]
```

ids-feednumber for Infront data universe

#### `Optional` ` Readonly`ids_ticker

```ts
ids_ticker?: string | readonly string[]
```

ids-ticker identifier for Infront data universe

#### `Optional` ` Readonly`instrument_id

```ts
instrument_id?: string | readonly string[]
```

identifier on instrument level for Infront data universe

#### `Optional` ` Readonly`isin

```ts
isin?: string | readonly string[]
```

search for International Securities Identification Number

#### `Optional` ` Readonly`issuer_id

```ts
issuer_id?: string | readonly string[]
```

identifier on issuer level for Infront data universe

#### `Optional` ` Readonly`lei

```ts
lei?: string | readonly string[]
```

search for legal entity identifier

#### `Optional` ` Readonly`limit

```ts
limit?: number
```

limit of the results

#### `Optional` ` Readonly`listing_id

```ts
listing_id?: string | readonly string[]
```

identifier on listing level for Infront data universe (same as 'id' in this context)

#### `Optional` ` Readonly`nsin

```ts
nsin?: string | readonly string[]
```

search for national identifier like 'wkn', 'valor', 'sedol'...

#### `Optional` ` Readonly`offset

```ts
offset?: number
```

offset - used for pagination

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiReferentialListingsIndexData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiReferentialListingsIndexData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiReferentialListingsIndexData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`operating_mic_code

```ts
operating_mic_code?: string | readonly string[]
```

search for operating_mic_code according ISO 10383

#### `Optional` ` Readonly`preferred_trading_venue_strategy_code

```ts
preferred_trading_venue_strategy_code?: CdapiGetReferentialIndexListingsOptionsPreferredTradingVenueStrategyCode
```

Defines the strategy used to select a single listing per instrument.
All strategies always restrict the result to listings the customer is entitled to.
Applies only when the request uses an instrument-level identifier
(e.g., isin, nsin, ids_ticker, instrument_id) rather than a listing-level
identifier (e.g., listing_id, vwd_key, ids_identifier).
The strategy is ignored when filtering by specific trading venues or feeds
(e.g., trading_venue_code, trading_venue_id, ids_feed_number, ids_feed_code).
If no strategy is specified, all listings from all entitled sources are returned.

#### `Optional` ` Readonly`rating_source

```ts
rating_source?: CdapiGetReferentialIndexListingsOptionsRatingSource
```

the rating source (e.g. FITCH, MOODYS...)

#### `Optional` ` Readonly`search_string

```ts
search_string?: string
```

perform a free-text search across several fields, e.g. by instrument name, ISIN, ticker etc. (3 characters at least)

#### `Optional` ` Readonly`segment_mic_code

```ts
segment_mic_code?: string | readonly string[]
```

search for segment_mic_code according ISO 10383

#### `Optional` ` Readonly`trading_venue_code

```ts
trading_venue_code?: string | readonly string[]
```

code of trading-venue linked to vwd-key

#### `Optional` ` Readonly`vwd_key

```ts
vwd_key?: string | readonly string[]
```

Our internal identifier combining instrument information with trading venue
