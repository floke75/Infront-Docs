---
title: "AlertEvent"
qualified_name: "SDK.InfrontSDK.AlertEvent"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > AlertEvent"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.AlertEvent.html"
defines: ["AlertEvent"]
member_count: 15
members: ["comment", "description", "eventId", "eventRead", "eventTriggered", "feed", "hostName", "id", "loginId", "notificationMsg", "symbolId", "ticker", "triggerDate", "triggerTime", "type"]
member_groups:
  "Properties": ["comment", "description", "eventId", "eventRead", "eventTriggered", "feed", "hostName", "id", "loginId", "notificationMsg", "symbolId", "ticker", "triggerDate", "triggerTime", "type"]
reference_count: 4
references: ["SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.subscribeAlerts", "SDK.InfrontSDK.AlertSubscriptionResponse", "SDK.InfrontSDK.ServerAlert"]
---

# AlertEvent

An interface to describe the triggered alert.

#### See

[subscribeAlerts](./SDK.InfrontSDK.subscribeAlerts.md) | AlertSubscriptionResponse.

```ts
interface AlertEvent {
    comment: string;
    description: string;
    eventId: number;
    eventRead: boolean;
    eventTriggered: Date;
    feed: number;
    hostName: string;
    id: string;
    loginId: number;
    notificationMsg: string;
    symbolId: SymbolId;
    ticker: string;
    triggerDate: number;
    triggerTime: number;
    type: AlertType;
}
```

### Properties

#### comment

```ts
comment: string
```

Optional comment from the server alert object

##### See

ServerAlert

#### description

```ts
description: string
```

Description from the server alert object

##### See

ServerAlert

#### eventId

```ts
eventId: number
```

The id of the trigger event

#### eventRead

```ts
eventRead: boolean
```

Server flag indicating that the alert event has been read

#### eventTriggered

```ts
eventTriggered: Date
```

The time the event was triggered

#### feed

```ts
feed: number
```

##### Deprecated

#### hostName

```ts
hostName: string
```

Internal name of the alert server

#### id

```ts
id: string
```

The id of the alert item that was triggered

#### loginId

```ts
loginId: number
```

Internal id of the logged-in user

#### notificationMsg

```ts
notificationMsg: string
```

The alert notification message provided by the server

#### symbolId

```ts
symbolId: SymbolId
```

The id of the symbol that was triggered

#### ticker

```ts
ticker: string
```

##### Deprecated

#### triggerDate

```ts
triggerDate: number
```

##### Deprecated

#### triggerTime

```ts
triggerTime: number
```

##### Deprecated

#### type

```ts
type: AlertType
```

The Type of Alert

##### See

AlertType
