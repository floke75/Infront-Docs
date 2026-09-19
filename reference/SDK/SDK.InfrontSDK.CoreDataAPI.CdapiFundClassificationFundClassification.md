---
title: "CdapiFundClassificationFundClassification"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationFundClassification"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundClassificationFundClassification"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationFundClassification.html"
defines: ["CdapiFundClassificationFundClassification"]
member_count: 7
members: ["code", "id", "name", "name_de", "name_en", "name_fr", "name_nl"]
member_groups:
  "Properties": ["code", "id", "name", "name_de", "name_en", "name_fr", "name_nl"]
---

# CdapiFundClassificationFundClassification

FundClassification holds a single fund classification entry with multilingual names.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.Classification_FundClassification

```ts
interface CdapiFundClassificationFundClassification {
    code: string;
    id: number;
    name: string;
    name_de: string;
    name_en: string;
    name_fr: string;
    name_nl: string;
}
```

### Properties

#### `Readonly` code

```ts
code: string
```

Classification code.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this classification entry.

##### Remarks

Format: int32

#### `Readonly` name

```ts
name: string
```

Default language name.

#### `Readonly` name_de

```ts
name_de: string
```

German name.

#### `Readonly` name_en

```ts
name_en: string
```

English name.

#### `Readonly` name_fr

```ts
name_fr: string
```

French name.

#### `Readonly` name_nl

```ts
name_nl: string
```

Dutch name.
