---
title: "History widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "HistoryWidget"
option_count: 6
options: ["target", "options", "instrument", "decimals", "startYear", "endYear"]
source_url: "https://doc.infrontfinance.com/v2/MarketDataWidgets#HistoryWidget"
---

# History widget

```javascript
InfrontWidget = Infront.historyWidget(target, [options]);
```

Shows end of day prices for all days in a year. Includes dividends and splits.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### `instrument`

- **Type:** `instrument`
- **Required:** Yes

The instrument to show in this widget.

### `decimals`

- **Type:** `number`
- **Required:** No

Set to override number of decimals for this widget. Defaults to instrument or feed decimals if not set.

### `startYear`

- **Type:** `number`
- **Default:** `Current year`

The first year to show in the dropdown/selection.

### `endYear`

- **Type:** `number`
- **Default:** `current year`

The last year to show in the dropdown/selection.

### Example

```html
<script type="text/javascript">
/**
* Creates a list of end of day values for the specified instrument
* with a dropdown for years and filters for dividends/splits.
*/
    function infront_ready() {
    var opts = new Infront.HistoryWidgetOptions();
    opts.instrument = new Infront.Instrument(2008, "UG");
    opts.widgetTitle = "Historical prices, Peugeot (Euronext Paris)";
    opts.startYear = 1999;
    opts.endYear = 2015;

    infront.historyWidget("#history", opts);
    }
</script>
...
<div id="history"></div>
        
```
