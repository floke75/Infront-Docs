---
title: "Fxwidgets"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Fxwidgets"
description: "Test snippet for Fxwidgets"
tags: ["widget", "test", "widget:FxFocusGridWidget", "widget:FxQuoteWidget", "widget:fxFocusGridWidget", "widget:fxQuoteWidget"]
demonstrates: ["FxFocusGridWidget", "FxQuoteWidget", "fxFocusGridWidget", "fxQuoteWidget"]
example_config: {"title":"Fxwidgets","description":"Test snippet for Fxwidgets","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:FxFocusGridWidget","widget:FxQuoteWidget","widget:fxFocusGridWidget","widget:fxQuoteWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Fxwidgets"
source_files: ["script.ts", "template.html", "config.json"]
---

# Fxwidgets

Test snippet for Fxwidgets

Demonstrates: `FxFocusGridWidget`, `FxQuoteWidget`, `fxFocusGridWidget`, `fxQuoteWidget`

## Script (script.ts)

```typescript
Infront.DEBUG_REQUESTS = true;
Infront.DEBUG_NO_ACCESS_TO_FEED = true;
Infront.DEBUG_SYMBOL_DATA_TAGS = true;

var opts = new Infront.FxQuoteWidgetOptions();
opts.spotInstrument = { feed: 4250, ticker: 'TRYRON' };
opts.tenorKey = Infront.FxTenorKey.Overnight;
infront.fxQuoteWidget('#q1', opts);

opts.tenorKey = Infront.FxTenorKey.Spot;
infront.fxQuoteWidget('#q2', opts);

var widgetOptions = new Infront.FxFocusGridWidgetOptions();
widgetOptions.spotFeed = 4250;
widgetOptions.spotInstruments = [new Infront.Instrument(4250, 'TRYRON')];
widgetOptions.selectableTenorKeys = [
    Infront.FxTenorKey.Overnight,
    Infront.FxTenorKey.TomorrowNext,
    Infront.FxTenorKey.Spot,
    Infront.FxTenorKey.SpotNext,
    Infront.FxTenorKey.WeekBase + 1,
    Infront.FxTenorKey.WeekBase + 2,
    Infront.FxTenorKey.WeekBase + 3,
    Infront.FxTenorKey.MonthBase + 1,
    Infront.FxTenorKey.MonthBase + 2,
    Infront.FxTenorKey.MonthBase + 3,
    Infront.FxTenorKey.MonthBase + 4,
    Infront.FxTenorKey.MonthBase + 5,
    Infront.FxTenorKey.MonthBase + 6,
    Infront.FxTenorKey.MonthBase + 7,
    Infront.FxTenorKey.MonthBase + 8,
    Infront.FxTenorKey.MonthBase + 9,
    Infront.FxTenorKey.MonthBase + 10,
    Infront.FxTenorKey.MonthBase + 11,
    Infront.FxTenorKey.MonthBase + 12,
    Infront.FxTenorKey.MonthBase + 15,
    Infront.FxTenorKey.MonthBase + 18,
    Infront.FxTenorKey.YearBase + 2,
    Infront.FxTenorKey.YearBase + 3,
    Infront.FxTenorKey.YearBase + 4,
    Infront.FxTenorKey.YearBase + 5,
];
widgetOptions.mandatoryTenorKeys = [Infront.FxTenorKey.Spot];
widgetOptions.chainTemplate.tenorKeys = [
    Infront.FxTenorKey.Overnight,
    Infront.FxTenorKey.TomorrowNext,
    Infront.FxTenorKey.Spot,
    Infront.FxTenorKey.MonthBase + 1,
    Infront.FxTenorKey.MonthBase + 3,
];
widgetOptions.chainTemplate.quotePairTemplate.leftQuoteTemplate.label = 'Sell';
widgetOptions.chainTemplate.quotePairTemplate.rightQuoteTemplate.label = 'Buy';

infront.fxFocusGridWidget('g1', widgetOptions);
```

## Markup (template.html)

```html
<div class="cell-content cell-row">
    <div>Overnight</div>
    <div id="q1"></div>
</div>
<div class="cell-content cell-row">
    <div>Spot</div>
    <div id="q2"></div>
</div>
<div class="cell-content cell-row">
    <div>grid</div>
    <div id="g1"></div>
</div>
```

