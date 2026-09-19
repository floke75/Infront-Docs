---
title: "exposure"
qualified_name: "SDK.InfrontSDK.Trading.Requests.exposure"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading.Requests"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Other > Requests > Trading > exposure"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.Trading.Requests.exposure.html"
defines: ["exposure"]
reference_count: 2
references: ["SDK.InfrontSDK.Trading.OrderEntryOptions", "SDK.InfrontSDK.DataRequest"]
---

# exposure

```ts
exposure(model: Model, options: OrderEntryOptions): DataRequest
```

Receive an Exposure object containing grouped and sorted data lists in four different categories aggregated from the items of the active portfolio in the active trading channel.
The categories are: holdings, asset types, sectors and currencies.

#### Parameters

- model: Model
- options: [OrderEntryOptions](./SDK.InfrontSDK.Trading.OrderEntryOptions.md)

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)
