---
title: "Orderbook Level 1"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Orderbook > Orderbook Level 1"
description: "Displays a level 1 orderbook widget using OrderbookWidgetOptions for a given instrument."
tags: ["orderbook-widget", "OrderbookWidgetOptions", "Instrument", "widgets", "examples", "wtk", "requests", "level-1"]
example_config: {"title":"Orderbook Level 1","description":"","modify_date":"2023-04-28T07:14:54","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Orderbook/OrderbookLevel1"
source_files: ["script.ts", "template.html", "config.json"]
---

# Orderbook Level 1

Displays a level 1 orderbook widget using OrderbookWidgetOptions for a given instrument.

## Script (script.ts)

```typescript
const opts = new Infront.OrderbookWidgetOptions();
opts.instrument = new Infront.Instrument(26, "BMW");
opts.levels = 1;
opts.layout = Infront.OrderbookRowLayout.COMPACT;

const widget = infront.orderbookWidget("#orderbook1", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
	<div class="cell cell--w8">
		<div id="orderbook1" class="cell-content"></div>
	</div>
</div>
```

