---
title: "GetValuesFromFields"
qualified_name: "SDK.InfrontSDK.GetValuesFromFields"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > GetValuesFromFields"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.GetValuesFromFields.html"
defines: ["GetValuesFromFields"]
---

# GetValuesFromFields

```ts
GetValuesFromFields<TData, TField extends string>(
    data: TData,
    fields: readonly TField[],
): { [K in string]: FieldPath<TData, K> }
```

Extracts values with derived types from a data object (usually a single item part of an arrayed response from CDAPI) based on specified field paths.

#### Type Parameters

- TData
- TField extends string

#### Parameters

- data: [TData](#getvaluesfromfieldstdata)

  the data object from which values will be extracted
- fields: readonly [TField](#getvaluesfromfieldstfield)[]

  string literals representing the field paths to extract. Each field path is a dot-separated string indicating the path to a nested property within TData

#### Returns { [K in string]: FieldPath<[TData](#getvaluesfromfieldstdata), K> }
