---
title: "CdapiInformationDocumentType"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiInformationDocumentType"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiInformationDocumentType"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiInformationDocumentType.html"
defines: ["CdapiInformationDocumentType"]
member_count: 3
members: ["code", "id", "name"]
member_groups:
  "Properties": ["code", "id", "name"]
---

# CdapiInformationDocumentType

Type classifies the kind of document (e.g. annual report, prospectus, press release).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.information.Document_Type

```ts
interface CdapiInformationDocumentType {
    code: string;
    id: number;
    name: string;
}
```

### Properties

#### `Readonly` code

```ts
code: string
```

Short code for programmatic identification.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this document type.

##### Remarks

Format: int32

#### `Readonly` name

```ts
name: string
```

Human-readable name of the document type.
