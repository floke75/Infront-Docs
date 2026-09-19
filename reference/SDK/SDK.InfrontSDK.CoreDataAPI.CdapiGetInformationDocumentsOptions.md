---
title: "CdapiGetInformationDocumentsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationDocumentsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetInformationDocumentsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationDocumentsOptions.html"
defines: ["CdapiGetInformationDocumentsOptions"]
member_count: 16
members: ["country_code?", "id?", "instrument_id?", "isin?", "issuer_id?", "language_code?", "limit?", "listing_id?", "offset?", "onData?", "onError?", "onFinally?", "sort?", "source?", "type_code?", "vwd_key?"]
member_groups:
  "Properties": ["country_code?", "id?", "instrument_id?", "isin?", "issuer_id?", "language_code?", "limit?", "listing_id?", "offset?", "onData?", "onError?", "onFinally?", "sort?", "source?", "type_code?", "vwd_key?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiInformationDocumentsData"]
reference_count: 6
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationDocumentsOptionsLanguageCode", "SDK.InfrontSDK.CoreDataAPI.CdapiInformationDocumentsData", "SDK.InfrontSDK.CoreDataAPI.CdapiSortField", "SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationDocumentsSortField", "SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationDocumentsOptionsSource", "SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationDocuments"]
---

# CdapiGetInformationDocumentsOptions

Request options for [cdapiGetInformationDocuments](./SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationDocuments.md)

```ts
interface CdapiGetInformationDocumentsOptions {
    country_code?: string;
    id?: string | readonly string[];
    instrument_id?: string | readonly string[];
    isin?: string | readonly string[];
    issuer_id?: string | readonly string[];
    language_code?: CdapiGetInformationDocumentsOptionsLanguageCode;
    limit?: number;
    listing_id?: string | readonly string[];
    offset?: number;
    onData?: CoreDataRequestSuccessCallback<CdapiInformationDocumentsData>;
    onError?: CoreDataRequestErrorCallback<CdapiInformationDocumentsData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiInformationDocumentsData>;
    sort?:
        | CdapiSortField<CdapiGetInformationDocumentsSortField>
        | readonly CdapiSortField<CdapiGetInformationDocumentsSortField>[];
    source?: CdapiGetInformationDocumentsOptionsSource;
    type_code?: string | readonly string[];
    vwd_key?: string | readonly string[];
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiInformationDocumentsData>

  - CdapiGetInformationDocumentsOptions

### Properties

#### `Optional` ` Readonly`country_code

```ts
country_code?: string
```

country code in isoalpha2
source: INFRONT
possible values: GB, DE, NL, IT, FR, PL, ES, BG, CZ, GR, EE, HR, HU, IS, LT, LV, PT, RO, SK, SI, LU

#### `Optional` ` Readonly`id

```ts
id?: string | readonly string[]
```

identifier for documents

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

#### `Optional` ` Readonly`language_code

```ts
language_code?: CdapiGetInformationDocumentsOptionsLanguageCode
```

the language of the document as iso code (source: INFRONT)

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
onData?: CoreDataRequestSuccessCallback<CdapiInformationDocumentsData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiInformationDocumentsData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiInformationDocumentsData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`sort

```ts
sort?:
    | CdapiSortField<CdapiGetInformationDocumentsSortField>
    | readonly CdapiSortField<CdapiGetInformationDocumentsSortField>[]
```

use repeated field to apply sorting.
'+' at the beginning of the string sorts ASC,
'-' at the beginning of the string sorts DESC.
Sortable fields:

- document.timestamp

#### `Optional` ` Readonly`source

```ts
source?: CdapiGetInformationDocumentsOptionsSource
```

the source for the documents

#### `Optional` ` Readonly`type_code

```ts
type_code?: string | readonly string[]
```

search for a type_code

#### `Optional` ` Readonly`vwd_key

```ts
vwd_key?: string | readonly string[]
```

search for Infront's vwd_key
