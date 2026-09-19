---
title: "CdapiInformationNews"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiInformationNews"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiInformationNews"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiInformationNews.html"
defines: ["CdapiInformationNews"]
member_count: 6
members: ["headline", "id", "language_code", "provider", "text", "timestamp"]
member_groups:
  "Properties": ["headline", "id", "language_code", "provider", "text", "timestamp"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiInformationNewsProvider"]
---

# CdapiInformationNews

News represents a single news article associated with a financial instrument or market topic.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.information.News

```ts
interface CdapiInformationNews {
    headline: string;
    id: string;
    language_code: string;
    provider: CdapiInformationNewsProvider;
    text: string;
    timestamp: string;
}
```

### Properties

#### `Readonly` headline

```ts
headline: string
```

Headline / title of the news article.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this news article.

#### `Readonly` language_code

```ts
language_code: string
```

ISO 639-1 language code of the article content (e.g. "en", "de", "fr").

#### `Readonly` provider

```ts
provider: CdapiInformationNewsProvider
```

The news provider that published this article. See nested Provider message.

#### `Readonly` text

```ts
text: string
```

Full body text of the news article.

#### `Readonly` timestamp

```ts
timestamp: string
```

Publication timestamp in UTC. ISO-8601 format recommended (e.g. "2024-01-15T14:30:00Z").
