---
title: "PortfolioListOptions"
qualified_name: "SDK.InfrontSDK.Trading.PortfolioListOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > PortfolioListOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.PortfolioListOptions.html"
defines: ["PortfolioListOptions"]
member_count: 7
members: ["includeTradingPower?", "providerId", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["includeTradingPower?", "providerId", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.Trading.Portfolio"]
reference_count: 6
references: ["SDK.InfrontSDK.Trading.Portfolio", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.Trading.portfolio", "SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.Trading.TradingGatewayInfo"]
---

# PortfolioListOptions

Options for requesting available portfolios.

#### See

[portfolio](./SDK.InfrontSDK.Trading.portfolio.md)

```ts
interface PortfolioListOptions {
    includeTradingPower?: boolean;
    providerId: number;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: Portfolio[]): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.Trading.PortfolioListOptions))

- DataRequestOptions<Portfolio[]>

  - PortfolioListOptions

### Properties

#### `Optional` includeTradingPower

```ts
includeTradingPower?: boolean
```

Set to true if the portfolio list should include trading power for each portfolio

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
onData(data: Portfolio[]): void
```

A callback to be called to pass the output.

##### Parameters

- data: Portfolio[]

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
