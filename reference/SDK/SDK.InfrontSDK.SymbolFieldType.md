---
title: "SymbolFieldType"
qualified_name: "SDK.InfrontSDK.SymbolFieldType"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > SymbolFieldType"
source_url: "https://docs.infrontfinance.com/docs/types/SDK.InfrontSDK.SymbolFieldType.html"
defines: ["SymbolFieldType"]
reference_count: 2
references: ["SDK.InfrontSDK.SymbolField", "SDK.InfrontSDK.SymbolFieldTypeBase"]
---

# SymbolFieldType

```ts
SymbolFieldType: { [Key in SymbolField]: SymbolFieldTypeBase[Key] }
```

Type map for symbol fields. This type forces defining all SymbolField items in SymbolFieldTypeBase to assign a proper type.

#### Remarks

If the compiler complains then there must be a missed field(s) that has been defined in SymbolField and not in [SymbolFieldTypeBase](./SDK.InfrontSDK.SymbolFieldTypeBase.md).
