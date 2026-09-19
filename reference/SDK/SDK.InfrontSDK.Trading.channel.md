---
title: "channel"
qualified_name: "SDK.InfrontSDK.Trading.channel"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > Trading > Other > channel"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.Trading.channel.html"
defines: ["channel"]
reference_count: 2
references: ["SDK.InfrontSDK.Trading.ChannelOptions", "SDK.InfrontSDK.DataRequest"]
---

# channel

```ts
channel(options: ChannelOptions): DataRequest
```

Connect to a named trading channel.
A trading channel can be controlled by setting the active portfolio and observed to be notified of
portfolio changes and other events. This makes it possible for a group of widgets to connect to
the same channel and operate synchronously, showing different aspects of the active portfolio.

#### Parameters

- options: [ChannelOptions](./SDK.InfrontSDK.Trading.ChannelOptions.md)

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### See

[ChannelOptions](./SDK.InfrontSDK.Trading.ChannelOptions.md)
