---
title: "FX Order Entry Widget"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > FX Order Entry Widget"
description: "Test snippet for Fxorderentrywidget"
tags: ["widget", "test", "widget:FxOrderEntryWidget", "widget:fxOrderEntryWidget", "widget:infrontRTD"]
demonstrates: ["FxOrderEntryWidget", "fxOrderEntryWidget", "infrontRTD"]
example_config: {"title":"FX Order Entry Widget","description":"Test snippet for Fxorderentrywidget","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:FxOrderEntryWidget","widget:fxOrderEntryWidget","widget:infrontRTD"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["./test-FxOrderEntry-Harness.js","../languages/da.js","../languages/fi.js","../languages/no.js","../languages/sv.js","../languages/ro.js"],"styles":["//fonts.googleapis.com/css?family=Roboto:light,regular,thin,italic,bold","../themes/light-latest/theme.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","./test-FxOrderEntry-Harness.css"]}
source_url: "https://docs.infrontfinance.com/tests/Fxorderentrywidget"
source_files: ["script.ts", "template.html", "config.json"]
---

# FX Order Entry Widget

Test snippet for Fxorderentrywidget

Demonstrates: `FxOrderEntryWidget`, `fxOrderEntryWidget`, `infrontRTD`

## Script (script.ts)

```typescript
var widgetOptions = new Infront.FxOrderEntryWidgetOptions();
var widget;

// Debugging.
//            infront.infrontRTD("DEBUG_VERBOSE,DEBUG_LOGIN,DEBUG_TRADING_LOGIN_CS,DEBUG_TRADING_CUST_FIELDS_CS_TAGS,DEBUG_REQUESTS,DEBUG_WEBSOCKET,DEBUG_SERVER_CONN,DEBUG_SERVER_CONN_DETAIL,DEBUG_SERVER_CONN_STATUS,DEBUG_SUBSCRIPTIONS,DEBUG_SERVER_REFERENCE,DEBUG_SERVER_POOL,DEBUG_SERVER_OBJECTS,DEBUG_ERROR_LOG_CALLBACK", false);

widgetOptions.feed = 4250;
widgetOptions.spotInstrument = new Infront.Instrument(4250, 'EURNOK');
widgetOptions.tenorKey = Infront.FxTenorKey.Spot;
widgetOptions.ndfTypesConfiguration = new Infront.FxNdfTypesConfiguration();
widgetOptions.ndfTypesConfiguration.setDefaultTypes(['Market']);
widgetOptions.ndfTypesConfiguration.setTypesForFxPair('EURRON', ['Market', 'BNR']);
widgetOptions.ndfTypesConfiguration.setTypesForFxPair('EURUSD', ['CBOE']);
widgetOptions.kidLink = 'https://www.reddit.com';
widgetOptions.kidLinkTitle = 'Open KID';
widgetOptions.forwardPointsDecimalsCount = 2;
widgetOptions.onDealChanged = function (dealChangeInfo) {
    testHarness.addLog(
        'onDealChanged(' +
            'spotInstrument=' +
            instrumentToString(dealChangeInfo.spotInstrument) +
            ',baseCurrency=' +
            dealChangeInfo.baseCurrency +
            ',quoteCurrency=' +
            dealChangeInfo.quoteCurrency +
            ',tenorKey=' +
            Infront.FxUtil.tenorKeyToString(
                dealChangeInfo.tenorKey,
                Infront.FxNaming.Shorten,
                infront.languageHandler,
            ) +
            ',position=' +
            positionToString(dealChangeInfo.position) +
            ',valueDate=' +
            dateToString(dealChangeInfo.valueDate) +
            ',volume=' +
            dealChangeInfo.volume +
            ',isNDF=' +
            dealChangeInfo.isNDF +
            ')',
    );
};

// Fire up the test harness.
testHarness = new TestHarness(
    infront,
    document.getElementById('test-harness'),
    'light-css',
    'dark-css',
    widgetOptions,
    function (newWidgetOptions) {
        // Refresh.
        widget.destroy();
        widgetOptions = newWidgetOptions;
        widget = infront.fxOrderEntryWidget('widget', widgetOptions);
    },
    function () {
        // Hammer time.
        // TODO.  Not so easy to automate this I wouldn't think.
    },
    function () {
        // Destroy widgets.
        widget.destroy();
        widgetOptions = null;
        widget = null;
    },
);
widget = infront.fxOrderEntryWidget('widget', widgetOptions);
```

## Markup (template.html)

```html
<div id="test-harness"></div>
<div class="cell-row">
    <div class="cell cell--w8">
        <div class="cell-content" id="widget" style="width: 500px"></div>
    </div>
</div>
```

