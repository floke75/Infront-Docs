---
title: "OrderBuilderMeta"
qualified_name: "WTK.OrderBuilderMeta"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > OrderBuilderMeta"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.OrderBuilderMeta.html"
defines: ["OrderBuilderMeta"]
---

# OrderBuilderMeta

```ts
OrderBuilderMeta:
    | { key: typeof coreOrderComponentTypes[number]; kind: "coreField" }
    | {
        id: number;
        kind: "customField";
        label?: string;
        labelsAndValues?: Record<string, string>;
        mandatory?: boolean;
        paramType?: InfrontSDK.Trading.ParamType;
        value?: string;
    }
    | {
        id: string;
        kind: "algoParam";
        label?: string;
        labelsAndValues?: Record<string, string>;
        mandatory?: boolean;
        paramType?: InfrontSDK.Trading.ParamType;
    }
```

Metadata used to identify components when emitting value events in order to build up the order from dynamically created components.
This discriminated union allows tracking whether a field is a core order field, custom field, or algorithmic trading parameter.
