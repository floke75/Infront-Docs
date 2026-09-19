---
title: "CalendarEvent"
qualified_name: "SDK.InfrontSDK.CalendarEvent"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Calendar"
nav_path: "SDK > InfrontSDK > Calendar > CalendarEvent"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CalendarEvent.html"
defines: ["CalendarEvent"]
member_count: 11
members: ["category", "categoryDescription", "country", "dateTime", "description", "feed", "feedInfo", "id", "parentId?", "symbolId", "type"]
member_groups:
  "Properties": ["category", "categoryDescription", "country", "dateTime", "description", "feed", "feedInfo", "id", "parentId?", "symbolId", "type"]
reference_count: 6
references: ["SDK.InfrontSDK.EventCategory", "SDK.InfrontSDK.FeedInfo", "SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.EventType", "SDK.InfrontSDK.financialCalendar", "SDK.InfrontSDK.FinancialCalendarOptions"]
---

# CalendarEvent

An interface used to describe calendar event. This is used by [financialCalendar](./SDK.InfrontSDK.financialCalendar.md) to pass the output.

#### See

[financialCalendar](./SDK.InfrontSDK.financialCalendar.md) | FinancialCalendarOptions

```ts
interface CalendarEvent {
    category: EventCategory;
    categoryDescription: string;
    country: string;
    dateTime: Date;
    description: string;
    feed: number;
    feedInfo: FeedInfo;
    id: number;
    parentId?: number;
    symbolId: SymbolId;
    type: EventType;
}
```

### Properties

#### category

```ts
category: EventCategory
```

Category

#### categoryDescription

```ts
categoryDescription: string
```

Category description

#### country

```ts
country: string
```

Country ISO code.

#### dateTime

```ts
dateTime: Date
```

Event date and time.

#### description

```ts
description: string
```

Event description.

#### feed

```ts
feed: number
```

Event source feed.

#### feedInfo

```ts
feedInfo: FeedInfo
```

Feed info.

#### id

```ts
id: number
```

Event id.

#### `Optional` parentId

```ts
parentId?: number
```

Event parent id.

#### symbolId

```ts
symbolId: SymbolId
```

Event symbol id.

#### type

```ts
type: EventType
```

Event type.
