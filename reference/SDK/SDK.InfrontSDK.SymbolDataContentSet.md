---
title: "SymbolDataContentSet"
qualified_name: "SDK.InfrontSDK.SymbolDataContentSet"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > SymbolDataContentSet"
source_url: "https://docs.infrontfinance.com/docs/types/SDK.InfrontSDK.SymbolDataContentSet.html"
defines: ["SymbolDataContentSet"]
reference_count: 2
references: ["SDK.InfrontSDK.SymbolDataContent", "SDK.InfrontSDK.SymbolDataOptions"]
---

# SymbolDataContentSet

```ts
SymbolDataContentSet: {
    [Content in SymbolDataContent]?:
        | boolean
        | SymbolDataContentOptionsMap<Content>
}
```

A set of [SymbolDataContent](./SDK.InfrontSDK.SymbolDataContent.md) used by [SymbolDataOptions](./SDK.InfrontSDK.SymbolDataOptions.md) to specify symbol data content.
