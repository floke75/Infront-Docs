---
title: "Chart Custom Data"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Chart > Chart Custom Data"
description: "Displays a chart widget with custom instrument data using ChartWidgetOptions and CustomInstrument."
tags: ["chart-widget", "ChartWidgetOptions", "CustomInstrument", "widgets", "examples", "wtk", "requests", "custom-data"]
example_config: {"title":"Chart Custom Data","description":"Displays a chart widget with custom instrument data using ChartWidgetOptions and CustomInstrument.","modify_date":"2023-10-20T07:31:45","owner":"","tags":["chart-widget","ChartWidgetOptions","CustomInstrument","widgets","examples","wtk","requests","custom-data"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Chart/ChartCustomData"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Chart Custom Data

Displays a chart widget with custom instrument data using ChartWidgetOptions and CustomInstrument.

## Script (script.ts)

```typescript
// options
const opts = new Infront.ChartWidgetOptions();

// custom data from multi JSON using internal toolkit data-loading example
opts.instruments = [
    new Infront.Chart.CustomInstrument('Aapl', 'Apple (custom)', { url: 'https://demo-live-data.highcharts.com/aapl-ohlcv.json' }),
];

/*
// test with "locally" provide JSON files
opts.instruments = [
          new Infront.Chart.CustomInstrument('CUS-DAI', 'Cust. Daimler', [
                { url: './test-custom-data-dai-3y.json' },
                { url: './test-custom-data-dai-dividend.json', dataType: 'dividendData' },
                { url: './test-custom-data-dai-split.json', dataType: 'splitData' },
                { url: './test-custom-data-dai-calendar.json', dataType: 'calendarData' },
          ]),
          new Infront.Chart.CustomInstrument('CUS-BMW', 'Bay. Motorenwerke', { url: './test-custom-data-bmw-3y.json' }),
          new Infront.Chart.CustomInstrument('CUS-DAX', { url: './test-custom-data-dax-3y.json' }),
          new Infront.Chart.CustomInstrument('CUS-DELPHI', 'Delphi Nordic N', { url: './test-custom-data-delphi-nordic-n-3y.json' }),
];
*/

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

