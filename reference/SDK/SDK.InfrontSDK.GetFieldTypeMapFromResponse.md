---
title: "GetFieldTypeMapFromResponse<TData, TOptions>"
qualified_name: "SDK.InfrontSDK.GetFieldTypeMapFromResponse"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > GetFieldTypeMapFromResponse"
source_url: "https://docs.infrontfinance.com/docs/types/SDK.InfrontSDK.GetFieldTypeMapFromResponse.html"
defines: ["GetFieldTypeMapFromResponse"]
---

# GetFieldTypeMapFromResponse<TData, TOptions>

```ts
GetFieldTypeMapFromResponse: TData extends (infer DataItem)[]
    ? TOptions extends { fields: readonly string[] }
        ? Expand<{ [K in TOptions["fields"][number]]: FieldPath<DataItem, K> }>
        : never
    : never
```

Extracts and maps the types of specified fields from an CDAPI request's response type, using the response type directly instead of the request function as starting point.

#### Type Parameters

- TData
- TOptions
