---
title: "quoteVolume"
qualified_name: "SDK.InfrontSDK.Trading.quoteVolume"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "RFQ Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > RFQ Trading > quoteVolume"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.Trading.quoteVolume.html"
defines: ["quoteVolume"]
reference_count: 2
references: ["SDK.InfrontSDK.Trading.QuoteVolumeOptions", "SDK.InfrontSDK.DataRequest"]
---

# quoteVolume

> Not the same page as [`QuoteVolume`](./SDK.InfrontSDK.Trading.QuoteVolume.interface.md), the interface — the names differ only in case.

```ts
quoteVolume(options: QuoteVolumeOptions): DataRequest
```

Requests a quote for a given volume of a financial instrument.

#### Parameters

- options: [QuoteVolumeOptions](./SDK.InfrontSDK.Trading.QuoteVolumeOptions.md)

  The options for the quote request.

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

A data request function that can be used with the Infront model.
