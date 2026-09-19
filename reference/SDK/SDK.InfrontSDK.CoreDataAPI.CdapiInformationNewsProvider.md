---
title: "CdapiInformationNewsProvider"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiInformationNewsProvider"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiInformationNewsProvider"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiInformationNewsProvider.html"
defines: ["CdapiInformationNewsProvider"]
member_count: 3
members: ["code", "id", "name"]
member_groups:
  "Properties": ["code", "id", "name"]
---

# CdapiInformationNewsProvider

Provider describes the news agency or data provider that published this article.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.information.News_Provider

```ts
interface CdapiInformationNewsProvider {
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

Short provider code used for programmatic identification.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this provider.

##### Remarks

Format: int32

#### `Readonly` name

```ts
name: string
```

Human-readable name of the provider (e.g. "Reuters", "Dow Jones").
