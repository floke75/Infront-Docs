---
title: "Upcoming events widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "UpcomingEventsWidget"
option_count: 3
options: ["target", "options", "company"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#UpcomingEventsWidget"
---

# Upcoming events widget

```javascript
InfinWidget = InfinancialsUI.UpcomingEventsWidget(target, [options]);
```

Displays the 4 following publication events to come on a company.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### Configuration options

### `company`

- **Type:** `String`
- **Required:** Yes

The company ISIN or Infinancials code

### Example

```html
<script>
    var opts = new Infinancials.UpcomingEventsWidgetOptions();
    opts.company = "US0378331005";
    var upWidget = infinancialsUI.UpComingEventsWidget("upcomingEvents", opts);
</script>
...
<div id="upcomingEvents"></div>
```
