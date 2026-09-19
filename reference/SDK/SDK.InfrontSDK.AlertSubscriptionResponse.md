---
title: "AlertSubscriptionResponse"
qualified_name: "SDK.InfrontSDK.AlertSubscriptionResponse"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > AlertSubscriptionResponse"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.AlertSubscriptionResponse.html"
defines: ["AlertSubscriptionResponse"]
member_count: 3
members: ["alertChangeAction?", "alertChanged?", "alertTriggered?"]
member_groups:
  "Properties": ["alertChangeAction?", "alertChanged?", "alertTriggered?"]
reference_count: 3
references: ["SDK.InfrontSDK.ServerAlert", "SDK.InfrontSDK.AlertEvent", "SDK.InfrontSDK.subscribeAlerts"]
---

# AlertSubscriptionResponse

Response for alerts subscription

#### See

[subscribeAlerts](./SDK.InfrontSDK.subscribeAlerts.md)

```ts
interface AlertSubscriptionResponse {
    alertChangeAction?: AlertActionType;
    alertChanged?: ServerAlert;
    alertTriggered?: AlertEvent;
}
```

### Properties

#### `Optional` alertChangeAction

```ts
alertChangeAction?: AlertActionType
```

When a server alert is added, modified or deleted, this property contains the action performed.

#### `Optional` alertChanged

```ts
alertChanged?: ServerAlert
```

An alert was modified from this or another device.

#### `Optional` alertTriggered

```ts
alertTriggered?: AlertEvent
```

An alert was triggered.
