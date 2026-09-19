---
title: "Topentitieswidgets IPT"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Topentitieswidgets IPT"
description: "Test snippet for TopentitieswidgetsIpt"
tags: ["widget", "test", "widget:TopHoldingsWidget", "widget:TopInvestorsWidget", "widget:topHoldingsWidget", "widget:topInvestorsWidget"]
demonstrates: ["TopHoldingsWidget", "TopInvestorsWidget", "topHoldingsWidget", "topInvestorsWidget"]
example_config: {"title":"Topentitieswidgets IPT","description":"Test snippet for TopentitieswidgetsIpt","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:TopHoldingsWidget","widget:TopInvestorsWidget","widget:topHoldingsWidget","widget:topInvestorsWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["../languages/da.js","../languages/fi.js","../languages/no.js","../languages/sv.js"],"styles":["../themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/TopentitieswidgetsIpt"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Topentitieswidgets IPT

Test snippet for TopentitieswidgetsIpt

Demonstrates: `TopHoldingsWidget`, `TopInvestorsWidget`, `topHoldingsWidget`, `topInvestorsWidget`

## Script (script.ts)

```typescript
var topInvestorOptions = new Infront.TopInvestorsWidgetOptions();
var topHoldingsOptions = new Infront.TopHoldingsWidgetOptions();

topInvestorOptions.id = 'iptTopInvestors';
topInvestorOptions.instrument = getInstrumentFromQueryParams();
topInvestorOptions.widgetTitle = null;
topInvestorOptions.enableChangeStatusColors = true;
topInvestorOptions.enableFixedHeader = true;
topInvestorOptions.sortable = true;
topInvestorOptions.showSearchWidget = true;
topInvestorOptions.percentageOwnershipIndicatorsByFeed = [
    new Infront.PercentageOwnershipIndicators(18177, [33, 50]), // Oslo
    new Infront.PercentageOwnershipIndicators(18199, [33, 50]), // Oslo OTC
    new Infront.PercentageOwnershipIndicators(5070, [50]), // Johannesburg
];
topInvestorOptions.searchBoxFeeds = [18177, 18199, 5070];
topInvestorOptions.previousGroupingColumns = [
    'MAX_RANK',
    'INVESTOR',
    'MAX_NUM_SHARES',
    getCombinedMaxOwnershipColumn(),
    'MAX_VALUE',
    'POSITIONS',
];
topInvestorOptions.currentGroupingColumns = [
    'RANK',
    'INVESTOR',
    getNumSharesColumnOverride(),
    getCombinedOwnershipColumn(),
    'VALUE',
    getNumSharesChangeColumnOverride(),
    getPctNumSharesChangeColumnOverride(),
    'POSITIONS',
];
topInvestorOptions.newGroupingColumns = [
    'RANK',
    'INVESTOR',
    getNumSharesColumnOverride(),
    getCombinedOwnershipColumn(),
    'VALUE',
    'POSITIONS',
];
topInvestorOptions.onInvestorClicked = function (
    feed,
    investorId,
    grouping,
    period,
    startDate,
    stopDate,
) {
    topHoldingsOptions.feed = feed;
    topHoldingsOptions.investorId = investorId;
    topHoldingsOptions.grouping = grouping;
    topHoldingsOptions.currentPeriod = period;
    topHoldingsOptions.startDate = startDate;
    topHoldingsOptions.stopDate = stopDate;
    topHoldingsOptions.overridePeriodWithPersistedState = false; // Use the setting from the top investors.
    topHoldingsWidget.modify(topHoldingsOptions);
    selectTab(TOP_HOLDINGS_TAB_ID);
    setTabText(TOP_HOLDINGS_TAB_ID, grouping);
};
topInvestorOptions.onGroupingChanged = function (newGrouping) {
    setTabText(TOP_INVESTORS_TAB_ID, newGrouping);
};
topInvestorOptions.onLoadingData = function () {
    removeNoDataMessage(TOP_INVESTORS_WIDGET_CONTAINER_ID);
};
topInvestorOptions.onDataLoaded = function (data) {
    if (!data) {
        addNoDataMessage(TOP_INVESTORS_WIDGET_CONTAINER_ID);
    }
};
topInvestorsWidget = infront.topInvestorsWidget(
    '#' + TOP_INVESTORS_WIDGET_CONTAINER_ID,
    topInvestorOptions,
);

topHoldingsOptions.id = 'iptTopHoldings';
topHoldingsOptions.widgetTitle = null;
topHoldingsOptions.enableChangeStatusColors = true;
topHoldingsOptions.enableFixedHeader = true;
topHoldingsOptions.sortable = true;
topHoldingsOptions.onHoldingClicked = function (instrument, grouping, period, startDate, stopDate) {
    topInvestorOptions.instrument = instrument;
    topInvestorOptions.grouping = grouping;
    topInvestorOptions.currentPeriod = period;
    topInvestorOptions.startDate = startDate;
    topInvestorOptions.stopDate = stopDate;
    topInvestorOptions.overridePeriodWithPersistedState = false; // Use the setting from the top holdings.
    topInvestorsWidget.modify(topInvestorOptions);
    selectTab(TOP_INVESTORS_TAB_ID);
    setTabText(TOP_INVESTORS_TAB_ID, grouping);
};
topHoldingsOptions.previousGroupingColumns = [
    'MAX_RANK',
    'HOLDING',
    'MAX_NUM_SHARES',
    getCombinedMaxValueColumn(),
    'PCT_MAX_OWNERSHIP',
    'POSITIONS',
];
topHoldingsOptions.currentGroupingColumns = [
    'RANK',
    'HOLDING',
    getNumSharesColumnOverride(),
    getPctOwnershipColumnOverride(),
    getCombinedValueColumn(),
    getNumSharesChangeColumnOverride(),
    getPctNumSharesChangeColumnOverride(),
    'POSITIONS',
];
topHoldingsOptions.newGroupingColumns = [
    'RANK',
    'HOLDING',
    getNumSharesColumnOverride(),
    getPctOwnershipColumnOverride(),
    getCombinedValueColumn(),
    'POSITIONS',
];
topHoldingsOptions.onGroupingChanged = function (newGrouping) {
    setTabText(TOP_HOLDINGS_TAB_ID, newGrouping);
};
topHoldingsOptions.onLoadingData = function () {
    removeNoDataMessage(TOP_HOLDINGS_WIDGET_CONTAINER_ID);
};
topHoldingsOptions.onDataLoaded = function (data) {
    if (!data) {
        addNoDataMessage(TOP_HOLDINGS_WIDGET_CONTAINER_ID);
    }
};
topHoldingsWidget = infront.topHoldingsWidget(
    '#' + TOP_HOLDINGS_WIDGET_CONTAINER_ID,
    topHoldingsOptions,
);

// Attach event listners for click events on the tabs.
document.getElementById(TOP_INVESTORS_TAB_ID).addEventListener('click', function () {
    selectTab(TOP_INVESTORS_TAB_ID);
});
document.getElementById(TOP_HOLDINGS_TAB_ID).addEventListener('click', function () {
    selectTab(TOP_HOLDINGS_TAB_ID);
});
// Start on the top investors tab.
selectTab(TOP_INVESTORS_TAB_ID);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12" id="containerCell">
        <div class="tab-menu cell-noselect" id="tabMenu">
            <div class="tab-menu__item" id="topInvestorsTab">
                <a class="tab-menu__item__link" tabindex="0">
                    <span class="tab-menu__item__label"></span>
                </a>
            </div>
            <div class="tab-menu__item" id="topHoldingsTab">
                <a class="tab-menu__item__link" tabindex="0">
                    <span class="tab-menu__item__label"></span>
                </a>
            </div>
        </div>
        <div class="cell-content" id="topInvestorsWidget" style="display: none"></div>
        <div class="cell-content" id="topHoldingsWidget" style="display: none"></div>
    </div>
</div>
```

## Styles (style.css)

```css
.cell-content {
    border: none;
    padding: 3px;
}
.cell-body {
    font-family: Arial;
    font-size: 11px;
    margin: 0;
}
.cell-row {
    margin-bottom: 0;
    border-bottom: 0;
    overflow: hidden;
}
.cell-table td {
    padding: 5px 2px;
    vertical-align: middle;
}
.cell-table th {
    font-size: 10px;
}
.cell-table__item {
    cursor: pointer;
}
.cell-table__num--rank {
    text-align: center;
}
.cell-table__num--max-rank {
    text-align: center;
}
.cell-table__txt--investor,
.cell-table__txt--holding {
    width: 100%;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
}
/* Show more of the investor / holding names by condensing the text when the terminal is showing small (default 632px) windows sizes. */
td.cell-table__txt--investor,
td.cell-table__txt--holding {
    font-stretch: condensed;
}
/* Turn off text condensing at 750px */
@media screen and (min-width: 750px) {
    td.cell-table__txt--investor,
    td.cell-table__txt--holding {
        font-stretch: normal;
    }
}
.cell-table__item:hover > td.cell-table__txt--investor {
    text-decoration: underline;
}
.cell-table__item:hover > td.cell-table__txt--holding {
    text-decoration: underline;
}
.cell-table__num--rank,
.cell-table__txt--investor,
.cell-table__txt--holding,
.cell-table__num--max-rank,
.cell-table__num--num-shares,
.cell-table__num--pct-ownership,
.cell-table__num--value,
.cell-table__num--pct-weighted-ownership,
.cell-table__num--pct-weighted-value,
.cell-table__num--num-shares-change,
.cell-table__num--pct-num-shares-change,
.cell-table__num--max-num-shares,
.cell-table__num--max-value,
.cell-table__num--pct-max-ownership,
.cell-table__num--pct-max-weighted-ownership,
.cell-table__num--pct-max-weighted-value,
.cell-table__num--positions {
    white-space: nowrap;
}
.cell-w-top-entities__table-positions {
    height: 16px;
    padding-left: 2px;
    padding-right: 10px;
}
.cell-w-top-entities__table-positions-chart {
    height: 16px;
}
.cell-table__no-data {
    text-align: center;
}

.cell-w-top-entities__table-combined-value {
    padding-left: 2px;
    padding-right: 2px;
    position: relative;
    text-align: center;
    z-index: 0;
}
.cell-w-top-entities__table-combined-pct-bar {
    height: 16px;
    position: absolute;
    top: -3px; /* Don't ask */
    z-index: -1;
}
th.cell-w-top-entities__table-combined-value-header {
    text-align: center;
}

.tab-menu {
    list-style-type: none;
    width: 100%;
    margin: 0;
    padding: 0;
    float: left;
    border-bottom: 0;
}
.tab-menu__item {
    position: relative;
    margin: 0;
    padding: 0;
    float: left;
    border-width: 0 1px 0 0;
    border-style: solid;
    text-transform: none;
    cursor: pointer;
}
.tab-menu__item--selected {
    cursor: default;
}
.tab-menu__item__link {
    display: block;
    text-transform: uppercase;
    font-size: 11px;
    text-decoration: none;
}
.tab-menu__item__label {
    display: block;
    padding: 10px 12px 8px;
    margin-right: 0;
    white-space: nowrap;
    overflow: hidden;
}

.cell-w-top-entities__table-combined-pct-bar {
    background-color: rgb(0, 55, 79);
}
.tab-menu {
    border: 1px solid #002d40;
}
.tab-menu__item {
    border-color: #002d40;
    background-color: #00131c;
    color: rgba(255, 255, 255, 0.6);
}
.tab-menu__item--selected {
    color: #fff;
    background-color: #00374f;
    border-color: #00374f;
}
.tab-menu__item__label {
    color: #fff;
}
.tab-menu__item:not(.tab-menu__item--selected):hover {
    background-color: #001e2b;
}
.cell-search-result__item--selected,
.cell-search-result__item:hover {
    background-color: #1a1a1a;
}

.cell-w-top-entities__table-combined-pct-bar {
    background-color: rgba(7, 57, 77, 0.2);
}
.tab-menu {
    border: 1px solid #d5d5d5;
    background-color: #fafafa;
}
.tab-menu__item {
    border-color: #d5d5d5;
    background-color: #fafafa;
    color: rgba(255, 255, 255, 0.6);
}
.tab-menu__item--selected {
    background-color: #fff;
    border-color: #d5d5d5;
    border-bottom: 1px solid #4dc46d;
}
.tab-menu__item__label {
    color: #111;
}
.tab-menu__item:not(.tab-menu__item--selected):hover {
    background-color: #e5e5e5;
}
```

