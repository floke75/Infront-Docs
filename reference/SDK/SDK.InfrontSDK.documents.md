---
title: "documents"
qualified_name: "SDK.InfrontSDK.documents"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Documents"
nav_path: "SDK > InfrontSDK > Documents > documents"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.documents.html"
defines: ["documents"]
reference_count: 3
references: ["SDK.InfrontSDK.DocumentsOptions", "SDK.InfrontSDK.DataRequest", "SDK.InfrontSDK.DocumentMetadata"]
---

# documents

```ts
documents(options: DocumentsOptions): DataRequest
```

Request all available regulatory documents for a given instrument.

#### Parameters

- options: [DocumentsOptions](./SDK.InfrontSDK.DocumentsOptions.md)

  Request options

#### Returns [DataRequest](./SDK.InfrontSDK.DataRequest.md)

A list of documents representation as [DocumentMetadata](./SDK.InfrontSDK.DocumentMetadata.md).

#### See

[DocumentsOptions](./SDK.InfrontSDK.DocumentsOptions.md) | [DocumentMetadata](./SDK.InfrontSDK.DocumentMetadata.md)
