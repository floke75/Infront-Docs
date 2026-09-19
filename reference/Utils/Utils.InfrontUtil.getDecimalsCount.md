---
title: "getDecimalsCount"
qualified_name: "Utils.InfrontUtil.getDecimalsCount"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > getDecimalsCount"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.getDecimalsCount.html"
defines: ["getDecimalsCount"]
---

# getDecimalsCount

```ts
getDecimalsCount(num: number): number
```

Gets the decimals count of a number by using RegExp

E.g.
value = 2.00001; returns 5; // 00001 is 5 decimal places
value = -1e-7; returns 7; // -0.0000001 is 7 decimal places

#### Parameters

- num: number

  The number to extract the decimals count from

#### Returns number

The decimals count of the provided number
