---
title: "Focus widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "FocusWidget"
extends: "SingleInstrumentWidgetOptions"
option_count: 2
options: ["layout", "onClick"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#FocusWidget"
---

# Focus widget

```javascript
InfrontWidget = Infront.focusWidget(target, [options]);
```

Extends [SingleInstrumentWidgetOptions](../CoreObjects/SingleInstrumentWidgetOptions.md)

The focus window gives the user a quick overview of one specific instrument.

The bottom row is a change indicator that displays the current trend based on last price. The right part of the window consists of a range panel, with values in both ends displaying today's high and low. An arrow indicates where the price is with respect to high/low.

### `layout`

- **Type:** `enum`
- **Default:** `Infront.FocusWidgetLayout.STANDARD`

Sets the layout for the widget. Can be one of:

- Infront.FocusWidgetLayout.STANDARD
- Infront.FocusWidgetLayout.MINI

### `onClick`

- **Type:** `(instrument:Instrument)=>void`

Callback that is triggered when focus widget is clicked.

### Example

```html
<script type="text/javascript">
var opts = new Infront.FocusWidgetOptions();
opts.instrument = new Infront.Instrument(2008, "UG");
infront.focusWidget("#focus", opts);
</script>
...
<div id="focus"></div>
        
```
