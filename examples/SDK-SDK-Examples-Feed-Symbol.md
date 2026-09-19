---
title: "Feed Symbol"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK Examples > Feed Symbol"
description: "SDK example demonstrating how to retrieve feed and symbol information using the Infront SDK."
tags: ["sdk", "examples", "feed-symbol", "sdk-example", "requests"]
example_config: {"title":"Feed Symbol","description":"SDK example demonstrating how to retrieve feed and symbol information using the Infront SDK.","modify_date":"2022-04-13T09:54:28","owner":"","tags":["sdk","examples","feed-symbol","sdk-example","requests"]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKExamples/FeedSymbol"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Feed Symbol

SDK example demonstrating how to retrieve feed and symbol information using the Infront SDK.

## Script (script.ts)

```typescript
var unsubscribes = [];
var rankingUnsubscribes;
var listElement;

var unsubscribeLogin;
function getLoginData(subscribe) {
    if (subscribe && unsubscribeLogin) {
        unsubscribeLogin();
        unsubscribeLogin = null;
    }

    unsubscribeLogin = sdk.get(InfrontSDK.loginData({
        flags: {
            Features: true,
            LoginDetails: true,
            ConnectionStatus: true,
        },
        subscribe: subscribe,
        onData: (data) => {
            console.log("Login data: ", data);
            let binding = {
                reInit: (items) => { console.log("Connections status: ", items); },
                itemAdded: (item, index) => { console.log("Connection status added: ", item.connectionStateDescription, "at", index); },
                itemMoved: (item, fromIndex, toIndex) => { console.log("Connection status moved: ", item, fromIndex, toIndex); },
                itemRemoved: (item, index) => { console.log("Connection status removed: ", item, index); },
                itemChanged: (item, index) => { console.log("Connection status updated: ", item, index); }
            };
            data.connectionsStatus.observe(binding);
        },
        onError: (error) => {
            console.log("Error:", error);
        },
    }));
}

function getFeedList(listType) {
    sdk.get(InfrontSDK.feedList({
        listType: listType,
        onData: (data => {
            console.log("feedList:", InfrontSDK.FeedListType[listType], data);
        }),
        onError: (error) => {
            console.log("Error:", error);
        }
    }));
}

function getFeedInfo(infoType) {
    let options = {
        infoType: infoType,
        feed: [18177, 17921, 15],
        onData: (data => {
            console.log("getFeedInfo:", InfrontSDK.FeedInfoType[infoType], data);
        }),
        onError: (error) => {
            console.log("Error:", error);
        },
    };
    sdk.get(InfrontSDK.feedInfo(options));
}

function getFeedContents(contentType, chain = null) {
    let options = {
        contentType: contentType,
        feed: 17921,
        ...chain && {
            chainName: chain,
            providerId: 0,
        },
        onData: (data => {
            console.log("getFeedInfo:", InfrontSDK.FeedContentType[contentType], data);
        }),
        onError: (error) => {
            console.log("Error:", error);
        },
    };
    sdk.get(InfrontSDK.feedContents(options));
}

function getFeedSymbolData() {
    clearSymbols();
    let options = {
        contentType: InfrontSDK.FeedContentType.SymbolData,
        feed: 17921,
        onData: (data => {
            let binding = {
                reInit: (symbols) => {
                    symbols.forEach((symbol) => {
                        addSymbol(symbol);
                        console.log("Symbols: ", symbol.get(InfrontSDK.SymbolField.Ticker));
                    });
                },
                itemAdded: (symbol, index) => {
                    addSymbol(symbol, index);
                    console.log("Symbol added: ", symbol.get(InfrontSDK.SymbolField.Ticker), "at", index);
                },
                itemMoved: (symbol, fromIndex, toIndex) => {
                    console.log("Symbol moved: ", symbol.get(InfrontSDK.SymbolField.Ticker), fromIndex, toIndex);
                },
                itemRemoved: (symbol, index) => {
                    console.log("Symbol removed: ", symbol.get(InfrontSDK.SymbolField.Ticker), index);
                },
                itemChanged: (symbol, index) => {
                    console.log("Symbol updated: ", symbol.get(InfrontSDK.SymbolField.Ticker), index);
                }
            };
            data.observe(binding);
        }),
        onError: (error) => {
            console.log("Error:", error);
        },
    };
    sdk.get(InfrontSDK.feedContents(options));
}

function subscribeRanking() {
    let options = {
        contentType: InfrontSDK.FeedContentType.Ranking,
        feed: 17921,
        subscribe: true,
        onData: (data => {

            data.setCompareFunction((itemA, itemB) => {
                let a = itemA.getValue(Infront.RankingField.PCT_CHANGE);
                let b = itemB.getValue(Infront.RankingField.PCT_CHANGE);
                return (a != null ? a : 0) - (b != null ? b : 0);
            });

            let binding = {
                reInit: (ranking) => { ranking.forEach((rankItem) => console.log("Ranking:", rankItem)); },
                itemAdded: (rankItem, index) => { console.log("Ranking added at:", index, rankItem); },
                itemMoved: (rankItem, fromIndex, toIndex) => { if (fromIndex !== toIndex) console.log("Ranking moved from:", fromIndex, "to:", toIndex, rankItem.inspect(), rankItem.symbolData.inspect()); },
                itemRemoved: (rankItem, index) => { console.log("Ranking removed from:", index, rankItem.inspect()); },
                itemChanged: (rankItem, index) => { console.log("Ranking updated at:", index, rankItem.inspect()); }
            };
            data.observe(binding);
        }),
        onError: (error) => {
            console.log("Error:", error);
        },
    };
    rankingUnsubscribes = sdk.get(InfrontSDK.feedContents(options));
}

function unsubscribeRanking() {
    if (rankingUnsubscribes) rankingUnsubscribes();
    rankingUnsubscribes = null;
    console.log("Ranking unsubscribed");
}

function symbolData(subscribe) {
    clearSymbols();
    unsubscribes.push(sdk.get(InfrontSDK.symbolData({
        content: {
            Basic: true,
            HistoricalPerformance: true,
            // CompanyHistory: true,
            CompanyMetaData: true,
            // CompanyFundamentals: true,
            FundDetails: true
        },
        id:
            // { feed: 17921, ticker: "VOLV A" },
            // { feed: 18177, ticker: "DNB" },
            //{ feed: 26, ticker: "BMW" },
            { feed: 2260, ticker: "0P00000AXO" },
        subscribe: subscribe,
        onData: (data) => {
            console.log(`Symbol data, Ticker: ${data.get(InfrontSDK.SymbolField.Ticker)}, Full name: ${data.get(InfrontSDK.SymbolField.FullName)}`);
            addSymbol(data);
        }
    })));
}

function symbolsData() {
    clearSymbols();
    sdk.get(InfrontSDK.symbolData({
        content: {
            "Basic": true,
            CompanyMetaData: true,
            // Static: true,
            // HistoricalPerformance: true,
        },
        id: [
            { feed: 18177, ticker: "DNB" },
            { feed: 18177, ticker: "DNO" },
            { feed: 17921, ticker: "ABB" },
            { feed: 17921, ticker: "VOLV A" },
            { feed: 17921, ticker: "asd A" },
            { isin: "NO0010031479", mic: "XOSL" },
            { companyId: "90103EF" }
        ],
        subscribe: false,
        onData: (symbolList: Infront.ObservableArray<InfrontSDK.SymbolData>) => {
            let binding = {
                reInit: symbols => symbols.forEach((symbol) => addSymbol(symbol)),
                itemAdded: (symbol, index) => addSymbol(symbol, index),
                itemMoved: (symbol, fromIndex, toIndex) => { console.log("Symbol moved: ", symbol.get(InfrontSDK.SymbolField.Ticker), fromIndex, toIndex); },
                itemRemoved: (symbol, index) => { console.log("Symbol removed: ", symbol.get(InfrontSDK.SymbolField.Ticker), index); },
                itemChanged: (symbol, index) => { console.log("Symbol updated: ", symbol.get(InfrontSDK.SymbolField.Ticker), index); }
            };
            symbolList.observe(binding);
        },
        onError: (error) => {

        }
    }));
}

function createSymbolList1() {
    clearSymbols();
    let getSymbol = (feed, ticker) => {
        unsubscribes.push(sdk.get(InfrontSDK.symbolData({
            content: {
                Basic: true,
                CompanyMetaData: true,
            },
            id: { feed: feed, ticker: ticker },
            subscribe: true,
            onData: (symbol) => {
                addSymbol(symbol)
            },
            onError: (error) => {
                console.log("Error", error);
            }
        })));
    }
    getSymbol(18177, "DNB");
    getSymbol(18177, "DNO");
    getSymbol(18177, "KCC");
    getSymbol(18177, "ABT");
    getSymbol(26, "BMW");
    getSymbol(26, "MRK");
    getSymbol(26, "VOW3");
    getSymbol(17921, "ABB");
    getSymbol(17921, "VOLV B");
    getSymbol(17921, "HM B");
}

function createSymbolList2() {
    clearSymbols();
    let getSymbols = (ids) => {
        unsubscribes.push(sdk.get(InfrontSDK.symbolData({
            content: {
                Basic: true,
                CompanyMetaData: true,
            },
            id: ids,
            subscribe: true,
            onData: (symbolList: Infront.ObservableArray<InfrontSDK.SymbolData>) => {
                let binding = {
                    reInit: (symbols) => symbols.forEach((symbol) => addSymbol(symbol)),
                    itemAdded: (symbol, index) => addSymbol(symbol)
                };
                symbolList.observe(binding);
            },
            onError: (error) => {
                console.log("Error", error);
            }
        })));
    }
    let el = document.getElementById("quote-list");
    getSymbols([
        { feed: 18177, ticker: "DNB" },
        { feed: 18177, ticker: "DNO" },
        { feed: 18177, ticker: "KCC" },
        { feed: 18177, ticker: "ABT" },
        { feed: 26, ticker: "BMW" },
        { feed: 26, ticker: "MRK" },
        { feed: 26, ticker: "VOW3" },
        { feed: 17921, ticker: "ABB" },
        { feed: 17921, ticker: "VOLV B" },
        { feed: 17921, ticker: "HM B" },
        { isin: "NO0010031479", mic: "XOSL" },
        { companyId: "90103EF" }
    ]);
}

function symbolDataISIN() {
    clearSymbols();
    unsubscribes.push(sdk.get(InfrontSDK.symbolData({
        content: {
            Basic: true,
            // HistoricalPerformance: true,
            // CompanyHistory: true,
            CompanyMetaData: true,
            // CompanyFundamentals: true
        },
        id: { isin: "NO0010031479", mic: "XOSL" },
        // { isin: "DE0005190003", mic: "XETA" },
        subscribe: true,
        onData: (data) => {
            // console.log("Symbol data: ", data.getValue(Infront.RealtimeTags.FullName));
            // console.log("Symbol data: ", data.inspect());
            addSymbol(data);
        }
    })));
}

function symbolDataCompany() {
    clearSymbols();
    unsubscribes.push(sdk.get(InfrontSDK.symbolData({
        content: {
            Basic: true,
            // HistoricalPerformance: true,
            // CompanyHistory: true,
            CompanyMetaData: true,
            // CompanyFundamentals: true
        },
        id: { companyId: "90103EF" },
        subscribe: true,
        onData: (data) => {
            // console.log("Symbol data: ", data.get(InfrontSDK.SymbolField.Bid));
            addSymbol(data);
        },
        onError: (error) => {
            console.log("Error", error);
        }
    })));
}

//I/O
function addSymbol(symbol, index = null) {
    if (!listElement) listElement = document.getElementById("quote-list");
    let row = document.createElement("tr");
    //Ticker
    let cell = document.createElement("td");
    cell.innerText = symbol.get(InfrontSDK.SymbolField.Ticker);
    cell.title = symbol.get(InfrontSDK.SymbolField.Description) || "";
    row.appendChild(cell);
    //Description
    cell = document.createElement("td");
    cell.innerText = symbol.get(InfrontSDK.SymbolField.FullName);
    row.appendChild(cell);
    //CEO
    cell = document.createElement("td");
    cell.innerText = symbol.get(InfrontSDK.SymbolField.CEO);
    row.appendChild(cell);
    //Change
    let cellChange = document.createElement("td");
    symbol.observe(InfrontSDK.SymbolField.Change, (value) => cellChange.innerText = InfrontUtil.roundFloat(value, 2));
    row.appendChild(cellChange);
    //%
    let cellPct = document.createElement("td");
    symbol.observe(InfrontSDK.SymbolField.ChangePercent, (value) => cellPct.innerText = InfrontUtil.roundFloat(value, 2) + '%');
    row.appendChild(cellPct);
    //Bid
    let cellBid = document.createElement("td");
    symbol.observe(InfrontSDK.SymbolField.Bid, (value) => cellBid.innerText = value);
    row.appendChild(cellBid);
    //Ask
    let cellAsk = document.createElement("td");
    symbol.observe(InfrontSDK.SymbolField.Ask, (value) => cellAsk.innerText = value);
    row.appendChild(cellAsk);
    //Last
    let cellLast = document.createElement("td");
    symbol.observe(InfrontSDK.SymbolField.Last, (value) => cellLast.innerText = value);
    row.appendChild(cellLast);
    //Time
    let cellTime = document.createElement("td");
    symbol.observe(InfrontSDK.SymbolField.TradeTime, (value) => cellTime.innerText = InfrontUtil.formatDateTime(value, "HH:mm:ss"));
    row.appendChild(cellTime);
    //VWAP
    let cellVWAP = document.createElement("td");
    symbol.observe(InfrontSDK.SymbolField.VWAP, (value) => cellVWAP.innerText = value);
    row.appendChild(cellVWAP);

    if (index) {
        listElement.insertBefore(row, listElement.children[index]);
    } else {
        listElement.appendChild(row);
    }
}

function clearSymbols() {
    unsubscribeSymbol();
    if (!listElement) listElement = document.getElementById("quote-list");
    InfrontUtil.removeAllChildNodes(listElement);
}

function unsubscribeSymbol() {
    for (let unsubscribe of unsubscribes) if (unsubscribe) unsubscribe();
    unsubscribes = [];
}
```

## Markup (template.html)

```html
<div class="sidenav">
    <h1>Demos</h1>
    <span>Login</span>
    <a href="#" onclick="getLoginData(false)">Login data</a>
    <a href="#" onclick="getLoginData(true)">Subscribe to login data</a>
    <a href="#" onclick="if (unsubscribeLogin) unsubscribeLogin();">Unsubscribe to login data</a>
    
    <span>Feed lists</span>
    <a href="#" onclick="getFeedList('AccessibleFeeds')">Accessible feeds</a>
    <a href="#" onclick="getFeedList('TradableFeeds')">Tradable feeds</a>
    <a href="#" onclick="getFeedList('Markets')">Markets</a>

    <span>Feed info</span>
    <a href="#" onclick="getFeedInfo('ExchangeCode')">Feed exchange code</a>
    <a href="#" onclick="getFeedInfo('MetaData')">Feed metadata</a>

    <span>Feed contents</span>
    <a href="#" onclick="getFeedContents('SymbolIds')">Symbol ids</a>
    <a href="#" onclick="getFeedSymbolData()">Symbol data</a>
    <a href="#" onclick="getFeedContents('Chains')">Chains</a>
    <a href="#" onclick="getFeedContents('ChainContent', 'OMXS30')">Chain content</a>
    <a href="#" onclick="getFeedContents('Ranking')">Ranking</a>
    <a href="#" onclick="subscribeRanking()">Subscribe ranking</a>
    <a href="#" onclick="unsubscribeRanking()">Unsubscribe ranking</a>

    <span>Symbols</span>
    <a href="#" onclick="symbolData(false)">Symbol data</a>
    <a href="#" onclick="symbolsData()">Symbols data</a>
    <a href="#" onclick="symbolData(true)">Subscribe</a>
    <a href="#" onclick="unsubscribeSymbol()">Unsubscribe</a>
    <a href="#" onclick="createSymbolList1()">Quote list1</a>
    <a href="#" onclick="createSymbolList2()">Quote list2</a>
    <a href="#" onclick="symbolDataISIN()">Symbol data by ISIN</a>
    <a href="#" onclick="symbolDataCompany()">Symbol data by Company</a>
</div>
<div class="main">
    <h1>Infront SDK demo - Login, Feed and Symbol</h1>
    <div id="info"></div>
    <div>Please see console for output.</div>
    <table>
        <thead>
            <th>Symbol</th>
            <th>Description</th>
            <th>CEO</th>
            <th>Change</th>
            <th>%</th>
            <th>Bid</th>
            <th>Ask</th>
            <th>Last</th>
            <th>Time</th>
            <th>VWAP</th>
        </thead>
        <tbody id="quote-list"></tbody>
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

