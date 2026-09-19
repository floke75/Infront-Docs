---
title: "Portfolio selector widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "TradingWidgets"
widget_id: "PortfolioSelectorWidget"
extends: "WidgetBaseOptions"
option_count: 4
options: ["portfoliosChanged", "scaling", "titleClick", "showFullName"]
source_url: "https://doc.infrontfinance.com/v3/TradingWidgets#PortfolioSelectorWidget"
---

# Portfolio selector widget

```javascript
InfrontWidget = InfrontUI.portfolioSelectWidget(target, [options]);
```

Extends [WidgetBaseOptions](../CoreObjects/WidgetOptions.md)

Widget with dropdown of available portfolios for switching between them.

### `portfoliosChanged`

- **Type:** `(amount: number) => void`

Callback that is triggered when portfolios have changed

### `scaling`

- **Type:** `boolean`

Enables scaling

### `titleClick`

- **Type:** `() => void`

Callback that is triggered when title is clicked

### `showFullName`

- **Type:** `boolean`
- **Default:** `true`

Displays full name

### Example

```html
<script type="text/javascript">
var opts = new Infront.PortfolioSelectWidgetOptions();
infrontUI.portfolioSelectWidget("#portfolio-selector", opts);
</script>
...
<div id="portfolio-selector"></div>
        
```
