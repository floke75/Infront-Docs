---
title: "Heatmap"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Heatmap"
description: "Displays a heatmap widget for a set of instruments or chains."
tags: ["heatmap-widget", "HeatmapWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Heatmap","description":"Displays a heatmap widget for a set of instruments or chains.","modify_date":"2025-12-20T00:00:00","owner":"","tags":["heatmap-widget","HeatmapWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Heatmap"
source_files: ["script.ts", "template.html", "config.json"]
---

# Heatmap

Displays a heatmap widget for a set of instruments or chains.

## Script (script.ts)

```typescript
const opts = new Infront.HeatmapWidgetOptions();
opts.feed = 26;
opts.id = "myHeatmapWidget3000";
opts.sortable = true;
opts.enableChangeStatusColors = true;
opts.showFilters = false;
opts.mode = 0;
opts.instruments = [
    new Infront.Instrument(26, "BMW"),
    new Infront.Instrument(26, "ADS"),
    new Infront.Instrument(26, "SAP"),
    new Infront.Instrument(26, "DTE"),
    new Infront.Instrument(26, "ALV")
];

// to use chains example bellow set  useChains to true

opts.useChains = false;
opts.chains = [{ 
            "feed":15,
            "name":"NAS100_MANUAL", 
            "description":"Nasdaq 100" 
        },{ 
            "feed":26, 
            "name":"DAX", 
            "description":"DAX Constituents" 
        }]; 
const widget = infront.heatmapWidget("#heatmap", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
  <div class="cell cell--w12">
      <div id="heatmap" class="cell-content"></div>
  </div>
</div>
```

