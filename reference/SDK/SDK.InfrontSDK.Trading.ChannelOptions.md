---
title: "ChannelOptions"
qualified_name: "SDK.InfrontSDK.Trading.ChannelOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > ChannelOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.ChannelOptions.html"
defines: ["ChannelOptions"]
member_count: 7
members: ["channelId", "providerId", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["channelId", "providerId", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.Trading.TradingChannelData"]
reference_count: 6
references: ["SDK.InfrontSDK.Trading.TradingChannelData", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.Trading.portfolio", "SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.Trading.TradingGatewayInfo"]
---

# ChannelOptions

Options for requesting a trading channel.

#### See

[portfolio](./SDK.InfrontSDK.Trading.portfolio.md)

```ts
interface ChannelOptions {
    channelId: string;
    providerId: number;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: TradingChannelData): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.Trading.ChannelOptions))

- DataRequestOptions<TradingChannelData>

  - ChannelOptions

### Properties

#### channelId

```ts
channelId: string
```

Unique id identifying the channel

#### providerId

```ts
providerId: number
```

Provider id for the trading gateway. This value is provided in the TradingGatewayInfo

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
onData(data: TradingChannelData): void
```

A callback to be called to pass the output.

##### Parameters

- data: TradingChannelData

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
