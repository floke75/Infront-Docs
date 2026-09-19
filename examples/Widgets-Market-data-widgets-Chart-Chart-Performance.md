---
title: "Chart Performance"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Chart > Chart Performance"
description: "Displays a performance chart widget using ChartWidgetOptions with performance data type and advanced options."
tags: ["chart-widget", "ChartWidgetOptions", "widgets", "examples", "wtk", "requests", "performance"]
example_config: {"title":"Chart Performance","description":"Displays a performance chart widget using ChartWidgetOptions with performance data type and advanced options.","modify_date":"2023-04-28T07:19:18","owner":"","tags":["chart-widget","ChartWidgetOptions","widgets","examples","wtk","requests","performance"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Chart/ChartPerformance"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Chart Performance

Displays a performance chart widget using ChartWidgetOptions with performance data type and advanced options.

## Script (script.ts)

```typescript
// options
const opts = new Infront.ChartWidgetOptions();
opts.instruments = [new Infront.Instrument(18177. 'DNB')];

// set up performance chart
opts.chartType = Infront.Chart.ChartType.LINE;
opts.cursorType = Infront.Chart.CursorType.VERTICAL;

opts.showPrevClose = false;
opts.showVolume = false;
opts.showVolumeUnderlay = false;
opts.showSplits = false;
opts.showDividends = false;
opts.showCalendar = false;
opts.adjustDividends = false;
opts.adjustSplits = false;
opts.companyEventSmallDots = true;

opts.mainDataType = Infront.Chart.DataType.PERFORMANCE;
opts.streaming = true;
opts.caching = true;

opts.mainOnTop = true;
opts.showLegend = true;
opts.legendItemClick = Infront.Chart.LegendItemClickType.NONE;
opts.showTooltip = false;

opts.watermarkType = Infront.Chart.WatermarkType.NONE;
opts.showLogo = false;

opts.showOrdinate = true;
opts.ordinateCompareBase = 0;
opts.ordinateScaling = Infront.Chart.OrdinateScaling.RELATIVE;
opts.showOppositeOrdinate = false;
opts.ordinateLabelsOutside = false;
opts.showSeriesLabels = true;
opts.gridType = Infront.Chart.GridType.GRID;
opts.showAlternateGridColor = false;

opts.defaultPeriod = '1Y';
opts.autoResolution = true;
opts.defaultResolutions = {
  [Infront.Chart.IntradayPeriod.ONE_DAY]: Infront.Chart.IntradayResolution.TEN_MINUTES,
  [Infront.Chart.IntradayPeriod.FIVE_DAYS]: Infront.Chart.IntradayResolution.SIXTY_MINUTES,
  [Infront.Chart.IntradayPeriod.THIRTY_DAYS]: Infront.Chart.IntradayResolution.SIXTY_MINUTES,
  // [Infront.Chart.HistoricalPeriod.ONE_WEEK]: Infront.Chart.HistoricalResolution.ONE_DAY,
  // [Infront.Chart.HistoricalPeriod.ONE_MONTH]: Infront.Chart.HistoricalResolution.ONE_DAY,
  [Infront.Chart.HistoricalPeriod.THREE_MONTHS]: Infront.Chart.HistoricalResolution.ONE_DAY,
  [Infront.Chart.HistoricalPeriod.SIX_MONTHS]: Infront.Chart.HistoricalResolution.ONE_DAY,
  [Infront.Chart.HistoricalPeriod.YTD]: Infront.Chart.HistoricalResolution.ONE_DAY,
  [Infront.Chart.HistoricalPeriod.ONE_YEAR]: Infront.Chart.HistoricalResolution.ONE_WEEK,
  [Infront.Chart.HistoricalPeriod.TWO_YEARS]: Infront.Chart.HistoricalResolution.ONE_WEEK,
  [Infront.Chart.HistoricalPeriod.THREE_YEARS]: Infront.Chart.HistoricalResolution.ONE_WEEK,
  [Infront.Chart.HistoricalPeriod.FIVE_YEARS]: Infront.Chart.HistoricalResolution.ONE_WEEK,
};

opts.showNavigator = false;
opts.topToolbar = {};
opts.bottomToolbar = {};
opts.instrumentHeader = undefined;

// the smaller the reflow timeout is set, the smoother the window / chart resize works!
// good values are 5-10ms!
opts.reflowTimeout = 10;

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
    height: 420px;
}
```

