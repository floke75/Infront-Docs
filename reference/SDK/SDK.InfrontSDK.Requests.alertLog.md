---
title: "alertLog"
qualified_name: "SDK.InfrontSDK.Requests.alertLog"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Requests"
group: "Alerts"
nav_path: "SDK > InfrontSDK > Other > Requests > Alerts > alertLog"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.Requests.alertLog.html"
defines: ["alertLog"]
reference_count: 3
references: ["SDK.InfrontSDK.AlertListOptions", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.AlertEvent"]
---

# alertLog

```ts
alertLog(options: AlertListOptions): DataRequest
```

Get all triggered alerts for the current user. The alerts is an ObservableArray of AlertEvent items.

#### Parameters

- options: [AlertListOptions](./SDK.InfrontSDK.AlertListOptions.md)

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

#### See

[AlertEvent](./SDK.InfrontSDK.AlertEvent.md)
