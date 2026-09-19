---
title: "Ranking"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Ranking"
description: "Test snippet for Ranking"
tags: ["widget", "test", "widget:InstrumentValuesWidget", "widget:RankingWidget", "widget:instrumentValuesWidget", "widget:rankingWidget"]
demonstrates: ["InstrumentValuesWidget", "RankingWidget", "instrumentValuesWidget", "rankingWidget"]
example_config: {"title":"Ranking","description":"Test snippet for Ranking","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:InstrumentValuesWidget","widget:RankingWidget","widget:instrumentValuesWidget","widget:rankingWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Ranking"
source_files: ["script.ts", "template.html", "config.json"]
---

# Ranking

Test snippet for Ranking

Demonstrates: `InstrumentValuesWidget`, `RankingWidget`, `instrumentValuesWidget`, `rankingWidget`

## Script (script.ts)

```typescript
var rankingOpts = new Infront.RankingWidgetOptions();
rankingOpts.feed = 18177;
rankingOpts.sortOrder = Infront.SortOrder.Asc;
rankingOpts.rows = 5;
rankingOpts.rankingPeriod = Infront.RankingPeriod.INTRADAY;
//	rankingOpts.layout = Infront.ListLayout.DIV;
rankingOpts.columns = [
    'TICKER',
    'LV_PCT_CHANGE',
    'PCT_CHANGE',
    'LAST_VALID',
    'TURNOVER',
    'ONEXCH_TURNOVER',
    'VOLUME',
];
//opts.enablePeriodSelector = false;
rankingOpts.enableChangeStatusColors = true;
rankingOpts.enablePeriodSelector = false;
rankingOpts.instrumentTypes = ['STOCK'];
rankingOpts.rankingField = Infront.RankingField.VOLUME;
//        rankingOpts.instrumentTypes = ["STOCK"];
//        rankingOpts.chain = "SX5E";
rankingOpts.widgetTitle = 'Turnover, SX5E';
//        rankingOpts.linkTrigger = "TICKER";
infront.rankingWidget('#ranked', rankingOpts);

//symbolInfoOpts.widgetTitle = wt.languageStrings.Widgets_Symbol_Info_Title;
var opts = new Infront.InstrumentValuesWidgetOptions();
opts.widgetTitle = 'DNB Private Equity retail B';
opts.instrument = new Infront.Instrument(18197, '0P00009FQ5');
opts.layout = Infront.MultipleValuesWidgetLayout.VERTICAL;
opts.paging = false;
opts.fields = ['CURRENCY', 'SEGMENT', 'START_DATE', 'MARKET'];

infront.instrumentValuesWidget('#instrumentValues', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="ranked"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="instrumentValues"></div>
    </div>
</div>
```

