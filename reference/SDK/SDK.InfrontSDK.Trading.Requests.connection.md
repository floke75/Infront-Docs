---
title: "connection"
qualified_name: "SDK.InfrontSDK.Trading.Requests.connection"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading.Requests"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Other > Requests > Trading > connection"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.Trading.Requests.connection.html"
defines: ["connection"]
reference_count: 3
references: ["SDK.InfrontSDK.Trading.TradingConnectionAction", "SDK.InfrontSDK.Trading.ConnectionOptions", "SDK.InfrontSDK.DataRequest"]
---

# connection

```ts
connection<T extends TradingConnectionAction>(
    options: ConnectionOptions<T>,
): DataRequest
```

Establish, query or modify a connection to a trading gateway as specified by the [ConnectionOptions.action](./SDK.InfrontSDK.Trading.ConnectionOptions.md#action).

#### Type Parameters

- T extends [TradingConnectionAction](./SDK.InfrontSDK.Trading.TradingConnectionAction.md)

#### Parameters

- options: [ConnectionOptions](./SDK.InfrontSDK.Trading.ConnectionOptions.md)<[T](#connectiont)>

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### See

[TradingConnectionAction](./SDK.InfrontSDK.Trading.TradingConnectionAction.md) for available actions.
