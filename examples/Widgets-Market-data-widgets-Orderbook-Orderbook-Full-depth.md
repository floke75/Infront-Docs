---
title: "Orderbook Full depth"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Orderbook > Orderbook Full depth"
description: "Displays a full depth orderbook widget using OrderbookWidgetOptions for a given instrument."
tags: ["orderbook-widget", "OrderbookWidgetOptions", "Instrument", "widgets", "examples", "wtk", "requests", "full-depth"]
example_config: {"title":"Orderbook Full depth","description":"","modify_date":"2023-04-28T07:16:12","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Orderbook/OrderbookFulldepth"
source_files: ["script.ts", "template.html", "config.json"]
---

# Orderbook Full depth

Displays a full depth orderbook widget using OrderbookWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.OrderbookWidgetOptions();
opts.instrument = new Infront.Instrument(26, "BMW");
opts.levels = -1;
opts.layout = Infront.OrderbookRowLayout.COMPACT;

const widget = infront.orderbookWidget("#orderbook1", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w6">
		<div id="orderbook1" class="cell-content"></div>
	</div>
</div>
```

