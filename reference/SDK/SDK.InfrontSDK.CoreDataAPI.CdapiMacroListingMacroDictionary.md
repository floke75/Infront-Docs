---
title: "CdapiMacroListingMacroDictionary"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiMacroListingMacroDictionary"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiMacroListingMacroDictionary"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiMacroListingMacroDictionary.html"
defines: ["CdapiMacroListingMacroDictionary"]
member_count: 2
members: ["code", "name"]
member_groups:
  "Properties": ["code", "name"]
---

# CdapiMacroListingMacroDictionary

Dictionary is a generic key/value pair used for categorical reference data.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.macro.ListingMacro_Dictionary

```ts
interface CdapiMacroListingMacroDictionary {
    code: string;
    name: string;
}
```

### Properties

#### `Readonly` code

```ts
code: string
```

Short code identifying the category (e.g. "GDP", "CPI").

#### `Readonly` name

```ts
name: string
```

Human-readable name of the category.
