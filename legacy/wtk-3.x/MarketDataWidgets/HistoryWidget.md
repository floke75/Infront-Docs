---
title: "History widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "HistoryWidget"
extends: "SingleInstrumentWidgetOptions"
option_count: 6
options: ["startYear", "endYear", "useRatioForSplit", "filterSmallSplits", "filterField", "columns"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#HistoryWidget"
---

# History widget

```javascript
InfrontWidget = Infront.historyWidget(target, [options]);
```

Extends [SingleInstrumentWidgetOptions](../CoreObjects/SingleInstrumentWidgetOptions.md)

Shows end of day prices for all days in a year. Includes dividends and splits.

### `startYear`

- **Type:** `number`
- **Default:** `Current year`

The first year to show in the dropdown/selection.

### `endYear`

- **Type:** `number`
- **Default:** `current year`

The last year to show in the dropdown/selection.

### `useRatioForSplit`

- **Type:** `boolean`
- **Default:** `false`

Formatting split based on ratio

### `filterSmallSplits`

- **Type:** `boolean`
- **Default:** `false`

If true splits with a factor betwwen 0.94 and 1.1 will be filtered.

### `filterField`

- **Type:** `string`
- **Default:** `"LAST"`

The filed that results being filtered on. The widget will display only results with value in this column.

### `columns`

- **Type:** `any[]`
- **Required:** No

```javascript
    [{
        "name":"date",
        "sortName":"_date",
        "className":"cell-table__txt",
        'dataType': 'date',
        "compareFactory":dateCompareFactory
    },{
        "name":"open",
        "className":"cell-table__num",
        'dataType': 'number',
        "compareFactory":numberCompareFactory
    },{
        "name":"high",
        "className":"cell-table__num",
        'dataType': 'number',
        "compareFactory":numberCompareFactory
    },{
        "name":"low",
        "className":"cell-table__num",
        'dataType': 'number',
        "compareFactory":numberCompareFactory
    },{
        "name":"last",
        "className":"cell-table__num",
        'dataType': 'number',
        "compareFactory":numberCompareFactory
    },{
        "name":"num_trades",
        "className":"cell-table__num",
        'dataType': 'number',
        'decimals': 0,
        "compareFactory":numberCompareFactory
    },{
        "name":"volume",
        "className":"cell-table__num",
        'dataType': 'short',
        "compareFactory":numberCompareFactory
    },{
        "name":"turnover",
        "className":"cell-table__num",
        'dataType': 'short',
        "compareFactory":numberCompareFactory
    }]
```

Assign the list of columns to be used to display data. This can be array of strings or objects.

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
