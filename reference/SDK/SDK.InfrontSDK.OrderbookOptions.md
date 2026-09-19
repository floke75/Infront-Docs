---
title: "OrderbookOptions"
qualified_name: "SDK.InfrontSDK.OrderbookOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > OrderbookOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.OrderbookOptions.html"
defines: ["OrderbookOptions"]
member_count: 6
members: ["id", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["id", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.Orderbook"]
reference_count: 6
references: ["SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.Orderbook", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.orderbook", "SDK.InfrontSDK.DataRequestOptions"]
---

# OrderbookOptions

Options interface used to request orderbook.

#### See

[orderbook](./SDK.InfrontSDK.orderbook.md) | Orderbook

```ts
interface OrderbookOptions {
    id: SymbolId;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: Orderbook): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.OrderbookOptions))

- DataRequestOptions<Orderbook>

  - OrderbookOptions

### Properties

#### id

```ts
id: SymbolId
```

Symbol id

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
onData(data: Orderbook): void
```

A callback to be called to pass the output.

##### Parameters

- data: Orderbook

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
