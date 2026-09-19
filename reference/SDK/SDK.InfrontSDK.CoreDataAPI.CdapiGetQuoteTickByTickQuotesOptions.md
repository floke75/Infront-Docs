---
title: "CdapiGetQuoteTickByTickQuotesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteTickByTickQuotesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetQuoteTickByTickQuotesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteTickByTickQuotesOptions.html"
defines: ["CdapiGetQuoteTickByTickQuotesOptions"]
member_count: 14
members: ["adjustment_schema?", "adjustment_source?", "do_additive_adjustment?", "do_multiplicative_adjustment?", "fields?", "ids_identifier.ids_feed_code?", "ids_identifier.ids_feed_number?", "ids_identifier.ids_ticker?", "limit?", "listing_id?", "onData?", "onError?", "onFinally?", "vwd_key?"]
member_groups:
  "Properties": ["adjustment_schema?", "adjustment_source?", "do_additive_adjustment?", "do_multiplicative_adjustment?", "fields?", "ids_identifier.ids_feed_code?", "ids_identifier.ids_feed_number?", "ids_identifier.ids_ticker?", "limit?", "listing_id?", "onData?", "onError?", "onFinally?", "vwd_key?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickQuotesByTickData"]
reference_count: 5
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteTickByTickQuotesOptionsAdjustmentSchema", "SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteTickByTickQuotesOptionsAdjustmentSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteTickByTickQuotesField", "SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickQuotesByTickData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetQuoteTickByTickQuotes"]
---

# CdapiGetQuoteTickByTickQuotesOptions

Request options for [cdapiGetQuoteTickByTickQuotes](./SDK.InfrontSDK.CoreDataAPI.cdapiGetQuoteTickByTickQuotes.md)

```ts
interface CdapiGetQuoteTickByTickQuotesOptions {
    adjustment_schema?: CdapiGetQuoteTickByTickQuotesOptionsAdjustmentSchema;
    adjustment_source?: CdapiGetQuoteTickByTickQuotesOptionsAdjustmentSource;
    do_additive_adjustment?: boolean;
    do_multiplicative_adjustment?: boolean;
    fields?: string | readonly CdapiGetQuoteTickByTickQuotesField[];
    "ids_identifier.ids_feed_code"?: string;
    "ids_identifier.ids_feed_number"?: number;
    "ids_identifier.ids_ticker"?: string;
    limit?: number;
    listing_id?: string;
    onData?: CoreDataRequestSuccessCallback<CdapiQuoteTickQuotesByTickData>;
    onError?: CoreDataRequestErrorCallback<CdapiQuoteTickQuotesByTickData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiQuoteTickQuotesByTickData>;
    vwd_key?: string;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiQuoteTickQuotesByTickData>

  - CdapiGetQuoteTickByTickQuotesOptions

### Properties

#### `Optional` ` Readonly`adjustment_schema

```ts
adjustment_schema?: CdapiGetQuoteTickByTickQuotesOptionsAdjustmentSchema
```

adjustment schema (default=SIMPLE - e.g. for charts, ADVANCED e.g. for portfolio-valuation - not implemented yet)

#### `Optional` ` Readonly`adjustment_source

```ts
adjustment_source?: CdapiGetQuoteTickByTickQuotesOptionsAdjustmentSource
```

source to use for corporate actions (the selected source needs to be entitled, default=INFRONT_HISTORY)

#### `Optional` ` Readonly`do_additive_adjustment

```ts
do_additive_adjustment?: boolean
```

do additive adjustments

#### `Optional` ` Readonly`do_multiplicative_adjustment

```ts
do_multiplicative_adjustment?: boolean
```

do multiplicative adjustments

#### `Optional` ` Readonly`fields

```ts
fields?: string | readonly CdapiGetQuoteTickByTickQuotesField[]
```

fields that should be added to the response

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

#### `Optional` ` Readonly`limit

```ts
limit?: number
```

limit number of returned by-tick-objects (default: 100; max: 1000)

#### `Optional` ` Readonly`listing_id

```ts
listing_id?: string
```

identifier on listing level for Infront data universe

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiQuoteTickQuotesByTickData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiQuoteTickQuotesByTickData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiQuoteTickQuotesByTickData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`vwd_key

```ts
vwd_key?: string
```

internal identifier combining instrument information with trading venue
