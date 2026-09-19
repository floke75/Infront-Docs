---
title: "Trading"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "SDK > SDK Examples > Trading"
description: "SDK example demonstrating trading operations using the Infront SDK."
tags: ["sdk", "examples", "trading", "sdk-example", "requests"]
example_config: {"title":"Trading","description":"","modify_date":"2021-09-23T11:17:33","owner":"","tags":[]}
source_url: "https://docs.infrontfinance.com/examples/SDK/SDK/SDKExamples/Trading"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Trading

SDK example demonstrating trading operations using the Infront SDK.

## Script (script.ts)

```typescript
var gateways;
var selectedGateway;
var tradingConnection;
var portfolio;
var unbinds = [];
var unsubscribePortfolio;
var connectionStatusBinding;
var infoTimer;

// Observable arrays:
var positions;
var activeOrders;
var deletedOrders;
var trades;
var netTrades;

//Elements
var infoElement;
var tgwsElement;
var portfoliosElement;

function tradingGateways() {
    clearTGWS();
    clearPortfolios();
    const options = {
        action: "Gateways",
        onData: (data) => {
            console.log("Gateways", data);
            gateways = data;
            for (let i = 0; i < gateways.length; i++) {
                if (i == 0 && selectedGateway == null) selectedGateway = gateways[i];
                addTGW(gateways[i].name);
            }
        },
        onError: (error) => {
            console.log("Error:", error);
            updateInfo(error.description, true);
        }
    };
    sdk.get(InfrontSDK.Trading.connection(options));
}

function tradingLogin() {
    if (!tradingConnection) {
        const options = {
            action: "Login",
            providerId: selectedGateway.providerId,
            credentials: {
                userName: document.getElementById("un").value,
                password: document.getElementById("pw").value,
                pinCode: ""
            },
            onData: (connection) => {
                console.log("success")
                updateInfo("Login successful! See console for server properties.");
                let serverProperties = [];
                Object.keys(InfrontSDK.Trading.ServerProperty).forEach(property => {
                    if (connection.hasServerProperty(property)) {
                        serverProperties.push((property));
                    }
                });
                console.log("ServerProperties:", serverProperties);
                connectionStatusBinding = connection.observeStatus((status) => {
                    console.log("ConnectionStatus:", status);
                });
            },
            onError: (error) => {
                console.log("Error:", error);
                tradingConnection = null;
                updateInfo(error.description, true);
            }
        };
        tradingConnection = sdk.get(InfrontSDK.Trading.connection(options));
    } else {
        updateInfo("You are already logged in.", true);
    }
}

function tradingCancel() {
    if (tradingConnection) {
        const options = {
            action: "CancelLogin",
            providerId: selectedGateway.providerId,
            onData: (message) => {
                updateInfo(message);
            },

            onError: (error) => {
                updateInfo(error.parameters.msg, true);
            }
        };
        sdk.get(InfrontSDK.Trading.connection(options));
    }
    tradingConnection = null;
}

function unbindStatusObserver() {
    if (connectionStatusBinding)
        connectionStatusBinding();
    connectionStatusBinding = null;
}

function tradingLogout() {
    if (tradingConnection) {
        const options = {
            action: "Logout",
            providerId: selectedGateway.providerId,
            onData: (message) => {
                updateInfo(message);
                unbindStatusObserver();
            },

            onError: (error) => {
                updateInfo(error.parameters.msg, true);
                unbindStatusObserver();
            }
        };
        sdk.get(InfrontSDK.Trading.connection(options));
    }
    tradingConnection = null;
}

function unbindAll() {
    unbinds.forEach(unbind => {
        unbind();
    });
    unbinds = [];
}

function portfolioNames() {
    clearPortfolios();
    if (tradingConnection) {
        const options: InfrontSDK.Trading.PortfolioListOptions = {
            providerId: selectedGateway.providerId,
            onData: (portfolios: InfrontSDK.Trading.Portfolio[]) => {
              console.log("PortfolioNames:", portfolios);
              updateInfo("Got portfolio names.");
              portfolios.forEach(item => addPortfolio(item.name));
            },
            onError: (error) => {
                updateInfo(error.parameters.msg, true);
            }
        };
        sdk.get(InfrontSDK.Trading.portfolioList(options));
    } else {
        updateInfo("You are not logged in.", true);
    }
}

function getPortfolio() {
    unbindAll();
    let subscribe = true;
    updateInfo("Getting portfolio: " + getCurrentPortfolio());
    const options: InfrontSDK.Trading.PortfolioOptions = {
        providerId: selectedGateway.providerId,
        subscribe: subscribe,
        portfolioName: getCurrentPortfolio(),
        onData: (data) => {
            portfolio = data;
            updateInfo("Receive portfolio: " + getCurrentPortfolio());
            if (subscribe) {
                getPortfolioValues();
                getPositions();
                getOrders("orders", "EXCHANGE_ORDER", activeOrders);
                getOrders("deleted-orders", "DELETED_ORDER", deletedOrders);
                getTrades();
                getNetTrades();
            }
        },
        onError: (error) => {
            updateInfo(error.parameters.msg, true);
        }
    };
    unsubscribePortfolio = sdk.get(InfrontSDK.Trading.portfolio(options));
}

function getPortfolioValues() {
    clearItems("portfolio-values");
    if (portfolio) {
        for (let value of portfolio.values()) {
            addPortfolioValue(portfolio, value);
        }
    } else {
        updateInfo(tradingConnection ? "No active portfolio" : "Not logged in", true);
    }
}

function getPositions() {
    clearItems("positions");
    if (portfolio) {
        let filter = {
            excludeMarkets: "Loan",
        }
        let binding = {
            reInit: (positions) => {
                positions.forEach((position) => {
                    addPosition(position);
                });
            },
            itemAdded: (position, index) => {
                addPosition(position);
            },
            itemRemoved: (position, index) => {
                removeItem("positions", index);
            },
            itemMoved: (position, fromIndex, toIndex) => {
            },
            itemChanged: (position, index) => {
            }
        };
        positions = portfolio.positions(filter);
        unbinds.push(positions.observe(binding));
    } else {
        updateInfo(tradingConnection ? "No active portfolio" : "Not logged in", true);
    }
}

function getOrders(id, filter, array) {
    clearItems(id);
    if (portfolio) {
        let binding = {
            reInit: (orders) => {
                orders.forEach((order) => {
                    addOrder(id, order);
                });
            },
            itemAdded: (order, index) => {
                addOrder(id, order);
            },
            itemRemoved: (order, index) => {
                removeItem(id, index);
            },
            itemMoved: (order, fromIndex, toIndex) => {
            },
            itemChanged: (order, index) => {
            }
        };
        array = portfolio.orders(filter);
        unbinds.push(array.observe(binding));
    } else {
        updateInfo(tradingConnection ? "No active portfolio" : "Not logged in", true);
    }
}

function getTrades() {
    clearItems("trades");
    if (portfolio) {
        let binding = {
            reInit: (trades) => {
                trades.forEach((trade) => {
                    addTrade(trade);
                });
            },
            itemAdded: (trade, index) => {
                addTrade(trade);
            },
            itemRemoved: (trade, index) => {
                removeItem("trades", index);
            },
            itemMoved: (trade, fromIndex, toIndex) => {
            },
            itemChanged: (trade, index) => {
            }
        };
        trades = portfolio.trades();
        unbinds.push(trades.observe(binding));
    } else {
        updateInfo(tradingConnection ? "No active portfolio" : "Not logged in", true);
    }
}

function getNetTrades() {
    clearItems("net-trades");
    if (portfolio) {
        let binding = {
            reInit: (trades) => {
                trades.forEach((netTrade) => {
                    addNetTrade(netTrade);
                });
            },
            itemAdded: (netTrade, index) => {
                addNetTrade(netTrade);
            },
            itemRemoved: (netTrade, index) => {
                removeItem("net-trades", index);
            },
            itemMoved: (netTrade, fromIndex, toIndex) => {
            },
            itemChanged: (netTrade, index) => {
            }
        };
        netTrades = portfolio.netTrades();
        unbinds.push(netTrades.observe(binding));
    } else {
        updateInfo(tradingConnection ? "No active portfolio" : "Not logged in", true);
    }
}

function toggleCell(arrowId, cellId) {
    let element = document.getElementById(cellId);
    element.hidden = !element.hidden;
    let arrow = document.getElementById(arrowId);
    arrow.className = element.hidden ? "arrow down" : "arrow up";
}

//I/O
function addPortfolioValue(portfolio, item) {
    let listElement = document.getElementById("portfolio-values");
    let row = document.createElement("tr");
    let addRightAligned = (element) => {
        element.style = "text-align: right";
        row.appendChild(element);
    };

    let serverValueIdCell = document.createElement("td");
    serverValueIdCell.innerText = (item.name || "-");
    row.appendChild(serverValueIdCell);

    let serverValueCell = document.createElement("td");
    portfolio.observeValue(item.name, value => {
        if (InfrontUtil.isNumber(value)) {
            value = InfrontUtil.roundToPrecision(value, 2);
        }
        serverValueCell.innerText = value;
    });
    addRightAligned(serverValueCell);

    let serverValueTypeCell = document.createElement("td");
    serverValueTypeCell.innerText = (item.valueType || "-");
    addRightAligned(serverValueTypeCell);
    listElement.appendChild(row);

    let serverValueDescriptionCell = document.createElement("td");
    serverValueDescriptionCell.innerText = (item.description || "-");
    row.appendChild(serverValueDescriptionCell);
    listElement.appendChild(row);
}

function addPosition(position, index?) {
    let listElement = document.getElementById("positions");
    let row = document.createElement("tr");
    let addRightAligned = (element) => {
        element.style = "text-align: right";
        row.appendChild(element);
    };

    let tickerCell = document.createElement("td");
    tickerCell.innerText = (position.get("Ticker") || "-");
    position.get("FullName", value => tickerCell.innerText = value);
    row.appendChild(tickerCell);

    let currencyCell = document.createElement("td");
    currencyCell.innerText = "-";
    position.get("Currency", value => currencyCell.innerText = value);
    row.appendChild(currencyCell);

    let volumeCell = document.createElement("td");
    unbinds.push(position.observe("Volume", value => {
        volumeCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(volumeCell);

    let avgPriceCell = document.createElement("td");
    unbinds.push(position.observe("AveragePrice", value => {
        avgPriceCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(avgPriceCell);

    let lastCell = document.createElement("td");
    unbinds.push(position.observe("Last", value => {
        lastCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(lastCell);

    let investedCell = document.createElement("td");
    unbinds.push(position.observe("Invested", value => {
        investedCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(investedCell);

    let baseInvestedCell = document.createElement("td");
    unbinds.push(position.observe("BaseInvested", value => {
        baseInvestedCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(baseInvestedCell);

    if (index) {
        listElement.insertBefore(row, listElement.children[index]);
    } else {
        listElement.appendChild(row);
    }
}

function addOrder(id, order, index?) {
    let listElement = document.getElementById(id);
    let row = document.createElement("tr");
    let addRightAligned = (element) => {
        element.style = "text-align: right";
        row.appendChild(element);
    };

    let tickerCell = document.createElement("td");
    tickerCell.innerText = (order.get("Ticker") || "-");
    row.appendChild(tickerCell);

    let positionCell = document.createElement("td");
    unbinds.push(order.observe("BuyOrSell", value => {
        positionCell.innerText = value ? value : "-";
    }));
    row.appendChild(positionCell);

    let volumeCell = document.createElement("td");
    unbinds.push(order.observe("Volume", value => {
        volumeCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(volumeCell);

    let priceCell = document.createElement("td");
    unbinds.push(order.observe("OrderPrice", value => {
        priceCell.innerText = value ? value : "-";
    }));
    addRightAligned(priceCell);

    if (id === "orders") {
        let lastCell = document.createElement("td");
        unbinds.push(order.observe("Last", value => {
            lastCell.innerText = value ? value : "-";
        }));
        addRightAligned(lastCell);

        let changeCell = document.createElement("td");
        unbinds.push(order.observe("ChangePercent", value => {
            changeCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
        }));
        addRightAligned(changeCell);
    }

    let orderStatusCell = document.createElement("td");
    unbinds.push(order.observe("OrderStatus", value => {
        orderStatusCell.innerText = value ? value.toLowerCase() : "-";
    }));
    row.appendChild(orderStatusCell);

    if (index) {
        listElement.insertBefore(row, listElement.children[index]);
    } else {
        listElement.appendChild(row);
    }
}

function addTrade(trade, index?) {
    let listElement = document.getElementById("trades");
    let row = document.createElement("tr");
    let addRightAligned = (element) => {
        element.style = "text-align: right";
        row.appendChild(element);
    };

    let orderIdCell = document.createElement("td");
    orderIdCell.innerText = (trade.get("OrderId") || "-");
    row.appendChild(orderIdCell);

    let tickerCell = document.createElement("td");
    tickerCell.innerText = (trade.get("Ticker") || "-");
    row.appendChild(tickerCell);

    let positionCell = document.createElement("td");
    unbinds.push(trade.observe("BuyOrSell", value => {
        positionCell.innerText = value ? value : "-";
    }));
    row.appendChild(positionCell);

    let volumeCell = document.createElement("td");
    unbinds.push(trade.observe("Volume", value => {
        volumeCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(volumeCell);

    let avgPriceCell = document.createElement("td");
    unbinds.push(trade.observe("Price", value => {
        avgPriceCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(avgPriceCell);

    let tradeValueCell = document.createElement("td");
    unbinds.push(trade.observe("TradeValue", value => {
        tradeValueCell.innerText = value ? Math.round(value) : "-";
    }));
    addRightAligned(tradeValueCell);

    if (index) {
        listElement.insertBefore(row, listElement.children[index]);
    } else {
        listElement.appendChild(row);
    }
}

function addNetTrade(netTrade, index?) {
    let listElement = document.getElementById("net-trades");
    let row = document.createElement("tr");
    let addRightAligned = (element) => {
        element.style = "text-align: right";
        row.appendChild(element);
    };

    let tickerCell = document.createElement("td");
    tickerCell.innerText = (netTrade.get("Ticker") || "-");
    row.appendChild(tickerCell);

    let buyVolumeCell = document.createElement("td");
    buyVolumeCell.innerText = (netTrade.get("BuyVolume") || "-");
    unbinds.push(netTrade.observe("BuyVolume", value => {
        buyVolumeCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(buyVolumeCell);

    let buyVwapCell = document.createElement("td");
    unbinds.push(netTrade.observe("BuyVwap", value => {
        buyVwapCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(buyVwapCell);

    let buyValueCell = document.createElement("td");
    unbinds.push(netTrade.observe("BuyValue", value => {
        buyValueCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(buyValueCell);

    let sellVolumeCell = document.createElement("td");
    unbinds.push(netTrade.observe("SellVolume", value => {
        sellVolumeCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(sellVolumeCell);

    let sellVwapCell = document.createElement("td");
    unbinds.push(netTrade.observe("SellVwap", value => {
        sellVwapCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(sellVwapCell);

    let sellValueCell = document.createElement("td");
    unbinds.push(netTrade.observe("SellValue", value => {
        sellValueCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(sellValueCell);

    let netVolumeCell = document.createElement("td");
    unbinds.push(netTrade.observe("NetVolume", value => {
        netVolumeCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(netVolumeCell);

    let netValueCell = document.createElement("td");
    unbinds.push(netTrade.observe("NetValue", value => {
        netValueCell.innerText = value ? InfrontUtil.roundToPrecision(value, 2) : "-";
    }));
    addRightAligned(netValueCell);

    if (index) {
        listElement.insertBefore(row, listElement.children[index]);
    } else {
        listElement.appendChild(row);
    }
}

function removeItem(id, index) {
    let listElement = document.getElementById(id);
    if (listElement.childNodes[index]) listElement.removeChild(listElement.childNodes[index]);
}

function clearItems(id) {
    let listElement = document.getElementById(id);
    InfrontUtil.removeAllChildNodes(listElement);
}

function updateInfo(text, error = false) {
    const statusClass = error ? "notification-message__error" : "notification-message__info";
    if (!infoElement) infoElement = document.getElementById("info");
    infoElement.innerText = text;
    infoElement.parentElement.hidden = false;
    infoElement.className = `notification-message ${statusClass}`;

    if (infoTimer) {
        clearTimeout(infoTimer);
        infoTimer = undefined;
    }
    infoTimer = setTimeout(() => {
        infoElement.innerText = "";
        infoElement.parentElement.hidden = true;
        infoElement.className = `notification-message`;
    }, 3000);
}

function addTGW(title, index) {
    if (!tgwsElement) tgwsElement = document.getElementById("tgws");
    let item = document.createElement("option");
    item.innerText = title;
    if (index) {
        tgwsElement.insertBefore(item, tgwsElement.children[index]);
    } else {
        tgwsElement.appendChild(item);
    }
}

function clearTGWS() {
    if (!tgwsElement) tgwsElement = document.getElementById("tgws");
    InfrontUtil.removeAllChildNodes(tgwsElement);
    selectedGateway = null;
}

function updateSelectedTGW() {
    if (!tgwsElement) tgwsElement = document.getElementById("tgws");
    selectedGateway = gateways[tgwsElement.selectedIndex]
}

function getCurrentPortfolio() {
    if (!portfoliosElement) portfoliosElement = document.getElementById("portfolios");
    return portfoliosElement.value;
}

function addPortfolio(name) {
    if (!portfoliosElement) portfoliosElement = document.getElementById("portfolios");
    let item = document.createElement("option");
    item.innerText = name;
    portfoliosElement.appendChild(item);
}

function clearPortfolios() {
    if (!portfoliosElement) portfoliosElement = document.getElementById("portfolios");
    InfrontUtil.removeAllChildNodes(portfoliosElement);
}
```

