---
title: "ListingsOptionsBase<T>"
qualified_name: "SDK.InfrontSDK.ListingsOptionsBase"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > ListingsOptionsBase"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.ListingsOptionsBase.html"
defines: ["ListingsOptionsBase"]
member_count: 8
members: ["fields?", "id", "limit?", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["fields?", "id", "limit?", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.ListingsOptionsInteractive", "SDK.InfrontSDK.ListingsOptionsNoneInteractive"]
reference_count: 8
references: ["SDK.InfrontSDK.SearchResultField", "SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.symbolData", "SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.ListingsOptionsInteractive", "SDK.InfrontSDK.ListingsOptionsNoneInteractive"]
---

# ListingsOptionsBase<T>

Options interface to request all symbols with the same ISIN as the symbol contained in the [symbolData](./SDK.InfrontSDK.symbolData.md).

```ts
interface ListingsOptionsBase<T> {
    fields?: SearchResultField[];
    id: SymbolId;
    limit?: number;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: T): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Type Parameters

- T

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.ListingsOptionsBase))

- DataRequestOptions<T>

  - ListingsOptionsBase

    - ListingsOptionsInteractive
    - ListingsOptionsNoneInteractive

### Properties

#### `Optional` fields

```ts
fields?: SearchResultField[]
```

An array of fields used to specify what data fields should be presented in search result(s).
If the desired field is not available in [SearchResultField](./SDK.InfrontSDK.SearchResultField.md) then do [symbolData](./SDK.InfrontSDK.symbolData.md) to get it.

#### id

```ts
id: SymbolId
```

The SymbolId for the listing item.

#### `Optional` limit

```ts
limit?: number
```

Maximum number of search results. Default value is 50.

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

### Methods

#### onData

```ts
onData(data: T): void
```

A callback to be called to pass the output.

##### Parameters

- data: [T](#t)

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
