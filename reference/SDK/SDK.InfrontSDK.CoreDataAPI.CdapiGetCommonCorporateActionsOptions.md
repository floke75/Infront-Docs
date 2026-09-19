---
title: "CdapiGetCommonCorporateActionsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCorporateActionsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetCommonCorporateActionsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCorporateActionsOptions.html"
defines: ["CdapiGetCommonCorporateActionsOptions"]
member_count: 15
members: ["chunk_size?", "ids_identifier.ids_feed_code?", "ids_identifier.ids_feed_number?", "ids_identifier.ids_ticker?", "is_preferred_trading_venue?", "limit?", "listing_id?", "offset?", "onData?", "onError?", "onFinally?", "operating_mic_code?", "segment_mic_code?", "source?", "trading_venue_code?"]
member_groups:
  "Properties": ["chunk_size?", "ids_identifier.ids_feed_code?", "ids_identifier.ids_feed_number?", "ids_identifier.ids_ticker?", "is_preferred_trading_venue?", "limit?", "listing_id?", "offset?", "onData?", "onError?", "onFinally?", "operating_mic_code?", "segment_mic_code?", "source?", "trading_venue_code?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionsData"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonListCorporateActionsData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCorporateActionsOptionsSource", "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCorporateActions"]
---

# CdapiGetCommonCorporateActionsOptions

Request options for [cdapiGetCommonCorporateActions](./SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCorporateActions.md)

```ts
interface CdapiGetCommonCorporateActionsOptions {
    chunk_size?: number;
    "ids_identifier.ids_feed_code"?: string;
    "ids_identifier.ids_feed_number"?: number;
    "ids_identifier.ids_ticker"?: string;
    is_preferred_trading_venue?: boolean;
    limit?: number;
    listing_id?: string;
    offset?: number;
    onData?: CoreDataRequestSuccessCallback<
        CdapiCommonListCorporateActionsData,
    >;
    onError?: CoreDataRequestErrorCallback<CdapiCommonListCorporateActionsData>;
    onFinally?: CoreDataRequestFinallyCallback<
        CdapiCommonListCorporateActionsData,
    >;
    operating_mic_code?: string;
    segment_mic_code?: string;
    source?: CdapiGetCommonCorporateActionsOptionsSource;
    trading_venue_code?: string;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiCommonListCorporateActionsData>

  - CdapiGetCommonCorporateActionsOptions

### Properties

#### `Optional` ` Readonly`chunk_size

```ts
chunk_size?: number
```

maximum number of items per chunk - only applies to streaming requests (min: 10, max: 100)

#### `Optional` ` Readonly`ids_identifier.ids_feed_code

```ts
"ids_identifier.ids_feed_code"?: string
```

IDS feed code — human-readable code linked to the ids_feed_number (Infront data universe).

#### `Optional` ` Readonly`ids_identifier.ids_feed_number

```ts
"ids_identifier.ids_feed_number"?: number
```

Numeric IDS feed number identifying the exchange or data source.

#### `Optional` ` Readonly`ids_identifier.ids_ticker

```ts
"ids_identifier.ids_ticker"?: string
```

IDS ticker symbol identifying the instrument on the feed.

#### `Optional` ` Readonly`is_preferred_trading_venue

```ts
is_preferred_trading_venue?: boolean
```

only fo source edi; true => fetch only events for the preferred_trading_venue, false => fetch events for all trading_venues

#### `Optional` ` Readonly`limit

```ts
limit?: number
```

limit of the results

#### `Optional` ` Readonly`listing_id

```ts
listing_id?: string
```

identifier on listing level for Infront data universe

#### `Optional` ` Readonly`offset

```ts
offset?: number
```

offset - used for pagination

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiCommonListCorporateActionsData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiCommonListCorporateActionsData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiCommonListCorporateActionsData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`operating_mic_code

```ts
operating_mic_code?: string
```

only for source edi, infront_history, wm

#### `Optional` ` Readonly`segment_mic_code

```ts
segment_mic_code?: string
```

only for source edi, infront_history, wm

#### `Optional` ` Readonly`source

```ts
source?: CdapiGetCommonCorporateActionsOptionsSource
```

the source of the data

#### `Optional` ` Readonly`trading_venue_code

```ts
trading_venue_code?: string
```

only for source edi, infront_history, wm
