---
title: "CdapiFundCompositionItem"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionItem"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundCompositionItem"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionItem.html"
defines: ["CdapiFundCompositionItem"]
member_count: 8
members: ["code", "isin", "name", "name_de", "name_en", "name_fr", "name_nl", "percentage"]
member_groups:
  "Properties": ["code", "isin", "name", "name_de", "name_en", "name_fr", "name_nl", "percentage"]
---

# CdapiFundCompositionItem

Item represents a single line in the composition breakdown.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.Composition_Item

```ts
interface CdapiFundCompositionItem {
    code: string;
    isin: string;
    name: string;
    name_de: string;
    name_en: string;
    name_fr: string;
    name_nl: string;
    percentage: number;
}
```

### Properties

#### `Readonly` code

```ts
code: string
```

Short code identifying this item (e.g. sector code, country code).

#### `Readonly` isin

```ts
isin: string
```

ISIN of the specific holding — populated for individual holdings breakdowns.

#### `Readonly` name

```ts
name: string
```

Default language name of this item (e.g. "Technology", "Germany", "Cash").

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

#### `Readonly` percentage

```ts
percentage: number
```

Percentage weight of this item in the portfolio (e.g. 0.35 = 35%).

##### Remarks

Format: double
