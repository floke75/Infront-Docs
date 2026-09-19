---
title: "Orderbookmbo"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Orderbookmbo"
description: "Test snippet for Orderbookmbo"
tags: ["widget", "test", "widget:CommunicationStatusWidget", "widget:OrderbookWidget", "widget:communicationStatus", "widget:loginServer", "widget:orderbookWidget"]
demonstrates: ["CommunicationStatusWidget", "OrderbookWidget", "communicationStatus", "loginServer", "orderbookWidget"]
example_config: {"title":"Orderbookmbo","description":"Test snippet for Orderbookmbo","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:CommunicationStatusWidget","widget:OrderbookWidget","widget:communicationStatus","widget:loginServer","widget:orderbookWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Orderbookmbo"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Orderbookmbo

Test snippet for Orderbookmbo

Demonstrates: `CommunicationStatusWidget`, `OrderbookWidget`, `communicationStatus`, `loginServer`, `orderbookWidget`

## Script (script.ts)

```typescript
Infront.DEBUG_CONFIG_TO_FILE = true;
Infront.DEBUG_REQUESTS = true;
Infront.DEBUG_UNHANDLED_TAGS = true;
Infront.DEBUG_ORDERBOOK_TAGS = true;

let title = document.getElementById('title');
title.innerText = 'Login user: ' + infront.infront.loginServer().login;

var opts = new Infront.OrderbookWidgetOptions();
//opts.layout = Infront.OrderbookRowLayout.COMPACT;
opts.levels = 10;
opts.titleSettings.showTicker = true;
opts.instrument = new Infront.Instrument(17921, 'VOLV B');
opts.showSearchWidget = true;
infront.orderbookWidget('#orderbook1', opts);

// opts = new Infront.OrderbookWidgetOptions();
// opts.layout = Infront.OrderbookRowLayout.COMPACT;
// opts.levels = 10;
// opts.titleSettings.showTicker = true;
// opts.instrument = new Infront.Instrument(17921, "ABB");
// opts.showSearchWidget = true;
// infront.orderbookWidget("#orderbook2", opts);

opts = new Infront.CommunicationStatusWidgetOptions();
infront.communicationStatus('comm', opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <h1 id="title">Login user: not logged in</h1>
    <div class="cell cell--w12">
        <div class="cell-content" id="orderbook1"></div>
    </div>
    <!-- <div class="cell cell--w6">
            <div id="orderbook2" class="cell-content"></div>
        </div> -->
</div>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="comm"></div>
    </div>
</div>
<div id="tooltipPlceholder"></div>
```

## Styles (style.css)

```css
.tooltiptext {
    visibility: hidden;
    width: auto;
    background-color: #555;
    color: #fff;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    /* margin-left: -60px; */
    opacity: 0;
    transition: opacity 0.3s;
    display: inline-block;
}

.tooltiptext::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 10%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #555 transparent;
}

.tooltiptext-hover {
    visibility: visible;
    opacity: 0.9;
}
```

