---
title: "Portfolio ranking widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "PortfolioRankingWidget"
extends: "WidgetBaseOptions"
option_count: 1
options: ["maxItems"]
source_url: "https://doc.infrontfinance.com/v3/TradingWidgets#PortfolioRankingWidget"
---

# Portfolio ranking widget

```javascript
InfrontWidget = InfrontUI.portfolioRankingWidget(target, [options]);
```

Extends [WidgetBaseOptions](../CoreObjects/WidgetOptions.md)

Ranks your current positions

### `maxItems`

- **Type:** `number`
- **Default:** `3`

Sets the max items shown.

### Example

```html
<script type="text/javascript">
var opts = new Infront.PortfolioRankingWidget();
opts.maxItems = 5;
infrontUI.portfolioRankingWidget("#portfolio-ranking", opts);
</script>
...
<div id="portfolio-ranking"></div>
        
```
