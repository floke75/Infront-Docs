---
title: "Terminalwidgets"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Terminalwidgets"
description: "Test snippet for Terminalwidgets"
tags: ["widget", "test", "widget:PutCallWidget", "widget:putCallWidget"]
demonstrates: ["PutCallWidget", "putCallWidget"]
example_config: {"title":"Terminalwidgets","description":"Test snippet for Terminalwidgets","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:PutCallWidget","widget:putCallWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["InfrontUI-latest.c.js"],"styles":["https://software.infrontservices.com/wtk/ids/css/InfrontFramework-latest.css","https://software.infrontservices.com/wtk/ids/themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/Terminalwidgets"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Terminalwidgets

Test snippet for Terminalwidgets

Demonstrates: `PutCallWidget`, `putCallWidget`

## Script (script.ts)

```typescript
var onLink = (type, value) => {
    console.log('Link event has been triggered - Type: ', type, 'Value: ', value);
    if (value && value['feed'] && value['ticker'] && window.terminalCallback)
        window.terminalCallback('' + value['feed'] + ',' + value['ticker']);
};
link = new Infront.Link(infront, Infront.LinkAction.Append, [4555], onLink);

var opts = new Infront.PutCallWidgetOptions();
opts.widgetTitle = 'Put / Call';
opts.linkChannels = [4555];
opts.linkAction = Infront.LinkAction.Replace;
opts.showTitle = true;
opts.showTabs = true;
opts.showFutureForward = false;
opts.showUnderlyingChooser = true;
opts.interactionHighlight = true;
opts.showSymbolPanel = true;
opts.showLastInTitle = true;
opts.defaultUnderlying = new Infront.Instrument(17921, 'ALFA');
opts.columns = [
    'TICKER',
    'ASK',
    'BID',
    'LAST',
    'STRIKE_PRICE',
    'EXPIRY_DATE',
    'CHANGE',
    'FULL_NAME',
];
opts.feed = 17923; //Stockholm
//opts.feed = 18179; //Oslo
//opts.feed = 2206; //Eurex
opts.onUnderlyingClicked = function (instrument) {
    alert(instrument.ticker);
};
opts.onRowClicked = function (call, put) {
    alert('Row: ' + call.ticker + ', ' + put.ticker);
};
widget = infront.putCallWidget('#putCall', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="putCall"></div>
    </div>
</div>
```

## Styles (style.css)

```css
html {
    height: 98%;
}

body,
.cell-row {
    height: 100%;
    display: flex;
}

.cell-row {
    flex-grow: 1;
}
```

