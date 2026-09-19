---
title: "Chart Analysis"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Chart > Chart Analysis"
description: "Displays a chart widget with analysis features using ChartWidgetOptions."
tags: ["chart-widget", "ChartWidgetOptions", "widgets", "examples", "wtk", "requests", "analysis"]
example_config: {"title":"Chart Analysis","description":"Displays a chart widget with analysis features using ChartWidgetOptions.","modify_date":"2023-10-20T07:29:59","owner":"","tags":["chart-widget","ChartWidgetOptions","widgets","examples","wtk","requests","analysis"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Chart/ChartAnalysis"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Chart Analysis

Displays a chart widget with analysis features using ChartWidgetOptions.

## Script (script.ts)

```typescript
// options
const opts = new Infront.ChartWidgetOptions();
opts.instruments = [new Infront.Instrument(18177. 'DNB')];
opts.defaultPeriod = '1Y';

opts.chartType = Infront.Chart.ChartType.AREA;
opts.showVolume = true;
opts.streaming = true;
opts.caching = true;

opts.watermarkType = Infront.Chart.WatermarkType.SYMBOL;
opts.showLogo = true;
opts.showOppositeOrdinate = true;
opts.showNavigator = true;

opts.legendItemClick = Infront.Chart.LegendItemClickType.EDIT_REMOVE_SERIES;
opts.topToolbar = {
    chartTypeMenu: true,
    periodMenu: true,
    periodSelector: true,
    resolutionMenu: true,
    indicatorMenu: true,
    annotationMenu: true,
    templateMenu: true,
    cursorTypeMenu: true,
    newCompareMenu: true,
    cursorEventsButton: true,
    currencyMenu: true,
    settingsMenu: true,
    instrumentHeader: true,
    fullScreenButton: true,
};
opts.bottomToolbar = {
    periodButtons: true,
    resolutionMenu: true,
};
opts.instrumentHeader = {
    chartFields: true,
    quoteFields: true,
};
opts.generalDropDownOptions = {
    booleanRepresentation: Infront.Chart.BooleanRepresentation.CHECKBOX,
};
// opts.linkChannels = [7755];
// opts.linkAction = Infront.LinkAction.Replace;

// create widget
const widget = infront.chartWidget('chartwidget', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content">
            <div id="chartwidget" class="chart-widget-demo"></div>
        </div>
  	</div>
</div>
```

## Styles (style.css)

```css
.chart-widget-demo {
    height: 560px;
}
```

