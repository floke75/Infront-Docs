---
title: "MacroEventImportance"
qualified_name: "WTK.MacroEventImportance"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > MacroEventImportance"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.MacroEventImportance.html"
defines: ["MacroEventImportance"]
reference_count: 1
references: ["SDK.InfrontSDK.CalendarEventImportance"]
---

# MacroEventImportance

```ts
MacroEventImportance: CalendarEventImportance
```

The importance / priority of a macroeconomic event.

Alias for [InfrontSDK.CalendarEventImportance](../SDK/SDK.InfrontSDK.CalendarEventImportance.md) which maps directly to
the `IDS_MARKET_CALENDAR_IMPORTANCE` server tag (0x56):

- `High` -> server value 3
- `Medium` -> server value 2
- `Low` -> server value 1
- `Unknown` -> server value 0 or tag absent
