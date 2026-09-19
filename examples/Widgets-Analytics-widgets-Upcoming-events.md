---
title: "Upcoming events"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Upcoming events"
description: "Displays an upcoming events widget using UpcomingEventsWidgetOptions for a given company."
tags: ["upcoming-events-widget", "UpcomingEventsWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Upcoming events","description":"Displays an upcoming events widget using UpcomingEventsWidgetOptions for a given company.","modify_date":"2021-05-26T11:24:06","owner":"","tags":["upcoming-events-widget","UpcomingEventsWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Upcomingevents"
source_files: ["script.ts", "template.html", "config.json"]
---

# Upcoming events

Displays an upcoming events widget using UpcomingEventsWidgetOptions for a given company.

## Script (script.ts)

```typescript
var opts = new Infinancials.UpcomingEventsWidgetOptions(); opts.company = "US0378331005"; 
var upWidget = infinancialsUI.UpComingEventsWidget("upcomingEvents", opts);
```

## Markup (template.html)

```html
<div id="upcomingEvents"></div>
```

