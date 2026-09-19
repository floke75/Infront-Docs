---
title: "isPromiseFulfilled"
qualified_name: "Utils.InfrontUtil.isPromiseFulfilled"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > isPromiseFulfilled"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.isPromiseFulfilled.html"
defines: ["isPromiseFulfilled"]
---

# isPromiseFulfilled

```ts
isPromiseFulfilled<T = any>(
    promiseSettledResult: PromiseSettledResult<T>,
): promiseSettledResult is PromiseFulfilledResult<T>
```

Typeguard for checking if a promise is fulfilled when using Promise.allSettled

#### Type Parameters

- T = any

#### Parameters

- promiseSettledResult: PromiseSettledResult<[T](#ispromisefulfilledt)>

  A single item of the Promise.allSettled() callback parameter

#### Returns promiseSettledResult is PromiseFulfilledResult<[T](#ispromisefulfilledt)>

a typecast to PromiseFulfilledResult
