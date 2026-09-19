---
title: "Screener"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Screener"
description: "Test snippet for Screener"
tags: ["widget", "test", "widget:QuoteListWidget", "widget:ScreenerWidget", "widget:quoteList", "widget:screenerWidget", "widget:subscribe"]
demonstrates: ["QuoteListWidget", "ScreenerWidget", "quoteList", "screenerWidget", "subscribe"]
example_config: {"title":"Screener","description":"Test snippet for Screener","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:QuoteListWidget","widget:ScreenerWidget","widget:quoteList","widget:screenerWidget","widget:subscribe"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["//code.highcharts.com/stock/highstock.src.js"]}
source_url: "https://docs.infrontfinance.com/tests/Screener"
source_files: ["script.ts", "template.html", "config.json"]
---

# Screener

Test snippet for Screener

Demonstrates: `QuoteListWidget`, `ScreenerWidget`, `quoteList`, `screenerWidget`, `subscribe`

## Script (script.ts)

```typescript
//var opts = new Infront.ScreenerWidgetOptions();
//opts.feed = 4501;
//opts.linkChannels = [4555];
//opts.linkAction = Infront.LinkAction.Append;
//opts.title = "sdsdfsdfsd";
//opts.collapsable = true;
//opts.filters = [
//	{
//		defaultExpanded: true,
//		filterFields: "STAR_RATING",
//		header: "Morningstar Rating",
//		filterItems: [
//			new Infront.FilterItem("Not Rated", (val) => {
//				return typeof val == "undefined" || val == 0;
//			}),
//			new Infront.FilterItem("&#9733;", (val) => { return val == 1; }, "star-param-1"),
//			new Infront.FilterItem("&#9733;&#9733;", (val) => { return val == 2; }, "star-param-2"),
//			new Infront.FilterItem("&#9733;&#9733;&#9733;", (val) => { return val == 3; }, "star-param-3"),
//			new Infront.FilterItem("&#9733;&#9733;&#9733;&#9733;", (val) => { return val == 4; }, "star-param-4", false),
//			new Infront.FilterItem("&#9733;&#9733;&#9733;&#9733;&#9733;", (val) => { return val == 5; }, "star-param-5"),
//		]
//	},
//	{
//		defaultExpanded: true,
//		filterFields: "STAR_RATING",
//		header: "testing radio buttons",
//		filterType: Infront.FilterTypeEnum.RadioSelect,
//		filterItems: [
//			new Infront.FilterItem("Not Rated", (val) => { return typeof val == "undefined" || val == 0; }),
//			new Infront.FilterItem("&#9733;", (val) => { return val == 1; }, "star-param-1"),
//			new Infront.FilterItem("&#9733;&#9733;", (val) => { return val == 2; }, "star-param-2"),
//			new Infront.FilterItem("&#9733;&#9733;&#9733;", (val) => { return val == 3; }, "star-param-3"),
//			new Infront.FilterItem("&#9733;&#9733;&#9733;&#9733;", (val) => { return val == 4; }, "star-param-4", false),
//			new Infront.FilterItem("&#9733;&#9733;&#9733;&#9733;&#9733;", (val) => { return val == 5; }, "star-param-5"),
//		]
//	},
//	{
//		filterFields: ["FULL_NAME", "RISK_LEVEL"],
//		//header: "Name containing:",
//		placeholder: "Enter text here",
//		filterType: Infront.FilterTypeEnum.FreeText,
//		className: "free-text-filter2"
//	},
//	{
//		filterFields: "STAR_RATING",
//		header: "Morningstar Rating",
//		filterType: Infront.FilterTypeEnum.Select,
//		className: "star-select-group",
//		filterItems: new Infront.FilterItemValue("&#9733;&#9733;&#9733;", [3], "star-select-val", true)
//	},
//	{
//		filterFields: "FULL_NAME",
//		filterType: Infront.FilterTypeEnum.Select,
//		className: "fullname-select-group",
//		filterItems: [
//			new Infront.FilterItemString("SEB Global C", ["SEB Global C"], "fullname-select-val", false)
//		]
//	},
//	Infront.FilterEnum.Risklevel
//];
//var widget = infront.screenerWidget("#fundscreener", opts);

//var qopts = new Infront.QuoteListWidgetOptions();
//qopts.linkChannels = [4555];
//qopts.linkAction = Infront.LinkAction.Append;
//qopts.sortable = true;
//qopts.layout = Infront.ListLayout.DIV;
//qopts.columns = [
//	"FULL_NAME",
//	{
//		"name": "Tips",
//		"type": "custom",
//		"heading": "Tips",
//		"content": "<span class='fund_tip_button'>BUY</span>",
//	},
//	"RISK_LEVEL",
//	"STAR_RATING",
//	"FUND_PROSPECTIVE_BOOK_VALUE_YIELD",
//	"FUND_TOTAL_EXPENSE",
//	"FUND_TOTAL_ASSETS",
//	"FUND_SHARPE_RATIO",
//	"FUND_STD_DEV_1Y",
//	{
//		"name": "choose",
//		"type": "custom",
//		"heading": "Välj",
//		"content": "<span class='funds_choose_button'>Välj</span>",
//		"className": "cell-custom-layout__funds-screener-choose-btn",
//	}
//];
//var quoteList = infront.quoteList("#quotelist", qopts);

let instrument = new Infront.Instrument(4500, '0P00000LNL');
infront.infront.subscribe(
    instrument,
    ['LAST', 'TICKER', 'INSTRUMENT_TYPE'],
    true,
    function (data) {
        console.log(data);
    },
    10,
);

infront.infront.cache.inlineBind(
    Infront.CacheKeyFactory.createInstrumentKey(instrument),
    ['TICKER', 'FEED', 'INSTRUMENT_TYPE', 'LAST'],
    function (value) {
        console.log('Inline binding result: ' + value);
    },
);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w2">
        <div class="cell-content">
            <div class="cell-row">
                <div class="cell-h4">Add your filters</div>
                <div id="fundscreener"></div>
            </div>
        </div>
    </div>
    <div class="cell cell--w10">
        <div class="cell-content">
            <div class="cell-h4">Showing X of Y funds</div>
            <div id="quotelist"></div>
        </div>
    </div>
    <div class="cell cell--w10">
        <div class="cell-content">
            <div class="cell-h4">Showing X of Y funds</div>
            <div id="news"></div>
        </div>
    </div>
</div>
```

