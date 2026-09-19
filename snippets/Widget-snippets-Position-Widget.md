---
title: "Position Widget"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Position Widget"
description: "Test snippet for Positionwidget"
tags: ["widget", "test", "widget:PortfolioSelectWidget", "widget:PositionWidget", "widget:portfolioSelectWidget", "widget:positionWidget"]
demonstrates: ["PortfolioSelectWidget", "PositionWidget", "portfolioSelectWidget", "positionWidget"]
example_config: {"title":"Position Widget","description":"Test snippet for Positionwidget","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:PortfolioSelectWidget","widget:PositionWidget","widget:portfolioSelectWidget","widget:positionWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"styles":["../themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/Positionwidget"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Position Widget

Test snippet for Positionwidget

Demonstrates: `PortfolioSelectWidget`, `PositionWidget`, `portfolioSelectWidget`, `positionWidget`

## Script (script.ts)

```typescript
var opts = new Infront.PortfolioSelectWidgetOptions();
opts.id = 'pww1';
infront.portfolioSelectWidget('#portfolio-selector', opts);

var inst = new Infront.Instrument(18177, 'DNB');
var svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'ERROR_CODE';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'ERROR_MESSAGE';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'PORTFOLIO';
svOpts.translate = (id, value) => {
    return 'Selected Portfolio: ' + value;
};
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'INVESTED';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'VOLUME';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'AMOUNT';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'MULTIPLIER';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'COLLATERAL';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'LOAN_TO_VALUE_RATIO';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'PROFIT';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'BASE_CURRENCY';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'BASE_INVESTED';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'YTD_BASE_INVESTED';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'BASE_VALUE';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'AVG_PRICE';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'S_AVG_PRICE';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'MARKET_PRICE';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'MARKET_VALUE';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'BASE_MARKET_VALUE';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'PL_TODAY';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'PL_TODAY_PCT';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'PL_TODAY_PCT';
svOpts.translate = (id, value) => {
    //Translate is not working with comuted tags :(
    if (value > 0) return InfrontUtil.formatPercent(value) + ' 👌';
    else return InfrontUtil.formatPercent(value) + ' 🤬';
};
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'BASE_PL_TODAY';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'BASE_PL_TODAY_PCT';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'RESULT';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'RESULT_PCT';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'BASE_RESULT';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'BASE_RESULT_PCT';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'BASE_CURRENCY_RESULT';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'S_POS_CURRENCY';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'PL_TODAY_PCT';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'PL_TODAY_PCT';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'BASE_COLLATERAL';
infront.positionWidget('#portfolio-values', svOpts);

svOpts = new Infront.PositionWidgetOptions();
svOpts.instrument = inst;
svOpts.valueName = 'SYMBOL_STATUS';
infront.positionWidget('#portfolio-values', svOpts);
```

## Markup (template.html)

```html
<div id="root">
    <div class="cell-row portfolio-selector" id="portfolio-selector"></div>
    <div class="cell-content cell-row" id="portfolio-values"></div>
</div>
```

## Styles (style.css)

```css
.portfolio-selector {
    float: right;
}
```

