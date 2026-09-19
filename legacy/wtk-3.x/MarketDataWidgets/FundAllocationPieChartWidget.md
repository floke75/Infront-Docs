---
title: "Fund Allocation Pie Chart Widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "FundAllocationPieChartWidget"
extends: "WidgetBaseOptions"
option_count: 20
options: ["allocationType", "instruments", "enableLabels", "legend", "spacingBottom", "spacingLeft", "spacingRight", "spacingTop", "colors", "borderColor", "borderWidth", "enable3d", "alpha", "beta", "depth", "animation", "innerSize", "fontFamily", "legendMaxHeight", "legendLabelColor"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#FundAllocationPieChartWidget"
---

# Fund Allocation Pie Chart Widget

```javascript
var opts = Infront.FundAllocationPieChartWidgetOptions(target, [options]);
```

Extends [WidgetBaseOptions](../CoreObjects/WidgetOptions.md)

The fund allocation pie chart widget gives the user a graphical representation of the county, asset or sector allocation of one or more funds.
If more than one allocation weighes less than 2%, they will be grouped as "others".

### `allocationType`

- **Type:** `"Country" | "Asset" | "Sector"`
- **Required:** Yes

Type of allocation to group displayed funds holdings by.

### `instruments`

- **Type:** `Array`
- **Required:** Yes
- **Default:** `none (empty array)`

Array of instruments/funds to visualize in the pie chart

### `enableLabels`

- **Type:** `boolean`
- **Default:** `False`

Show or hide labels on the chart.

### `legend`

- **Type:** `boolean`
- **Default:** `False`

Show or hide legend on the chart.

### `spacingBottom`

- **Type:** `number`
- **Default:** `15`

Spacing from chart to bottom edge of container.

### `spacingLeft`

- **Type:** `number`
- **Default:** `10`

Spacing from chart to left edge of container.

### `spacingRight`

- **Type:** `number`
- **Default:** `10`

Spacing from chart to right edge of container.

### `spacingTop`

- **Type:** `number`
- **Default:** `10`

Spacing from chart to top edge of container.

### `colors`

- **Type:** `string[]`
- **Required:** No

Array of hex colors (e.g "#ff00ff") to use in the chart.

### `borderColor`

- **Type:** `string`
- **Required:** No

Hex color (e.g "#ff00ff") to use for chart borders.

### `borderWidth`

- **Type:** `string`
- **Default:** `2`

Border width, in pixels.

### `enable3d`

- **Type:** `boolean`
- **Default:** `False`

Show chart as 3d.

### `alpha`

- **Type:** `number`
- **Default:** `45`

Rotate chart around its x-axis (enable3d must be true).

### `beta`

- **Type:** `number`
- **Default:** `0`

Rotate chart around its y-axis (enable3d must be true).

### `depth`

- **Type:** `number`
- **Default:** `40`

The depth/thickness of a 3d chart (enable3d must be true).

### `animation`

- **Type:** `boolean`
- **Default:** `true`

Shows animations

### `innerSize`

- **Type:** `string`
- **Default:** `"0%"`

Sets inner size of the chart

### `fontFamily`

- **Type:** `string`
- **Default:** `"Arial, sans-serif"`

Sets font of the chart

### `legendMaxHeight`

- **Type:** `number`

Sets legend maximum height

### `legendLabelColor`

- **Type:** `string`
- **Default:** `"#999"`

Sets legend label color

### Example

```html
        <script type="text/javascript">
            var fundPieOpts = new Infront.FundAllocationPieChartWidgetOptions();
            fundPieOpts.instruments = [new Infront.Instrument(18197, "0P00009FQ5"), new Infront.Instrument(2260, "0P00009FQA")];
            fundPieOpts.allocationType = "Country";
            fundPieOpts.innerSize = "33%";
            fundPieOpts.legend = true;
            infront.fundAllocationPieChartWidget("#fundAllocationPie", fundPieOpts);
        </script>
        ...

        <div id="fundAllocationPie"></div>
    
```
