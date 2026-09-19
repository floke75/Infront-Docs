---
title: "Trading power"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Trading Widgets > Trading power"
description: "Displays a trading power widget using ValueWidgetOptions."
tags: ["trading-power-widget", "ValueWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Trading power","description":"","modify_date":"2020-11-03T22:08:57","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/TradingWidgets/Tradingpower"
source_files: ["script.ts", "template.html", "config.json"]
---

# Trading power

Displays a trading power widget using ValueWidgetOptions.

## Script (script.ts)

```typescript
var opts = new Infront.ValueWidgetOptions();
infront.tradingPowerWidget("#tradingPower", opts);
```

## Markup (template.html)

```html
<div id="tradingPower"></div>
```

