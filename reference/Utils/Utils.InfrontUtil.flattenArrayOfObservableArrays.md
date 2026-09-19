---
title: "flattenArrayOfObservableArrays"
qualified_name: "Utils.InfrontUtil.flattenArrayOfObservableArrays"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > flattenArrayOfObservableArrays"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.flattenArrayOfObservableArrays.html"
defines: ["flattenArrayOfObservableArrays"]
reference_count: 1
references: ["Utils.InfrontUtil.ObservableArray"]
---

# flattenArrayOfObservableArrays

```ts
flattenArrayOfObservableArrays<T = any>(
    obsArrayList: ObservableArray<T>[],
): ObservableArray<T>
```

flattens Observablearrays[] by merging them into a single Observablearray

#### Type Parameters

- T = any

#### Parameters

- obsArrayList: [ObservableArray](./Utils.InfrontUtil.ObservableArray.md)<[T](#flattenarrayofobservablearrayst)>[]

  the list of ObservablesArray that need to be converted

#### Returns [ObservableArray](./Utils.InfrontUtil.ObservableArray.md)<[T](#flattenarrayofobservablearrayst)>

a single ObservableArray containing all the items of the Array of ObservableArrays
