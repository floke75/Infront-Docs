---
title: "Consolidated Orderbook"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Consolidated Orderbook"
description: "Test snippet for Consolidatedorderbook"
tags: ["widget", "test"]
example_config: {"title":"Consolidated Orderbook","description":"Test snippet for Consolidatedorderbook","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["include/init.js"],"styles":["../themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/Consolidatedorderbook"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Consolidated Orderbook

Test snippet for Consolidatedorderbook

## Script (script.ts)

```typescript
Infront.DEBUG_LANGUAGE = true;
console.log('Infront ready - creating consolidated orderbook widgets');

// Test 1: Basic consolidated orderbook with expandable details
createWidget1();

// Test 2: Consolidated orderbook with inline details
createWidget2();

// Test 3: Consolidated orderbook with market filtering
createWidget3();

// Test 4: Consolidated orderbook with no details
createWidget4();
```

## Markup (template.html)

```html
<script type="text/javascript">
    let widgets = {};

    async function loadLanguage(langCode) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `../languages/${langCode}.js`;

            script.onload = () => {
                console.log(`Successfully loaded ${langCode} language script`);
                Infront.registerLanguageData(langCode, Infront.languageMap[langCode]);
                resolve();
            };

            script.onerror = (error) => {
                console.error(`Error loading ${langCode} language script:`, error);
                reject(error);
            };

            document.head.appendChild(script);
        });
    }

    function infrontReady(event) {
        Infront.DEBUG_LANGUAGE = true;
        console.log('Infront ready - creating consolidated orderbook widgets');

        // Test 1: Basic consolidated orderbook with expandable details
        createWidget1();

        // Test 2: Consolidated orderbook with inline details
        createWidget2();

        // Test 3: Consolidated orderbook with market filtering
        createWidget3();

        // Test 4: Consolidated orderbook with no details
        createWidget4();
    }

    function createWidget1() {
        const opts = new Infront.ConsolidatedOrderbookWidgetOptions();
        opts.instrument = { feed: 18177, ticker: 'DNB' }; // DNB Oslo - trades on multiple markets
        opts.levels = 10;
        opts.layout = Infront.OrderbookRowLayout.WIDE;
        opts.subscribe = true;
        opts.detailView = Infront.ConsolidatedOrderbookDetailView.EXPANDABLE;
        opts.expandAll = false;
        opts.showMarket = true;
        opts.showFeed = true;
        opts.showTicker = true;
        opts.showOrders = true;
        opts.showSpread = true;
        opts.showFooter = true;
        opts.enableConsolidation = true;
        opts.widgetTitle = 'Consolidated Orderbook - Expandable Details';
        opts.titleSettings.showTicker = true;
        opts.titleSettings.showPctChange = true;
        opts.titleSettings.showAbsoluteChange = true;
        opts.onPriceClick = function (price, side, instrument) {
            console.log('Price clicked:', price, side, instrument);
        };
        opts.onMarketClick = function (feed, ticker) {
            console.log('Market clicked:', feed, ticker);
        };

        widgets.widget1 = infront.consolidatedOrderbookWidget('#consolidated-orderbook-1', opts);
    }

    function createWidget2() {
        const opts = new Infront.ConsolidatedOrderbookWidgetOptions();
        opts.instrument = { feed: 17921, ticker: 'ABB' }; // ABB Stockholm
        opts.levels = 8;
        opts.layout = Infront.OrderbookRowLayout.COMPACT;
        opts.subscribe = true;
        opts.detailView = Infront.ConsolidatedOrderbookDetailView.INLINE;
        opts.showMarket = true;
        opts.showFeed = false;
        opts.showTicker = true;
        opts.showOrders = true;
        opts.showSpread = true;
        opts.showFooter = true;
        opts.widgetTitle = 'Consolidated Orderbook - Inline Details';
        opts.titleSettings.showTicker = false;
        opts.titleSettings.showPctChange = true;

        widgets.widget2 = infront.consolidatedOrderbookWidget('#consolidated-orderbook-2', opts);
    }

    function createWidget3() {
        const opts = new Infront.ConsolidatedOrderbookWidgetOptions();
        opts.instrument = { feed: 2008, ticker: 'EQNR' }; // Equinor
        opts.levels = 10;
        opts.layout = Infront.OrderbookRowLayout.WIDE;
        opts.subscribe = true;
        opts.detailView = Infront.ConsolidatedOrderbookDetailView.EXPANDABLE;
        opts.expandAll = false;
        opts.showMarket = true;
        opts.showFeed = true;
        opts.showTicker = true;
        opts.showOrders = true;
        opts.showSpread = true;
        opts.showFooter = true;
        opts.widgetTitle = 'Consolidated Orderbook - Filtered Markets';
        opts.titleSettings.showTicker = true;
        opts.titleSettings.showAbsoluteChange = true;
        // Filter to only show specific feeds
        opts.marketFilter = {
            includeFeeds: [2008, 2009], // Only Oslo and Stockholm
            minVolume: 100, // Minimum volume of 100
        };

        widgets.widget3 = infront.consolidatedOrderbookWidget('#consolidated-orderbook-3', opts);
    }

    function createWidget4() {
        const opts = new Infront.ConsolidatedOrderbookWidgetOptions();
        opts.instrument = { feed: 15, ticker: 'AAPL' }; // Apple
        opts.levels = 15;
        opts.layout = Infront.OrderbookRowLayout.COMPACT;
        opts.subscribe = true;
        opts.detailView = Infront.ConsolidatedOrderbookDetailView.NONE;
        opts.showOrders = true;
        opts.showSpread = true;
        opts.showFooter = false;
        opts.widgetTitle = 'Consolidated Orderbook - No Market Details';

        widgets.widget4 = infront.consolidatedOrderbookWidget('#consolidated-orderbook-4', opts);
    }

    // Control functions
    function changeInstrument(widgetNum, feed, ticker) {
        const widgetKey = 'widget' + widgetNum;
        widgets[widgetKey]?.modify({
            instrument: { feed: feed, ticker: ticker },
        });
    }

    function changeDetailView(widgetNum, detailView) {
        const widgetKey = 'widget' + widgetNum;
        widgets[widgetKey]?.modify({
            detailView: Infront.ConsolidatedOrderbookDetailView[detailView],
        });
        updateActiveButton('detailView' + widgetNum, detailView);
    }

    function changeLevels(widgetNum, levels) {
        const widgetKey = 'widget' + widgetNum;
        widgets[widgetKey]?.modify({
            levels: parseInt(levels),
        });
    }

    function toggleOption(widgetNum, option) {
        const widgetKey = 'widget' + widgetNum;
        const currentOpts = {};
        currentOpts[option] = !widgets[widgetKey].options[option];
        widgets[widgetKey]?.modify(currentOpts);
    }

    function toggleConsolidation(widgetNum, enabled) {
        const widgetKey = 'widget' + widgetNum;
        widgets[widgetKey]?.modify({
            enableConsolidation: enabled,
        });
        updateActiveButton('consolidation' + widgetNum, enabled ? 'enabled' : 'disabled');
    }

    function changeLayout(widgetNum, layout) {
        const widgetKey = 'widget' + widgetNum;
        widgets[widgetKey]?.modify({
            layout: Infront.OrderbookRowLayout[layout],
        });
        updateActiveButton('layout' + widgetNum, layout);
    }

    function toggleFooter(widgetNum) {
        const widgetKey = 'widget' + widgetNum;
        const currentValue = widgets[widgetKey].options.showFooter;
        widgets[widgetKey]?.modify({
            showFooter: !currentValue,
        });
    }

    function toggleTitleSetting(widgetNum, setting) {
        const widgetKey = 'widget' + widgetNum;
        const currentValue = widgets[widgetKey].options.titleSettings[setting];
        const newTitleSettings = Object.assign({}, widgets[widgetKey].options.titleSettings);
        newTitleSettings[setting] = !currentValue;
        widgets[widgetKey]?.modify({
            titleSettings: newTitleSettings,
        });
    }

    function changeLanguage(langCode) {
        loadLanguage(langCode)
            .then(() => {
                infront.language = langCode;
                Object.keys(widgets).forEach(function (key) {
                    widgets[key]?.modify({});
                });
            })
            .catch(() => {
                alert('Failed to load language: ' + langCode);
            });
    }

    function changeDecimalSeparator(separator) {
        InfrontUtil.formatSettings.decimalSeparator = separator;
        InfrontUtil.formatSettings.browserDecimalSeparator = separator;
        // Force widget refresh by modifying a harmless option
        Object.keys(widgets).forEach(function (key) {
            widgets[key]?.modify({});
        });
    }

    function changeThousandsSeparator(separator) {
        InfrontUtil.formatSettings.thousandsSeparator = separator;
        InfrontUtil.formatSettings.browserThousandsSeparator = separator;
        // Force widget refresh
        Object.keys(widgets).forEach(function (key) {
            widgets[key]?.modify({});
        });
    }

    function updateActiveButton(groupName, activeValue) {
        let buttons = document.querySelectorAll('[data-group="' + groupName + '"]');
        buttons.forEach(function (btn) {
            if (btn.getAttribute('data-value') === activeValue) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
</script>
<div class="test-container">
    <h1 style="margin-bottom: 24px; color: #333">Svelte Consolidated Orderbook Widget Tests</h1>
    <!-- Global Settings -->
    <div class="test-section">
        <div class="test-section-header">Global Settings (affects all widgets)</div>
        <div class="controls">
            <div class="control-group">
                <label>Language:</label>
                <select id="languageSelect" onchange="changeLanguage(this.value)">
                    <option value="en">English</option>
                    <option selected="" value="de">German (Deutsch)</option>
                    <option value="da">Danish (Dansk)</option>
                    <option value="fi">Finnish (Suomi)</option>
                    <option value="fr">French (Français)</option>
                    <option value="it">Italian (Italiano)</option>
                    <option value="no">Norwegian (Norsk)</option>
                    <option value="pl">Polish (Polski)</option>
                    <option value="ro">Romanian (Română)</option>
                    <option value="sv">Swedish (Svenska)</option>
                </select>
            </div>
            <div class="control-group">
                <label>Decimal Separator:</label>
                <button onclick="changeDecimalSeparator('.')">Period (.)</button>
                <button onclick="changeDecimalSeparator(',')">Comma (,)</button>
            </div>
            <div class="control-group">
                <label>Thousands Separator:</label>
                <button onclick="changeThousandsSeparator(',')">Comma (,)</button>
                <button onclick="changeThousandsSeparator('.')">Period (.)</button>
                <button onclick="changeThousandsSeparator(' ')">Space ( )</button>
                <button onclick="changeThousandsSeparator('')">None</button>
            </div>
        </div>
    </div>
    <!-- Test 1: Expandable Details -->
    <div class="test-section">
        <div class="test-section-header">Test 1: Expandable Details (DNB Oslo)</div>
        <div class="controls">
            <div class="control-group">
                <label>Instrument:</label>
                <button onclick="changeInstrument(1, 18177, 'DNB')">DNB (Oslo)</button>
                <button onclick="changeInstrument(1, 18177, 'EQNR')">EQNR (Oslo)</button>
                <button onclick="changeInstrument(1, 17921, 'ABB')">ABB (Stockholm)</button>
                <button onclick="changeInstrument(1, 15, 'AAPL')">AAPL (NASDAQ)</button>
            </div>
            <div class="control-group">
                <label>Detail View:</label>
                <button
                    class="active"
                    data-group="detailView1"
                    data-value="EXPANDABLE"
                    onclick="changeDetailView(1, 'EXPANDABLE')"
                >
                    Expandable
                </button>
                <button
                    data-group="detailView1"
                    data-value="INLINE"
                    onclick="changeDetailView(1, 'INLINE')"
                >
                    Inline
                </button>
                <button
                    data-group="detailView1"
                    data-value="POPUP"
                    onclick="changeDetailView(1, 'POPUP')"
                >
                    Popup
                </button>
                <button
                    data-group="detailView1"
                    data-value="NONE"
                    onclick="changeDetailView(1, 'NONE')"
                >
                    None
                </button>
            </div>
            <div class="control-group">
                <label>Levels:</label>
                <input
                    max="50"
                    min="1"
                    onchange="changeLevels(1, this.value)"
                    type="number"
                    value="10"
                />
            </div>
            <div class="control-group">
                <label>Consolidation:</label>
                <button
                    class="active"
                    data-group="consolidation1"
                    data-value="enabled"
                    onclick="toggleConsolidation(1, true)"
                >
                    Multi-Market
                </button>
                <button
                    data-group="consolidation1"
                    data-value="disabled"
                    onclick="toggleConsolidation(1, false)"
                >
                    Single Market
                </button>
            </div>
            <div class="control-group">
                <label>Layout:</label>
                <button
                    class="active"
                    data-group="layout1"
                    data-value="WIDE"
                    onclick="changeLayout(1, 'WIDE')"
                >
                    Wide
                </button>
                <button
                    data-group="layout1"
                    data-value="COMPACT"
                    onclick="changeLayout(1, 'COMPACT')"
                >
                    Compact
                </button>
            </div>
            <div class="control-group">
                <label>Options:</label>
                <button onclick="toggleOption(1, 'showOrders')">Toggle Orders</button>
                <button onclick="toggleOption(1, 'showSpread')">Toggle Spread</button>
                <button onclick="toggleFooter(1)">Toggle Footer</button>
            </div>
            <div class="control-group">
                <label>Title Settings:</label>
                <button onclick="toggleTitleSetting(1, 'showTicker')">Toggle Ticker</button>
                <button onclick="toggleTitleSetting(1, 'showPctChange')">Toggle % Change</button>
                <button onclick="toggleTitleSetting(1, 'showAbsoluteChange')">
                    Toggle Abs Change
                </button>
            </div>
        </div>
        <div class="test-section-content">
            <div class="widget-container" id="consolidated-orderbook-1"></div>
        </div>
        <div class="info-panel">
            <h4>Features:</h4>
            <p>
                • Click on price levels to expand/collapse market details<br />
                • Shows aggregated volume and order count per price level<br />
                • Individual market orders displayed in expandable rows<br />
                • Click prices or tickers to trigger callbacks
            </p>
        </div>
    </div>
    <!-- Test 2: Inline Details -->
    <div class="test-section">
        <div class="test-section-header">Test 2: Inline Details (ABB Stockholm)</div>
        <div class="controls">
            <div class="control-group">
                <label>Instrument:</label>
                <button onclick="changeInstrument(2, 17921, 'ABB')">ABB (Stockholm)</button>
                <button onclick="changeInstrument(2, 18177, 'DNB')">DNB (Oslo)</button>
                <button onclick="changeInstrument(2, 15, 'TSLA')">TSLA (NASDAQ)</button>
            </div>
            <div class="control-group">
                <label>Detail View:</label>
                <button
                    data-group="detailView2"
                    data-value="EXPANDABLE"
                    onclick="changeDetailView(2, 'EXPANDABLE')"
                >
                    Expandable
                </button>
                <button
                    class="active"
                    data-group="detailView2"
                    data-value="INLINE"
                    onclick="changeDetailView(2, 'INLINE')"
                >
                    Inline
                </button>
                <button
                    data-group="detailView2"
                    data-value="POPUP"
                    onclick="changeDetailView(2, 'POPUP')"
                >
                    Popup
                </button>
                <button
                    data-group="detailView2"
                    data-value="NONE"
                    onclick="changeDetailView(2, 'NONE')"
                >
                    None
                </button>
            </div>
            <div class="control-group">
                <label>Levels:</label>
                <input
                    max="50"
                    min="1"
                    onchange="changeLevels(2, this.value)"
                    type="number"
                    value="8"
                />
            </div>
            <div class="control-group">
                <label>Consolidation:</label>
                <button
                    class="active"
                    data-group="consolidation2"
                    data-value="enabled"
                    onclick="toggleConsolidation(2, true)"
                >
                    Multi-Market
                </button>
                <button
                    data-group="consolidation2"
                    data-value="disabled"
                    onclick="toggleConsolidation(2, false)"
                >
                    Single Market
                </button>
            </div>
            <div class="control-group">
                <label>Layout:</label>
                <button data-group="layout2" data-value="WIDE" onclick="changeLayout(2, 'WIDE')">
                    Wide
                </button>
                <button
                    class="active"
                    data-group="layout2"
                    data-value="COMPACT"
                    onclick="changeLayout(2, 'COMPACT')"
                >
                    Compact
                </button>
            </div>
            <div class="control-group">
                <label>Options:</label>
                <button onclick="toggleOption(2, 'showOrders')">Toggle Orders</button>
                <button onclick="toggleOption(2, 'showSpread')">Toggle Spread</button>
                <button onclick="toggleFooter(2)">Toggle Footer</button>
            </div>
            <div class="control-group">
                <label>Title Settings:</label>
                <button onclick="toggleTitleSetting(2, 'showTicker')">Toggle Ticker</button>
                <button onclick="toggleTitleSetting(2, 'showPctChange')">Toggle % Change</button>
                <button onclick="toggleTitleSetting(2, 'showAbsoluteChange')">
                    Toggle Abs Change
                </button>
            </div>
        </div>
        <div class="test-section-content">
            <div class="widget-container" id="consolidated-orderbook-2"></div>
        </div>
        <div class="info-panel">
            <h4>Features:</h4>
            <p>
                • Market details always visible (no expanding needed)<br />
                • Useful when you always want to see all market orders<br />
                • Clean layout showing all information at once
            </p>
        </div>
    </div>
    <!-- Test 3: Market Filtering -->
    <div class="test-section">
        <div class="test-section-header">Test 3: Market Filtering (EQNR - Oslo/Stockholm only)</div>
        <div class="controls">
            <div class="control-group">
                <label>Instrument:</label>
                <button onclick="changeInstrument(3, 18177, 'EQNR')">EQNR (Oslo)</button>
                <button onclick="changeInstrument(3, 18177, 'DNB')">DNB (Oslo)</button>
                <button onclick="changeInstrument(3, 17921, 'VOLV-B')">VOLV-B (Stockholm)</button>
            </div>
            <div class="control-group">
                <label>Detail View:</label>
                <button
                    class="active"
                    data-group="detailView3"
                    data-value="EXPANDABLE"
                    onclick="changeDetailView(3, 'EXPANDABLE')"
                >
                    Expandable
                </button>
                <button
                    data-group="detailView3"
                    data-value="INLINE"
                    onclick="changeDetailView(3, 'INLINE')"
                >
                    Inline
                </button>
                <button
                    data-group="detailView3"
                    data-value="POPUP"
                    onclick="changeDetailView(3, 'POPUP')"
                >
                    Popup
                </button>
                <button
                    data-group="detailView3"
                    data-value="NONE"
                    onclick="changeDetailView(3, 'NONE')"
                >
                    None
                </button>
            </div>
            <div class="control-group">
                <label>Levels:</label>
                <input
                    max="50"
                    min="1"
                    onchange="changeLevels(3, this.value)"
                    type="number"
                    value="10"
                />
            </div>
            <div class="control-group">
                <label>Consolidation:</label>
                <button
                    class="active"
                    data-group="consolidation3"
                    data-value="enabled"
                    onclick="toggleConsolidation(3, true)"
                >
                    Multi-Market
                </button>
                <button
                    data-group="consolidation3"
                    data-value="disabled"
                    onclick="toggleConsolidation(3, false)"
                >
                    Single Market
                </button>
            </div>
            <div class="control-group">
                <label>Layout:</label>
                <button
                    class="active"
                    data-group="layout3"
                    data-value="WIDE"
                    onclick="changeLayout(3, 'WIDE')"
                >
                    Wide
                </button>
                <button
                    data-group="layout3"
                    data-value="COMPACT"
                    onclick="changeLayout(3, 'COMPACT')"
                >
                    Compact
                </button>
            </div>
            <div class="control-group">
                <label>Options:</label>
                <button onclick="toggleOption(3, 'showOrders')">Toggle Orders</button>
                <button onclick="toggleOption(3, 'showSpread')">Toggle Spread</button>
                <button onclick="toggleFooter(3)">Toggle Footer</button>
            </div>
            <div class="control-group">
                <label>Title Settings:</label>
                <button onclick="toggleTitleSetting(3, 'showTicker')">Toggle Ticker</button>
                <button onclick="toggleTitleSetting(3, 'showPctChange')">Toggle % Change</button>
                <button onclick="toggleTitleSetting(3, 'showAbsoluteChange')">
                    Toggle Abs Change
                </button>
            </div>
        </div>
        <div class="test-section-content">
            <div class="widget-container" id="consolidated-orderbook-3"></div>
        </div>
        <div class="info-panel">
            <h4>Features:</h4>
            <p>
                • Filtered to only show feeds 2008 (Oslo) and 2009 (Stockholm)<br />
                • Minimum volume filter of 100<br />
                • Useful for focusing on specific markets or exchanges<br />
                • See <code>opts.marketFilter</code> in code for configuration
            </p>
        </div>
    </div>
    <!-- Test 4: No Details -->
    <div class="test-section">
        <div class="test-section-header">
            Test 4: No Market Details (AAPL - Aggregated View Only)
        </div>
        <div class="controls">
            <div class="control-group">
                <label>Instrument:</label>
                <button onclick="changeInstrument(4, 15, 'AAPL')">AAPL (NASDAQ)</button>
                <button onclick="changeInstrument(4, 15, 'TSLA')">TSLA (NASDAQ)</button>
                <button onclick="changeInstrument(4, 18177, 'DNB')">DNB (Oslo)</button>
            </div>
            <div class="control-group">
                <label>Detail View:</label>
                <button
                    data-group="detailView4"
                    data-value="EXPANDABLE"
                    onclick="changeDetailView(4, 'EXPANDABLE')"
                >
                    Expandable
                </button>
                <button
                    data-group="detailView4"
                    data-value="INLINE"
                    onclick="changeDetailView(4, 'INLINE')"
                >
                    Inline
                </button>
                <button
                    data-group="detailView4"
                    data-value="POPUP"
                    onclick="changeDetailView(4, 'POPUP')"
                >
                    Popup
                </button>
                <button
                    class="active"
                    data-group="detailView4"
                    data-value="NONE"
                    onclick="changeDetailView(4, 'NONE')"
                >
                    None
                </button>
            </div>
            <div class="control-group">
                <label>Levels:</label>
                <input
                    max="50"
                    min="1"
                    onchange="changeLevels(4, this.value)"
                    type="number"
                    value="15"
                />
            </div>
            <div class="control-group">
                <label>Consolidation:</label>
                <button
                    class="active"
                    data-group="consolidation4"
                    data-value="enabled"
                    onclick="toggleConsolidation(4, true)"
                >
                    Multi-Market
                </button>
                <button
                    data-group="consolidation4"
                    data-value="disabled"
                    onclick="toggleConsolidation(4, false)"
                >
                    Single Market
                </button>
            </div>
            <div class="control-group">
                <label>Layout:</label>
                <button data-group="layout4" data-value="WIDE" onclick="changeLayout(4, 'WIDE')">
                    Wide
                </button>
                <button
                    class="active"
                    data-group="layout4"
                    data-value="COMPACT"
                    onclick="changeLayout(4, 'COMPACT')"
                >
                    Compact
                </button>
            </div>
            <div class="control-group">
                <label>Options:</label>
                <button onclick="toggleOption(4, 'showOrders')">Toggle Orders</button>
                <button onclick="toggleOption(4, 'showSpread')">Toggle Spread</button>
                <button onclick="toggleFooter(4)">Toggle Footer</button>
            </div>
            <div class="control-group">
                <label>Title Settings:</label>
                <button onclick="toggleTitleSetting(4, 'showTicker')">Toggle Ticker</button>
                <button onclick="toggleTitleSetting(4, 'showPctChange')">Toggle % Change</button>
                <button onclick="toggleTitleSetting(4, 'showAbsoluteChange')">
                    Toggle Abs Change
                </button>
            </div>
        </div>
        <div class="test-section-content">
            <div class="widget-container" id="consolidated-orderbook-4"></div>
        </div>
        <div class="info-panel">
            <h4>Features:</h4>
            <p>
                • Shows only consolidated price levels without market breakdown<br />
                • Most compact view - similar to traditional orderbook<br />
                • Useful when market details are not needed<br />
                • Faster rendering with more price levels
            </p>
        </div>
    </div>
</div>
```

## Styles (style.css)

```css
.cell-body {
    padding: 20px;
    font-family: Arial, sans-serif;
}
.test-container {
    max-width: 1400px;
    margin: 0 auto;
}
.test-section {
    margin-bottom: 40px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
}
.test-section-header {
    background: #f5f5f5;
    padding: 12px 16px;
    border-bottom: 1px solid #e0e0e0;
    font-weight: 600;
    font-size: 14px;
}
.test-section-content {
    padding: 0;
}
.controls {
    padding: 16px;
    background: #fafafa;
    border-bottom: 1px solid #e0e0e0;
}
.control-group {
    margin-bottom: 12px;
}
.control-group label {
    display: inline-block;
    width: 150px;
    font-weight: 500;
    font-size: 13px;
}
.control-group button {
    padding: 6px 12px;
    margin-right: 8px;
    border: 1px solid #ccc;
    background: white;
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
}
.control-group button:hover {
    background: #f0f0f0;
}
.control-group button.active {
    background: #0288d1;
    color: white;
    border-color: #0277bd;
}
.control-group input[type='number'] {
    padding: 6px;
    width: 80px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 12px;
}
.control-group select {
    padding: 6px 12px;
    border: 1px solid #ccc;
    background: white;
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
    min-width: 150px;
}
.control-group select:hover {
    background: #f0f0f0;
}
.widget-container {
    height: 600px;
    background: white;
}
.info-panel {
    padding: 16px;
    background: #e3f2fd;
    border-top: 1px solid #90caf9;
    font-size: 12px;
}
.info-panel h4 {
    margin: 0 0 8px 0;
    font-size: 13px;
    color: #0277bd;
}
.info-panel code {
    background: #fff;
    padding: 2px 6px;
    border-radius: 2px;
    font-family: 'Courier New', monospace;
    font-size: 11px;
}
```

