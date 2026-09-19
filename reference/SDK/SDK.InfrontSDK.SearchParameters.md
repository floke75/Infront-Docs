---
title: "SearchParameters"
qualified_name: "SDK.InfrontSDK.SearchParameters"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > SearchParameters"
source_url: "https://docs.infrontfinance.com/docs/types/SDK.InfrontSDK.SearchParameters.html"
defines: ["SearchParameters"]
reference_count: 1
references: ["SDK.InfrontSDK.SearchField"]
---

# SearchParameters

```ts
SearchParameters: { [Key in keyof SearchField]?: SearchField[Key] }
```

Key-value pair used to set search parameters. The keys must be provided as [SearchField](./SDK.InfrontSDK.SearchField.md).
