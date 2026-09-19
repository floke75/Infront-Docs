---
title: "CdapiGetEtpEtcListingsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetEtpEtcListingsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetEtpEtcListingsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetEtpEtcListingsOptions.html"
defines: ["CdapiGetEtpEtcListingsOptions"]
member_count: 19
members: ["chunk_size?", "country_code?", "currency_code?", "id?", "ids_feed_number?", "ids_ticker?", "instrument_id?", "isin?", "lei?", "limit?", "listing_id?", "nsin?", "offset?", "onData?", "onError?", "onFinally?", "search_string?", "trading_venue_code?", "vwd_key?"]
member_groups:
  "Properties": ["chunk_size?", "country_code?", "currency_code?", "id?", "ids_feed_number?", "ids_ticker?", "instrument_id?", "isin?", "lei?", "limit?", "listing_id?", "nsin?", "offset?", "onData?", "onError?", "onFinally?", "search_string?", "trading_venue_code?", "vwd_key?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiEtpListingsEtcData"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEtpListingsEtcData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetEtpEtcListings"]
---

# CdapiGetEtpEtcListingsOptions

Request options for [cdapiGetEtpEtcListings](./SDK.InfrontSDK.CoreDataAPI.cdapiGetEtpEtcListings.md)

```ts
interface CdapiGetEtpEtcListingsOptions {
    chunk_size?: number;
    country_code?: string | readonly string[];
    currency_code?: string | readonly string[];
    id?: string | readonly string[];
    ids_feed_number?: number | readonly number[];
    ids_ticker?: string | readonly string[];
    instrument_id?: string | readonly string[];
    isin?: string | readonly string[];
    lei?: string | readonly string[];
    limit?: number;
    listing_id?: string | readonly string[];
    nsin?: string | readonly string[];
    offset?: number;
    onData?: CoreDataRequestSuccessCallback<CdapiEtpListingsEtcData>;
    onError?: CoreDataRequestErrorCallback<CdapiEtpListingsEtcData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiEtpListingsEtcData>;
    search_string?: string;
    trading_venue_code?: string | readonly string[];
    vwd_key?: string | readonly string[];
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiEtpListingsEtcData>

  - CdapiGetEtpEtcListingsOptions

### Properties

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
onData?: CoreDataRequestSuccessCallback<CdapiEtpListingsEtcData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiEtpListingsEtcData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiEtpListingsEtcData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`search_string

```ts
search_string?: string
```

perform a free-text search across several fields, e.g. by instrument name, ISIN, ticker etc. (3 characters at least)

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
