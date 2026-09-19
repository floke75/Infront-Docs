---
title: "TradingGatewayInfo"
qualified_name: "SDK.InfrontSDK.Trading.TradingGatewayInfo"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > Trading > Other > TradingGatewayInfo"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.TradingGatewayInfo.html"
defines: ["TradingGatewayInfo"]
member_count: 5
members: ["inputFields", "name", "providerId", "tradableFeeds", "useBankId"]
member_groups:
  "Properties": ["inputFields", "name", "providerId", "tradableFeeds", "useBankId"]
reference_count: 1
references: ["SDK.InfrontSDK.Trading.TradingInputFieldType"]
---

# TradingGatewayInfo

This object contains information about a trading gateway that the user has access to.

```ts
interface TradingGatewayInfo {
    inputFields: TradingInputFieldType[];
    name: string;
    providerId: number;
    tradableFeeds: number[];
    useBankId: boolean;
}
```

### Properties

#### inputFields

```ts
inputFields: TradingInputFieldType[]
```

List of input fields required to log in to this trading gateway.

#### name

```ts
name: string
```

Name of the trading gateway

#### providerId

```ts
providerId: number
```

Provider id. Required when connecting to a trading gateway.

#### tradableFeeds

```ts
tradableFeeds: number[]
```

List of feed numbers that the trading gateway accepts.

#### useBankId

```ts
useBankId: boolean
```

Bank id login is required if this filed is set to true.
