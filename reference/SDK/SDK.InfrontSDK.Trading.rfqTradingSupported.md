---
title: "rfqTradingSupported"
qualified_name: "SDK.InfrontSDK.Trading.rfqTradingSupported"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > Trading > Other > rfqTradingSupported"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.Trading.rfqTradingSupported.html"
defines: ["rfqTradingSupported"]
reference_count: 1
references: ["SDK.InfrontSDK.DataRequest"]
---

# rfqTradingSupported

```ts
rfqTradingSupported(options: RfqTradingSupportedOptions): DataRequest
```

Checks whether the connected trading gateway supports RFQ trading.
Calls `onData` synchronously with ` true` if supported, ` false` otherwise.

#### Parameters

- options: RfqTradingSupportedOptions

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)
