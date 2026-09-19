---
title: "getValueFromPath"
qualified_name: "SDK.InfrontSDK.getValueFromPath"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > getValueFromPath"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.getValueFromPath.html"
defines: ["getValueFromPath"]
---

# getValueFromPath

```ts
getValueFromPath<T, P extends string>(data: T, path: P): FieldPath<T, P>
```

Extracts the value by a dotted path string from an object

#### Type Parameters

- T
- P extends string

#### Parameters

- data: [T](#getvaluefrompatht)

  the object structure to get the value from
- path: [P](#getvaluefrompathp)

  the path to the value (dotted string)

#### Returns FieldPath<[T](#getvaluefrompatht), [P](#getvaluefrompathp)>

extracted value from data by path
