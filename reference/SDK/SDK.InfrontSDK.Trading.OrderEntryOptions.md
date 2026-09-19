---
title: "OrderEntryOptions"
qualified_name: "SDK.InfrontSDK.Trading.OrderEntryOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > OrderEntryOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.OrderEntryOptions.html"
defines: ["OrderEntryOptions"]
member_count: 10
members: ["action", "orderData?", "orderId?", "portfolio", "providerId", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["action", "orderData?", "orderId?", "portfolio", "providerId", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.Trading.MarketProperties"]
reference_count: 7
references: ["SDK.InfrontSDK.Trading.OrderEntryAction", "SDK.InfrontSDK.Trading.OrderData", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.Trading.MarketProperties", "SDK.InfrontSDK.Trading.TradingGatewayInfo"]
---

# OrderEntryOptions

Options for handling orders and accessing market properties.

```ts
interface OrderEntryOptions {
    action: OrderEntryAction;
    orderData?: OrderData;
    orderId?: string;
    portfolio: string;
    providerId: number;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: any): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.Trading.OrderEntryOptions))

- DataRequestOptions<MarketProperties | any>

  - OrderEntryOptions

### Properties

#### action

```ts
action: OrderEntryAction
```

Specify the operation to perform.

#### `Optional` orderData

```ts
orderData?: OrderData
```

Order fields for InsertOrder and ModifyOrder

#### `Optional` orderId

```ts
orderId?: string
```

Reference to the order

#### portfolio

```ts
portfolio: string
```

The portfolio that is used for the order

#### providerId

```ts
providerId: number
```

Provider id for the trading gateway. This value is returned in the TradingGatewayInfo

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
onData(data: any): void
```

A callback to be called to pass the output.

##### Parameters

- data: any

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
