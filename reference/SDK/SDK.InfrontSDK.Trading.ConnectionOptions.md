---
title: "ConnectionOptions<T>"
qualified_name: "SDK.InfrontSDK.Trading.ConnectionOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > Trading > Other > ConnectionOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.ConnectionOptions.html"
defines: ["ConnectionOptions"]
member_count: 10
members: ["action", "appId?", "credentials?", "localeString?", "providerId?", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["action", "appId?", "credentials?", "localeString?", "providerId?", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
reference_count: 7
references: ["SDK.InfrontSDK.Trading.TradingConnectionAction", "SDK.InfrontSDK.Trading.Credentials", "SDK.InfrontSDK.Trading.TradingGatewayInfo", "SDK.InfrontSDK.Trading.ConnectionData", "SDK.InfrontSDK.Trading.ConnectionStateInfo", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails"]
---

# ConnectionOptions<T>

```ts
interface ConnectionOptions<T extends TradingConnectionAction> {
    action: T;
    appId?: number;
    credentials?: Credentials;
    localeString?: string;
    providerId?: number;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(
        data: T extends Gateways
            ? TradingGatewayInfo[]
            : T extends Login
                ? ConnectionData
                : T extends Observe
                    ? ConnectionStateInfo
                    : T extends CancelLogin ? string : T extends Logout ? string : never,
    ): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Type Parameters

- T extends [TradingConnectionAction](./SDK.InfrontSDK.Trading.TradingConnectionAction.md)

#### Hierarchy

- ConnectionReturnType<T>

  - ConnectionOptions

### Properties

#### action

```ts
action: T
```

Specify the operation to perform.

#### `Optional` appId

```ts
appId?: number
```

user defined custom id to identify source of placed order

#### `Optional` credentials

```ts
credentials?: Credentials
```

The credentials required for logging in to the trading gateway

#### `Optional` localeString

```ts
localeString?: string
```

user defined locale string to get order statuses in specific language

#### `Optional` providerId

```ts
providerId?: number
```

Provider id for the trading gateway. This value is returned in the TradingGatewayInfo

#### `Optional` signal

```ts
signal?: AbortSignal
```

Signal to abort the request.

Inherited from ConnectionReturnType.signal

#### `Optional` subscribe

```ts
subscribe?: boolean
```

Subscribe flag. Use this option to subscribe to data updates.

##### Remarks

If the current user does not have streaming access, no updates would be sent even when subscribe is true.

Inherited from ConnectionReturnType.subscribe

### Methods

#### onData

```ts
onData(
    data: T extends Gateways
        ? TradingGatewayInfo[]
        : T extends Login
            ? ConnectionData
            : T extends Observe
                ? ConnectionStateInfo
                : T extends CancelLogin ? string : T extends Logout ? string : never,
): void
```

A callback to be called to pass the output.

##### Parameters

- data: [T](#t) extends [Gateways](./SDK.InfrontSDK.Trading.TradingConnectionAction.md#gateways)
  ? TradingGatewayInfo[]: [T](#t) extends [Login](./SDK.InfrontSDK.Trading.TradingConnectionAction.md#login)
  ? ConnectionData: [T](#t) extends [Observe](./SDK.InfrontSDK.Trading.TradingConnectionAction.md#observe)
  ? ConnectionStateInfo: [T](#t) extends [CancelLogin](./SDK.InfrontSDK.Trading.TradingConnectionAction.md#cancellogin) ? string: [T](#t) extends [Logout](./SDK.InfrontSDK.Trading.TradingConnectionAction.md#logout) ? string: never

  Output should be passed here.

##### Returns void

Inherited from ConnectionReturnType.onData

#### `Optional` onError

```ts
onError?(error: ErrorBase): void
```

A callback to be called to pass the error(s).

##### Parameters

- error: ErrorBase

##### Returns void

Inherited from ConnectionReturnType.onError

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

Inherited from ConnectionReturnType.onStatus
