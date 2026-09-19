---
title: "Company Description Widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "CompanyDescriptionWidget"
extends: "SingleInstrumentWidgetOptions"
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#CompanyDescriptionWidget"
---

# Company Description Widget

```javascript
InfrontWidget = Infront.companyDescription(target, [options]);
```

Extends [SingleInstrumentWidgetOptions](../CoreObjects/SingleInstrumentWidgetOptions.md)

This widget is used for displaying company description.

### Example

```html
<script type="text/javascript">
    /* This configuration creates a window to add or company description widget.
     */
    var opts = new Infront.CompanyDescriptionWidgetOptions();
    opts.instrument = new Infront.Instrument(17921, "SHB B");
    infront.companyDescription("#companyDescription", opts);
</script>
...
<div id="companyDescription"></div>
```
