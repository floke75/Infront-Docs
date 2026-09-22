---
title: "DocumentUrl"
qualified_name: "SDK.InfrontSDK.DocumentUrl"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Documents"
nav_path: "SDK > InfrontSDK > Documents > DocumentUrl"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.DocumentUrl.html"
defines: ["DocumentUrl"]
member_count: 2
members: ["content?", "link"]
member_groups:
  "Properties": ["content?", "link"]
reference_count: 2
references: ["SDK.InfrontSDK.document", "SDK.InfrontSDK.DocumentUrlOptions"]
---

# DocumentUrl

> Not the same page as [`documentUrl`](./SDK.InfrontSDK.documentUrl.md), the function — the names differ only in case.

Document representation interface.

#### See

[document](./SDK.InfrontSDK.document.md) | DocumentUrlOptions

```ts
interface DocumentUrl {
    content?: string;
    link: string;
}
```

### Properties

#### `Optional` content

```ts
content?: string
```

Actual document in base64.

#### link

```ts
link: string
```

Document url.
