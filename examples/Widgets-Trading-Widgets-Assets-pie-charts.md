---
title: "Assets pie charts"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Trading Widgets > Assets pie charts"
example_config: {"title":"Assets pie charts","description":"","modify_date":"2020-11-03T21:41:16","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/TradingWidgets/Assetspiecharts"
source_files: ["script.ts", "template.html", "config.json"]
---

# Assets pie charts

## Script (script.ts)

```typescript
const opts = new Infront.AssetsPieChartOptions()

infront.assetsPieChart('#pieChart', opts)
```

## Markup (template.html)

```html
<div id="pieChart"></div>
```

