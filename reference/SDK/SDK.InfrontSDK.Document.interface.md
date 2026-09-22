---
title: "Document"
qualified_name: "SDK.InfrontSDK.Document"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Documents"
nav_path: "SDK > InfrontSDK > Documents > Document"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Document.html"
defines: ["Document"]
member_count: 2
members: ["content?", "link"]
member_groups:
  "Properties": ["content?", "link"]
reference_count: 2
references: ["SDK.InfrontSDK.document", "SDK.InfrontSDK.DocumentOptions"]
---

# Document

> Not the same page as [`document`](./SDK.InfrontSDK.document.md), the function — the names differ only in case.

Document representation interface.

#### See

[document](./SDK.InfrontSDK.document.md) | DocumentOptions

```ts
interface Document {
    content?: ArrayBuffer;
    link: string;
}
```

### Properties

#### `Optional` content

```ts
content?: ArrayBuffer
```

Actual document content stored as binary blob.

#### link

```ts
link: string
```

Document url.
