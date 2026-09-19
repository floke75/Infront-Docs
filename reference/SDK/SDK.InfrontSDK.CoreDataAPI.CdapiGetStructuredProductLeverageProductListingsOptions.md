---
title: "CdapiGetStructuredProductLeverageProductListingsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetStructuredProductLeverageProductListingsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetStructuredProductLeverageProductListingsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetStructuredProductLeverageProductListingsOptions.html"
defines: ["CdapiGetStructuredProductLeverageProductListingsOptions"]
member_count: 28
members: ["asset_class_category_code?", "asset_class_group_code?", "chunk_size?", "country_code?", "currency_code?", "esg_risk_source?", "id?", "ids_feed_number?", "ids_ticker?", "instrument_id?", "isin?", "issuer_id?", "lei?", "limit?", "listing_id?", "nsin?", "offset?", "onData?", "onError?", "onFinally?", "rating_source?", "search_string?", "sector_id?", "structured_product_source?", "sub_sector_id?", "trading_venue_code?", "underlying_search_string?", "vwd_key?"]
member_groups:
  "Properties": ["asset_class_category_code?", "asset_class_group_code?", "chunk_size?", "country_code?", "currency_code?", "esg_risk_source?", "id?", "ids_feed_number?", "ids_ticker?", "instrument_id?", "isin?", "issuer_id?", "lei?", "limit?", "listing_id?", "nsin?", "offset?", "onData?", "onError?", "onFinally?", "rating_source?", "search_string?", "sector_id?", "structured_product_source?", "sub_sector_id?", "trading_venue_code?", "underlying_search_string?", "vwd_key?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductListingsLeverageProductData"]
reference_count: 5
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetStructuredProductLeverageProductListingsOptionsEsgRiskSource", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductListingsLeverageProductData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetStructuredProductLeverageProductListingsOptionsRatingSource", "SDK.InfrontSDK.CoreDataAPI.CdapiGetStructuredProductLeverageProductListingsOptionsStructuredProductSource", "SDK.InfrontSDK.CoreDataAPI.cdapiGetStructuredProductLeverageProductListings"]
---

# CdapiGetStructuredProductLeverageProductListingsOptions

Request options for [cdapiGetStructuredProductLeverageProductListings](./SDK.InfrontSDK.CoreDataAPI.cdapiGetStructuredProductLeverageProductListings.md)

```ts
interface CdapiGetStructuredProductLeverageProductListingsOptions {
    asset_class_category_code?: string | readonly string[];
    asset_class_group_code?: string | readonly string[];
    chunk_size?: number;
    country_code?: string | readonly string[];
    currency_code?: string | readonly string[];
    esg_risk_source?: CdapiGetStructuredProductLeverageProductListingsOptionsEsgRiskSource;
    id?: string | readonly string[];
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
    onData?: CoreDataRequestSuccessCallback<
        CdapiStructuredProductListingsLeverageProductData,
    >;
    onError?: CoreDataRequestErrorCallback<
        CdapiStructuredProductListingsLeverageProductData,
    >;
    onFinally?: CoreDataRequestFinallyCallback<
        CdapiStructuredProductListingsLeverageProductData,
    >;
    rating_source?: CdapiGetStructuredProductLeverageProductListingsOptionsRatingSource;
    search_string?: string;
    sector_id?: number
    | readonly number[];
    structured_product_source?: CdapiGetStructuredProductLeverageProductListingsOptionsStructuredProductSource;
    sub_sector_id?: number | readonly number[];
    trading_venue_code?: string | readonly string[];
    underlying_search_string?: string;
    vwd_key?: string | readonly string[];
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiStructuredProductListingsLeverageProductData>

  - CdapiGetStructuredProductLeverageProductListingsOptions

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

#### `Optional` ` Readonly`chunk_size

```ts
chunk_size?: number
```

maximum number of items per chunk - only applies to streaming requests (min: 10, max: 100)

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

#### `Optional` ` Readonly`esg_risk_source

```ts
esg_risk_source?: CdapiGetStructuredProductLeverageProductListingsOptionsEsgRiskSource
```

the esg_risk source (e.g. CLARITY)

#### `Optional` ` Readonly`id

```ts
id?: string | readonly string[]
```

identifier on listing level for Infront data universe

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
onData?: CoreDataRequestSuccessCallback<
    CdapiStructuredProductListingsLeverageProductData,
>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<
    CdapiStructuredProductListingsLeverageProductData,
>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<
    CdapiStructuredProductListingsLeverageProductData,
>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`rating_source

```ts
rating_source?: CdapiGetStructuredProductLeverageProductListingsOptionsRatingSource
```

the rating source (e.g. FITCH, MOODYS...)

#### `Optional` ` Readonly`search_string

```ts
search_string?: string
```

perform a free-text search across several fields, e.g. by instrument name, ISIN, ticker etc. (3 characters at least)(3 characters at least)

#### `Optional` ` Readonly`sector_id

```ts
sector_id?: number | readonly number[]
```

sector_id, e.g. Consumer Durables (source = INFRONT)

#### `Optional` ` Readonly`structured_product_source

```ts
structured_product_source?: CdapiGetStructuredProductLeverageProductListingsOptionsStructuredProductSource
```

source of bond data (GENERAL or STG)

#### `Optional` ` Readonly`sub_sector_id

```ts
sub_sector_id?: number | readonly number[]
```

sub_sector_id, e.g. Automobiles & Parts (source = INFRONT)

#### `Optional` ` Readonly`trading_venue_code

```ts
trading_venue_code?: string | readonly string[]
```

code of trading-venue linked to vwd-key

#### `Optional` ` Readonly`underlying_search_string

```ts
underlying_search_string?: string
```

search string for underlying indexed by serveral fields

#### `Optional` ` Readonly`vwd_key

```ts
vwd_key?: string | readonly string[]
```

Our internal identifier combining instrument information with trading venue
