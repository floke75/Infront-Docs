---
title: "InitialUpdate"
qualified_name: "SDK.InfrontSDK.InitialUpdate"
kind: enum
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > InitialUpdate"
source_url: "https://docs.infrontfinance.com/docs/enums/SDK.InfrontSDK.InitialUpdate.html"
defines: ["InitialUpdate"]
member_count: 3
members: ["Always", "IgnoreNull", "None"]
member_groups:
  "Enumeration Members": ["Always", "IgnoreNull", "None"]
reference_count: 1
references: ["SDK.InfrontSDK.SymbolData"]
---

# InitialUpdate

Enum used to set the default behavior for [SymbolData.observe](./SDK.InfrontSDK.SymbolData.interface.md#observe) method. Setting the initial update to

- [Always](#always) will cause to do a callback even when no value is available yet.
- [None](#none) will never do an initial callback after observing the value.
- [IgnoreNull](#ignorenull) will do an initial callback if there is a value.

### Enumeration Members

#### Always

```ts
Always: "Always"
```

#### IgnoreNull

```ts
IgnoreNull: "IgnoreNull"
```

#### None

```ts
None: "None"
```
