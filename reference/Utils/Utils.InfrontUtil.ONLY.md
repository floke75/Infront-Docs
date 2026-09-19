---
title: "ONLY<T, U>"
qualified_name: "Utils.InfrontUtil.ONLY"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > ONLY"
source_url: "https://docs.infrontfinance.com/docs/types/Utils.InfrontUtil.ONLY.html"
defines: ["ONLY"]
---

# ONLY<T, U>

```ts
ONLY: (T | U) extends object ? WITHOUT<T, U> & U | WITHOUT<U, T> & T : T | U
```

Force use only one type of the passed two types.

#### Type Parameters

- T
- U
