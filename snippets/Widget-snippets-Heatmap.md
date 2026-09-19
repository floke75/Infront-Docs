---
title: "Heatmap"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Heatmap"
description: "Test snippet for Heatmap"
tags: ["widget", "test", "widget:HeatmapWidget", "widget:heatmapWidget", "widget:quoteList"]
demonstrates: ["HeatmapWidget", "heatmapWidget", "quoteList"]
example_config: {"title":"Heatmap","description":"Test snippet for Heatmap","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:HeatmapWidget","widget:heatmapWidget","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Heatmap"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Heatmap

Test snippet for Heatmap

Demonstrates: `HeatmapWidget`, `heatmapWidget`, `quoteList`

## Script (script.ts)

```typescript
var opts2 = new Infront.HeatmapWidgetOptions();
opts2.feed = 17921;
opts2.id = 'myHeatmapWidget3000';
opts2.sortable = true;
opts2.enableChangeStatusColors = true;
opts2.showFilters = false;
opts2.mode = 0;
opts2.useChains = true;
opts2.defaultSortOrder = Infront.SortOrder.Desc;
opts2.defaultSortedColumn = 1;
//opts2.instrumentTypes = ["INDEX"];
//opts2.maxItems = 50;
/*
         opts2.instruments = [
             new Infront.Instrument(6880, "990100P"),
             new Infront.Instrument(20, "DJI"),
             new Infront.Instrument(2087, "COMP"),
             new Infront.Instrument(2088, "SP500"),
             new Infront.Instrument(2018, "UKX")
         ];
 //opts2.useChains = true;
opts2.chains = [{
                  "feed":15,
                  "name":"NAS100_MANUAL",
                  "description":"Nasdaq 100"
              },{
                  "feed":26,
                  "name":"DAX",
                  "description":"DAX Constituents"
              }];
   */
let widget = infront.heatmapWidget('#heatmap', opts2);
let opts = new Infront.QuoteListWidgetOptions();
opts.feed = 17921;
opts.sortable = true;
opts.enableChangeStatusColors = true;
opts.showFilters = false;
opts.defaultSortOrder = Infront.SortOrder.Desc;
opts.defaultSortedColumn = 'PCT_CHANGE';
opts.instrumentTypes = ['INDEX'];
opts.maxItems = 20;

opts.columns = [
    {
        name: 'TICKER',
        hover: 'FULL_NAME',
        flag: true,
    },
    {
        name: 'PCT_CHANGE',
        allowZero: true,
        translate: function (rowId, value) {
            return value;
        },
    },
];
infront.quoteList('#list', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="heatmap"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="list"></div>
    </div>
</div>
```

## Styles (style.css)

```css
.heatmap_ticker {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 5px;
}

.heatmap_pct {
    font-size: 22px;
    font-weight: 100;
    font-color: white;
}
```

