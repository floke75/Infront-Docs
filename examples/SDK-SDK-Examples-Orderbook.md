---
title: "Orderbook"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK Examples > Orderbook"
description: "SDK example demonstrating how to retrieve and display orderbook data using the Infront SDK."
tags: ["sdk", "examples", "orderbook", "sdk-example", "requests"]
example_config: {"title":"Orderbook","description":"SDK example demonstrating how to retrieve and display orderbook data using the Infront SDK.","modify_date":"2021-05-31T07:19:56","owner":"","tags":["sdk","examples","orderbook","sdk-example","requests"]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKExamples/Orderbook"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Orderbook

SDK example demonstrating how to retrieve and display orderbook data using the Infront SDK.

## Script (script.ts)

```typescript
var unsubscribes;
var bidsElement;
var asksElement;
var bidRowElements = [];
var askRowElements = [];
var tooltipElement;

function getOrderbook(ticker, subscribe) {
    unsubscribe();
    unsubscribes = sdk.get(InfrontSDK.orderbook({
        id: { feed: 18177, ticker: "DNB" },
        subscribe: subscribe === true,
        onData: (orderbook) => {
            orderbook.bidLevels.observe({
                reInit: (levels) => {
                    clearBids();
                    for (let level of levels) addLevel(level, true, orderbook.hasDetails);
                },
                itemAdded: (level, index) => addLevel(level, true, orderbook.hasDetails),
                itemChanged: (level, index) => addLevel(level, true, orderbook.hasDetails)
            }),
                orderbook.askLevels.observe({
                    reInit: (levels) => {
                        clearAsks();
                        for (let level of levels) addLevel(level, false, orderbook.hasDetails);
                    },
                    itemAdded: (level, index) => addLevel(level, false, orderbook.hasDetails),
                    itemChanged: (level, index) => addLevel(level, false, orderbook.hasDetails)
                });
        }
    }));
}

function unsubscribe() {
    if (unsubscribes) unsubscribes();
    unsubscribes = undefined;
    clearOB();
}

function appendTD(parentElement, value = undefined, field = "innerText") {
    let type = "td";
    let cell = document.createElement(type);
    if (value !== undefined) cell[field] = value;
    parentElement.appendChild(cell);
    return cell;
}

function setupTooltip(rowElement, level) {
    if (!tooltipElement) tooltipElement = document.getElementById("tooltip");
    rowElement.onmouseover = () => {
        InfrontUtil.addClassName(tooltipElement, "tooltip-hover");
        let orders = level.orders;
        let detailedOrders = orders.length ? "Orders" : "Order details is not available";
        let separator = "\n";
        let count = 1;
        for (let order of orders) {
            detailedOrders += `\n ${count++}. ${order.id}, ${order.market}, ${order.volume}`;
            if (order.time) detailedOrders += `at: ${order.time}`;
        }
        tooltipElement.innerText = detailedOrders;
        let offset = rowElement.getBoundingClientRect();
        tooltipElement.style.top = (offset.top + offset.height) + "px";
        tooltipElement.style.left = offset.left + "px";
    };
    rowElement.onmouseout = () => {
        InfrontUtil.removeClassName(tooltipElement, "tooltip-hover");
    };
};

function addLevel(level, isBid, hasOrders) {
    let element;
    let elementArr;
    if (isBid) {
        if (!bidsElement) bidsElement = document.getElementById("bids");
        element = bidsElement;
        elementArr = bidRowElements;
    } else {
        if (!asksElement) asksElement = document.getElementById("asks");
        element = asksElement;
        elementArr = askRowElements;
    }
    if (level.level <= elementArr.length) {
        elementArr[level.level - 1][0].innerText = isBid ? level.ordersCount : level.price;
        elementArr[level.level - 1][1].innerText = level.volume;
        elementArr[level.level - 1][2].innerText = isBid ? level.price : level.ordersCount;
    } else {
        let row = document.createElement("tr");
        elementArr.push([
            appendTD(row, (isBid ? level.ordersCount : level.price) || "-"),
            appendTD(row, level.volume || "-"),
            appendTD(row, (isBid ? level.price : level.ordersCount) || "-")
        ]);
        if (hasOrders) setupTooltip(row, level);
        element.appendChild(row);
    }
}

function clearBids() {
    if (!bidsElement) bidsElement = document.getElementById("bids");
    InfrontUtil.removeAllChildNodes(bidsElement);
    bidRowElements = [];
}

function clearAsks() {
    if (!asksElement) asksElement = document.getElementById("asks");
    InfrontUtil.removeAllChildNodes(asksElement);
    askRowElements = [];
}

function clearOB() {
    clearBids();
    clearAsks();
}
```

## Markup (template.html)

```html
<div class="sidenav">
    <h1>Demos</h1>
    <a href="#" onclick="getOrderbook({feed: 18177, ticker: 'DNB'})">Orderbook</a>
    <a href="#" onclick="getOrderbook({feed: 18177, ticker: 'DNB'}, true)">Subscribe</a>
    <a href="#" onclick="unsubscribe()">Unsubscribe</a>
</div>

<div class="main">
    <h1>Infront SDK Orderbook demo</h1>
    <table class="col-50">
        <col>
        <colgroup span="3"></colgroup>
        <thead>
            <th colspan="3" scope="colgroup">Bid</th>
        </thead>
        <thead>
            <th scope="col">Orders</th>
            <th scope="col">Size</th>
            <th scope="col">Bid</th>
        </thead>
        <tbody id="bids"></tbody>
    </table>
    <table class="col-50">
        <col>
        <colgroup span="3"></colgroup>
        <thead>
            <th colspan="3" scope="colgroup">Ask</th>
        </thead>
        <thead>
            <th scope="col">Ask</th>
            <th scope="col">Size</th>
            <th scope="col">Orders</th>
        </thead>
        <tbody id="asks"></tbody>
    </table>
</div>
<div><span class="tooltip" id="tooltip"></span></div>
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

