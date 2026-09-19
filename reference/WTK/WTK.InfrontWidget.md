---
title: "InfrontWidget"
qualified_name: "WTK.InfrontWidget"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > InfrontWidget"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.InfrontWidget.html"
defines: ["InfrontWidget"]
member_count: 4
members: ["destroy", "modify", "pause", "resume"]
member_groups:
  "Methods": ["destroy", "modify", "pause", "resume"]
related_types: ["WTK.AlertListWidget", "WTK.AlertWidget", "WTK.FinancialCalendarWidget", "WTK.FocusWidget", "WTK.HeatmapWidget", "WTK.IndexOverviewWidget", "WTK.InstrumentOverviewWidget", "WTK.NewsReaderWidget", "WTK.PortfolioSelectWidget", "WTK.WidgetBase"]
reference_count: 11
references: ["WTK.WidgetOptions", "WTK.AlertListWidget", "WTK.AlertWidget", "WTK.FinancialCalendarWidget", "WTK.FocusWidget", "WTK.HeatmapWidget", "WTK.IndexOverviewWidget", "WTK.InstrumentOverviewWidget", "WTK.NewsReaderWidget", "WTK.PortfolioSelectWidget", "WTK.WidgetBase"]
---

# InfrontWidget

Interface for interacting with an already created widget

```ts
interface InfrontWidget {
    destroy(): any;
    modify(options: Partial<WidgetOptions>): void;
    pause(): any;
    resume(): any;
}
```

#### Implemented by

- [AlertListWidget](./WTK.AlertListWidget.md)
- [AlertWidget](./WTK.AlertWidget.md)
- [FinancialCalendarWidget](./WTK.FinancialCalendarWidget.md)
- [FocusWidget](./WTK.FocusWidget.md)
- [HeatmapWidget](./WTK.HeatmapWidget.md)
- [IndexOverviewWidget](./WTK.IndexOverviewWidget.md)
- [InstrumentOverviewWidget](./WTK.InstrumentOverviewWidget.md)
- [NewsReaderWidget](./WTK.NewsReaderWidget.md)
- [PortfolioSelectWidget](./WTK.PortfolioSelectWidget.md)
- [WidgetBase](./WTK.WidgetBase.md)

### Methods

#### destroy

```ts
destroy(): any
```

Destroys this widget. You must call this before removing the widget from the Page to avoid memory leaks and make
sure the corresponding data is unsubscribed from.

##### Returns any

#### modify

```ts
modify(options: Partial<WidgetOptions>): void
```

Modify the options for this widget.

##### Parameters

- options: Partial<[WidgetOptions](./WTK.WidgetOptions.md)>

##### Returns void

#### pause

```ts
pause(): any
```

Stop this widget. Calling stop will unsubscribe all data, but will not remove the widget from the ui or the data currently contained in it.

##### Returns any

#### resume

```ts
resume(): any
```

Starts this widget if previously stopped. You do not need to call this if you haven't called pause(), widgets are
automatically started on creation.

##### Returns any
