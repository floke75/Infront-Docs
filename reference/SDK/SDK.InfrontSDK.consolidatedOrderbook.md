---
title: "consolidatedOrderbook"
qualified_name: "SDK.InfrontSDK.consolidatedOrderbook"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > consolidatedOrderbook"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.consolidatedOrderbook.html"
defines: ["consolidatedOrderbook"]
reference_count: 3
references: ["SDK.InfrontSDK.ConsolidatedOrderbookOptions", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.ConsolidatedOrderbook"]
---

# consolidatedOrderbook

```ts
consolidatedOrderbook(options: ConsolidatedOrderbookOptions): DataRequest
```

Request a consolidated orderbook that aggregates order data from multiple markets.
This function uses symbolListings to discover all markets where the instrument is traded,
then subscribes to orderbook data from each market and consolidates orders by price level.

#### Parameters

- options: [ConsolidatedOrderbookOptions](./SDK.InfrontSDK.ConsolidatedOrderbookOptions.md)

  Options object.

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### See

[ConsolidatedOrderbookOptions](./SDK.InfrontSDK.ConsolidatedOrderbookOptions.md) | [ConsolidatedOrderbook](./SDK.InfrontSDK.ConsolidatedOrderbook.md)
