---
title: "MacroCalendarRow"
qualified_name: "WTK.MacroCalendarRow"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > MacroCalendarRow"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.MacroCalendarRow.html"
defines: ["MacroCalendarRow"]
member_count: 18
members: ["actual", "category", "country", "date", "dateTime", "description", "expected", "id", "importance", "isDateHeader?", "previous", "raw", "reference", "revised", "symbol", "symbolId", "time", "unit"]
member_groups:
  "Properties": ["actual", "category", "country", "date", "dateTime", "description", "expected", "id", "importance", "isDateHeader?", "previous", "raw", "reference", "revised", "symbol", "symbolId", "time", "unit"]
reference_count: 3
references: ["SDK.InfrontSDK.CalendarEventImportance", "SDK.InfrontSDK.CalendarEvent", "SDK.InfrontSDK.SymbolId"]
---

# MacroCalendarRow

Shape of a single row that the table renders.

Rows with `isDateHeader === true` are full-width date-group separator rows
injected by the datasource. All fields except `id`, ` date`, and ` dateTime`
carry no meaningful data on those rows and should not be read.

```ts
interface MacroCalendarRow {
    actual: number;
    category: string;
    country: string;
    date: string;
    dateTime: Date;
    description: string;
    expected: number;
    id: number;
    importance: CalendarEventImportance;
    isDateHeader?: boolean;
    previous: number;
    raw: CalendarEvent;
    reference: string;
    revised: number;
    symbol: string;
    symbolId: SymbolId;
    time: string;
    unit: string;
}
```

### Properties

#### `Readonly` actual

```ts
actual: number
```

Actual reported figure, if known.

#### `Readonly` category

```ts
category: string
```

Broad category description coming from the SDK (e.g. "Economic Indicators").

#### `Readonly` country

```ts
country: string
```

Country ISO Alpha-2 code, used for flag rendering.

#### `Readonly` date

```ts
date: string
```

Local date component of the event (YYYY-MM-DD string).

#### `Readonly` dateTime

```ts
dateTime: Date
```

Raw event date/time.

#### `Readonly` description

```ts
description: string
```

Event description (e.g. "NY Fed Bill Purchases 1 to 4 months").

#### `Readonly` expected

```ts
expected: number
```

Expected/forecast figure, if known.

#### `Readonly` id

```ts
id: number
```

Unique stable id for the event (from SDK). Negative for date-header rows.

#### `Readonly` importance

```ts
importance: CalendarEventImportance
```

Importance/priority of the event (`High` / ` Medium` / ` Low` / ` Unknown`).

#### `Optional` ` Readonly`isDateHeader

```ts
isDateHeader?: boolean
```

When `true` this row is a date-group separator rendered full-width across
all columns. Regular event data fields are empty / null on these rows.

#### `Readonly` previous

```ts
previous: number
```

Previous-period figure, if known.

#### `Readonly` raw

```ts
raw: CalendarEvent
```

Original SDK event, kept for callbacks.

#### `Readonly` reference

```ts
reference: string
```

Reference period label (e.g. "Apr", "May").

#### `Readonly` revised

```ts
revised: number
```

Revised figure, if known.

#### `Readonly` symbol

```ts
symbol: string
```

Symbol/ticker for the event, if available.

#### `Readonly` symbolId

```ts
symbolId: SymbolId
```

Symbol id, mainly used for instrument-linking on row click.

#### `Readonly` time

```ts
time: string
```

Local time component of the event (HH:MM string).

#### `Readonly` unit

```ts
unit: string
```

Reporting unit (e.g. `%`).
