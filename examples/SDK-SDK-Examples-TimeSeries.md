---
title: "TimeSeries"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK Examples > TimeSeries"
description: "SDK example demonstrating how to retrieve and display time series data using the Infront SDK."
tags: ["sdk", "examples", "time-series", "sdk-example", "requests"]
example_config: {"title":"TimeSeries","description":"SDK example demonstrating how to retrieve and display time series data using the Infront SDK.","modify_date":"2021-05-31T07:19:39","owner":"","tags":["sdk","examples","time-series","sdk-example","requests"]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKExamples/TimeSeries"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# TimeSeries

SDK example demonstrating how to retrieve and display time series data using the Infront SDK.

## Script (script.ts)

```typescript
var historyElement;
var unsubscribe;
var unbind;

function getTimeSeries(id) {
    clearEntries();
    unsubscribe = sdk.get(InfrontSDK.timeSeries({
        id: id,
        daysBack: 3,
        resolution: { unit: "Minute", value: 60 },
        adjustDividends: false,
        adjustSplits: false,
        fields: [InfrontSDK.SymbolField.Bid, InfrontSDK.SymbolField.Ask, InfrontSDK.SymbolField.OrderbookMoves],
        onData: (ts) => {
            unbind = ts.observe({
                reInit: (items) => {
                    clearEntries();
                    for (let item of items) {
                        addEntry(item, true);
                    }
                },
                itemAdded: (item, index) => addEntry(item, true)
            });
        },
        onError: (error) => {
            console.error(error);
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
    append(row, historyElement.children.length + 1);
    append(row, InfrontUtil.formatDateTime(entry.date, "DD-MM-YYYY"));
    append(row, InfrontUtil.formatDateTime(entry.time, "hh:mm:ss"));
    append(row, InfrontUtil.formatNumber(entry.open, 2));
    append(row, InfrontUtil.formatNumber(entry.high, 2));
    append(row, InfrontUtil.formatNumber(entry.low, 2));
    append(row, InfrontUtil.formatNumber(entry.last, 2));
    append(row, InfrontUtil.formatAndShorten(entry.volume));
    append(row, InfrontUtil.formatNumber(entry.bid, 2));
    append(row, InfrontUtil.formatNumber(entry.ask, 2));
    append(row, InfrontUtil.formatAndShorten(entry.turnover));
    append(row, entry.yield);
    append(row, entry.trades);
    append(row, entry.orderbookMoves);

    if (atTop) {
        historyElement.insertBefore(row, historyElement.firstChild);
    } else {
        historyElement.appendChild(row);
    }
}

function clearEntries() {
    if (!historyElement) historyElement = document.getElementById("history");
    InfrontUtil.removeAllChildNodes(historyElement);
    unsub();
}
```

## Markup (template.html)

```html
<div class="sidenav">
    <h1>Demos</h1>
    <a href="#" onclick="getTimeSeries({feed: 18177, ticker: 'DNB'})">DNB/Norway</a>
</div>

<div class="main" id="main">
    <h1>Infront SDK TimeSeries demo</h1>
    <table>
        <thead>
            <th>#</th>
            <th>Date</th>
            <th>Time</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Last</th>
            <th>Volume</th>
            <th>Bid</th>
            <th>Ask</th>
            <th>T/O</th>
            <th>Yield</th>
            <th>Trades #</th>
            <th>OB. Moves</th>
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

