---
title: "Trades"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK Examples > Trades"
description: "SDK example demonstrating how to retrieve and display trades using the Infront SDK."
tags: ["sdk", "examples", "trades", "sdk-example", "requests"]
example_config: {"title":"Trades","description":"SDK example demonstrating how to retrieve and display trades using the Infront SDK.","modify_date":"2021-05-31T07:20:02","owner":"","tags":["sdk","examples","trades","sdk-example","requests"]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKExamples/Trades"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Trades

SDK example demonstrating how to retrieve and display trades using the Infront SDK.

## Script (script.ts)

```typescript
var lastAddedTrade;
var lastSymbolId;
var finished = true;
var historyElement;
var unsubscribe;
var unbind;

function getTrades(id) {
    lastSymbolId = id;
    unsub();
    unsubscribe = sdk.get(InfrontSDK.trades({
        id: id,
        //limit: 50,
        subscribe: true,
        onData: (trades) => {
            unbind = trades.observe({
                reInit: (trades) => {
                    clearEntries();
                    for (let trade of trades) {
                        addEntry(trade);
                        lastAddedTrade = trade;
                    }
                },
                itemAdded: (trade, index) => addEntry(trade, true)
            });
        },
        onError: (error) => {
            console.error(error);
        }
    }));
}

function getMore() {
    if (!lastAddedTrade || !lastSymbolId || !finished) return;
    finished = false;
    sdk.get(InfrontSDK.trades({
        id: lastSymbolId,
        idHint: lastAddedTrade.sequenceNum,
        limit: 50,
        onData: (trades) => {
            let localUnbind = trades.observe({
                reInit: (trades) => {
                    for (let trade of trades) {
                        addEntry(trade);
                        lastAddedTrade = trade;
                    }
                    if (trades.length) {
                        finished = true;
                        if (localUnbind) localUnbind();
                    }
                }
            });
        }
    }));
}

function unsub() {
    if (unsubscribe) unsubscribe();
    unsubscribe = null;

    if (unbind) unbind();
    unbind = null;
}

function append(parentElement, value = undefined, type = "td", field = "innerText") {
    let cell = document.createElement(type);
    if (value !== undefined && value !== null) {
        cell[field] = value;
    } else {
        cell[field] = "-";
    }
    parentElement.appendChild(cell);
    return cell;
}

function addEntry(entry, atTop = false) {
    if (!historyElement) historyElement = document.getElementById("history");
    let row = document.createElement("tr");
    append(row, entry.sequenceNum);
    append(row, InfrontUtil.formatDateTime(entry.dateTime, "DD-MM-YYYY"));
    append(row, InfrontUtil.formatDateTime(entry.dateTime, "hh:mm:ss"));
    append(row, entry.internalId);
    append(row, entry.volume);
    append(row, entry.price);
    append(row, entry.bid);
    append(row, entry.ask);
    append(row, entry.mid != null ? InfrontUtil.formatNumber(entry.mid, 2): null);
    append(row, entry.value != null ? InfrontUtil.formatNumber(entry.value, 2): null);
    append(row, entry.spreadPercentage != null ? InfrontUtil.formatPercent(entry.spreadPercentage): null);
    append(row, entry.accumulatedVolume);
    append(row, entry.yield);
    append(row, entry.market);
    append(row, entry.buyer);
    append(row, entry.seller);
    append(row, entry.type);
    append(row, entry.types.join(", "));
    append(row, entry.esmaTypes).title = entry.esmaTypesDescription.join("\n");
    append(row, entry.hitterTaker);
    append(row, entry.actualTradeDate);
    append(row, entry.actualTradeTime);
    append(row, entry.hasRealTimeTrade);
    append(row, entry.analysis);
    
    if (atTop) {
        historyElement.insertBefore(row, historyElement.firstChild);
    } else {
        historyElement.appendChild(row);
    }
}

function clearEntries() {
    if (!historyElement) historyElement = document.getElementById("history");
    InfrontUtil.removeAllChildNodes(historyElement);
}
```

## Markup (template.html)

```html
<div class="sidenav">
    <h1>Demos</h1>
    <a href="#" onclick="getTrades({feed: 18177, ticker: 'OSEBX'})">Oslo Børs</a>
    <a href="#" onclick="getTrades({feed: 18177, ticker: 'DNB'})">DNB/Norway</a>
    <a href="#" onclick="getTrades({feed: 18177, ticker: '2020'})">2020/Norway</a>
    <a href="#" onclick="getTrades({feed: 17921, ticker: 'BIOA B'})">BIOA B/Sweden</a>
    <a href="#" onclick="getTrades({feed: 6700, ticker: '000001'})">00001/China</a>
    <a href="#" onclick="getTrades({feed: 7700, ticker: '10'})">10/Hong Kong</a>
</div>

<div class="main" id="main">
    <h1>Infront SDK Trades demo</h1>
    <button onclick="getMore()">More</button>
    <table>
        <thead>
            <th>#</th>
            <th>Date</th>
            <th>Time</th>
            <th>Internal id</th>
            <th>Volume</th>
            <th>Price</th>
            <th>Bid</th>
            <th>Ask</th>
            <th>Mid</th>
            <th>Value</th>
            <th>Spread %</th>
            <th>Acc. Volume</th>
            <th>Yield</th>
            <th>Market</th>
            <th>Buyer</th>
            <th>Seller</th>
            <th>Type</th>
            <th>Types</th>
            <th>ESMA Types</th>
            <th>Hitter or taker</th>
            <th>Actual trade date</th>
            <th>Actual trade time</th>
            <th>HasRealTimeTrade</th>
            <th>Analysis</th>
        </thead>
        <tbody id="history"></tbody>
    </table>
</div>
```

## Styles (style.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

/* The sidebar menu */
.sidenav {
    height: 100%;
    /* Full-height: remove this if you want "auto" height */
    width: 160px;
    /* Set the width of the sidebar */
    position: fixed;
    /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1;
    /* Stay on top */
    top: 0;
    /* Stay at the top */
    left: 0;
    background-color: #111;
    /* Black */
    overflow-x: hidden;
    /* Disable horizontal scroll */
    padding-top: 20px;
    color: #f1f1f1;
    padding: 3px 8px 6px 16px;
}

/* The navigation menu links */

.sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 21px;
    color: #818181;
    display: block;
}

/* When you mouse over the navigation links, change their color */

.sidenav a:hover {
    color: #f1f1f1;
}

/* Style page content */

.main {
    margin-left: 200px;
    /* Same as the width of the sidebar */
    padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */

@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }
    .sidenav a {
        font-size: 18px;
    }
}

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body {
    font-family: Roboto, sans-serif;
}

html, body {
    height: 100%;
    max-height: 100%;
}

input, button {
    font-family: inherit;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

#free-text-search {
    padding: 6px 8px 6px 4px;
    width: 136px;
}

.news-container {
    height: 100%;
    margin: auto;
    padding: 10px;
}

.list {
    width: 75%;
    float: left;
    overflow-y: scroll;
    height: 720px;
}

.story {
    margin-left: 75%;
    padding-left: 10px;
    background-color: #f2f2f2;
}

.align-left {
    float: left;
}

.align-right {
    float: right;
}

.clickable {
    cursor: pointer;
}

.disabled {
    pointer-events: none;
}

.col-50 {
    width: 50%;
    float: left;
}

.tooltip {
    visibility: hidden;
    width: auto;
    background-color: #555;
    color: #fff;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
    display: inline-block;

}

.tooltip::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 10%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #555 transparent;
}

.tooltip-hover {
    visibility: visible;
    opacity: 0.9;
}
```

