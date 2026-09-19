---
title: "Watch List"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK Examples > Watch List"
description: "SDK example demonstrating how to retrieve and manage watch lists using the Infront SDK."
tags: ["sdk", "examples", "watch-list", "sdk-example", "requests"]
example_config: {"title":"Watch List","description":"SDK example demonstrating how to retrieve and manage watch lists using the Infront SDK.","modify_date":"2021-05-31T07:20:05","owner":"","tags":["sdk","examples","watch-list","sdk-example","requests"]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKExamples/WatchList"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Watch List

SDK example demonstrating how to retrieve and manage watch lists using the Infront SDK.

## Script (script.ts)

```typescript
var unsubscribes;
var watchList;
var unbindTitles;
var unbindContent;

var titleElement;
var infoElement;
var listElement;

function getWatchListTitles() {
    unbindWatchListTitles();
    let options = {
        onData: (data) => {
            console.log("getWatchListTitles:", data);
            let binding = {
                reInit: (items) => {
                    clearTitles();
                    items.forEach((item) => {
                        console.log("WatchList:", item);
                        addTitle(item);
                    });
                },
                itemAdded: (item, index) => {
                    console.log("WatchList added:", item, "at", index);
                    addTitle(item, index);
                },
                itemMoved: (item, fromIndex, toIndex) => {
                    console.log("WatchList moved:", item, fromIndex, toIndex);
                },
                itemRemoved: (item, index) => {
                    console.log("WatchList removed:", item, index);
                    removeTitle(index)
                },
                itemChanged: (symbol, index) => {
                    console.log("WatchList updated:", item, index);
                }
            };
            unbindTitles = data.observe(binding);
        },
        onError: (errorCode, errorMessage) => {
            console.log("Error:", errorCode, errorMessage);
        }
    };
    sdk.get(InfrontSDK.watchListTitles(options));
}

function unbindWatchListTitles() {
    if (unbindTitles) unbindTitles();
    unbindTitles = undefined;
}

function getWatchListContent() {
    unbindWatchListContent();
    let list = getSelectedWatchList();
    if (!list) {
        updateInfo("Select a list then try again.");
        return;
    }
    let options = {
        action: InfrontSDK.WatchListContentAction.LoadWatchList,
        listName: list,
        onData: (data) => {
            let binding = {
                reInit: (symbols) => {
                    clearItems();
                    symbols.forEach((symbol) => {
                        console.log("SymbolId:", symbol);
                        addItem(symbol);
                    });
                },
                itemAdded: (symbol, index) => {
                    console.log("SymbolId added:", symbol, "at", index);
                    addItem(symbol, index);
                },
                itemMoved: (symbol, fromIndex, toIndex) => {
                    console.log("SymbolId moved:", symbol, fromIndex, toIndex);
                },
                itemRemoved: (symbol, index) => {
                    console.log("SymbolId removed:", symbol, index);
                    removeItem(index);
                },
                itemChanged: (symbol, index) => {
                    console.log("SymbolId updated:", symbol, index);
                }
            };
            watchList = data;
            unbindContent = data.observe(binding);
        },
        onError: (errorCode, errorMessage) => {
            console.log("Error:", errorCode, errorMessage);
        }
    };
    sdk.get(InfrontSDK.watchListContent(options));
}

function unbindWatchListContent() {
    if (unbindContent) unbindContent();
}

function saveWatchList() {
    let watchList = [];
    let options = {
        action: InfrontSDK.WatchListContentAction.SaveWatchList,
        listName: "My new watch list",
        symbolId: [
            { feed: 18177, ticker: "DNB" },
            { feed: 18177, ticker: "YAR" },
            { feed: 18177, ticker: "DNO" },

        ],
        onData: (data) => {
            updateInfo("Watch list save: " + (data ? "succeeded" : "failed"));
        },
        onError: (errorCode, errorMessage) => {
            console.log("Error:", errorCode, errorMessage);
        }
    };
    sdk.get(InfrontSDK.watchListContent(options));
}

function addInstrumentToList() {
    let list = getSelectedWatchList();
    if (!list) {
        updateInfo("Select a list then try again.");
        return;
    }
    let options = {
        action: InfrontSDK.WatchListContentAction.AddSymbolId,
        listName: list,
        symbolId: {feed: 18177, ticker: "NHY"},
        onData: (data) => {
            console.log("symbolId", options.symbolId, "added to list", options.listName);
            updateInfo(`Adding symbol: ${options.symbolId.feed}, ${options.symbolId.ticker} to the list '${list}' ${data ? "succeeded" : "failed"}`);
        },
        onError: (errorCode, errorMessage) => {
            console.log("Error:", errorCode, errorMessage);
            updateInfo(`Adding symbol: ${options.symbolId.feed}, ${options.symbolId.ticker} to the list '${list}' failed. ${errorMessage}`);
        }
    };
    sdk.get(InfrontSDK.watchListContent(options));
}

function removeInstrumentFromList() {
    let list = getSelectedWatchList();
    if (!list) {
        updateInfo("Select a list then try again.");
        return;
    }
    let options = {
        action: InfrontSDK.WatchListContentAction.RemoveSymbolId,
        listName: list,
        symbolId: {feed: 18177, ticker: "NHY"},
        onData: (data) => {
            console.log("symbolId", options.symbolId, "deleted from list", options.listName);
            updateInfo(`Deleting symbol: ${options.symbolId.feed}, ${options.symbolId.ticker} from the list '${list}' ${data ? "succeeded" : "failed"}`);
        },
        onError: (errorCode, errorMessage) => {
            console.log("Error:", errorCode, errorMessage);
            updateInfo(`Deleting symbol: ${options.symbolId.feed}, ${options.symbolId.ticker} from the list '${list}' failed. ${errorMessage}`);
        }
    };
    sdk.get(InfrontSDK.watchListContent(options));
}

function deleteWatchList() {
    unbindWatchListContent();
    let list = getSelectedWatchList();
    if (!list) {
        updateInfo("Watch list delete: failed, select a list then try again.");
        return;
    }
    let options = {
        action: InfrontSDK.WatchListContentAction.DeleteWatchList,
        listName: list,
        onData: (data) => {
            updateInfo("Watch list delete: " + (data ? "succeeded" : "failed"));
            clearItems();
        },
        onError: (errorCode, errorMessage) => {
            console.log("Error:", errorCode, errorMessage);
            updateInfo("Watch list delete failed. " + errorMessage);
            clearItems();
        }
    };
    sdk.get(InfrontSDK.watchListContent(options));
}

//I/O
function addTitle(title, index) {
    if (!titleElement) titleElement = document.getElementById("titles");
    let item = document.createElement("option");
    item.innerText = title;
    if (index) {
        titleElement.insertBefore(item, titleElement.children[index]);
    } else {
        titleElement.appendChild(item);
    }
}

function removeTitle(index) {
    if (!titleElement) titleElement = document.getElementById("titles");
    titleElement.removeChild(titleElement.childNodes[index]);
}

function clearTitles() {
    if (!titleElement) titleElement = document.getElementById("titles");
    InfrontUtil.removeAllChildNodes(titleElement);
}

function getSelectedWatchList() {
    if (!titleElement) titleElement = document.getElementById("titles");
    return titleElement.value;
}

function addItem(symbolId, index) {
    if (!listElement) listElement = document.getElementById("list");
    let row = document.createElement("tr");
    
    let cell = document.createElement("td");
    cell.innerText = symbolId.feed || "-";
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = symbolId.ticker || "-";
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = symbolId.extra ? JSON.stringify(symbolId.extra) : "-";
    row.appendChild(cell);
    
    if (index) {
        listElement.insertBefore(row, listElement.children[index]);
    } else {
        listElement.appendChild(row);
    }
}

function removeItem(index) {
    if (!listElement) listElement = document.getElementById("list");
    listElement.removeChild(listElement.childNodes[index]);
}

function clearItems() {
    if (!listElement) listElement = document.getElementById("list");
    InfrontUtil.removeAllChildNodes(listElement);
}

var infoTimer;
function updateInfo(text) {
    if (!infoElement) infoElement = document.getElementById("info");
    infoElement.innerText = text;
    if (infoTimer) {
        clearTimeout(infoTimer);
        infoTimer = undefined;
    }
    infoTimer = setTimeout(()=>{infoElement.innerText = ""}, 3000);
}
```

## Markup (template.html)

```html
<div class="sidenav">
    <h1>Demos</h1>
    <span>Watch Lists</span>
    <a href="#" onclick="getWatchListTitles()">Watch List Titles</a>
    <a href="#" onclick="unbindWatchListTitles()">Unbind Watch List Titles</a>
    <a href="#" onclick="saveWatchList()">Save Watch List</a>
    <a href="#" onclick="deleteWatchList()">Delete Watch List</a>
    <span>Watch List Content</span>
    <a href="#" onclick="getWatchListContent()">Watch List Content</a>
    <a href="#" onclick="addInstrumentToList()">Add Instrument to Watch List</a>
    <a href="#" onclick="removeInstrumentFromList()">Delete Instrument from Watch List</a>
    <a href="#" onclick="unbindWatchListContent()">Unbind Content</a>
</div>
<div class="main">
    <h1>Infront SDK Watch List Test</h1>
    <div id="info"></div>

    <select id="titles"></select>

    <table>
        <thead>
            <th>Feed</th>
            <th>Ticker</th>
            <th>Extra</th>
        </thead>
        <tbody id="list"></tbody>
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

