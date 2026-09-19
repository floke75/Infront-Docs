---
title: "Topentitieswidgets Linking"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Topentitieswidgets Linking"
description: "Test snippet for TopentitieswidgetsLinking"
tags: ["widget", "test", "widget:FocusWidget", "widget:TopHoldingsWidget", "widget:TopInvestorsWidget", "widget:focusWidget", "widget:infrontRTD", "widget:quoteList", "widget:topHoldingsWidget", "widget:topInvestorsWidget"]
demonstrates: ["FocusWidget", "TopHoldingsWidget", "TopInvestorsWidget", "focusWidget", "infrontRTD", "quoteList", "topHoldingsWidget", "topInvestorsWidget"]
example_config: {"title":"Topentitieswidgets Linking","description":"Test snippet for TopentitieswidgetsLinking","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:FocusWidget","widget:TopHoldingsWidget","widget:TopInvestorsWidget","widget:focusWidget","widget:infrontRTD","widget:quoteList","widget:topHoldingsWidget","widget:topInvestorsWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["./test-TopEntities-Harness.js","../languages/da.js","../languages/fi.js","../languages/no.js","../languages/sv.js"],"styles":["../themes/light-latest/theme.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","./test-TopEntities-Harness.css"]}
source_url: "https://docs.infrontfinance.com/tests/TopentitieswidgetsLinking"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Topentitieswidgets Linking

Test snippet for TopentitieswidgetsLinking

Demonstrates: `FocusWidget`, `TopHoldingsWidget`, `TopInvestorsWidget`, `focusWidget`, `infrontRTD`, `quoteList`, `topHoldingsWidget`, `topInvestorsWidget`

## Script (script.ts)

```typescript
var TOP_INVESTORS_ID = 'myTopInvestors';
var TOP_HOLDINGS_ID = 'myTopHoldings';
var testHarness;
var currentWidget;
var topInvestorOptions = new Infront.TopInvestorsWidgetOptions();
var topHoldingsOptions = new Infront.TopHoldingsWidgetOptions();
var quoteListOpts = new Infront.QuoteListWidgetOptions();
var focusOpts = new Infront.FocusWidgetOptions();

// Debugging flags.
infront.infrontRTD('DEBUG_ERROR_LOG_CALLBACK');
// infront.infrontRTD("DEBUG_TOP_INVESTORS,DEBUG_TOP_INVESTORS_TAGS,DEBUG_TOP_HOLDINGS,DEBUG_TOP_HOLDINGS_TAGS,DEBUG_ERROR_LOG_CALLBACK", false);
// Top investor initialization.
topInvestorOptions.id = TOP_INVESTORS_ID;
topInvestorOptions.instrument = null;
topInvestorOptions.enableChangeStatusColors = true;
topInvestorOptions.sortable = true;
topInvestorOptions.showSearchWidget = true;
topInvestorOptions.linkChannels = LINK_CHANNEL_ID;
topInvestorOptions.searchBoxFeeds = [18177, 18199, 5070];
topInvestorOptions.enableFixedHeader = true;
topInvestorOptions.percentageOwnershipIndicatorsByFeed = [
    new Infront.PercentageOwnershipIndicators(18177, [33, 50]), // Oslo
    new Infront.PercentageOwnershipIndicators(18199, [33, 50]), // Oslo OTC
    new Infront.PercentageOwnershipIndicators(5070, [50]), // Johannesburg
];
topInvestorOptions.onInvestorClicked = function (
    feed,
    investorId,
    grouping,
    period,
    startDate,
    stopDate,
) {
    testHarness.addCallbackLog(
        'onInvestorClicked(feed=' +
            feed +
            ',investorId=' +
            investorId +
            ',grouping=' +
            grouping +
            ',period=' +
            period +
            ',startDate=' +
            dateToString(startDate) +
            ',stopDate=' +
            dateToString(stopDate) +
            ')',
    );
    currentWidget.destroy();
    topHoldingsOptions.feed = feed;
    topHoldingsOptions.investorId = investorId;
    topHoldingsOptions.grouping = grouping;
    topHoldingsOptions.currentPeriod = period;
    topHoldingsOptions.startDate = startDate;
    topHoldingsOptions.stopDate = stopDate;
    topHoldingsOptions.overridePeriodWithPersistedState = false; // Use the setting from the top investors.
    currentWidget = infront.topHoldingsWidget('#topEntitiesWidget', topHoldingsOptions);
};
topInvestorOptions.onPeriodChanged = function (newPeriod, newStartDate, newStopDate) {
    testHarness.addCallbackLog(
        'onPeriodChanged(newPeriod=' +
            newPeriod +
            ',newStartDate=' +
            dateToString(newStartDate) +
            ',newStopDate=' +
            dateToString(newStopDate) +
            ')',
    );
};
topInvestorOptions.onGroupingChanged = function (newGrouping) {
    testHarness.addCallbackLog('onGroupingChanged(newGrouping=' + newGrouping + ')');
};
topInvestorOptions.onLoadingData = function () {
    testHarness.addCallbackLog('onLoadingData()');
    removeNoDataMessage();
};
topInvestorOptions.onDataLoaded = function (data) {
    if (data) {
        testHarness.addCallbackLog('onDataLoaded(data=' + data.length + ' investors)');
    } else {
        testHarness.addCallbackLog('onDataLoaded(data=null)');
        addNoDataMessage();
    }
};

// Top holdings initialization.
topHoldingsOptions.id = TOP_HOLDINGS_ID;
topHoldingsOptions.enableChangeStatusColors = true;
topHoldingsOptions.sortable = true;
topHoldingsOptions.linkChannels = LINK_CHANNEL_ID;
topInvestorOptions.enableFixedHeader = true;
topHoldingsOptions.onHoldingClicked = function (instrument, grouping, period, startDate, stopDate) {
    testHarness.addCallbackLog(
        'onHoldingClicked(instrument.feed=' +
            instrument.feed +
            ',instrument.ticker=' +
            instrument.ticker +
            ',grouping=' +
            grouping +
            ',period=' +
            period +
            ',startDate=' +
            dateToString(startDate) +
            ',stopDate=' +
            dateToString(stopDate) +
            ')',
    );
    currentWidget.destroy();
    topInvestorOptions.instrument = instrument;
    topInvestorOptions.grouping = grouping;
    topInvestorOptions.currentPeriod = period;
    topInvestorOptions.startDate = startDate;
    topInvestorOptions.stopDate = stopDate;
    topInvestorOptions.overridePeriodWithPersistedState = false; // Use the setting from the top holdings.
    currentWidget = infront.topInvestorsWidget('#topEntitiesWidget', topInvestorOptions);
};
topHoldingsOptions.onPeriodChanged = function (newPeriod, newStartDate, newStopDate) {
    testHarness.addCallbackLog(
        'onPeriodChanged(newPeriod=' +
            newPeriod +
            ',newStartDate=' +
            dateToString(newStartDate) +
            ',newStopDate=' +
            dateToString(newStopDate) +
            ')',
    );
};
topHoldingsOptions.onGroupingChanged = function (newGrouping) {
    testHarness.addCallbackLog('onGroupingChanged(newGrouping=' + newGrouping + ')');
};
topHoldingsOptions.onLoadingData = function () {
    testHarness.addCallbackLog('onLoadingData()');
    removeNoDataMessage();
};
topHoldingsOptions.onDataLoaded = function (data) {
    if (data) {
        testHarness.addCallbackLog('onDataLoaded(data=' + data.length + ' holdings)');
    } else {
        testHarness.addCallbackLog('onDataLoaded(data=null)');
        addNoDataMessage();
    }
};

// Quote list initialization.
quoteListOpts.enableFixedHeader = true;
quoteListOpts.useChains = true;
quoteListOpts.chains = [
    {
        feed: 18177,
        name: 'ALL_SYMBOLS_18177',
        description: 'Oslo Listed Equities',
    },
    {
        feed: 18199,
        name: 'ALL_SYMBOLS_18199',
        description: 'Oslo NOTC Equities',
    },
];
quoteListOpts.defaultChain = 'ALL_SYMBOLS_18177';
quoteListOpts.chainButtonTitle = 'Click to switch';
quoteListOpts.columns = ['FULL_NAME', 'BID', 'ASK'];
quoteListOpts.linkChannels = LINK_CHANNEL_ID;
infront.quoteList('#quoteListWidget', quoteListOpts);

// Focus initialization.
focusOpts.linkChannels = LINK_CHANNEL_ID;
infront.focusWidget('#focusWidget', focusOpts);

// Fire up the test harness.
testHarness = new TestHarness(
    document.getElementById('test-harness'),
    'light-css',
    'dark-css',
    'custom-styling',
    topInvestorOptions,
    topHoldingsOptions,
    function (newTopInvestorOptions, newTopHoldingOptions) {
        // Refresh - retain the settings of interest.
        newTopInvestorOptions.instrument = topInvestorOptions.instrument;
        topInvestorOptions = newTopInvestorOptions;
        newTopHoldingOptions.feed = topHoldingsOptions.feed;
        newTopHoldingOptions.investorId = topHoldingsOptions.investorId;
        topHoldingsOptions = newTopHoldingOptions;
        currentWidget.destroy();
        if (currentWidget.options.id === TOP_INVESTORS_ID) {
            currentWidget = infront.topInvestorsWidget('#topEntitiesWidget', topInvestorOptions);
        } else {
            currentWidget = infront.topHoldingsWidget('#topEntitiesWidget', topHoldingsOptions);
        }
    },
    function () {
        // Hammer time - switch between holdings and investors.
        currentWidget.destroy();
        if (currentWidget.options.id === TOP_INVESTORS_ID) {
            topHoldingsOptions.feed = 18177; // OSLO.
            topHoldingsOptions.investorId = 971525061; // FOLKETRYGDFONDET.
            currentWidget = infront.topHoldingsWidget('#topEntitiesWidget', topHoldingsOptions);
        } else {
            topInvestorOptions.instrument = new Infront.Instrument(18177, 'DNB');
            currentWidget = infront.topInvestorsWidget('#topEntitiesWidget', topInvestorOptions);
        }
    },
    function () {
        // Destroy widgets.
        currentWidget.destroy();
        currentWidget = null;

        // Destroy the options.
        topInvestorOptions = null;
        topHoldingsOptions = null;
    },
);

// Start with top investors - show nothing initially.
currentWidget = infront.topInvestorsWidget('#topEntitiesWidget', topInvestorOptions);
```

## Markup (template.html)

```html
<div id="test-harness"></div>
<div class="cell-row">
    <div class="cell cell--w3">
        <div class="cell-content" id="quoteListWidget" style="height: 800px"></div>
    </div>
    <div class="cell cell--w7">
        <div class="cell-content" id="topEntitiesWidget" style="height: 800px"></div>
    </div>
    <div class="cell cell--w2">
        <div class="cell-content" id="focusWidget"></div>
    </div>
</div>
```

## Styles (style.css)

```css
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
    max-width: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
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
.cell-table__num--num-shares,
.cell-table__num--pct-ownership,
.cell-table__num--value,
.cell-table__num--pct-weighted-ownership,
.cell-table__num--pct-weighted-value,
.cell-table__num--num-shares-change,
.cell-table__num--pct-num-shares-change,
.cell-table__num--max-rank,
.cell-table__num--max-num-shares,
.cell-table__num--max-value,
.cell-table__num--pct-max-ownership,
.cell-table__num--pct-max-weighted-ownership,
.cell-table__num--pct-max-weighted-value,
.cell-table__txt--positions {
    white-space: nowrap;
}
.cell-table__no-data {
    text-align: center;
}
```

