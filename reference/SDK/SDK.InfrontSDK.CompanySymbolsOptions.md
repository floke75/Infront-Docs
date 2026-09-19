---
title: "CompanySymbolsOptions"
qualified_name: "SDK.InfrontSDK.CompanySymbolsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > CompanySymbolsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CompanySymbolsOptions.html"
defines: ["CompanySymbolsOptions"]
member_count: 6
members: ["signal?", "subscribe?", "symbolId", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["signal?", "subscribe?", "symbolId"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.FeedListItem"]
reference_count: 6
references: ["SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.symbolData", "SDK.InfrontSDK.FeedListItem"]
---

# CompanySymbolsOptions

Options interface to request all derivatives, bonds, certificates and other types that belongs to the holding company of the [symbolData](./SDK.InfrontSDK.symbolData.md).

```ts
interface CompanySymbolsOptions {
    signal?: AbortSignal;
    subscribe?: boolean;
    symbolId: SymbolId;
    onData(data: DataType): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.CompanySymbolsOptions))

- DataRequestOptions<Record<number, FeedListItem>>

  - CompanySymbolsOptions

### Properties

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

#### symbolId

```ts
symbolId: SymbolId
```

The id of the symbol used as basis for the search

### Methods

#### onData

```ts
onData(data: DataType): void
```

A callback to be called to pass the output.

##### Parameters

- data: DataType

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
