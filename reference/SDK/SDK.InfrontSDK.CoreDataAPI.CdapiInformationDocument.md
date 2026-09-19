---
title: "CdapiInformationDocument"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiInformationDocument"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiInformationDocument"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiInformationDocument.html"
defines: ["CdapiInformationDocument"]
member_count: 21
members: ["category", "company_id", "company_name", "company_sender_id", "country_code", "document_id", "file_size", "headline", "id", "language", "language_code", "market", "name", "notice_type", "publication_type", "reference_id", "sender_communication", "source", "timestamp", "type", "url"]
member_groups:
  "Properties": ["category", "company_id", "company_name", "company_sender_id", "country_code", "document_id", "file_size", "headline", "id", "language", "language_code", "market", "name", "notice_type", "publication_type", "reference_id", "sender_communication", "source", "timestamp", "type", "url"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiInformationDocumentSource", "SDK.InfrontSDK.CoreDataAPI.CdapiInformationDocumentType"]
---

# CdapiInformationDocument

Document represents a regulatory filing, disclosure, or company document
associated with a listed instrument.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.information.Document

```ts
interface CdapiInformationDocument {
    category: string;
    company_id: number;
    company_name: string;
    company_sender_id: number;
    country_code: string;
    document_id: number;
    file_size: number;
    headline: string;
    id: string;
    language: string;
    language_code: string;
    market: string;
    name: string;
    notice_type: string;
    publication_type: string;
    reference_id: number;
    sender_communication: string;
    source: CdapiInformationDocumentSource;
    timestamp: string;
    type: readonly CdapiInformationDocumentType[];
    url: string;
}
```

### Properties

#### `Readonly` category

```ts
category: string
```

Category of the notice (e.g. "financial results", "governance"). Source: EURONEXT_NOTICE.

#### `Readonly` company_id

```ts
company_id: number
```

Internal company identifier assigned by Euronext. Source: EURONEXT_NOTICE.

##### Remarks

Format: int32

#### `Readonly` company_name

```ts
company_name: string
```

Name of the company associated with the document. Source: EURONEXT_NOTICE.

#### `Readonly` company_sender_id

```ts
company_sender_id: number
```

Internal sender company identifier assigned by Euronext. Source: EURONEXT_NOTICE.

##### Remarks

Format: int32

#### `Readonly` country_code

```ts
country_code: string
```

ISO 3166-1 alpha-2 country code of the issuing company (e.g. "DE", "FR"). Source: INFRONT.

#### `Readonly` document_id

```ts
document_id: number
```

Source-specific document identifier. Source: EURONEXT_NOTICE.

##### Remarks

Format: int32

#### `Readonly` file_size

```ts
file_size: number
```

File size of the document in bytes.

##### Remarks

Format: int32

#### `Readonly` headline

```ts
headline: string
```

Headline or title of the regulatory notice. Source: EURONEXT_NOTICE.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this document.

#### `Readonly` language

```ts
language: string
```

Language of the document.
Deprecated — use language_code (field 9) instead.

#### `Readonly` language_code

```ts
language_code: string
```

ISO 639-1 language code of the document (e.g. "en", "de"). Replaces the deprecated language field.

#### `Readonly` market

```ts
market: string
```

Market on which the issuing company is listed (e.g. "Euronext Paris"). Source: EURONEXT_NOTICE.

#### `Readonly` name

```ts
name: string
```

File name or display name of the document.

#### `Readonly` notice_type

```ts
notice_type: string
```

Notice type code identifying the regulatory notice category. Source: EURONEXT_NOTICE.

#### `Readonly` publication_type

```ts
publication_type: string
```

Publication type of the notice (e.g. "PRESS_RELEASE", "REGULATORY"). Source: EURONEXT_NOTICE.

#### `Readonly` reference_id

```ts
reference_id: number
```

Reference identifier linking to a related document or filing. Source: EURONEXT_NOTICE.

##### Remarks

Format: int32

#### `Readonly` sender_communication

```ts
sender_communication: string
```

Communication sender identifier. Source: EURONEXT_NOTICE.

#### `Readonly` source

```ts
source: CdapiInformationDocumentSource
```

Data source for this document (INFRONT or EURONEXT).

##### Remarks

Format: enum

#### `Readonly` timestamp

```ts
timestamp: string
```

Publication timestamp in UTC. ISO-8601 format recommended (e.g. "2024-01-15T14:30:00Z").

#### `Readonly` type

```ts
type: readonly CdapiInformationDocumentType[]
```

List of type classifications applied to this document. A document may belong to multiple types.

#### `Readonly` url

```ts
url: string
```

Direct download URL for the document.
