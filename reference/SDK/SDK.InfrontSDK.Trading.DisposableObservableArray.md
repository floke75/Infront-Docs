---
title: "DisposableObservableArray<T>"
qualified_name: "SDK.InfrontSDK.Trading.DisposableObservableArray"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > Trading > Other > DisposableObservableArray"
source_url: "https://docs.infrontfinance.com/docs/types/SDK.InfrontSDK.Trading.DisposableObservableArray.html"
defines: ["DisposableObservableArray"]
reference_count: 1
references: ["Utils.InfrontUtil.ObservableArray"]
---

# DisposableObservableArray<T>

```ts
DisposableObservableArray: ObservableArray<T> & { dispose: () => void }
```

An ObservableArray returned by PortfolioData methods that carries a dispose() function to release the underlying dataSet.bindToArray binding.

#### Type Parameters

- T = any
