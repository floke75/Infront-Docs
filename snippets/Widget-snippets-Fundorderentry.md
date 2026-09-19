---
title: "Fundorderentry"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Fundorderentry"
description: "Test snippet for Fundorderentry"
tags: ["widget", "test"]
example_config: {"title":"Fundorderentry","description":"Test snippet for Fundorderentry","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Fundorderentry"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Fundorderentry

Test snippet for Fundorderentry

## Script (script.ts)

```typescript
makePortfolioSelector('#portfolio-selector');
makeFundOrderEntryWidget('#order-entry');
makePositionsWidget('#positions');
makeOrdersWidget('#orders');
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="portfolio-selector" id="portfolio-selector"></div>
</div>
<div class="cell-row">
    <div class="cell cell--w4">
        <div class="" id="order-entry"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="positions"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="orders"></div>
    </div>
</div>
```

## Styles (style.css)

```css
/* .portfolio-selector {
            float: right;
        }

        .cell-w-fund-order-entry__panel {
            width: 300px;
        }

        .cell-w-fund-order-entry__title {
            border-bottom: 2px solid #00465f;
            padding: 5px 0;
        }

        .cell-w-fund-order-entry--kiid {
            text-decoration: underline;
            cursor: pointer;
        }

        .cell-w-fund-order-entry__buy-sell-buttons {
            margin: 20px 0;
        }

        .cell-w-fund-order-entry__buy-button {
            width: 100px;
            border-radius: 3px 0 0 3px;
        }

        .cell-w-fund-order-entry__sell-button {
            width: 100px;
            border-radius: 0 3px 3px 0;
        }

        .cell-w-fund-order-entry__search-panel {
            margin: 20px 0;
        }
        
        .cell-w-fund-order-entry__search-box input:disabled {
            background-color: #002738;
            color: #00affd;
            border-color: #335260;
        }

        .cell-w-fund-order-entry__input-label {
            font-size: 14px;
            margin: 10px 0;
        }

        .cell-w-fund-order-entry__value-row {
            display: flex;
            font-size: 14px;
            padding: 10px 0;
        }

        .cell-w-fund-order-entry__bottom-border {
            border-bottom: 1px solid #00465f;
        }

        .cell-w-fund-order-entry__label {
            text-align: left;
            padding-left: 0;
        }

        .cell-w-fund-order-entry__value {
            text-align: right;
            padding-right: 0;
        }

        .cell-w-fund-order-entry__input {
            width: 100%;
        }

        .cell-w-fund-order-entry__search-box .cell-input {
            width: 100%;
        }

        .cell-w-fund-order-entry__amount-panel {
            height: 100px;
        }

        .cell-w-fund-order-entry__buy-sell-select {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .cell-w-fund-order-entry__mode-button {
            border: 0;
            cursor: pointer;
            border-radius: 3px;
            font-family: inherit;
            font-size: 14px;
            padding: 5px 8px;
            text-transform: uppercase;
            white-space: nowrap;
            color: #0088b6;
            background-color: #00394f;
        }

        .cell-w-fund-order-entry__button-selected {
            color: #FFFFFF;
            background-color: #005c7a;
        }

        .cell-w-fund-order-entry__buy-confirm-buttons button {
            margin: 0 5px;
        }
        
        .cell-w-fund-order-entry__status-panel {
            height: 424px;
        }
        
        .cell-w-fund-order-entry__input-wrapper {
            display: flex;
            background-color: #00151e;
            border: 1px solid #07394d;
            margin: 0;
        }
        
        .cell-w-fund-order-entry__input {
            background-color: transparent;
            position: relative;
        }
        
        .cell-w-fund-order-entry__amount-suffix {
            color: #777;
            padding: 5px;
        } */
```

