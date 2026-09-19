---
title: "isValidIsin"
qualified_name: "Utils.InfrontUtil.isValidIsin"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > isValidIsin"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.isValidIsin.html"
defines: ["isValidIsin"]
---

# isValidIsin

```ts
isValidIsin(isin: unknown): isin is string
```

TypeGuard function for checking if a provided isin is a valid.

#### Parameters

- isin: unknown

  The isin variable to check

#### Returns isin is string

a boolean whether or not the isin is valid, also type casts isin to string
