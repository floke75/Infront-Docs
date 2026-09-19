---
title: "DocumentOptions"
qualified_name: "SDK.InfrontSDK.DocumentOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Documents"
nav_path: "SDK > InfrontSDK > Documents > DocumentOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.DocumentOptions.html"
defines: ["DocumentOptions"]
member_count: 9
members: ["country", "id", "language", "signal?", "subscribe?", "type", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["country", "id", "language", "signal?", "subscribe?", "type"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.Document"]
reference_count: 7
references: ["SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.DocumentType", "SDK.InfrontSDK.Document", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.document", "SDK.InfrontSDK.DataRequestOptions"]
---

# DocumentOptions

Regulatory document request options.

#### See

[document](./SDK.InfrontSDK.document.md) | Document

```ts
interface DocumentOptions {
    country: string;
    id: SymbolId;
    language: string;
    signal?: AbortSignal;
    subscribe?: boolean;
    type: DocumentType;
    onData(data: Document): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.DocumentOptions))

- DataRequestOptions<Document>

  - DocumentOptions

### Properties

#### country

```ts
country: string
```

Document country.

#### id

```ts
id: SymbolId
```

Symbol id to request a document for.

#### language

```ts
language: string
```

Document language.

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

#### type

```ts
type: DocumentType
```

Document type.

### Methods

#### onData

```ts
onData(data: Document): void
```

A callback to be called to pass the output.

##### Parameters

- data: Document

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
