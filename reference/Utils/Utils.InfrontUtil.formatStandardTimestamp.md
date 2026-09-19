---
title: "formatStandardTimestamp"
qualified_name: "Utils.InfrontUtil.formatStandardTimestamp"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > formatStandardTimestamp"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.formatStandardTimestamp.html"
defines: ["formatStandardTimestamp"]
---

# formatStandardTimestamp

```ts
formatStandardTimestamp(date: Date, seconds?: boolean): string
```

Formats a date the way we show a standard timestamp.
If the date is today, we show just time (hh:mm:ss),
if the date is not today, we show just the date (DD.MM.YYYY).

#### Parameters

- date: Date
- seconds: boolean = true

#### Returns string
