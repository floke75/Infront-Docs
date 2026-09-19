---
title: "CustomFieldMeta"
qualified_name: "WTK.CustomFieldMeta"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > CustomFieldMeta"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.CustomFieldMeta.html"
defines: ["CustomFieldMeta"]
reference_count: 1
references: ["WTK.OrderEntryComponent"]
---

# CustomFieldMeta

```ts
CustomFieldMeta: Extract<
    OrderEntryComponent["meta"],
    { kind: "customField"; labelsAndValues?: Record<string, string> },
>
```

Metadata for broker-specific custom fields with optional label mappings
