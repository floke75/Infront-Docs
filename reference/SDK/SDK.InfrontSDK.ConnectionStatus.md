---
title: "ConnectionStatus"
qualified_name: "SDK.InfrontSDK.ConnectionStatus"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > ConnectionStatus"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.ConnectionStatus.html"
defines: ["ConnectionStatus"]
member_count: 2
members: ["serverDescription", "serverType"]
member_groups:
  "Properties": ["serverDescription", "serverType"]
reference_count: 1
references: ["SDK.InfrontSDK.ServerType"]
---

# ConnectionStatus

A detailed websocket connection information.

```ts
interface ConnectionStatus {
    serverDescription: string;
    serverType: ServerType;
}
```

### Properties

#### serverDescription

```ts
serverDescription: string
```

Textual value that describes server.

#### serverType

```ts
serverType: ServerType
```

Enumerated value that represents Infront server type.
