---
title: "CalendarDataItem"
qualified_name: "WTK.CalendarDataItem"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > CalendarDataItem"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.CalendarDataItem.html"
defines: ["CalendarDataItem"]
member_count: 5
members: ["feed?", "id?", "text?", "title?", "x"]
member_groups:
  "Properties": ["feed?", "id?", "text?", "title?", "x"]
---

# CalendarDataItem

An item that holds calendar-event-data

```ts
interface CalendarDataItem {
    feed?: number;
    id?: number;
    text?: string;
    title?: string;
    x: number;
}
```

### Properties

#### `Optional` feed

```ts
feed?: number
```

calendar feed number

#### `Optional` id

```ts
id?: number
```

calendar event id

#### `Optional` text

```ts
text?: string
```

calendar text

#### `Optional` title

```ts
title?: string
```

calendar title

#### x

```ts
x: number
```

timestamp
