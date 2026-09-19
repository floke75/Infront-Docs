---
title: "CdapiGetInformationEventsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationEventsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetInformationEventsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationEventsOptions.html"
defines: ["CdapiGetInformationEventsOptions"]
member_count: 14
members: ["company_code?", "id?", "instrument_id?", "isin?", "issuer_id?", "limit?", "listing_id?", "offset?", "onData?", "onError?", "onFinally?", "source?", "type_code?", "type_id?"]
member_groups:
  "Properties": ["company_code?", "id?", "instrument_id?", "isin?", "issuer_id?", "limit?", "listing_id?", "offset?", "onData?", "onError?", "onFinally?", "source?", "type_code?", "type_id?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventsData"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventsData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationEventsOptionsSource", "SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationEvents"]
---

# CdapiGetInformationEventsOptions

Request options for [cdapiGetInformationEvents](./SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationEvents.md)

```ts
interface CdapiGetInformationEventsOptions {
    company_code?: string | readonly string[];
    id?: number | readonly number[];
    instrument_id?: string | readonly string[];
    isin?: string | readonly string[];
    issuer_id?: string | readonly string[];
    limit?: number;
    listing_id?: string | readonly string[];
    offset?: number;
    onData?: CoreDataRequestSuccessCallback<CdapiInformationEventsData>;
    onError?: CoreDataRequestErrorCallback<CdapiInformationEventsData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiInformationEventsData>;
    source?: CdapiGetInformationEventsOptionsSource;
    type_code?: string | readonly string[];
    type_id?: number | readonly number[];
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiInformationEventsData>

  - CdapiGetInformationEventsOptions

### Properties

#### `Optional` ` Readonly`company_code

```ts
company_code?: string | readonly string[]
```

search for Infront's company_code

#### `Optional` ` Readonly`id

```ts
id?: number | readonly number[]
```

identifier for events

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

#### `Optional` ` Readonly`issuer_id

```ts
issuer_id?: string | readonly string[]
```

search for Infront's issuer_id

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
onData?: CoreDataRequestSuccessCallback<CdapiInformationEventsData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiInformationEventsData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiInformationEventsData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`source

```ts
source?: CdapiGetInformationEventsOptionsSource
```

the source for the events

#### `Optional` ` Readonly`type_code

```ts
type_code?: string | readonly string[]
```

search for a type_code

#### `Optional` ` Readonly`type_id

```ts
type_id?: number | readonly number[]
```

search for a type_id
