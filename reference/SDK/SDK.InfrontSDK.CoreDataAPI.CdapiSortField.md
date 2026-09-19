---
title: "CdapiSortField<FieldName>"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiSortField"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiSortField"
source_url: "https://docs.infrontfinance.com/docs/types/SDK.InfrontSDK.CoreDataAPI.CdapiSortField.html"
defines: ["CdapiSortField"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiSortFieldItem"]
---

# CdapiSortField<FieldName>

```ts
CdapiSortField:
    | FieldName
    | `+${FieldName}`
    | `-${FieldName}`
    | CdapiSortFieldItem<FieldName>
```

Field sort specification.

When a field name is prepended with `+`, this indicates ascending,
and `-` indicates descending.

#### Type Parameters

- FieldName extends string
