---
title: "GetFieldTypeMapFromRequest<TRequest, TOptions>"
qualified_name: "SDK.InfrontSDK.GetFieldTypeMapFromRequest"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > GetFieldTypeMapFromRequest"
source_url: "https://docs.infrontfinance.com/docs/types/SDK.InfrontSDK.GetFieldTypeMapFromRequest.html"
defines: ["GetFieldTypeMapFromRequest"]
---

# GetFieldTypeMapFromRequest<TRequest, TOptions>

```ts
GetFieldTypeMapFromRequest: ExtractResponseType<TRequest> extends (
    infer DataItem
)[]
    ? TOptions extends { fields: readonly string[] }
        ? Expand<{ [K in TOptions["fields"][number]]: FieldPath<DataItem, K> }>
        : never
    : never
```

Extracts and maps the types of specified fields from an CDAPI request's response type
Useful when you have a request function and a set of field paths, and you want to obtain a type that represents the mapping of those fields (inside the options object) to their corresponding types in the response data.

#### Type Parameters

- TRequest
- TOptions
