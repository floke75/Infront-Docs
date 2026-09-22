---
title: "exposure"
qualified_name: "SDK.InfrontSDK.Trading.exposure"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > exposure"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.Trading.exposure.html"
defines: ["exposure"]
reference_count: 2
references: ["SDK.InfrontSDK.Trading.ExposureOptions", "SDK.InfrontSDK.DataRequest"]
---

# exposure

> Not the same page as [`Exposure`](./SDK.InfrontSDK.Trading.Exposure.interface.md), the interface — the names differ only in case.

```ts
exposure(options: ExposureOptions): DataRequest
```

Receive an Exposure object containing grouped and sorted data lists in four different categories aggregated from the items of the active portfolio in the active trading channel.

The categories are: holdings, asset types, sectors and currencies.

#### Parameters

- options: [ExposureOptions](./SDK.InfrontSDK.Trading.ExposureOptions.md)

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)
