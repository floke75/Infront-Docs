---
title: "Swap Calculator"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Swap Calculator"
description: "Test snippet for Swapcalculator"
tags: ["widget", "test", "widget:SwapCalculator", "widget:swapCalculatorWidget"]
demonstrates: ["SwapCalculator", "swapCalculatorWidget"]
example_config: {"title":"Swap Calculator","description":"Test snippet for Swapcalculator","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:SwapCalculator","widget:swapCalculatorWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Swapcalculator"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Swap Calculator

Test snippet for Swapcalculator

Demonstrates: `SwapCalculator`, `swapCalculatorWidget`

## Script (script.ts)

```typescript
let url = new URL(window.location.href);
let options = new Infront.SwapCalculatorOptions();
options.id = 'embeddedSwapCalculatorTest';
options.widgetTitle = '';
options.notional = 1000000;
let calculator = infront.swapCalculatorWidget('#swap-calculator', options);

function generic_error_handler(error_code, error_message) {
    console.log(error_code + ': ' + error_message);
}

function generic_success_handler(result) {
    console.log(result);
}
```

## Markup (template.html)

```html
<div style="max-width: 600px">
    <div id="swap-calculator"></div>
</div>
```

## Styles (style.css)

```css
/* TEST FILE ONLY CSS */
.cell-body {
    font-family: Roboto, sans-serif;
    margin: 0;
}

/* END TEST FILE ONLY CSS */

/* Generic classes/changes for WTK */
/* CHECK WITH DMITRI IF OK */
.cell-flex-row {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-right: unset;
    margin-left: unset;
}

/* End Generic classes/changes for WTK */

/* Wire specific CSS - MOVE TO WTK */
.cell-w-swap-calculator {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    background-color: #002839;
    padding: 0;
}

.cell-w-swap-calculator__header {
    background-color: #00374f;
    font-size: 14px;
    margin: 0;
    padding: 0;
    position: relative;
}

.cell-w-swap-calculator__title {
    margin: 6px 10px;
    padding: 0;
}

.cell-w-swap-calculator__content {
    padding: 0 10px;
}

.cell-w-swap-calculator__section {
    margin: 0 0 10px;
}

.cell-w-swap-calculator__section_title {
    margin: 5px;
    padding: 5px;
    font-size: 14px;
}

.cell-w-swap-calculator__section_title-result {
    margin: 0;
    background-color: #00374f;
}

.cell-w-swap-calculator__tab-bar .cell-tabs__horizontal__tab,
.cell-w-swap-calculator__tab-bar .cell-tabs__horizontal__tab--selected,
.cell-w-swap-calculator__tab-bar .cell-tabs__horizontal {
    border-width: 0;
    padding: 8px 20px;
    font-size: 14px;
}

.cell-w-swap-calculator__tab-bar .cell-tabs__horizontal__tab {
    background-color: #00374f;
}

.cell-w-swap-calculator__tab-bar .cell-tabs__horizontal__tab--selected {
    background-color: #0f9bc3;
}

.cell-w-swap-calculator__row {
    display: flex;
    flex-direction: row;
    flex-basis: 100%;
    align-items: center;
}

.cell-w-swap-calculator__row__col {
    display: flex;
    margin: 2px 10px;
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
}

.cell-w-swap-calculator__result {
    padding: 5px 0;
}

.leg-button {
    width: 100px;
    font-size: inherit;
    margin: 0;
}

.cell-w-swap-calculator__date .cell-input--date-selector {
    width: 100px;
    margin: 0;
}

.cell-w-date-selector__arrow-left {
    background-image: url('icon_date-picker_arrow_left-white.png');
    background-position: left 0 top 3px;
}

.cell-w-date-selector__arrow-right {
    background-image: url('icon_date-picker_arrow_right-white.png');
    background-position: right 0 top 3px;
}

.cell-tab-hidden {
    display: none;
}

.cell-w-swap-calculator__status {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
}

.cell-w-swap-calculator__error-msg {
    font-size: 14px;
    color: #5bd8ff;
    padding: 10px;
}

.cell-w-swap-calculator__result-hidden {
    visibility: hidden;
}
```

