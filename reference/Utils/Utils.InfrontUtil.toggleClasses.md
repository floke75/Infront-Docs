---
title: "toggleClasses"
qualified_name: "Utils.InfrontUtil.toggleClasses"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > toggleClasses"
source_url: "https://docs.infrontfinance.com/docs/functions/Utils.InfrontUtil.toggleClasses.html"
defines: ["toggleClasses"]
---

# toggleClasses

```ts
toggleClasses(
    element: HTMLElement,
    state: boolean,
    truthyClass: string,
    falseyClass?: string,
): void
```

Toggles classes on an element.

Can be used in two ways:

- Toggles a single class (the truthyClass parameter) depending on the state && in case falseyClass is undefined (or not defined).
  (true: add truthyClass, false: remove truthyClass)
- Toggle between truthy- and falseyClass depending on the state.
  (true: add truthyClass, remove falseyClass; false: remove truthyClass, add falseyClass)

#### Parameters

- element: HTMLElement

  The HTML element to toggle the class(-es) on.
- state: boolean

  Represents the toggle state.
- truthyClass: string

  The class to add in case state == true.
- `Optional` falseyClass: string

  The class to add in case state == false and falsey class is defined.

#### Returns void
