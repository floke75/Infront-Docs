---
title: "Portfolio name widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "PortfolioNameWidget"
extends: "WidgetBaseOptions"
source_url: "https://doc.infrontfinance.com/v3/TradingWidgets#PortfolioNameWidget"
---

# Portfolio name widget

```javascript
InfrontWidget = InfrontUI.portfolioNameWidget(target, [options]);
```

Extends [WidgetBaseOptions](../CoreObjects/WidgetOptions.md)

Shows the name of the portfolio.

### Example

```html
<script type="text/javascript">
var opts = new Infront.PortfolioNameWidgetOptions();
infrontUI.portfolioNameWidget("#portfolio-name", opts);
</script>
...
<div id="portfolio-name"></div>
        
```