## Markup (template.html)

```html
<div class="sidenav" id="sidenav">
    <h1>Demos</h1>
    <div class="sidenav--section">Connection</div>
    <a href="#" class="sidenav--button" onclick="tradingGateways()">Gateways</a>
    <a href="#" class="sidenav--button" onclick="tradingLogin()">Login</a>
    <a href="#" class="sidenav--button" onclick="tradingCancel()">Cancel login</a>
    <a href="#" class="sidenav--button" onclick="tradingLogout()">Logout</a>

    <div class="sidenav--section">Portfolio</div>
    <a href="#" class="sidenav--button" onclick="portfolioNames()">Portfolio list</a>
    <a href="#" class="sidenav--button" onclick="getPortfolio()">Portfolio</a>
    <p></p>
</div>

<div class="main">
    <h1>Infront SDK Trading Test</h1>
    <select id="tgws" onchange="updateSelectedTGW()"></select>
    <input id="un" placeholder="Username"></input>
    <input id="pw" placeholder="Password"></input>
    <select id="portfolios"></select>
    <div style="height: 60px" hidden>
        <div id="info" class="notification-message"></div>
    </div>

    <h3><span class="arrow down" id="arrow-portfolio-values"
            onclick="toggleCell('arrow-portfolio-values', 'cell-portfolio-values')"></span>Portfolio values</h3>

    <div id="cell-portfolio-values" hidden>
        <table>
            <thead class="list-header">
                <th>PortfolioValue</th>
                <th style="text-align: right">Value</th>
                <th>Value Type</th>
                <th>Description</th>
            </thead>
            <tbody id="portfolio-values"></tbody>
        </table>
    </div>

    <h3><span class="arrow up" id="arrow-positions"
            onclick="toggleCell('arrow-positions', 'cell-positions')"></span>Positions
    </h3>
    <div id="cell-positions">
        <table>
            <thead class="list-header">
            <th>Symbol</th>
            <th>Currency</th>
            <th style="text-align: right">Volume</th>
            <th style="text-align: right">Average Price</th>
            <th style="text-align: right">Last</th>
            <th style="text-align: right">Invested</th>
            <th style="text-align: right">Base Invested</th>
            </thead>
            <tbody id="positions"></tbody>
        </table>
    </div>

    <h3><span class="arrow down" id="arrow-orders" onclick="toggleCell('arrow-orders', 'cell-orders')"></span>Active
        Orders</h3>
    <div id="cell-orders" hidden>
        <table>
            <thead class="list-header">
            <th>Symbol</th>
            <th>Buy / Sell</th>
            <th style="text-align: right">Volume</th>
            <th style="text-align: right">Price</th>
            <th style="text-align: right">Last</th>
            <th style="text-align: right">Change %</th>
            <th>Order Status</th>
            </thead>
            <tbody id="orders"></tbody>
        </table>
    </div>

    <h3><span class="arrow down" id="arrow-deleted-orders"
            onclick="toggleCell('arrow-deleted-orders', 'cell-deleted-orders')"></span>Deleted Orders</h3>
    <div id="cell-deleted-orders" hidden>
        <table>
            <thead class="list-header">
                <th>Symbol</th>
                <th>Buy / Sell</th>
                <th style="text-align: right">Volume</th>
                <th style="text-align: right">Price</th>
                <th>Order Status</th>
            </thead>
            <tbody id="deleted-orders"></tbody>
        </table>
    </div>

    <h3><span class="arrow down" id="arrow-trades" onclick="toggleCell('arrow-trades', 'cell-trades')"></span>Trades
    </h3>
    <div id="cell-trades" hidden>
        <table>
            <thead class="list-header">
                <th>Order Id</th>
                <th>Symbol</th>
                <th>Buy / Sell</th>
                <th style="text-align: right">Volume</th>
                <th style="text-align: right">Average Price</th>
                <th style="text-align: right">Value</th>
            </thead>
            <tbody id="trades"></tbody>
        </table>
    </div>

    <h3><span class="arrow down" id="arrow-net-trades"
            onclick="toggleCell('arrow-net-trades', 'cell-net-trades')"></span>Net Trades</h3>
    <div id="cell-net-trades" hidden>
        <table>
            <thead class="list-header">
                <th>Symbol</th>
                <th style="text-align: right">Buy Volume</th>
                <th style="text-align: right">Buy VWAP</th>
                <th style="text-align: right">Buy Value</th>
                <th style="text-align: right">Sell Volume</th>
                <th style="text-align: right">Sell VWAP</th>
                <th style="text-align: right">Sell Value</th>
                <th style="text-align: right">Net Volume</th>
                <th style="text-align: right">Net Value</th>
            </thead>
            <tbody id="net-trades"></tbody>
        </table>
    </div>
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

h3 {
    padding-top: 15px;
}

.list-header {
    border-bottom: 1px solid #ccc;
    padding-bottom: 1px;
}

.arrow {
    margin: 0 10px;
    border: solid #777;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 4px;
}

.right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
}

.left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
}

.up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
}

.down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}

select {
    height: 24px;
    padding-top: 1px;
}

.notification-message {
    padding: 20px;
    display: inline-block;
    border-radius: 5px;
    width: -webkit-fill-available;
}

.notification-message__info {
    background-color: #c6ecbe;
    border: solid 1px #789c7a;
}

.notification-message__error {
    background-color: #cc000042;
    border: solid 1px #c00;
}
```

