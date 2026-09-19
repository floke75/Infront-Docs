---
title: "DocumentsOptions"
qualified_name: "SDK.InfrontSDK.DocumentsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Documents"
nav_path: "SDK > InfrontSDK > Documents > DocumentsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.DocumentsOptions.html"
defines: ["DocumentsOptions"]
member_count: 11
members: ["country?", "id", "language?", "limit?", "offset?", "signal?", "subscribe?", "type?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["country?", "id", "language?", "limit?", "offset?", "signal?", "subscribe?", "type?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.DocumentMetadata"]
reference_count: 7
references: ["SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.DocumentType", "SDK.InfrontSDK.DocumentMetadata", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.documents", "SDK.InfrontSDK.DataRequestOptions"]
---

# DocumentsOptions

Regulatory documents request options.

#### See

[documents](./SDK.InfrontSDK.documents.md) | DocumentMetadata

```ts
interface DocumentsOptions {
    country?: string;
    id: SymbolId;
    language?: string;
    limit?: number;
    offset?: number;
    signal?: AbortSignal;
    subscribe?: boolean;
    type?: DocumentType;
    onData(data: DocumentMetadata[]): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.DocumentsOptions))

- DataRequestOptions<DocumentMetadata[]>

  - DocumentsOptions

### Properties

#### `Optional` country

```ts
country?: string
```

Filter documents by country.

#### id

```ts
id: SymbolId
```

Symbol id to request the regulatory documents for.

#### `Optional` language

```ts
language?: string
```

Filter documents by language.

#### `Optional` limit

```ts
limit?: number
```

Limit the number of returned documents.

#### `Optional` offset

```ts
offset?: number
```

Documents offset. This option can be helpful for paging.

#### `Optional` signal

```ts
signal?: AbortSignal
```

Signal to abort the request.

Inherited from DataRequestOptions.signal

#### `Optional` subscribe

```ts
subscribe?: boolean
```

Subscribe flag. Use this option to subscribe to data updates.

##### Remarks

If the current user does not have streaming access, no updates would be sent even when subscribe is true.

Inherited from DataRequestOptions.subscribe

#### `Optional` type

```ts
type?: DocumentType
```

Filter documents by type.

### Methods

#### onData

```ts
onData(data: DocumentMetadata[]): void
```

A callback to be called to pass the output.

##### Parameters

- data: DocumentMetadata[]

  Output should be passed here.

##### Returns void

Inherited from DataRequestOptions.onData

#### `Optional` onError

```ts
onError?(error: ErrorBase): void
```

A callback to be called to pass the error(s).

##### Parameters

- error: ErrorBase

##### Returns void

Inherited from DataRequestOptions.onError

#### `Optional` onStatus

```ts
onStatus?(
    requestName: string,
    status: RequestStatus,
    extra?: RequestDetails,
): void
```

Request status callback. Use this callback to get more details about the current state of the request.

##### Parameters

- requestName: string
- status: [RequestStatus](./SDK.InfrontSDK.RequestStatus.md)

  Request status.
- `Optional` extra: RequestDetails

  Detailed information.

##### Returns void

Inherited from DataRequestOptions.onStatus
