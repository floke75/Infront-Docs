---
title: "throttle"
qualified_name: "Utils.InfrontUtil.throttle"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > throttle"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.throttle.html"
defines: ["throttle"]
---

# throttle

```ts
throttle(
    func: (...args: any[]) => void,
    threshold?: number,
    scope?: any,
): () => void
```

throttle function that calls a function every 250ms by default,
rather than at the end of a burst of events (like debounce does).

Example:
Setup throttled function: `const x = Infront.Utils.throttle(() => { console.log('throttled interval'); }, 2000);`
Usage: `setInterval(() => { console.log('interval'); x(); }, 300);`

#### Parameters

- func: (...args: any[]) => void

  function to be throttled
- threshold: number = 250

  (optional) delay time in ms, default: 250ms
- `Optional` scope: any

  (optional) scope for function call, default: this

#### Returns () => void

the throttled function that can be called somewhere else
