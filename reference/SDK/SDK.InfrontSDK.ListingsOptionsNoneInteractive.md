---
title: "ListingsOptionsNoneInteractive"
qualified_name: "SDK.InfrontSDK.ListingsOptionsNoneInteractive"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > ListingsOptionsNoneInteractive"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.ListingsOptionsNoneInteractive.html"
defines: ["ListingsOptionsNoneInteractive"]
member_count: 9
members: ["fields?", "id", "interactive", "limit?", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["fields?", "id", "interactive", "limit?", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.ListingsOptionsBase", "SDK.InfrontSDK.SearchResultItem"]
reference_count: 7
references: ["SDK.InfrontSDK.SearchResultField", "SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.SearchResultItem", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.symbolData", "SDK.InfrontSDK.ListingsOptionsBase"]
---

# ListingsOptionsNoneInteractive

Options interface to request all symbols with the same ISIN as the symbol contained in the [symbolData](./SDK.InfrontSDK.symbolData.md).

```ts
interface ListingsOptionsNoneInteractive {
    fields?: SearchResultField[];
    id: SymbolId;
    interactive: false;
    limit?: number;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: SearchResultItem[]): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.ListingsOptionsNoneInteractive))

- ListingsOptionsBase<SearchResultItem[]>

  - ListingsOptionsNoneInteractive

### Properties

#### `Optional` fields

```ts
fields?: SearchResultField[]
```

An array of fields used to specify what data fields should be presented in search result(s).
If the desired field is not available in [SearchResultField](./SDK.InfrontSDK.SearchResultField.md) then do [symbolData](./SDK.InfrontSDK.symbolData.md) to get it.

Inherited from ListingsOptionsBase.fields

#### id

```ts
id: SymbolId
```

The SymbolId for the listing item.

Inherited from ListingsOptionsBase.id

#### interactive

```ts
interactive: false
```

Present the output as static array.

#### `Optional` limit

```ts
limit?: number
```

Maximum number of search results. Default value is 50.

Inherited from ListingsOptionsBase.limit

#### `Optional` signal

```ts
signal?: AbortSignal
```

Signal to abort the request.

Inherited from ListingsOptionsBase.signal

#### `Optional` subscribe

```ts
subscribe?: boolean
```

Subscribe flag. Use this option to subscribe to data updates.

##### Remarks

If the current user does not have streaming access, no updates would be sent even when subscribe is true.

Inherited from ListingsOptionsBase.subscribe

### Methods

#### onData

```ts
onData(data: SearchResultItem[]): void
```

A callback to be called to pass the output.

##### Parameters

- data: SearchResultItem[]

  Output should be passed here.

##### Returns void

Inherited from ListingsOptionsBase.onData

#### `Optional` onError

```ts
onError?(error: ErrorBase): void
```

A callback to be called to pass the error(s).

##### Parameters

- error: ErrorBase

##### Returns void

Inherited from ListingsOptionsBase.onError

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

Inherited from ListingsOptionsBase.onStatus
