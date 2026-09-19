---
title: "TradesOptions"
qualified_name: "SDK.InfrontSDK.TradesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > TradesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.TradesOptions.html"
defines: ["TradesOptions"]
member_count: 10
members: ["date?", "daysBack?", "id", "idHint?", "limit?", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["date?", "daysBack?", "id", "idHint?", "limit?", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.Trade"]
reference_count: 7
references: ["SDK.InfrontSDK.SymbolId", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.trades", "SDK.InfrontSDK.Trade", "SDK.InfrontSDK.DataRequestOptions"]
---

# TradesOptions

Options interface to request trades.

#### See

[trades](./SDK.InfrontSDK.trades.md) | Trade

```ts
interface TradesOptions {
    date?: Date;
    daysBack?: number;
    id: SymbolId;
    idHint?: number;
    limit?: number;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: ObservableArray): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.TradesOptions))

- DataRequestOptions<ObservableArray<Trade>>

  - TradesOptions

### Properties

#### `Optional` date

```ts
date?: Date
```

Request trades from a specific date. Use this option to request for historical trades.

#### `Optional` daysBack

```ts
daysBack?: number
```

Request all trades for the whole day since daysBack. Using this will get all trades for that day. limit will have no effect.

#### id

```ts
id: SymbolId
```

Symbol id to be used to request for trades.

#### `Optional` idHint

```ts
idHint?: number
```

Use this option to request for older trades by setting this option to last trade sequence number. This option must not be used with subscribe.

#### `Optional` limit

```ts
limit?: number
```

Sets the maximum number for requested trades. Default value is 50.

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
onData(data: ObservableArray): void
```

A callback to be called to pass the output.

##### Parameters

- data: [ObservableArray](../Utils/Utils.InfrontUtil.ObservableArray.md)

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
