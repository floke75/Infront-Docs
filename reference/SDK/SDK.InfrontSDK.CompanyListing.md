---
title: "CompanyListing"
qualified_name: "SDK.InfrontSDK.CompanyListing"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > CompanyListing"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CompanyListing.html"
defines: ["CompanyListing"]
member_count: 4
members: ["classification", "symbolId", "symbolSubType", "symbolType"]
member_groups:
  "Properties": ["classification", "symbolId", "symbolSubType", "symbolType"]
reference_count: 4
references: ["SDK.InfrontSDK.SymbolClassification", "SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.SymbolSubType", "SDK.InfrontSDK.SymbolType"]
---

# CompanyListing

A symbol listing returned from a getCompanySymbols request

```ts
interface CompanyListing {
    classification: SymbolClassification;
    symbolId: SymbolId;
    symbolSubType: SymbolSubType;
    symbolType: SymbolType;
}
```

### Properties

#### classification

```ts
classification: SymbolClassification
```

Symbol classification - a condensed synthesis of symbol type and subtype

#### symbolId

```ts
symbolId: SymbolId
```

The SymbolId for the listing item

#### symbolSubType

```ts
symbolSubType: SymbolSubType
```

Symbol subtype

#### symbolType

```ts
symbolType: SymbolType
```

Symbol type
