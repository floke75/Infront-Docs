---
title: "CdapiGetQuoteHistoryQuotesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteHistoryQuotesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetQuoteHistoryQuotesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteHistoryQuotesOptions.html"
defines: ["CdapiGetQuoteHistoryQuotesOptions"]
member_count: 11
members: ["adjustment_schema?", "adjustment_source?", "aggregation_period?", "do_additive_adjustment?", "do_multiplicative_adjustment?", "ids_identifier.ids_feed_code?", "ids_identifier.ids_feed_number?", "ids_identifier.ids_ticker?", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["adjustment_schema?", "adjustment_source?", "aggregation_period?", "do_additive_adjustment?", "do_multiplicative_adjustment?", "ids_identifier.ids_feed_code?", "ids_identifier.ids_feed_number?", "ids_identifier.ids_ticker?", "onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiQuoteHistoryQuotesData"]
reference_count: 5
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteHistoryQuotesOptionsAdjustmentSchema", "SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteHistoryQuotesOptionsAdjustmentSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetQuoteHistoryQuotesOptionsAggregationPeriod", "SDK.InfrontSDK.CoreDataAPI.CdapiQuoteHistoryQuotesData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetQuoteHistoryQuotes"]
---

# CdapiGetQuoteHistoryQuotesOptions

Request options for [cdapiGetQuoteHistoryQuotes](./SDK.InfrontSDK.CoreDataAPI.cdapiGetQuoteHistoryQuotes.md)

```ts
interface CdapiGetQuoteHistoryQuotesOptions {
    adjustment_schema?: CdapiGetQuoteHistoryQuotesOptionsAdjustmentSchema;
    adjustment_source?: CdapiGetQuoteHistoryQuotesOptionsAdjustmentSource;
    aggregation_period?: CdapiGetQuoteHistoryQuotesOptionsAggregationPeriod;
    do_additive_adjustment?: boolean;
    do_multiplicative_adjustment?: boolean;
    "ids_identifier.ids_feed_code"?: string;
    "ids_identifier.ids_feed_number"?: number;
    "ids_identifier.ids_ticker"?: string;
    onData?: CoreDataRequestSuccessCallback<CdapiQuoteHistoryQuotesData>;
    onError?: CoreDataRequestErrorCallback<CdapiQuoteHistoryQuotesData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiQuoteHistoryQuotesData>;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiQuoteHistoryQuotesData>

  - CdapiGetQuoteHistoryQuotesOptions

### Properties

#### `Optional` ` Readonly`adjustment_schema

```ts
adjustment_schema?: CdapiGetQuoteHistoryQuotesOptionsAdjustmentSchema
```

adjustment schema (default=SIMPLE - e.g. for charts, ADVANCED e.g. for portfolio-valuation - not implemented yet)

#### `Optional` ` Readonly`adjustment_source

```ts
adjustment_source?: CdapiGetQuoteHistoryQuotesOptionsAdjustmentSource
```

source to use for corporate actions (the selected source needs to be entitled, default=INFRONT_HISTORY)

#### `Optional` ` Readonly`aggregation_period

```ts
aggregation_period?: CdapiGetQuoteHistoryQuotesOptionsAggregationPeriod
```

aggregation period, default is 1 day

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

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiQuoteHistoryQuotesData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiQuoteHistoryQuotesData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiQuoteHistoryQuotesData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally
