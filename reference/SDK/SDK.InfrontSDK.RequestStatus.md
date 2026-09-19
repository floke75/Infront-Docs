---
title: "RequestStatus"
qualified_name: "SDK.InfrontSDK.RequestStatus"
kind: enum
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > RequestStatus"
source_url: "https://docs.infrontfinance.com/docs/enums/SDK.InfrontSDK.RequestStatus.html"
defines: ["RequestStatus"]
member_count: 6
members: ["Done", "Failed", "Init", "Received", "Requested", "Subscribed"]
member_groups:
  "Enumeration Members": ["Done", "Failed", "Init", "Received", "Requested", "Subscribed"]
---

# RequestStatus

Request status enum.

### Enumeration Members

#### Done

```ts
Done: "Done"
```

Search is complete

#### Failed

```ts
Failed: "Failed"
```

An error has occurred.

#### Init

```ts
Init: "Init"
```

Request is in pre-processing state.

#### Received

```ts
Received: "Received"
```

A response has been received. Some requests may send multiple requests to different services and get multiple responses.

#### Requested

```ts
Requested: "Requested"
```

Client-Server request has been sent. Some requests may send multiple requests to different services and get multiple responses.

#### Subscribed

```ts
Subscribed: "Subscribed"
```

Streaming request has been sent.
