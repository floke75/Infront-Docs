---
title: "WidgetSubscriptions"
qualified_name: "WTK.WidgetSubscriptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > WidgetSubscriptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.WidgetSubscriptions.html"
defines: ["WidgetSubscriptions"]
member_count: 9
members: ["addField", "addInstrument", "addInstruments", "removeAllFields", "removeAllInstruments", "removeInstrument", "removeInstruments", "resetSubscriptions", "setInstrument"]
member_groups:
  "Methods": ["addField", "addInstrument", "addInstruments", "removeAllFields", "removeAllInstruments", "removeInstrument", "removeInstruments", "resetSubscriptions", "setInstrument"]
---

# WidgetSubscriptions

WidgetSubscriptions

### Methods

#### addField

```ts
addField(field: string): void
```

Add field that should be subscribed to by all subscribed instruments

##### Parameters

- field: string

  Field to subscribe

##### Returns void

#### addInstrument

```ts
addInstrument(instrument: Instrument): void
```

Subscribes instrument

##### Parameters

- instrument: Instrument

  Instrument to subscribe

##### Returns void

#### addInstruments

```ts
addInstruments(instruments: Instrument[]): void
```

Subscribes to given instruments on previously added fields if any

##### Parameters

- instruments: Instrument[]

  Array of instruments to subscribe

##### Returns void

#### removeAllFields

```ts
removeAllFields(): void
```

Used to remove all fields, use instead of removeAllInstruments
for widgets like QuoteList for pause/unsub functionality

##### Returns void

#### removeAllInstruments

```ts
removeAllInstruments(): void
```

Unsubscribes from all instruments

##### Returns void

#### removeInstrument

```ts
removeInstrument(instrument: Instrument): void
```

Unsubscribes from instrument

##### Parameters

- instrument: Instrument

  Instrument to unsubscribe

##### Returns void

#### removeInstruments

```ts
removeInstruments(instruments: Instrument[]): void
```

Unsubscribes from instruments

##### Parameters

- instruments: Instrument[]

  Array if instruments to unsubscribe from

##### Returns void

#### resetSubscriptions

```ts
resetSubscriptions(): void
```

Unsubscribes from everything and removes all instruments & fields

##### Returns void

#### setInstrument

```ts
setInstrument(instrument: Instrument): void
```

Used to unsubscribe from current instrument(s) and subscribe to a single new one.

##### Parameters

- instrument: Instrument

  New instrument to subscribe

##### Returns void
