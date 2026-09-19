---
title: "Derivatives"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Derivatives"
description: "Test snippet for Derivatives"
tags: ["widget", "test", "widget:PutCallWidget", "widget:QuoteListWidget", "widget:putCallWidget", "widget:quoteList"]
demonstrates: ["PutCallWidget", "QuoteListWidget", "putCallWidget", "quoteList"]
example_config: {"title":"Derivatives","description":"Test snippet for Derivatives","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:PutCallWidget","widget:QuoteListWidget","widget:putCallWidget","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"styles":["../themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/Derivatives"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Derivatives

Test snippet for Derivatives

Demonstrates: `PutCallWidget`, `QuoteListWidget`, `putCallWidget`, `quoteList`

## Script (script.ts)

```typescript
var opts = new Infront.QuoteListWidgetOptions();
opts.feed = 17921;
opts.useChains = true;
opts.interactionHighlight = true;
opts.columns = ['TICKER', 'PCT_CHANGE', 'CHANGE', 'LAST'];
opts.linkChannels = [4555];
opts.linkAction = Infront.LinkAction.None;
opts.layout = Infront.ListLayout.DIV;
opts.createExpandRow = expandclick;
opts.expandableRows = true;
infront.quoteList('quoteList', opts);

expandEl = document.createElement('div');
expandEl.className = 'cell-expandable';

opts = new Infront.PutCallWidgetOptions();
opts.widgetTitle = 'Put / Call';
opts.linkChannels = [4555];
opts.linkAction = Infront.LinkAction.Replace;
opts.showTabs = false;
opts.showTitle = false;
opts.showFutureForward = false;
opts.showUnderlyingChooser = false;
opts.interactionHighlight = true;
opts.onUnderlyingClicked = function (instrument) {
    alert(instrument.ticker);
};
opts.onRowClicked = function (call, put) {
    alert('Row: ' + call.ticker + ', ' + put.ticker);
};
opts.feed = 17923; //Stockholm
//opts.feed = 18179; //Oslo
//opts.feed = 2206; //Eurex
opts.id = 'put_call_test';
opts.columns = ['LAST', 'STRIKE_PRICE', 'ASK', 'EXPIRY_DATE'];

opts.enableColumnsMove = true;
opts.enableColumnsResize = true;

widget = infront.putCallWidget(expandEl, opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <!--<div class="cell cell--w8">
            <div id="putCall" class="cell-content"></div>
        </div>-->
    <div class="cell cell--w12">
        <div class="cell-content" id="quoteList"></div>
    </div>
</div>
```

## Styles (style.css)

```css
.cell-expandable {
    position: relative;
    padding: 12px;
    margin-left: 10px;
    border-width: 0px;
    /*background-color: #00121a;*/
    max-height: 500px;
    overflow: auto;
    width: 100%;
}
.cell-flex-list__row {
    /*border-bottom: 1px solid #07394d;*/
}
.cell-flex-list__row__field--header {
    /*color: #0098ca;*/
    font-weight: 700;
    text-transform: uppercase;
    font-size: 11px;
}
```

