---
title: "ConsolidatedOrderbookOptions"
qualified_name: "SDK.InfrontSDK.ConsolidatedOrderbookOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > ConsolidatedOrderbookOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.ConsolidatedOrderbookOptions.html"
defines: ["ConsolidatedOrderbookOptions"]
member_count: 6
members: ["id", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["id", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.ConsolidatedOrderbook"]
reference_count: 6
references: ["SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.ConsolidatedOrderbook", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.consolidatedOrderbook", "SDK.InfrontSDK.DataRequestOptions"]
---

# ConsolidatedOrderbookOptions

Options interface for consolidated orderbook across multiple markets.

#### See

[consolidatedOrderbook](./SDK.InfrontSDK.consolidatedOrderbook.md) | ConsolidatedOrderbook

```ts
interface ConsolidatedOrderbookOptions {
    id: SymbolId;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: ConsolidatedOrderbook): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.ConsolidatedOrderbookOptions))

- DataRequestOptions<ConsolidatedOrderbook>

  - ConsolidatedOrderbookOptions

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
onData(data: ConsolidatedOrderbook): void
```

A callback to be called to pass the output.

##### Parameters

- data: ConsolidatedOrderbook

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
