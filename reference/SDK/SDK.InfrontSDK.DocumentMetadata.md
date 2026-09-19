---
title: "DocumentMetadata"
qualified_name: "SDK.InfrontSDK.DocumentMetadata"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Documents"
nav_path: "SDK > InfrontSDK > Documents > DocumentMetadata"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.DocumentMetadata.html"
defines: ["DocumentMetadata"]
member_count: 9
members: ["author", "contentType", "country", "date", "id", "language", "revision", "size", "type"]
member_groups:
  "Properties": ["author", "contentType", "country", "date", "id", "language", "revision", "size", "type"]
reference_count: 4
references: ["SDK.InfrontSDK.DocumentType", "SDK.InfrontSDK.documents", "SDK.InfrontSDK.DocumentsOptions", "SDK.InfrontSDK.document"]
---

# DocumentMetadata

Document metadata representation interface.

#### See

[documents](./SDK.InfrontSDK.documents.md) | DocumentsOptions

```ts
interface DocumentMetadata {
    author: string;
    contentType: string;
    country: string;
    date: Date;
    id: string;
    language: string;
    revision: string;
    size: number;
    type: DocumentType;
}
```

### Properties

#### author

```ts
author: string
```

Document author.

#### contentType

```ts
contentType: string
```

Document file type.

#### country

```ts
country: string
```

Country of origin.

#### date

```ts
date: Date
```

Document creation date.

#### id

```ts
id: string
```

Document identifier is a string value used to identify a document.
This must be used to get the document using [document](./SDK.InfrontSDK.document.md) request.

#### language

```ts
language: string
```

Document language.

#### revision

```ts
revision: string
```

Document version.

#### size

```ts
size: number
```

Size in bytes.

#### type

```ts
type: DocumentType
```

Type of the document.
