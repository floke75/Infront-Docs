---
title: "PutCallExpirySelection"
qualified_name: "WTK.PutCallExpirySelection"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > PutCallExpirySelection"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.PutCallExpirySelection.html"
defines: ["PutCallExpirySelection"]
reference_count: 1
references: ["WTK.PutCallWidgetOptions"]
---

# PutCallExpirySelection

```ts
PutCallExpirySelection:
    | { expiry: SpecialExpiryDate; type: "special" }
    | { expiry: number; type: "date" }
```

Selection value for [PutCallWidgetOptions.defaultExpiry](./WTK.PutCallWidgetOptions.md#defaultexpiry) and
[PutCallWidgetOptions.onExpiryChanged](./WTK.PutCallWidgetOptions.md#onexpirychanged).

Either a preset "special" expiry (All, Weekly, Future/Forward, month buckets)
or a concrete expiry date value as returned by the expiry-dates request.
