---
title: "Fund RiskLevel Widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "FundRiskLevelWidget"
extends: "SingleInstrumentWidgetOptions"
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#FundRiskLevelWidget"
---

# Fund RiskLevel Widget

```javascript
var opts = Infront.FundRiskLevelWidgetOptions(target, [options]);
```

Extends [SingleInstrumentWidgetOptions](../CoreObjects/SingleInstrumentWidgetOptions.md)

The risk level widget shows the risk rating of a fund.

### Example

```html
<script type="text/javascript">
var opts = new Infront.FundRiskLevelWidgetOptions();
opts.instrument = new Infront.Instrument(17935, "0P00000AO2");
infront.fundRiskLevelWidget("#fundRiskLevel", opts);
</script>
...
 <div id="fundRiskLevel"></div>
        
```
