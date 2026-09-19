---
title: "ChannelObserver"
qualified_name: "SDK.InfrontSDK.Trading.ChannelObserver"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > Trading > Other > ChannelObserver"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.ChannelObserver.html"
defines: ["ChannelObserver"]
member_count: 6
members: ["onActivePortfolioChanged?", "onActivePortfolioReady?", "onAvailablePortfoliosChanged?", "onTradingLostConnection?", "onTradingReconnected?", "onTradingTerminated?"]
member_groups:
  "Methods": ["onActivePortfolioChanged?", "onActivePortfolioReady?", "onAvailablePortfoliosChanged?", "onTradingLostConnection?", "onTradingReconnected?", "onTradingTerminated?"]
reference_count: 3
references: ["SDK.InfrontSDK.Trading.PortfolioData", "SDK.InfrontSDK.Trading.PortfolioInfo", "SDK.InfrontSDK.InfrontEvent"]
---

# ChannelObserver

Interface for Trading Channel events.

```ts
interface ChannelObserver {
    onActivePortfolioChanged?(portfolioData: PortfolioData): any;
    onActivePortfolioReady?(portfolioData: PortfolioData): any;
    onAvailablePortfoliosChanged?(portfolios: PortfolioInfo[]): any;
    onTradingLostConnection?(event: InfrontEvent): any;
    onTradingReconnected?(event: InfrontEvent): any;
    onTradingTerminated?(event: InfrontEvent): any;
}
```

### Methods

#### `Optional` onActivePortfolioChanged

```ts
onActivePortfolioChanged?(portfolioData: PortfolioData): any
```

This callback is sent when the active portfolio for the trading channel was changed.
Note that the portfolio may not be fully populated at this stage.

##### Parameters

- portfolioData: PortfolioData

##### Returns any

#### `Optional` onActivePortfolioReady

```ts
onActivePortfolioReady?(portfolioData: PortfolioData): any
```

This callback is sent when the active portfolio has received all content.

##### Parameters

- portfolioData: PortfolioData

##### Returns any

#### `Optional` onAvailablePortfoliosChanged

```ts
onAvailablePortfoliosChanged?(portfolios: PortfolioInfo[]): any
```

This callback is sent when the list of available portfolios changes.
This normally occurs right after login.

##### Parameters

- portfolios: PortfolioInfo[]

##### Returns any

#### `Optional` onTradingLostConnection

```ts
onTradingLostConnection?(event: InfrontEvent): any
```

This callback is sent when the connection to the server has been lost
and the reconnect-sequence has been initiated.

##### Parameters

- event: InfrontEvent

##### Returns any

#### `Optional` onTradingReconnected

```ts
onTradingReconnected?(event: InfrontEvent): any
```

This callback is sent when the SDK is successfully logged in
to the trading gateway after a lost connection.

##### Parameters

- event: InfrontEvent

##### Returns any

#### `Optional` onTradingTerminated

```ts
onTradingTerminated?(event: InfrontEvent): any
```

This callback is sent after the connection to the trading gateway
has been terminated and any reconnect attempts has failed.

##### Parameters

- event: InfrontEvent

##### Returns any
