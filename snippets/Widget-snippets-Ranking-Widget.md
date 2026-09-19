---
title: "Ranking Widget"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Ranking Widget"
description: "Test snippet for Rankingwidget"
tags: ["widget", "test", "widget:RankingWidget", "widget:rankingWidget"]
demonstrates: ["RankingWidget", "rankingWidget"]
example_config: {"title":"Ranking Widget","description":"Test snippet for Rankingwidget","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:RankingWidget","widget:rankingWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Rankingwidget"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Ranking Widget

Test snippet for Rankingwidget

Demonstrates: `RankingWidget`, `rankingWidget`

## Script (script.ts)

```typescript
var rankingOpts = new Infront.RankingWidgetOptions();
rankingOpts.feed = 17921;
//rankingOpts.feed = 18177;
rankingOpts.sortOrder = Infront.SortOrder.Desc;
rankingOpts.rows = 10;
rankingOpts.rankingPeriod = Infront.RankingPeriod.INTRADAY;
//rankingOpts.rankingPeriod = Infront.RankingPeriod.ONE_MONTH;
//rankingOpts.rankingField == "PCT_CHANGE";
rankingOpts.rankingField = Infront.RankingField.VOLUME;
rankingOpts.customRanking = Infront.CustomRanking.SMALL_CAP;
//	rankingOpts.layout = Infront.ListLayout.DIV;
rankingOpts.columns = [
    'TICKER',
    'FULL_NAME',
    //    "LV_PCT_CHANGE",
    'PCT_CHANGE',
    'LAST_VALID',
    'TURNOVER',
    //    "ONEXCH_TURNOVER",
    //    "VOLUME"
];
//rankingOpts.enablePeriodSelector = false;
rankingOpts.enableChangeStatusColors = true;
rankingOpts.instrumentTypes = ['STOCK'];
infront.rankingWidget('#ranking', rankingOpts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w8">
        <div class="cell-content" id="ranking"></div>
    </div>
</div>
```

## Styles (style.css)

```css
.cell-column-chooser {
    width: 630px;
    position: absolute;
    left: calc(50% - 315px);
    top: calc(50% - 258px);
}

.cell-column-chooser__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
}
```

