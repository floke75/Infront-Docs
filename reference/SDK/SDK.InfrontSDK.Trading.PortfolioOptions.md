---
title: "PortfolioOptions"
qualified_name: "SDK.InfrontSDK.Trading.PortfolioOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > PortfolioOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.PortfolioOptions.html"
defines: ["PortfolioOptions"]
member_count: 8
members: ["action?", "portfolioName", "providerId", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["action?", "portfolioName", "providerId", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.Trading.Portfolio", "SDK.InfrontSDK.Trading.PortfolioData"]
reference_count: 9
references: ["SDK.InfrontSDK.Trading.PortfolioAction", "SDK.InfrontSDK.Trading.PortfolioData", "SDK.InfrontSDK.Trading.Portfolio", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.Trading.portfolio", "SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.Trading.portfolioList", "SDK.InfrontSDK.Trading.TradingGatewayInfo"]
---

# PortfolioOptions

Options for requesting portfolio data.

#### See

[portfolio](./SDK.InfrontSDK.Trading.portfolio.md)

```ts
interface PortfolioOptions {
    action?: PortfolioAction;
    portfolioName: string;
    providerId: number;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: PortfolioData | Portfolio[]): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.Trading.PortfolioOptions))

- DataRequestOptions<Portfolio[] | PortfolioData>

  - PortfolioOptions

### Properties

#### `Optional` action

```ts
action?: PortfolioAction
```

Specify the operation to perform.

##### Deprecated

This option will not be supported after v1.4.0. To get portfolio list use [portfolioList](./SDK.InfrontSDK.Trading.portfolioList.md) request.

#### portfolioName

```ts
portfolioName: string
```

Name of the portfolio to be retrieved

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
onData(data: PortfolioData | Portfolio[]): void
```

A callback to be called to pass the output.

##### Parameters

- data: PortfolioData | Portfolio[]

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
