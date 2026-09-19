---
title: "timeoutPromiseFromCallback"
qualified_name: "Utils.InfrontUtil.timeoutPromiseFromCallback"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > timeoutPromiseFromCallback"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.timeoutPromiseFromCallback.html"
defines: ["timeoutPromiseFromCallback"]
---

# timeoutPromiseFromCallback

```ts
timeoutPromiseFromCallback(
    timeout: number,
    callback: {
        (resolve: any): void;
        (resolve: (value: unknown) => void, reject: (reason?: any) => void): void;
    },
): Promise<unknown>
```

Method to resolve a promise after a timeout. If the callback is called before the timeout, the promise will resolve with the callback value. If the callback is not called before the timeout, the promise will resolve with undefined.

#### Parameters

- timeout: number

  Timeout in milliseconds.
- callback: {
  (resolve: any): void;
  (resolve: (value: unknown) => void, reject: (reason?: any) => void): void;
  }

  Callback that takes a resolve method as parameter so it can be used as a promise.

#### Returns Promise<unknown>

Promise that resolves with the callback value or undefined.
