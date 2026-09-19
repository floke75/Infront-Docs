---
title: "getFulfilledPromiseValues"
qualified_name: "Utils.InfrontUtil.getFulfilledPromiseValues"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > getFulfilledPromiseValues"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.getFulfilledPromiseValues.html"
defines: ["getFulfilledPromiseValues"]
---

# getFulfilledPromiseValues

```ts
getFulfilledPromiseValues<T = any>(
    settledPromises: PromiseSettledResult<T>[],
): T[]
```

Takes the result of Promise.allSettled (PromiseSettledResult[]) and converts it into value list T[]

#### Type Parameters

- T = any

#### Parameters

- settledPromises: PromiseSettledResult<[T](#getfulfilledpromisevaluest)>[]

  callback parameter

#### Returns [T](#getfulfilledpromisevaluest)[]

the values of fulfilled Promises
