---
title: "Put / Call"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Put / Call"
description: "Displays a put/call widget using PutCallWidgetOptions for options market data, including customizable columns and underlying instruments."
tags: ["put-call-widget", "PutCallWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Put / Call","description":"Displays a put/call widget using PutCallWidgetOptions for options market data, including customizable columns and underlying instruments.","modify_date":"2021-12-17T11:05:26","owner":"","tags":["put-call-widget","PutCallWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/PutCall"
source_files: ["script.ts", "template.html", "config.json"]
---

# Put / Call

Displays a put/call widget using PutCallWidgetOptions for options market data, including customizable columns and underlying instruments.

## Script (script.ts)

```typescript
const opts = new Infront.PutCallWidgetOptions();
opts.showTabs = false;
opts.feed = 17923;
opts.defaultUnderlying = new Infront.Instrument(17921, "VOLV B");
opts.columns = ["TICKER", "VOLUME", "OPEN_INTEREST", "TIME", "STRIKE_PRICE", "EXPIRY_DATE"];

const widget = infront.putCallWidget("#putCall", opts);
```

## Markup (template.html)

```html
<!-- Put / Call -->
<div class="cell-row">
	<div class="cell cell--w12">
		<div id="putCall" class="cell-content"></div>
	</div>
</div>
```

