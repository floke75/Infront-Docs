---
title: "ConnectionData"
qualified_name: "SDK.InfrontSDK.Trading.ConnectionData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > Trading > Other > ConnectionData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.ConnectionData.html"
defines: ["ConnectionData"]
member_count: 5
members: ["getInfo", "getMarket", "hasServerProperty", "hasUserProperty", "observeStatus"]
member_groups:
  "Properties": ["getInfo", "getMarket", "hasServerProperty", "hasUserProperty", "observeStatus"]
reference_count: 5
references: ["SDK.InfrontSDK.Trading.TradingGatewayInfo", "SDK.InfrontSDK.Trading.ServerProperty", "SDK.InfrontSDK.Trading.UserProperty", "SDK.InfrontSDK.Trading.TradingConnectionState", "SDK.InfrontSDK.Unbind"]
---

# ConnectionData

This object is returned when the user is successfully logged in to a trading gateway,
and gives access to server capabilities and connection status.

```ts
interface ConnectionData {
    getInfo: () => TradingGatewayInfo;
    getMarket: (feed: number) => string;
    hasServerProperty: (property: ServerProperty, feed?: number) => boolean;
    hasUserProperty: (property: UserProperty) => boolean;
    observeStatus: (
        callback: (state: TradingConnectionState) => void,
    ) => Unbind;
}
```

### Properties

#### getInfo

```ts
getInfo: () => TradingGatewayInfo
```

Return TradingGatewayInfo for the trading gateway.

#### getMarket

```ts
getMarket: (feed: number) => string
```

Get the market code for the given feed

#### hasServerProperty

```ts
hasServerProperty: (property: ServerProperty, feed?: number) => boolean
```

Query if the server supports the specified requirement or capability

##### See

[ServerProperty](./SDK.InfrontSDK.Trading.ServerProperty.md)

#### hasUserProperty

```ts
hasUserProperty: (property: UserProperty) => boolean
```

Query if the current user has access to the specified feature

##### See

[UserProperty](./SDK.InfrontSDK.Trading.UserProperty.md)

#### observeStatus

```ts
observeStatus: (callback: (state: TradingConnectionState) => void) => Unbind
```

Register an observer which will receive a callback when the connection to the
trading gateway changes.
