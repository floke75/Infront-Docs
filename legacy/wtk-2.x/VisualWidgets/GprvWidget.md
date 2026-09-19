---
title: "GPRV widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "GprvWidget"
option_count: 11
options: ["target", "options", "company", "peergroup", "width", "height", "fieldElement", "sizeListener", "sizeLimit", "enablePeergroupSelection", "highchartsOptions"]
source_url: "https://doc.infrontfinance.com/v2/VisualWidgets#GprvWidget"
---

# GPRV widget

```javascript
InfinWidget = InfinancialsUI.GprvWidget(target, [options]);
```

This widget displays the full GPRV analysis (Growth Profitability Risk Value) of a company. The larger the green area, the better for the investor. It assesses company attractiveness compared to peers and sector.

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

### `peergroup`

- **Type:** `Integer`
- **Required:** No
- **Default:** `InfinancialsConstants.Peergroup.INTL_PEERS`

Available peergroup options:

- InfinancialsConstants.Peergroup.INTL_PEERS (International)
- InfinancialsConstants.Peergroup.REG_PEERS (Regional)
- InfinancialsConstants.Peergroup.DOM_PEERS (Domestic)

### `width`

- **Type:** `Integer`
- **Required:** No

Define the Width of the GPRV Chart.

### `height`

- **Type:** `Integer`
- **Required:** No

Define the Height of the GPRV Chart.

### ``

- **Type:** `Boolean`
- **Required:** No

full This parameter add, on the right side of the chart, a table with the companies scores and value for each indicators.

### `fieldElement`

- **Type:** `Classname or ID name`
- **Required:** No

Define the element to display the full table.

### `sizeListener`

- **Type:** `Boolean`
- **Required:** No

This parameter make the full Gprv widget responsive and hide the table if there is not enought space.

### `sizeLimit`

- **Type:** `Integer`
- **Required:** No

Define the limit before making the chart reponsive (work only if the sizeListener parameter is set to: True)

### `enablePeergroupSelection`

- **Type:** `boolean`
- **Required:** No
- **Default:** `False`

Add a select box at the top of the chart, to be able to switch between peergroups (Domestic, Regional or International Peers).

### `highchartsOptions`

- **Type:** `HighchartsOptions`
- **Required:** No

Override predefined highcharts options (see Highcharts official documentation)

### Example

```html
<script>
    var opts = new Infinancials.GprvWidgetOptions();
    opts.company = "US0378331005";
    opts.full = true;
    opts.fieldElement = "grpvFields";
    opts.height = 351;
    opts.enablePeergroupSelection = true;
        
    var gWidget = infinancialsUI.GprvtWidget("gprv", opts);
</script>
...
<div id="gprv"></div>
<div id="grpvFields"></div>
```
