---
title: "isPromiseRejected"
qualified_name: "Utils.InfrontUtil.isPromiseRejected"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > isPromiseRejected"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.isPromiseRejected.html"
defines: ["isPromiseRejected"]
---

# isPromiseRejected

```ts
isPromiseRejected<T = any>(
    promiseSettledResult: PromiseSettledResult<T>,
): promiseSettledResult is PromiseRejectedResult
```

Typeguard for checking if a promise is rejected when using Promise.allSettled

#### Type Parameters

- T = any

#### Parameters

- promiseSettledResult: PromiseSettledResult<[T](#ispromiserejectedt)>

  A single item of the Promise.allSettled() callback parameter

#### Returns promiseSettledResult is PromiseRejectedResult

a typecast to PromiseRejectedResult
