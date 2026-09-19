---
title: "TradingConnectionState"
qualified_name: "SDK.InfrontSDK.Trading.TradingConnectionState"
kind: enum
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > TradingConnectionState"
source_url: "https://docs.infrontfinance.com/docs/enums/SDK.InfrontSDK.Trading.TradingConnectionState.html"
defines: ["TradingConnectionState"]
member_count: 3
members: ["TradingServerConnected", "TradingServerDisconnected", "TradingServerReady"]
member_groups:
  "Enumeration Members": ["TradingServerConnected", "TradingServerDisconnected", "TradingServerReady"]
reference_count: 1
references: ["SDK.InfrontSDK.Trading.ConnectionData"]
---

# TradingConnectionState

Connection state returned in [ConnectionData.observeStatus](./SDK.InfrontSDK.Trading.ConnectionData.md#observestatus) callback from [ConnectionData](./SDK.InfrontSDK.Trading.ConnectionData.md) object.

### Enumeration Members

#### TradingServerConnected

```ts
TradingServerConnected: "TradingServerConnected"
```

#### TradingServerDisconnected

```ts
TradingServerDisconnected: "TradingServerDisconnected"
```

#### TradingServerReady

```ts
TradingServerReady: "TradingServerReady"
```
