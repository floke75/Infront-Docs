---
title: "Chart Custom Templates"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Chart > Chart Custom Templates"
description: "Displays a chart widget with custom templates using ChartWidgetOptions and advanced indicator configuration."
tags: ["chart-widget", "ChartWidgetOptions", "widgets", "examples", "wtk", "requests", "custom-templates"]
example_config: {"title":"Chart Custom Templates","description":"Displays a chart widget with custom templates using ChartWidgetOptions and advanced indicator configuration.","modify_date":"2023-10-20T07:33:43","owner":"","tags":["chart-widget","ChartWidgetOptions","widgets","examples","wtk","requests","custom-templates"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/Chart/ChartCustomTemplates"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Chart Custom Templates

Displays a chart widget with custom templates using ChartWidgetOptions and advanced indicator configuration.

## Script (script.ts)

```typescript
// options
const opts = new Infront.ChartWidgetOptions();
opts.instruments = [new Infront.Instrument(18177. 'DNB')];
opts.defaultPeriod = '1Y';


/* Custom Template examples */
const templateNonFancy = {
     chartType: Infront.Chart.ChartType.AREA,
      period: Infront.Chart.Period.ONE_YEAR,
      resolution: Infront.Chart.Resolution.AUTO,
      showVolume: true,
      volumeUseUpDownColors: false,
      showVolumeUnderlay: false,
      volumeUnderlayUseUpDownColors: true,
      indicatorList: [{  type: Infront.Chart.IndicatorType.SMA }],
};
const templateFancy = {
      chartType: Infront.Chart.ChartType.CANDLESTICK,
      period: Infront.Chart.Period.FIVE_YEARS,
      resolution: Infront.Chart.Resolution.ONE_WEEK,
      showVolume: true,
      volumeUseUpDownColors: false,
      showVolumeUnderlay: false,
      indicatorList: [
          {
              type: Infront.Chart.IndicatorType.EMA,
              params: {
                  period: 52,
              },
          },
          {
              type: Infront.Chart.IndicatorType.EMA,
              params: {
                  period: 104,
              },
          },
          {
              type: Infront.Chart.IndicatorType.EMA,
              params: {
                  period: 156,
              },
          },
          {
              type: Infront.Chart.IndicatorType.VOLUME_BY_PRICE,
              params: {
                  color: "#00FF0033",
                  negativeColor: "#FF000033",
              },
          },
          {
              type: Infront.Chart.IndicatorType.RSI,
              params: {
                  period: 14,
              },
          },
      ],
};
opts.availableCustomTemplates = {
    "Non-fancy Stuff": templateNonFancy,
    "Fancy Stuff": templateFancy,
};
opts.selectableTemplates = {
    list: [
        Infront.Chart.ChartTemplateType.DEFAULT,
        Infront.Chart.ChartTemplateType.TEN_MINUTES_VWAP,
        "Non-fancy Stuff",
        "Fancy Stuff",
        Infront.Chart.ChartTemplateType.SAVE_AS_DEFAULT,
        Infront.Chart.ChartTemplateType.RESET_DEFAULT,
    ],
    collapsable: Infront.Chart.Menu.COLLAPSABLE.CLOSED,
};
/* END Custom Templates */


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

