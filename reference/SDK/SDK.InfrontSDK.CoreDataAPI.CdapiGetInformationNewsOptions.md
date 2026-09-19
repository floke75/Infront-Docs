---
title: "CdapiGetInformationNewsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationNewsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetInformationNewsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationNewsOptions.html"
defines: ["CdapiGetInformationNewsOptions"]
member_count: 12
members: ["id?", "instrument_id?", "isin?", "limit?", "listing_id?", "offset?", "onData?", "onError?", "onFinally?", "provider_code?", "search_string?", "sort?"]
member_groups:
  "Properties": ["id?", "instrument_id?", "isin?", "limit?", "listing_id?", "offset?", "onData?", "onError?", "onFinally?", "provider_code?", "search_string?", "sort?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiInformationNewsData"]
reference_count: 4
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiInformationNewsData", "SDK.InfrontSDK.CoreDataAPI.CdapiSortField", "SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationNewsSortField", "SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationNews"]
---

# CdapiGetInformationNewsOptions

Request options for [cdapiGetInformationNews](./SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationNews.md)

```ts
interface CdapiGetInformationNewsOptions {
    id?: string | readonly string[];
    instrument_id?: string | readonly string[];
    isin?: string | readonly string[];
    limit?: number;
    listing_id?: string | readonly string[];
    offset?: number;
    onData?: CoreDataRequestSuccessCallback<CdapiInformationNewsData>;
    onError?: CoreDataRequestErrorCallback<CdapiInformationNewsData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiInformationNewsData>;
    provider_code?: string | readonly string[];
    search_string?: string;
    sort?:
        | CdapiSortField<CdapiGetInformationNewsSortField>
        | readonly CdapiSortField<CdapiGetInformationNewsSortField>[];
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiInformationNewsData>

  - CdapiGetInformationNewsOptions

### Properties

#### `Optional` ` Readonly`id

```ts
id?: string | readonly string[]
```

identifier for news

#### `Optional` ` Readonly`instrument_id

```ts
instrument_id?: string | readonly string[]
```

search for Infront's instrument_id

#### `Optional` ` Readonly`isin

```ts
isin?: string | readonly string[]
```

search for ISIN

#### `Optional` ` Readonly`limit

```ts
limit?: number
```

limit of the results

#### `Optional` ` Readonly`listing_id

```ts
listing_id?: string | readonly string[]
```

search for Infront's listing_id

#### `Optional` ` Readonly`offset

```ts
offset?: number
```

offset - used for pagination

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiInformationNewsData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiInformationNewsData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiInformationNewsData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`provider_code

```ts
provider_code?: string | readonly string[]
```

the provider for the news

#### `Optional` ` Readonly`search_string

```ts
search_string?: string
```

search for a search_string

#### `Optional` ` Readonly`sort

```ts
sort?:
    | CdapiSortField<CdapiGetInformationNewsSortField>
    | readonly CdapiSortField<CdapiGetInformationNewsSortField>[]
```

use repeated field to apply sorting.
'+' at the beginning of the string sorts ASC
'-' at the beginning of the string sorts DESC
