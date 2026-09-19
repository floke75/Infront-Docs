---
title: "Valuation widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "ValuationWidget"
option_count: 4
options: ["target", "options", "company", "field"]
source_url: "https://doc.infrontfinance.com/v2/VisualWidgets#ValuationWidget"
---

# Valuation widget

```javascript
InfinWidget = InfinancialsUI.ValuationWidget(target, [options]);
```

Overview of company’s valuation multiples vs international peers.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### Configuration options

### `company`

- **Type:** `String`
- **Required:** Yes

The company ISIN or Infinancials code

### `field`

- **Type:** `BenchmarkOption`
- **Required:** No

Available Infinancials.BenchmarkOption enum:

- BENCHMARK_EV_EBITDA
- BENCHMARK_EV_SALES
- BENCHMARK_SYMPHONY

### Example

```html
<script>
    var opts = new Infinancials.ValuationWidgetOptions();
    opts.company = "US0378331005";
    var valWidget = infinancialsUI.ValuationWidget("valuation", opts);
</script>
...
<div id="valuation"></div>
```
