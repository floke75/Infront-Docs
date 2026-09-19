---
title: "FX Focus Grid Widget"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > FX Focus Grid Widget"
description: "Test snippet for Fxfocusgridwidget"
tags: ["widget", "test", "widget:FxFocusGridWidget", "widget:fxFocusGridWidget", "widget:infrontRTD"]
demonstrates: ["FxFocusGridWidget", "fxFocusGridWidget", "infrontRTD"]
example_config: {"title":"FX Focus Grid Widget","description":"Test snippet for Fxfocusgridwidget","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:FxFocusGridWidget","widget:fxFocusGridWidget","widget:infrontRTD"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["./test-FxFocusGrid-Harness.js","../languages/da.js","../languages/fi.js","../languages/no.js","../languages/sv.js","../languages/ro.js"],"styles":["../themes/light-latest/theme.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","./test-FxFocusGrid-Harness.css"]}
source_url: "https://docs.infrontfinance.com/tests/Fxfocusgridwidget"
source_files: ["script.ts", "template.html", "config.json"]
---

# FX Focus Grid Widget

Test snippet for Fxfocusgridwidget

Demonstrates: `FxFocusGridWidget`, `fxFocusGridWidget`, `infrontRTD`

## Script (script.ts)

```typescript
var widgetOptions = new Infront.FxFocusGridWidgetOptions();
var widget;
var hammerTimeSpotInstruments = [];

// Debugging.
//infront.infrontRTD("DEBUG_REQUESTS,DEBUG_WEBSOCKET,DEBUG_SERVER_CONN,DEBUG_SERVER_CONN_DETAIL,DEBUG_SERVER_CONN_STATUS,DEBUG_SUBSCRIPTIONS,DEBUG_SERVER_REFERENCE,DEBUG_SERVER_POOL,DEBUG_SERVER_OBJECTS,DEBUG_ERROR_LOG_CALLBACK", false);

widgetOptions.id = 'myFxFocusGrid';
widgetOptions.spotFeed = 2095;
widgetOptions.spotInstruments = [new Infront.Instrument(2095, 'EURUSD')];
widgetOptions.persistState = false;
widgetOptions.selectableTenorKeys = [
    Infront.FxTenorKey.Overnight,
    Infront.FxTenorKey.TomorrowNext,
    Infront.FxTenorKey.Spot,
    Infront.FxTenorKey.SpotNext,
    Infront.FxTenorKey.WeekBase + 1,
    Infront.FxTenorKey.WeekBase + 2,
    Infront.FxTenorKey.WeekBase + 3,
    Infront.FxTenorKey.MonthBase + 1,
    Infront.FxTenorKey.MonthBase + 2,
    Infront.FxTenorKey.MonthBase + 3,
    Infront.FxTenorKey.MonthBase + 4,
    Infront.FxTenorKey.MonthBase + 5,
    Infront.FxTenorKey.MonthBase + 6,
    Infront.FxTenorKey.MonthBase + 7,
    Infront.FxTenorKey.MonthBase + 8,
    Infront.FxTenorKey.MonthBase + 9,
    Infront.FxTenorKey.MonthBase + 10,
    Infront.FxTenorKey.MonthBase + 11,
    Infront.FxTenorKey.MonthBase + 12,
    Infront.FxTenorKey.MonthBase + 15,
    Infront.FxTenorKey.MonthBase + 18,
    Infront.FxTenorKey.YearBase + 2,
    Infront.FxTenorKey.YearBase + 3,
    Infront.FxTenorKey.YearBase + 4,
    Infront.FxTenorKey.YearBase + 5,
];
widgetOptions.mandatoryTenorKeys = [Infront.FxTenorKey.Spot];
widgetOptions.chainTemplate.tenorKeys = [
    Infront.FxTenorKey.Overnight,
    Infront.FxTenorKey.TomorrowNext,
    Infront.FxTenorKey.Spot,
    Infront.FxTenorKey.MonthBase + 1,
    Infront.FxTenorKey.MonthBase + 3,
];
widgetOptions.chainTemplate.quotePairTemplate.leftQuoteTemplate.label = 'Sell';
widgetOptions.chainTemplate.quotePairTemplate.rightQuoteTemplate.label = 'Buy';
widgetOptions.chainTemplate.quotePairTemplate.leftQuoteTemplate.showForwardPointsCallback =
    _longTermTenorsOnlyFunction;
widgetOptions.chainTemplate.quotePairTemplate.rightQuoteTemplate.showForwardPointsCallback =
    _longTermTenorsOnlyFunction;
widgetOptions.chainTemplate.onSpotInstrumentChangedCallback = function (
    previousSpotInstrument,
    newSpotInstrument,
) {
    testHarness.addCallbackLog(
        'onSpotInstrumentChangedCallback(previousSpotInstrument=' +
            instrumentToString(previousSpotInstrument) +
            ',newSpotInstrument=' +
            instrumentToString(newSpotInstrument) +
            ')',
    );
};

// Fire up the test harness.
testHarness = new TestHarness(
    document.getElementById('test-harness'),
    'light-css',
    'dark-css',
    widgetOptions,
    function (newWidgetOptions) {
        // Refresh.
        widget.destroy();
        widgetOptions = newWidgetOptions;
        widget = infront.fxFocusGridWidget('widget', widgetOptions);
    },
    function () {
        // Hammer time. Add a bunch of common currencies with initial tenors.
        if (hammerTimeSpotInstruments.length) {
            // Remove them all and start again.
            hammerTimeSpotInstruments.forEach(function (spotInstrument) {
                widget.removeChain(spotInstrument);
            });
            hammerTimeSpotInstruments = [];
        } else {
            // Add the chains.
            hammerTimeSpotInstruments.push(
                new Infront.Instrument(widgetOptions.spotFeed, 'EURUSD'),
            );
            hammerTimeSpotInstruments.push(
                new Infront.Instrument(widgetOptions.spotFeed, 'EURNOK'),
            );
            hammerTimeSpotInstruments.push(
                new Infront.Instrument(widgetOptions.spotFeed, 'USDNOK'),
            );
            hammerTimeSpotInstruments.push(
                new Infront.Instrument(widgetOptions.spotFeed, 'EURSEK'),
            );
            hammerTimeSpotInstruments.push(
                new Infront.Instrument(widgetOptions.spotFeed, 'USDSEK'),
            );
            hammerTimeSpotInstruments.push(
                new Infront.Instrument(widgetOptions.spotFeed, 'EURCAD'),
            );
            hammerTimeSpotInstruments.push(
                new Infront.Instrument(widgetOptions.spotFeed, 'USDCAD'),
            );
            hammerTimeSpotInstruments.push(
                new Infront.Instrument(widgetOptions.spotFeed, 'EURJPY'),
            );
            hammerTimeSpotInstruments.push(
                new Infront.Instrument(widgetOptions.spotFeed, 'USDJPY'),
            );
            hammerTimeSpotInstruments.push(
                new Infront.Instrument(widgetOptions.spotFeed, 'EURCHF'),
            );
            hammerTimeSpotInstruments.forEach(function (spotInstrument) {
                widget.addChain(spotInstrument);
            });
        }
    },
    function (spotInstrument) {
        widget.addChain(spotInstrument);
    },
    function (spotInstrument) {
        widget.removeChain(spotInstrument);
    },
    function () {
        // Destroy widgets.
        widget.destroy();
        widgetOptions = null;
        widget = null;
    },
    function (widgetHeight) {
        var widgetContainer = document.getElementById('widget');

        switch (widgetHeight) {
            case WidgetHeight.FixedHeight600px:
                widgetContainer.style.height = '600px';
                widgetContainer.style.minHeight = '';
                break;
            case WidgetHeight.FixedHeight900px:
                widgetContainer.style.height = '900px';
                widgetContainer.style.minHeight = '';
                break;
            default:
                widgetContainer.style.height = '';
                widgetContainer.style.minHeight = '';
                break;
        }

        // Reconstruct the widget.
        widget.destroy();
        widget = infront.fxFocusGridWidget('widget', widgetOptions);
    },
);
widget = infront.fxFocusGridWidget('#widget', widgetOptions);
```

## Markup (template.html)

```html
<div id="test-harness"></div>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget"></div>
    </div>
</div>
```

