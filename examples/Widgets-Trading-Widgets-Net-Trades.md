---
title: "Net Trades"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Trading Widgets > Net Trades"
description: "Displays a net trades widget using NetTradesWidgetOptions."
tags: ["net-trades-widget", "NetTradesWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Net Trades","description":"","modify_date":"2020-11-03T22:09:48","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/TradingWidgets/NetTrades"
source_files: ["script.ts", "template.html", "config.json"]
---

# Net Trades

Displays a net trades widget using NetTradesWidgetOptions.

## Script (script.ts)

```typescript
var opts = new Infront.NetTradesWidgetOptions();
infront.netTradesWidget("#netTrades", opts);
```

## Markup (template.html)

```html
 <div id="netTrades"></div>
```

