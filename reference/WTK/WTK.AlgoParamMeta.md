---
title: "AlgoParamMeta"
qualified_name: "WTK.AlgoParamMeta"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > AlgoParamMeta"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.AlgoParamMeta.html"
defines: ["AlgoParamMeta"]
reference_count: 1
references: ["WTK.OrderEntryComponent"]
---

# AlgoParamMeta

```ts
AlgoParamMeta: Extract<
    OrderEntryComponent["meta"],
    {
        kind: "algoParam";
        labelsAndValues?: Record<string, string>;
        paramType?: InfrontSDK.Trading.ParamType;
    },
>
```

Metadata for algorithmic trading parameters with type information
