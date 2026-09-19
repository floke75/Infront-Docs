---
title: "ConnectionStateInfo"
qualified_name: "SDK.InfrontSDK.Trading.ConnectionStateInfo"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > Trading > Other > ConnectionStateInfo"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.ConnectionStateInfo.html"
defines: ["ConnectionStateInfo"]
member_count: 7
members: ["gateway?", "name", "providerId", "state", "tradingLogin?", "tradingToken?", "tradingTokenType?"]
member_groups:
  "Properties": ["gateway?", "name", "providerId", "state", "tradingLogin?", "tradingToken?", "tradingTokenType?"]
reference_count: 2
references: ["SDK.InfrontSDK.Trading.ConnectionData", "SDK.InfrontSDK.Trading.TradingConnectionState"]
---

# ConnectionStateInfo

This object is returned to an observer when a connection to
a trading gateway is established or disconnected.

```ts
interface ConnectionStateInfo {
    gateway?: ConnectionData;
    name: string;
    providerId: number;
    state: TradingConnectionState;
    tradingLogin?: string;
    tradingToken?: string;
    tradingTokenType?: string;
}
```

### Properties

#### `Optional` gateway

```ts
gateway?: ConnectionData
```

Contains a ConnectionData wrapper when the connection state is [TradingConnectionState.TradingServerConnected](./SDK.InfrontSDK.Trading.TradingConnectionState.md#tradingserverconnected)

#### name

```ts
name: string
```

Name of the trading gateway

#### providerId

```ts
providerId: number
```

Provider id for the trading gateway.

#### state

```ts
state: TradingConnectionState
```

Connection state of the trading gateway

#### `Optional` tradingLogin

```ts
tradingLogin?: string
```

The username used when logging in to the gateway

#### `Optional` tradingToken

```ts
tradingToken?: string
```

The trading token used when logging in to the gateway

#### `Optional` tradingTokenType

```ts
tradingTokenType?: string
```

The trading token type used when logging in to the gateway
