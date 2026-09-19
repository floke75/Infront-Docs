---
title: "Framework"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Framework"
description: "Test snippet for Framework"
tags: ["widget", "test", "widget:getConnectionStatus", "widget:getSymbol", "widget:tradingLogin"]
demonstrates: ["getConnectionStatus", "getSymbol", "tradingLogin"]
example_config: {"title":"Framework","description":"Test snippet for Framework","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:getConnectionStatus","widget:getSymbol","widget:tradingLogin"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["../output/sdk/js/CommonFramework-latest.c.js","include/init.js"]}
source_url: "https://docs.infrontfinance.com/tests/Framework"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Framework

Test snippet for Framework

Demonstrates: `getConnectionStatus`, `getSymbol`, `tradingLogin`

## Script (script.ts)

```typescript
infront.tradingLogin(1, 98, 'xx', 'xx');

let content = document.getElementById('value');
let formatter = new Infront.NumberFormatter(3);
infront.getSymbol(
    new Infront.Instrument(18177, 'NHY'),
    (symbol) => {
        console.log('symbol:', symbol.fs.toString(), symbol.inspect());
        let fullName = symbol.getValue(Infront.RealtimeTags.FullName);
        symbol.getValueItem(Infront.RealtimeTags.Last).observe({
            valueUpdated(value) {
                content.innerHTML =
                    fullName +
                    "<span class='cell-test-value'>Last: " +
                    formatter.format(value) +
                    '</span>';
                console.log(fullName, value);
            },
        });
        content.innerHTML =
            fullName +
            "<span class='cell-test-value'>Last: " +
            symbol.getValueFormatted(Infront.RealtimeTags.Last, formatter) +
            '</span>';
    },
    true,
);

infront.getConnectionStatus(
    {
        onData: (response) => {
            let status = response[0];
            console.log(
                'onConnectionStatus:',
                status.pid + ':' + status.sid,
                status.serverDescription,
                status.previousState,
                '=>',
                status.connectionStateDescription,
            );
        },
        onError: () => {},
    },
    true,
);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w4">
        <div class="cell-test-header">
            Framework Only <span style="font-size: 14px">(No Infront UI)</span>
        </div>
        <div class="cell-content" id="content" style="height: inherit">
            <div class="cell-test-item" id="value"></div>
        </div>
    </div>
</div>
```

## Styles (style.css)

```css
.cell-test-header {
    font-size: 24px;
    margin-bottom: 0;
    padding-bottom: 10px;
    position: relative;
}

.cell-test-item {
    font-size: 16px;
    padding: 20px;
    color: #00b0ff;
}

.cell-test-value {
    font-size: 16px;
    padding: 0 20px;
    color: #fff;
}
```

