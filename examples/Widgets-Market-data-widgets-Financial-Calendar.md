---
title: "Financial Calendar"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Financial Calendar"
description: "Displays a financial calendar widget with customizable country codes, date range, and layout options."
tags: ["financial-calendar-widget", "FinancialCalendarWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Financial Calendar","description":"Displays a financial calendar widget with customizable country codes, date range, and layout options.","modify_date":"2020-02-10T09:43:15","owner":"","tags":["financial-calendar-widget","FinancialCalendarWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/FinancialCalendar"
source_files: ["script.ts", "template.html", "config.json"]
---

# Financial Calendar

Displays a financial calendar widget with customizable country codes, date range, and layout options.

## Script (script.ts)

```typescript
var opts = new Infront.FinancialCalendarWidgetOptions();
opts.countryCodes = ["GB"];
opts.endDate = InfrontUtil.addMonths(new Date(), 6);
opts.paging = true;
opts.layout = Infront.FinancialCalendarLayout.EXPANDED;
infront.financialCalendarWidget("#financialcal", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w12">
		<div id="financialcal" class="cell-content"></div>
	</div>
</div>
```

