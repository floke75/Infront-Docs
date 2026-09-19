---
title: "MacroCalendarDatasourceFilters"
qualified_name: "WTK.MacroCalendarDatasourceFilters"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > MacroCalendarDatasourceFilters"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.MacroCalendarDatasourceFilters.html"
defines: ["MacroCalendarDatasourceFilters"]
member_count: 7
members: ["categories", "countryCodes", "from", "importances", "sortTick", "source", "to"]
member_groups:
  "Properties": ["categories", "countryCodes", "from", "importances", "sortTick", "source", "to"]
reference_count: 2
references: ["SDK.InfrontSDK.CalendarEventImportance", "WTK.TRADING_ECONOMICS_FEED"]
---

# MacroCalendarDatasourceFilters

External filter model passed from the widget UI down into the datasource.

```ts
interface MacroCalendarDatasourceFilters {
    categories: readonly string[];
    countryCodes: readonly string[];
    from: Date;
    importances: readonly CalendarEventImportance[];
    sortTick: number;
    source: number;
    to: Date;
}
```

### Properties

#### categories

```ts
categories: readonly string[]
```

Category descriptions to include. Empty = all categories.

#### countryCodes

```ts
countryCodes: readonly string[]
```

ISO Alpha-2 country codes to restrict the results to. Empty = all countries.

#### from

```ts
from: Date
```

Start date for the calendar query (inclusive).

#### importances

```ts
importances: readonly CalendarEventImportance[]
```

Importance levels to include. Empty = all importance levels.

#### sortTick

```ts
sortTick: number
```

Incremented every time the sort order changes. Including this in the
external filter model forces the datasource to call `onExternalFilterChanged`,
which performs a proper full cache reset of the AG-Grid infinite-row model
rather than relying on AG-Grid's own partial purge that can leave stale
block data visible.

#### source

```ts
source: number
```

Calendar data source feed number (e.g. [TRADING_ECONOMICS_FEED](./WTK.TRADING_ECONOMICS_FEED.md)).

#### to

```ts
to: Date
```

End date for the calendar query (inclusive).
