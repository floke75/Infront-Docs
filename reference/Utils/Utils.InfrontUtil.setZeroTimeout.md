---
title: "setZeroTimeout"
qualified_name: "Utils.InfrontUtil.setZeroTimeout"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > setZeroTimeout"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.setZeroTimeout.html"
defines: ["setZeroTimeout"]
---

# setZeroTimeout

```ts
setZeroTimeout(callback: () => void): void
```

Implements an actual zero-delay timeout.
This is used to ensure asynchronous behaviour, even when it is not strictly necessary.
The use of postMessage instead of setTimeout is for performance-reasons. postMessage has a significantly
shorter delay compared to setTimeout for a zero delay callback.
See FeedHandler or Observable for example.

Edit: Changed implementation (at least temporarily) to setTimeout since performance for postMessage seems abysmal in IE.

#### Parameters

- callback: () => void

#### Returns void
