---
title: "SvelteInfrontWidgetComponent"
qualified_name: "WTK.SvelteInfrontWidgetComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > SvelteInfrontWidgetComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.SvelteInfrontWidgetComponent.html"
defines: ["SvelteInfrontWidgetComponent"]
reference_count: 1
references: ["WTK.StaticSvelteInfrontWidgetComponent"]
---

# SvelteInfrontWidgetComponent

```ts
SvelteInfrontWidgetComponent: object
```

The static properties that should be enforced on all Widget classes.
Just add them as regular properties to the object.

{
foo: number; // will enforce that "static foo: number;"" is present on class that implements StaticSvelteInfrontWidgetComponent
}

#### See

StaticSvelteInfrontWidgetComponent
