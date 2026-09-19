---
title: "Instrumentinfo"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Instrumentinfo"
description: "Test snippet for Instrumentinfo"
tags: ["widget", "test", "widget:QuoteListWidget", "widget:getModel", "widget:quoteList"]
demonstrates: ["QuoteListWidget", "getModel", "quoteList"]
example_config: {"title":"Instrumentinfo","description":"Test snippet for Instrumentinfo","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:QuoteListWidget","widget:getModel","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"styles":["../themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/Instrumentinfo"
source_files: ["script.ts", "template.html", "config.json"]
---

# Instrumentinfo

Test snippet for Instrumentinfo

Demonstrates: `QuoteListWidget`, `getModel`, `quoteList`

## Script (script.ts)

```typescript
Infront.DEBUG_ERROR_LOG_CALLBACK =
    Infront.DEBUG_REQUESTS =
    Infront.DEBUG_LOGIN_DETAIL =
        // Infront.DEBUG_CONFIG_ALL_TAGS =
        // Infront.DEBUG_CONFIG_TO_FILE =
        true;

var opts = new Infront.QuoteListWidgetOptions();
opts.feed = 18177;
opts.sortable = true;
opts.linkChannels = [123];
opts.columns = ['TICKER', 'FULL_NAME', 'CURRENCY', 'LAST'];
infront.quoteList('#quotelist', opts);

var onLink = (type, value) => {
    infront.getModel().requestSymbol(
        new Infront.Instrument(value.feed, value.ticker),
        (data) => {
            var rawData = infront.infront.streamingManager
                .getSymbol(data.fs.feed, data.fs.ticker)
                .inspect();
            rawData = rawData.data;
            document.getElementById('name').innerText = rawData['FullName'];
            if (rawData['CompanyURL']) {
                document.getElementById('link').href = rawData['CompanyURL'];
                document.getElementById('logo').src =
                    'https://logo.clearbit.com/' +
                    (rawData['CompanyURL'] || '').replace(/^http:\/\//i, 'https://');
            } else {
                document.getElementById('link').href = '';
                document.getElementById('logo').src = '';
            }
            var parent = document.getElementById('parent');
            var table = document.getElementById('parent');
            table.innerHTML = '';

            for (let prop in rawData) {
                var tr = document.createElement('tr');

                var key = document.createElement('td');
                key.className = 'cell-instrument-values--vertical__heading';
                key.innerText = prop.split('_').join(' ');

                var value = document.createElement('td');
                value.className = 'cell-instrument-values--vertical__value cell-table__txt ';
                value.innerText = rawData[prop];

                tr.appendChild(key);
                tr.appendChild(value);
                table.appendChild(tr);
            }
        },
        false,
        Infront.SymbolContentEnum.StaticData |
            Infront.SymbolContentEnum.Basic |
            Infront.SymbolContentEnum.HistPerformance,
    );
};
link = new Infront.Link(infront, Infront.LinkAction.Append, [123], onLink);
```

## Markup (template.html)

```html
<div id="root">
    <div class="cell-row">
        <div class="cell cell--w6">
            <div class="cell-content cell-row" id="quotelist"></div>
        </div>
        <div class="cell cell--w6">
            <div class="cell-content">
                <div>
                    <a id="link" target="_blank">
                        <span class="cell-h3" id="name"></span>
                        <img id="logo" style="float: right" />
                    </a>
                </div>
                <table class="cell-table" id="parent">
                    <tr>
                        <td>Click an instrument</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>
```

