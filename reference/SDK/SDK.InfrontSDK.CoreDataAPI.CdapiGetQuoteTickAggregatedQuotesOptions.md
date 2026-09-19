---
title: "CdapiGetQuoteTickAggregatedQuotesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteTickAggregatedQuotesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetQuoteTickAggregatedQuotesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteTickAggregatedQuotesOptions.html"
defines: ["CdapiGetQuoteTickAggregatedQuotesOptions"]
member_count: 14
members: ["adjustment_schema?", "adjustment_source?", "aggregation_period?", "do_additive_adjustment?", "do_multiplicative_adjustment?", "fields?", "ids_identifier.ids_feed_code?", "ids_identifier.ids_feed_number?", "ids_identifier.ids_ticker?", "listing_id?", "onData?", "onError?", "onFinally?", "vwd_key?"]
member_groups:
  "Properties": ["adjustment_schema?", "adjustment_source?", "aggregation_period?", "do_additive_adjustment?", "do_multiplicative_adjustment?", "fields?", "ids_identifier.ids_feed_code?", "ids_identifier.ids_feed_number?", "ids_identifier.ids_ticker?", "listing_id?", "onData?", "onError?", "onFinally?", "vwd_key?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickQuotesAggregatedData"]
reference_count: 6
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteTickAggregatedQuotesOptionsAdjustmentSchema", "SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteTickAggregatedQuotesOptionsAdjustmentSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteTickAggregatedQuotesOptionsAggregationPeriod", "SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteTickAggregatedQuotesField", "SDK.InfrontSDK.CoreDataAPI.CdapiQuoteTickQuotesAggregatedData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetQuoteTickAggregatedQuotes"]
---

# CdapiGetQuoteTickAggregatedQuotesOptions

Request options for [cdapiGetQuoteTickAggregatedQuotes](./SDK.InfrontSDK.CoreDataAPI.cdapiGetQuoteTickAggregatedQuotes.md)

```ts
interface CdapiGetQuoteTickAggregatedQuotesOptions {
    adjustment_schema?: CdapiGetQuoteTickAggregatedQuotesOptionsAdjustmentSchema;
    adjustment_source?: CdapiGetQuoteTickAggregatedQuotesOptionsAdjustmentSource;
    aggregation_period?: CdapiGetQuoteTickAggregatedQuotesOptionsAggregationPeriod;
    do_additive_adjustment?: boolean;
    do_multiplicative_adjustment?: boolean;
    fields?: string | readonly CdapiGetQuoteTickAggregatedQuotesField[];
    "ids_identifier.ids_feed_code"?: string;
    "ids_identifier.ids_feed_number"?: number;
    "ids_identifier.ids_ticker"?: string;
    listing_id?: string;
    onData?: CoreDataRequestSuccessCallback<CdapiQuoteTickQuotesAggregatedData>;
    onError?: CoreDataRequestErrorCallback<CdapiQuoteTickQuotesAggregatedData>;
    onFinally?: CoreDataRequestFinallyCallback<
        CdapiQuoteTickQuotesAggregatedData,
    >;
    vwd_key?: string;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiQuoteTickQuotesAggregatedData>

  - CdapiGetQuoteTickAggregatedQuotesOptions

### Properties

#### `Optional` ` Readonly`adjustment_schema

```ts
adjustment_schema?: CdapiGetQuoteTickAggregatedQuotesOptionsAdjustmentSchema
```

adjustment schema (default=SIMPLE - e.g. for charts, ADVANCED e.g. for portfolio-valuation - not implemented yet)

#### `Optional` ` Readonly`adjustment_source

```ts
adjustment_source?: CdapiGetQuoteTickAggregatedQuotesOptionsAdjustmentSource
```

source to use for corporate actions (the selected source needs to be entitled, default=INFRONT_HISTORY)
this parameter only makes sense if you're doing additive or multiplicative adjustment

#### `Optional` ` Readonly`aggregation_period

```ts
aggregation_period?: CdapiGetQuoteTickAggregatedQuotesOptionsAggregationPeriod
```

aggregation period, default is 1 minute

#### `Optional` ` Readonly`do_additive_adjustment

```ts
do_additive_adjustment?: boolean
```

do additive adjustments (e.g. dividends, types behind this parameter differ per adjustment_source)

#### `Optional` ` Readonly`do_multiplicative_adjustment

```ts
do_multiplicative_adjustment?: boolean
```

do multiplicative adjustments (e.g. splits, types behind this parameter differ per adjustment_source)

#### `Optional` ` Readonly`fields

```ts
fields?: string | readonly CdapiGetQuoteTickAggregatedQuotesField[]
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

#### `Optional` ` Readonly`listing_id

```ts
listing_id?: string
```

identifier on listing level for Infront data universe

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiQuoteTickQuotesAggregatedData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiQuoteTickQuotesAggregatedData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiQuoteTickQuotesAggregatedData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`vwd_key

```ts
vwd_key?: string
```

internal identifier combining instrument information with trading venue
