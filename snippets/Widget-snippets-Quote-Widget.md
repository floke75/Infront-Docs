---
title: "Quote Widget"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Quote Widget"
description: "Test snippet for Quotewidget"
tags: ["widget", "test", "widget:QuoteListWidget", "widget:QuoteWidget", "widget:getModel", "widget:infrontRTD", "widget:quoteList", "widget:quoteWidget"]
demonstrates: ["QuoteListWidget", "QuoteWidget", "getModel", "infrontRTD", "quoteList", "quoteWidget"]
example_config: {"title":"Quote Widget","description":"Test snippet for Quotewidget","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:QuoteListWidget","widget:QuoteWidget","widget:getModel","widget:infrontRTD","widget:quoteList","widget:quoteWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Quotewidget"
source_files: ["script.ts", "template.html", "config.json"]
---

# Quote Widget

Test snippet for Quotewidget

Demonstrates: `QuoteListWidget`, `QuoteWidget`, `getModel`, `infrontRTD`, `quoteList`, `quoteWidget`

## Script (script.ts)

```typescript
//infront.infrontRTD("DEBUG_ALL_SYMBOL_DATA_TAGS,DEBUG_SYMBOL_DATA_TAGS,DEBUG_HIST_PERFORMANCE_TAGS,DEBUG_REQUESTS", false)

var opts = new Infront.QuoteListWidgetOptions();
opts.feed = 26;
opts.sortable = true;
opts.linkChannels = [123];
opts.columns = ['TICKER', 'FULL_NAME', 'CURRENCY', 'LAST'];
infront.quoteList('#quotelist', opts);

quoteOpts = new Infront.QuoteWidgetOptions();
quoteOpts.instrument = new Infront.Instrument(6340, 'ATX');
quoteOpts.rootElement = 'span';
quoteOpts.linkChannels = [123];
quoteOpts.linkAction = Infront.LinkAction.Append;
quoteOpts.name = 'EXCHANGE_NAME';
quoteOpts.type = 'custom';
quoteOpts.content = (id, val, el) => {
    console.log(id);
    return id.ticker + ' @ ' + infront.getModel().loginServer().feeds[id.feed].descr;
};
infront.quoteWidget('#quoteWidget', quoteOpts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content cell-row" id="quotelist"></div>
    </div>
    <div class="cell cell--w6">
        <div class="cell-content">
            <div class="cell-row" id="quoteWidget"></div>
        </div>
    </div>
</div>
```

