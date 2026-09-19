---
title: "Company History"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK Examples > Company History"
description: "SDK example demonstrating how to retrieve and display company history, splits, and dividends using the Infront SDK."
tags: ["sdk", "examples", "company-history", "sdk-example", "requests"]
example_config: {"title":"Company History","description":"SDK example demonstrating how to retrieve and display company history, splits, and dividends using the Infront SDK.","modify_date":"2021-06-25T15:55:24","owner":"","tags":["sdk","examples","company-history","sdk-example","requests"]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKExamples/CompanyHistory"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Company History

SDK example demonstrating how to retrieve and display company history, splits, and dividends using the Infront SDK.

## Script (script.ts)

```typescript
var historyElement;
function getCompanyHistory(id, from, to) {
    clearEntries();
    sdk.get(InfrontSDK.history({
        id: id,
        from: from,
        to: to,
        onData: (companyHistory) => {
            const trades = companyHistory.trades;
            console.log(trades);
            let splits = companyHistory.splits;
            let dividends = companyHistory.dividends;
            const lower = trades[0];
            const upper = trades[trades.length - 1];
            while (splits[0]?.date < lower.date) {
                splits.shift();
            }
            while (dividends[0]?.date < lower.date) {
                dividends.shift();
            }
            for (let trade of trades) {
                if (trade.date >= splits[0]?.date && (splits[0]?.date >= lower.date && splits[0]?.date <= upper.date)) {
                    addEntry(splits.shift(), "split");
                }

                if (trade.date >= dividends[0]?.date && (dividends[0]?.date >= lower.date && dividends[0]?.date <= upper.date)) {
                    addEntry(dividends.shift(), "dividend");
                }

                addEntry(trade, "trade");
            }
        }
    }));
}

function append(parentElement, value = undefined, type = "td", field = "innerText") {
    let cell = document.createElement(type);
    if (value !== undefined) {
        cell[field] = value;
    } else {
        cell[field] = "-";
    }
    parentElement.appendChild(cell);
    return cell;
}

function addEntry(entry, type) {
    if (!historyElement) historyElement = document.getElementById("history");
    let row = document.createElement("tr");
    append(row, InfrontUtil.formatDateTime(entry.date, "DD-MM-YYYY"));
    if (type == "trade") {
        append(row, InfrontUtil.formatNumber(entry.open, 2));
        append(row, InfrontUtil.formatNumber(entry.high, 2));
        append(row, InfrontUtil.formatNumber(entry.low, 2));
        append(row, InfrontUtil.formatNumber(entry.last, 2));
        append(row, InfrontUtil.formatNumber(entry.volume, 0));
        append(row, entry.trades);
        append(row, InfrontUtil.formatAndShortenInteger(entry.turnover));
        append(row, InfrontUtil.formatNumber(entry.orderbookMoves, 0));
        append(row, entry.bid);
        append(row, entry.ask);
        append(row, InfrontUtil.formatNumber(entry.onFloorVolume, 0));
    } else if (type == "split") {
        let cell = append(row, "Split: " + entry.factor);
        cell.colSpan = "11";
        cell.className = "center";
        row.style = "background-color: lightpink";
    } else if (type == "dividend") {
        let cell = append(row, `Dividend: ${entry.amount} (${entry.currency})`);
        cell.colSpan = "11";
        cell.className = "center";
        row.style = "background-color: bisque";
    }
    historyElement.insertBefore(row, historyElement.firstChild);
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
    <span>ABB</span>
    <a href="#" onclick="getCompanyHistory({feed: 17921, ticker: 'ABB'})">All</a>
    <a href="#" onclick="getCompanyHistory({feed: 17921, ticker: 'ABB'}, new Date(2015, 0, 1))">From 2015</a>
    <a href="#" onclick="getCompanyHistory({feed: 17921, ticker: 'ABB'}, undefined, new Date(2000, 0, 1))">To 2000</a>
    <a href="#" onclick="getCompanyHistory({feed: 17921, ticker: 'ABB'}, new Date(2021, 2, 25), new Date(2021, 2, 31))">25 to 31 Mar.2021</a>
    <a href="#" onclick="getCompanyHistory({feed: 17921, ticker: 'ABB'}, new Date(1999, 0, 1), new Date(1999, 11, 30))">1999</a>
    <a href="#" onclick="getCompanyHistory({feed: 17921, ticker: 'ABB'}, new Date(2015, 0, 1), new Date(2016, 0, 1))">2015</a>
</div>

<div class="main">
    <h1>Infront SDK company history demo</h1>
    <table>
        <thead>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Last</th>
            <th>Volume</th>
            <th>#Trades</th>
            <th>Turnover</th>
            <th>OB Moves</th>
            <th>Bid</th>
            <th>Ask</th>
            <th>On volume</th>
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

.center {
    text-align: center;
    font-weight: bold;
}
```

