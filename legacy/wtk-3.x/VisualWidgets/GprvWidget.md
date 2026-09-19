---
title: "GPRV widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "GprvWidget"
option_count: 15
options: ["target", "options", "displayMode", "company", "peergroup", "widgetTitle", "width", "height", "fieldElement", "sizeListener", "sizeLimit", "enablePeergroupSelection", "enablePopupWarning", "addGprvDescription", "highchartsOptions"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#GprvWidget"
---

# GPRV widget

```javascript
InfinWidget = InfinancialsUI.GprvD3Widget(target, options);
```

This widget displays the full GPRV analysis (Growth Profitability Risk Value) of a company. The larger the green area, the better for the investor. It assesses company attractiveness compared to peers and sector.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### Predefined modes

This widget has two predefined mode and one all customizable mode.

### `displayMode`

- **Type:** `GprvDisplayMode`
- **Required:** No
- **Default:** `GprvDisplayMode.VISUAL`

Available mode options:

- GprvDisplayMode.PORTFOLIO
- GprvDisplayMode.VISUAL
- GprvDisplayMode.CUSTOMIZE

GprvDisplayMode.VISUAL configures the Gprv with the same Visual's Gprv options.

GprvDisplayMode.PORTFOLIO configure the Gprv with the same Portfolio's Gprv options.

Only GprvDisplayMode.CUSTOMIZE allows to use options configuration.

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

### `widgetTitle`

- **Type:** `string`
- **Required:** No

Add a different title to the Gprv.

### `width`

- **Type:** `Integer`
- **Required:** No

Define the Width of the GPRV Chart.

### `height`

- **Type:** `Integer`
- **Required:** No

Define the Height of the GPRV Chart.

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

### `enablePopupWarning`

- **Type:** `boolean`
- **Required:** No
- **Default:** `False`

Add a Popup Warning at the top of the chart.

### `addGprvDescription`

- **Type:** `boolean`
- **Required:** No
- **Default:** `False`

Add a description at the top of the chart explaining how the Gprv is calculated.

### `highchartsOptions`

- **Type:** `HighchartsOptions`
- **Required:** No

Override predefined highcharts options (see Highcharts official documentation)

### Example

```html
<script>
    var opts = new Infinancials.GprvD3Options();
    opts.company = "US0378331005";
    opts.fieldElement = "grpvFields";
    options.dimensions.margin = 0;
    options.dimensions.maxHeight = 390;
    var gWidget = infinancialsUI.GprvtWidget("gprv", opts);
</script>
...
<div id="gprv"></div>
<div id="grpvFields"></div>
```
