---
title: "BRD Mobile"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > BRD Mobile"
description: "Test snippet for BrdMobile"
tags: ["widget", "test"]
example_config: {"title":"BRD Mobile","description":"Test snippet for BrdMobile","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"scripts":["http://code.highcharts.com/stock/5.0.14/highstock.src.js"],"styles":["//fonts.googleapis.com/css?family=Roboto:light,regular,thin,italic,bold"]}
source_url: "https://docs.infrontfinance.com/tests/BrdMobile"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# BRD Mobile

Test snippet for BrdMobile

## Script (script.ts)

```typescript
// Start with the forwards page.
showPage(forwardsPage);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="widget"></div>
    </div>
</div>
<div class="footer-menu">
    <div class="footer-menu-item" onclick="showPage(forwardsPage)">Forwards</div>
    <div class="footer-menu-item" onclick="showPage(spotsPage)">Spots</div>
    <div class="footer-menu-item" onclick="showPage(dealPage)">Deals</div>
</div>
```

## Styles (style.css)

```css
/* Expected overrides in host environment (webtrader) */
html,
body {
    overflow-x: hidden; /* webtrader. */
    /*            overflow-y: hidden; /* webtrader. */
    width: 100%; /* webtrader. */
}

body {
    position: absolute; /* webtrader. */
    box-sizing: border-box; /* webtrader. */
    touch-action: pan-y;
    -webkit-user-drag: none;
    /*            position: fixed; /* For IPhone - stops silly page movement when dragging. Need to talk to Dmitri about this setting */
    font-family: Roboto !important;
}

.cell-body {
    margin: 0;
    font-size: 16px; /* Might need to be set at the widget level in web trader */
}

.cell-input {
    font-size: 16px; /* Might need to be set at the widget level in web trader */
}

.cell-button {
    font-size: 16px; /* Might need to be set at the widget level in web trader */
}

input[type='checkbox'] {
    min-height: 30px;
    min-width: 30px;
}

/* Simple test menu */
.footer-menu {
    align-items: center;
    background-color: #00374f;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 20px;
    left: 0;
    position: fixed;
}

.footer-menu-item {
    margin-left: 10px;
}

/* FxCurrencySelector style overrides - all mobile devices */
.cell-fx-currency-selector__group-heading {
    font-size: 16px;
}

.cell-fx-currency-selector__currency-text {
    font-size: 14px;
    top: 0;
}

.cell-fx-currency-selector__currency--remove {
    height: 24px;
    mask-size: 24px;
    top: 3px;
    width: 24px;
}

/* FxTenorSelector style overrides - all mobile devices */
.cell-fx-tenor-selector__title {
    font-size: 16px;
    font-weight: normal;
}

.cell-fx-tenor-selector__tenor-switch-box .cell-w-switch {
    padding-bottom: 6px;
    padding-top: 6px;
}

.cell-fx-tenor-selector__control-button.cell-button {
    width: 50%;
    padding: 0;
}

/* FxFocusGrid style overrides - all mobile devices */
.cell-w-fx-focus-grid__tool-box-button {
    width: 24px;
    height: 24px;
}

.cell-w-fx-focus-grid__tool-box-button::after {
    width: 24px;
    height: 24px;
}

.cell-w-fx-focus-grid__add-chain-button::after {
    -webkit-mask-size: 18px;
    mask-size: 18px;
}

.cell-w-fx-focus-grid__settings-button::after {
    -webkit-mask-size: 20px;
    mask-size: 20px;
}

.cell-w-fx-quote__value-box--large {
    top: 2px;
}

.cell-w-fx-quote__value-box--small {
    top: 10px;
}

.cell-w-fx-quote__rate-digit--normal {
    font-size: 16px;
}

.cell-w-fx-quote__rate-digit--enlarged {
    font-size: 24px;
}

.cell-w-fx-quote__forward-points {
    font-size: 16px;
    top: 32px;
}

.cell-w-fx-quote__forward-points-separator {
    top: 28px;
}

.cell-w-fx-quote-chain__tool-box-button {
    height: 20px;
    width: 20px;
}

.cell-w-fx-quote-chain__tool-box-button::after {
    height: 20px;
    width: 20px;
}

.cell-w-fx-quote-chain__chart-button::after {
    -webkit-mask-size: 18px;
    mask-size: 18px;
}

.cell-w-fx-quote-chain__close-button::after {
    -webkit-mask-size: 14px;
    mask-size: 14px;
}

.cell-w-fx-quote-chain__currency-box {
    font-size: 16px;
}

/* TODO - Reduced digits */

/* FxOrderEntryWidget style overrides - all mobile devices */
.cell-w-fx-order-entry__request-trading-rate--normal-digit {
    font-size: 16px;
}

.cell-w-fx-order-entry__request-trading-rate--enlarged-digit {
    font-size: 24px;
}

/* TODO - Reduced digits */

.cell-w-fx-order-entry__request-spot-rate--normal-digit {
    font-size: 16px;
}

.cell-w-fx-order-entry__request-spot-rate--enlarged-digit {
    font-size: 24px;
}

/* TODO - Reduced digits */

.cell-w-fx-order-entry__request-pair-scaling-description {
    font-size: 12px;
}

.cell-w-fx-order-entry__request-order-currency-flag {
    top: 2px;
}

.cell-w-fx-order-entry__request-ndf-switch-control {
    margin-left: 2px; /* Stop getting cut off on the left edge */
}

.cell-w-fx-order-entry__request-order-invert {
    margin-bottom: -6px; /* Exact center */
}

.cell-w-fx-order-entry__request-order-invert-icon {
    -webkit-mask-size: 36px;
    mask-size: 36px;
    height: 36px;
    width: 36px;
}

.cell-w-fx-order-entry__accept-title {
    font-size: 18px;
}

.cell-w-fx-order-entry__receipt-title {
    font-size: 18px;
}

.cell-w-fx-order-entry__error-title {
    font-size: 18px;
}

.cell-w-fx-order-entry__error-message {
    font-size: 16px;
}

/* FxOrderEntryWidget style overrides - large widths (most mobiles in landscape orientation) */
@media screen and (min-width: 640px) {
    .cell-w-fx-order-entry__progress-steps-title {
        font-size: 16px;
    }

    .cell-w-fx-order-entry__accept-button.cell-button {
        font-size: 18px;
    }

    .cell-w-fx-order-entry__accept-button-instrument-type {
        font-size: 16px;
    }

    .cell-w-fx-order-entry__accept-button-value-date {
        font-size: 16px;
    }

    .cell-w-fx-order-entry__accept-reject-button.cell-button {
        font-size: 18px;
    }

    .cell-w-fx-order-entry__accept-reject-button-explanation {
        font-size: 16px;
    }

    .cell-w-fx-order-entry__accept-time-remaining-bar {
        height: 25px;
    }

    .cell-w-fx-order-entry__request-kid-checkbox.cell-input {
        min-height: 18px;
        min-width: 18px;
    }
}

/* FxOrderEntryWidget style overrides - small widths (most mobiles in portrait orientation) */
@media screen and (max-width: 639px) {
    .cell-w-fx-order-entry__progress-steps-title {
        padding-left: 0;
    }

    .cell-fx-progress-steps__container
        > .cell-fx-progress-steps__step-container:first-child
        .cell-w-fx-order-entry__progress-steps-title {
        padding-left: 4px;
    }

    .cell-w-fx-order-entry__request-section-grid {
        grid-template-columns: 1fr 20px 1fr;
    }

    .cell-w-fx-order-entry__request-pair-label {
        grid-column: 1 !important;
        grid-row: 1 !important;
    }

    .cell-w-fx-order-entry__request-pair-container {
        grid-column: 1 !important;
        grid-row: 2 !important;
    }

    .cell-w-fx-order-entry__request-trading-rate-label {
        grid-column: 3 !important;
        grid-row: 1 !important;
    }

    .cell-w-fx-order-entry__request-trading-rate-box {
        grid-column: 3 !important;
        grid-row: 2 !important;
    }

    .cell-w-fx-order-entry__request-spot-rate-label {
        grid-column: 1 !important;
        grid-row: 3 !important;
    }

    .cell-w-fx-order-entry__request-spot-rate-box {
        grid-column: 1 !important;
        grid-row: 4 !important;
    }

    .cell-w-fx-order-entry__request-forward-points-label {
        grid-column: 3 !important;
        grid-row: 3 !important;
    }

    .cell-w-fx-order-entry__request-forward-points-value {
        grid-column: 3 !important;
        grid-row: 4 !important;
    }

    .cell-w-fx-order-entry__request-tenor-label {
        grid-column: 1 !important;
        grid-row: 5 !important;
    }

    .cell-w-fx-order-entry__request-tenor-select {
        grid-column: 1 !important;
        grid-row: 6 !important;
        width: 100%;
    }

    .cell-w-fx-order-entry__request-value-date-label {
        grid-column: 3 !important;
        grid-row: 5 !important;
    }

    .cell-w-fx-order-entry__request-value-date-container {
        grid-column: 3 !important;
        grid-row: 6 !important;
    }

    .cell-w-fx-order-entry__request-portfolio-label {
        grid-column: 1 / span 3 !important;
        grid-row: 7 !important;
    }

    .cell-w-fx-order-entry__request-portfolio-select {
        grid-column: 1 / span 3 !important;
        grid-row: 8 !important;
    }

    .cell-w-fx-order-entry__request-ndf {
        grid-column: 1 / span 3 !important;
        grid-row: 9 !important;
    }

    .cell-w-fx-order-entry__request-order-label--first {
        grid-column: 1 !important;
        grid-row: 10 !important;
    }

    .cell-w-fx-order-entry__request-order-amount--first {
        grid-column: 1 !important;
        grid-row: 11 !important;
    }

    .cell-w-fx-order-entry__request-order-container--first {
        grid-column: 3 !important;
        grid-row: 11 !important;
    }

    .cell-w-fx-order-entry__request-order-label--second {
        grid-column: 1 !important;
        grid-row: 12 !important;
    }

    .cell-w-fx-order-entry__request-order-amount--second {
        grid-column: 1 !important;
        grid-row: 13 !important;
    }

    .cell-w-fx-order-entry__request-order-container--second {
        grid-column: 3 !important;
        grid-row: 13 !important;
    }

    .cell-w-fx-order-entry__request-order-invert {
        grid-column: 3 !important;
        grid-row: 10 / span 4 !important;
    }

    .cell-w-fx-order-entry__request-comment-label {
        grid-column: 1 / span 3 !important;
        grid-row: 14 !important;
    }

    .cell-w-fx-order-entry__request-comment-input {
        grid-column: 1 / span 3 !important;
        grid-row: 15 !important;
    }

    .cell-w-fx-order-entry__request-separator {
        grid-column: 1 / span 3 !important;
        grid-row: 16 !important;
    }

    .cell-w-fx-order-entry__request-kid {
        grid-column: 1 / span 3 !important;
        grid-row: 17 !important;
    }

    .cell-w-fx-order-entry__request-quote-button {
        grid-column: 1 !important;
        grid-row: 18 !important;
    }

    .cell-w-fx-order-entry__request-quote-button.cell-button {
        margin-left: 0;
        margin-right: 0;
    }

    .cell-w-fx-order-entry__request-withdraw-button {
        grid-column: 3 !important;
        grid-row: 18 !important;
    }

    .cell-w-fx-order-entry__request-withdraw-button.cell-button {
        margin-left: 0;
        margin-right: 0;
    }

    .cell-w-fx-order-entry__accept-section-grid {
        grid-template-columns: 1fr 1fr;
    }

    .cell-w-fx-order-entry__accept-trade--first {
        grid-column: 1 !important;
    }

    .cell-w-fx-order-entry__accept-trade--second {
        grid-column: 2 !important;
    }

    .cell-w-fx-order-entry__accept-buy-container {
        grid-row: 1 !important;
    }

    .cell-w-fx-order-entry__accept-buy-amount {
        grid-row: 2 !important;
    }

    .cell-w-fx-order-entry__accept-sell-container {
        grid-row: 1 !important;
    }

    .cell-w-fx-order-entry__accept-sell-amount {
        grid-row: 2 !important;
    }

    .cell-w-fx-order-entry__accept-spot-rate-label {
        grid-column: 1 !important;
        grid-row: 3 !important;
    }

    .cell-w-fx-order-entry__accept-spot-rate-value {
        grid-column: 1 !important;
        grid-row: 4 !important;
    }

    .cell-w-fx-order-entry__accept-forward-points-label {
        grid-column: 2 !important;
        grid-row: 3 !important;
    }

    .cell-w-fx-order-entry__accept-forward-points-value {
        grid-column: 2 !important;
        grid-row: 4 !important;
    }

    .cell-w-fx-order-entry__accept-separator {
        grid-column: 1 / span 2 !important;
        grid-row: 5 !important;
    }

    .cell-w-fx-order-entry__accept-button {
        grid-column: 1 !important;
        grid-row: 6 !important;
    }

    .cell-w-fx-order-entry__accept-button.cell-button {
        font-size: 16px;
        margin-left: 0;
        margin-right: 5px;
        padding: 10px 6px;
    }

    .cell-w-fx-order-entry__accept-button-instrument-type {
        font-size: 12px;
    }

    .cell-w-fx-order-entry__accept-button-value-date {
        font-size: 12px;
    }

    .cell-w-fx-order-entry__accept-reject-button {
        grid-column: 2 !important;
        grid-row: 6 !important;
    }

    .cell-w-fx-order-entry__accept-reject-button.cell-button {
        font-size: 16px;
        margin-left: 5px;
        margin-right: 0;
        padding: 10px 6px;
    }

    .cell-w-fx-order-entry__accept-reject-button-explanation {
        font-size: 12px;
    }

    .cell-w-fx-order-entry__accept-time-remaining-container {
        grid-column: 1 / span 2 !important;
        grid-row: 7 !important;
        margin-left: 0;
        margin-right: 0;
    }

    .cell-w-fx-order-entry__receipt-section-grid {
        grid-template-columns: 3fr 2fr;
    }

    .cell-w-fx-order-entry__receipt-bought-container {
        grid-column: 1 !important;
    }

    .cell-w-fx-order-entry__receipt-bought-amount {
        grid-column: 2 !important;
    }

    .cell-w-fx-order-entry__receipt-sold-container {
        grid-column: 1 !important;
    }

    .cell-w-fx-order-entry__receipt-sold-amount {
        grid-column: 2 !important;
    }

    .cell-w-fx-order-entry__receipt-trading-rate-label {
        grid-column: 1 !important;
    }

    .cell-w-fx-order-entry__receipt-trading-rate-value {
        grid-column: 2 !important;
    }

    .cell-w-fx-order-entry__receipt-value-date-label {
        grid-column: 1 !important;
    }

    .cell-w-fx-order-entry__receipt-value-date-value {
        grid-column: 2 !important;
    }

    .cell-w-fx-order-entry__receipt-order-id-label {
        grid-column: 1 !important;
    }

    .cell-w-fx-order-entry__receipt-order-id-value {
        grid-column: 2 !important;
    }

    .cell-w-fx-order-entry__receipt-bottom-separator {
        grid-column: 1 / span 2 !important;
    }

    .cell-w-fx-order-entry__receipt-new-deal-button {
        grid-column: 1 / span 2 !important;
        justify-self: center;
        min-width: 200px;
    }

    .cell-w-fx-order-entry__error-container {
        margin-left: 0;
        margin-right: 0;
    }

    .cell-w-fx-order-entry__error-acknowledge-grid {
        grid-template-columns: 1fr 1fr;
    }

    .cell-w-fx-order-entry__error-acknowledge-button {
        grid-column: 1 / span 2 !important;
        justify-self: center;
        min-width: 200px;
    }
}

/* Really small mobiles */
@media screen and (max-width: 359px) {
    /* Not enough space for progress steps */
    .cell-w-fx-order-entry__progress-steps {
        display: none;
    }
}
```

