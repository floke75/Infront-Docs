---
title: "FieldSearchOptions"
qualified_name: "SDK.InfrontSDK.FieldSearchOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Search"
nav_path: "SDK > InfrontSDK > Search > FieldSearchOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.FieldSearchOptions.html"
defines: ["FieldSearchOptions"]
member_count: 8
members: ["fields", "limit?", "parameters", "signal?", "subscribe", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["fields", "limit?", "parameters", "signal?", "subscribe"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.SymbolFieldType", "SDK.InfrontSDK.SymbolField"]
reference_count: 8
references: ["SDK.InfrontSDK.SearchResultField", "SDK.InfrontSDK.SearchParameters", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.SymbolFieldType", "SDK.InfrontSDK.SymbolField", "SDK.InfrontSDK.SearchField"]
---

# FieldSearchOptions

Options interface to request field search.

```ts
interface FieldSearchOptions {
    fields: SearchResultField[];
    limit?: number;
    parameters: SearchParameters;
    signal?: AbortSignal;
    subscribe: false;
    onData(data: any[]): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.FieldSearchOptions))

- DataRequestOptions<SymbolFieldType[SymbolField][]>

  - FieldSearchOptions

### Properties

#### fields

```ts
fields: SearchResultField[]
```

Search fields.

#### `Optional` limit

```ts
limit?: number
```

number of search results

#### parameters

```ts
parameters: SearchParameters
```

A key-value pairs used to filter search results. All provided keys must be members of SearchField.

#### `Optional` signal

```ts
signal?: AbortSignal
```

Signal to abort the request.

Inherited from DataRequestOptions.signal

#### subscribe

```ts
subscribe: false
```

Not possible to subscribe to this request.

Overrides DataRequestOptions.subscribe

### Methods

#### onData

```ts
onData(data: any[]): void
```

A callback to be called to pass the output.

##### Parameters

- data: any[]

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
