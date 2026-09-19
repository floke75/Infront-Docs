---
title: "CdapiCommonCfiClassification"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonCfiClassification"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonCfiClassification"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonCfiClassification.html"
defines: ["CdapiCommonCfiClassification"]
member_count: 7
members: ["attribute_1", "attribute_2", "attribute_3", "attribute_4", "category_name", "code", "group_name"]
member_groups:
  "Properties": ["attribute_1", "attribute_2", "attribute_3", "attribute_4", "category_name", "code", "group_name"]
---

# CdapiCommonCfiClassification

CfiClassification holds the ISO 10962 CFI code and its decoded attribute dimensions.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.CfiClassification

```ts
interface CdapiCommonCfiClassification {
    attribute_1: string;
    attribute_2: string;
    attribute_3: string;
    attribute_4: string;
    category_name: string;
    code: string;
    group_name: string;
}
```

### Properties

#### `Readonly` attribute_1

```ts
attribute_1: string
```

CFI attribute 1 — first characteristic dimension (meaning depends on category/group).

#### `Readonly` attribute_2

```ts
attribute_2: string
```

CFI attribute 2 — second characteristic dimension.

#### `Readonly` attribute_3

```ts
attribute_3: string
```

CFI attribute 3 — third characteristic dimension.

#### `Readonly` attribute_4

```ts
attribute_4: string
```

CFI attribute 4 — fourth characteristic dimension.

#### `Readonly` category_name

```ts
category_name: string
```

CFI category name derived from position 1 (e.g. "Equities", "Debt Instruments").

#### `Readonly` code

```ts
code: string
```

6-character ISO 10962 CFI code (e.g. "ESVUFR" = ordinary voting equity).

#### `Readonly` group_name

```ts
group_name: string
```

CFI group name derived from position 2 (e.g. "Shares", "Bonds").
