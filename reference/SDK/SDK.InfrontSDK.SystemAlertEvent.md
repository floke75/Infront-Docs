---
title: "SystemAlertEvent"
qualified_name: "SDK.InfrontSDK.SystemAlertEvent"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > SystemAlertEvent"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.SystemAlertEvent.html"
defines: ["SystemAlertEvent"]
member_count: 10
members: ["alertLevel", "bodyText", "feed", "feedInfo", "headline", "provider", "providerId", "reportTime", "service", "serviceId"]
member_groups:
  "Properties": ["alertLevel", "bodyText", "feed", "feedInfo", "headline", "provider", "providerId", "reportTime", "service", "serviceId"]
related_types: ["SDK.InfrontSDK.InfrontEvent"]
reference_count: 4
references: ["SDK.InfrontSDK.AlertLevel", "SDK.InfrontSDK.FeedInfo", "SDK.InfrontSDK.SDKOptions", "SDK.InfrontSDK.InfrontEvent"]
---

# SystemAlertEvent

The `SystemAlertEvent` interface extends the ` InfrontEvent` interface and it defines a structure for an event object that represents a system alert.

#### See

SDKOptions.onSystemAlert

```ts
interface SystemAlertEvent {
    alertLevel: AlertLevel;
    bodyText: string;
    feed: number;
    feedInfo: FeedInfo;
    headline: string;
    provider: string;
    providerId: number;
    reportTime: Date;
    service: string;
    serviceId: number;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.SystemAlertEvent))

- InfrontEvent

  - SystemAlertEvent

### Properties

#### alertLevel

```ts
alertLevel: AlertLevel
```

An [AlertLevel](./SDK.InfrontSDK.AlertLevel.md) enum value representing the level of the alert (Information, Warning, or Error).

#### bodyText

```ts
bodyText: string
```

A string representing the body text of the alert.

#### feed

```ts
feed: number
```

A number representing the feed related to the alert.

#### feedInfo

```ts
feedInfo: FeedInfo
```

Feed extended details.

##### See

[SystemAlertEvent.feed](#feed)

#### headline

```ts
headline: string
```

A string representing the headline of the alert.

#### provider

```ts
provider: string
```

Alert provider. A string representing the Provider name.

#### providerId

```ts
providerId: number
```

Provider identifier. A number representing the provider of the alert.

#### reportTime

```ts
reportTime: Date
```

A Date object representing the time the alert was reported.

#### service

```ts
service: string
```

Alert service. A string representing the service related to the alert.

#### serviceId

```ts
serviceId: number
```

Service identifier. A number representing the service related to the alert.
