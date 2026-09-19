---
title: "acceptQuoteOrder"
qualified_name: "SDK.InfrontSDK.Trading.acceptQuoteOrder"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "RFQ Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > RFQ Trading > acceptQuoteOrder"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.Trading.acceptQuoteOrder.html"
defines: ["acceptQuoteOrder"]
reference_count: 3
references: ["SDK.InfrontSDK.Trading.AcceptQuoteOrderOptions", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.Trading.quoteVolume"]
---

# acceptQuoteOrder

```ts
acceptQuoteOrder(options: AcceptQuoteOrderOptions): DataRequest
```

Places an order based on a quote received from a broker via quoteVolume.
This sends an insert order request with the RFQ-specific identifiers so the server
can link the order to the original quote.

#### Parameters

- options: [AcceptQuoteOrderOptions](./SDK.InfrontSDK.Trading.AcceptQuoteOrderOptions.md)

  The options for accepting the quote and placing the order.

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

A data request function that can be used with the Infront model.
