---
title: "Search"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK Examples > Search"
description: "SDK example demonstrating how to search for symbols and issuers using the Infront SDK."
tags: ["sdk", "examples", "search", "sdk-example", "requests"]
example_config: {"title":"Search","description":"SDK example demonstrating how to search for symbols and issuers using the Infront SDK.","modify_date":"2022-03-30T20:15:56","owner":"","tags":["sdk","examples","search","sdk-example","requests"]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKExamples/Search"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Search

SDK example demonstrating how to search for symbols and issuers using the Infront SDK.

## Script (script.ts)

```typescript
var unbind;
function symbolsFromISIN(isin) {
    clearList();
    let startTime = new Date();
    sdk.get(InfrontSDK.symbolSearch({
        parameters: {
            ISIN: isin
        },
        fields: [
            "Feed",
            "Ticker",
            "FullName",
            "ISIN",
            "SymbolType",
            "UnderlyingFeed",
            "UnderlyingTicker",
            "UnderlyingDescr",
            "Issuer",
            "IssuerFullName"
        ],
        limit: 100,
        onData: (results) => {
            unbind = results.observe({ itemAdded: (item, index) => {
                let endTime = new Date();
                updateSearchInfo(endTime - startTime, results.length());
                addRow(item);
            } });
        }
    }));
}

function underlyingSymbols(feed, issuer) {
    clearList();
    let fields = [
        InfrontSDK.SymbolField.UnderlyingFeed,
        InfrontSDK.SymbolField.UnderlyingTicker,
        InfrontSDK.SymbolField.UnderlyingDescr,
    ];
    if (issuer) fields = fields.concat([InfrontSDK.SymbolField.Issuer, InfrontSDK.SymbolField.IssuerFullName]);

    let startTime = new Date();
    sdk.get(InfrontSDK.symbolSearch({
        parameters: {
            Feed: feed,
            Issuer: issuer
        },
        fields: fields,
        limit: -1,
        onData: (results) => {
            unbind = results.observe({ itemAdded: (item, index) => {
                let endTime = new Date();
                updateSearchInfo(endTime - startTime, results.length());
                addRow(item);
            } });
        }
    }));
}

function issuers(feed, underlyingTicker) {
    clearList();
    let fields = ["Issuer", "IssuerFullName"];
    if (underlyingTicker) fields = fields.concat(["UnderlyingFeed", "UnderlyingTicker", "UnderlyingDescr"]);
    let startTime = new Date();
    sdk.get(InfrontSDK.symbolSearch({
        parameters: {
            Feed: feed,
            UnderlyingTicker: underlyingTicker
        },
        fields: fields,
        limit: -1,
        onData: (results) => {
            unbind = results.observe({ itemAdded: (item, index) => {
                let endTime = new Date();
                updateSearchInfo(endTime - startTime, results.length());
                addRow(item);
            } });
        }
    }));
}

function expiries(feed, underlyingFeed, underlyingTicker) {
    clearList();
    let startTime = new Date();
    sdk.get(InfrontSDK.symbolSearch({
        parameters: {
            Feed: feed,
            UnderlyingFeed: underlyingFeed,
            UnderlyingTicker: underlyingTicker
        },
        fields: [
            "UnderlyingFeed",
            "UnderlyingTicker",
            "UnderlyingDescr",
            "Expiry"
        ],
        limit: -1,
        onData: (results) => {
            unbind = results.observe({ itemAdded: (item, index) => {
                let endTime = new Date();
                updateSearchInfo(endTime - startTime, results.length());
                addRow(item);
            } });
        }
    }));
}

function options(feed, underlyingFeed, underlyingTicker, isCall) {
    clearList();
    let startTime = new Date();
    sdk.get(InfrontSDK.symbolSearch({
        parameters: {
            Feed: feed,
            UnderlyingFeed: underlyingFeed,
            UnderlyingTicker: underlyingTicker,
            SymbolSubType: isCall ? InfrontSDK.SymbolSubType.OptionCall : InfrontSDK.SymbolSubType.OptionPut
        },
        limit: -1,
        onData: (results) => {
            unbind = results.observe({ itemAdded: (item, index) => {
                let endTime = new Date();
                updateSearchInfo(endTime - startTime, results.length());
                addRow(item);
            } });
        }
    }));
}

function freeTextSearch(text, searchAll) {
    clearList();
    let startTime = new Date();
    let params;
    if (searchAll) {
        params = text;
    } else {
        params = {
            SearchFreeText: text,
            SearchFreeTextFields: ["Ticker"]
        };
    }
    sdk.get(InfrontSDK.symbolSearch({
        parameters: params,
        limit: -1,
        onData: (results) => {
            unbind = results.observe({ itemAdded: (item, index) => {
                let endTime = new Date();
                updateSearchInfo(endTime - startTime, results.length());
                addRow(item);
            } });
        }
    }));
}

function feedSymbols(feed) {
    clearList();
    let startTime = new Date();
    sdk.get(InfrontSDK.symbolSearch({
        parameters: {
            Feed: feed,
            SymbolType: InfrontSDK.SymbolType.Index
        },
        limit: -1,
        onData: (results) => {
            unbind = results.observe({ itemAdded: (item, index) => {
                let endTime = new Date();
                updateSearchInfo(endTime - startTime, results.length());
                addRow(item);
            } });
        }
    }));
}

var listElement;
var infoElement;
function updateSearchInfo(time, count) {
    if (!infoElement) infoElement = document.getElementById("info");
    infoElement.innerText = `Found: ${count} item(s). Search took: ${time} ms.`;
}

function addRow(result) {
    if (!listElement) listElement = document.getElementById("results");
    let row = document.createElement("tr");

    let cell = document.createElement("td");
    cell.innerText = result.get("Feed") || "-";
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = result.get("Ticker") || "-";
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = result.get("FullName") || "-";
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = result.get("SymbolType") || "-";
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = result.get("ISIN") || "-";
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = result.get("UnderlyingFeed") || "-";
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = result.get("UnderlyingTicker") || "-";
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = result.get("UnderlyingDescr") || "-";
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = result.get("Issuer") || "-";
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = result.get("IssuerFullName") || "-";
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = result.get("Expiry") ? InfrontUtil.formatDateTime(InfrontUtil.DateFromDateNu(result.get("Expiry")), "DD-MM-YYYY") || "-" : "-";
    row.appendChild(cell);

    listElement.appendChild(row);
}

function clearList() {
    if (!listElement) listElement = document.getElementById("results");
    InfrontUtil.removeAllChildNodes(listElement);
    if (unbind) unbind();
    unbind = null;
}
```

## Markup (template.html)

```html
<div class="sidenav">
    <h1>Demos</h1>
    <input id="free-text-search" onchange="freeTextSearch(document.getElementById('free-text-search').value)">
    <a href="#" onclick="freeTextSearch(document.getElementById('free-text-search').value, true)">Search any field</a>
    <a href="#" onclick="symbolsFromISIN('CH0012221716')">ISIN</a>
    <a href="#" onclick="underlyingSymbols(17942)">Underlying symbols</a>
    <a href="#" onclick="underlyingSymbols(17942, 'SGE')">Underlying symbols for issuer</a>
    <a href="#" onclick="issuers(17942)">Issuers</a>
    <a href="#" onclick="issuers(17942, 'NOKIA')">Issuers for underlying symbol</a>
    <a href="#" onclick="issuers(17942, null)">Issuers with no underlying symbol</a>
    <a href="#" onclick="expiries(17942)">Expiry dates</a>
    <a href="#" onclick="expiries(17942, 17921, 'ABB')">Expiry dates for under.</a>
    <a href="#" onclick="options(17923, 17921, 'ABB')">Options - Put</a>
    <a href="#" onclick="options(17923, 17921, 'ABB', true)">Options - Call</a>
    <a href="#" onclick="feedSymbols(18177)">All symbols</a>
</div>

<div class="main">
    <h1>Infront SDK search demo</h1>
    <div id="info"></div>
    <table>
        <thead>
            <th>Feed</th>
            <th>Ticker</th>
            <th>Desc</th>
            <th>Type</th>
            <th>ISIN</th>
            <th>Under feed</th>
            <th>Under ticker</th>
            <th>Under desc</th>
            <th>Issuer</th>
            <th>Issuer desc</th>
            <th>Expiry</th>
        </thead>
        <tbody id="results"></tbody>
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

