---
title: "getValueWithinMinMax"
qualified_name: "Utils.InfrontUtil.getValueWithinMinMax"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > getValueWithinMinMax"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.getValueWithinMinMax.html"
defines: ["getValueWithinMinMax"]
---

# getValueWithinMinMax

```ts
getValueWithinMinMax(value: number, min: number, max: number): number
```

returns the value if it's within min and max, if not it will either take min (too low) or max (too great)

#### Parameters

- value: number

  the number that should be within min and max
- min: number

  default of the minimum, if the value is too low, it will be set to min.
- max: number

  default of the maximum, if the value is too great, it will be set to max.

#### Returns number

value
