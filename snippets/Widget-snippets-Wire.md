---
title: "Wire"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Wire"
description: "Test snippet for Wire"
tags: ["widget", "test", "widget:WireWidget", "widget:wireWidget"]
demonstrates: ["WireWidget", "wireWidget"]
example_config: {"title":"Wire","description":"Test snippet for Wire","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:WireWidget","widget:wireWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Wire"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Wire

Test snippet for Wire

Demonstrates: `WireWidget`, `wireWidget`

## Script (script.ts)

```typescript
let url = new URL(window.location.href);
let watchList = url.searchParams.get('list');
let userCountry = url.searchParams.get('usercountry');
userCountry = userCountry ? userCountry.toUpperCase() : '';

let opts = new Infront.WireWidgetOptions();
opts.id = 'embeddedWireTest2019';
opts.scoreThresholdMotionDetection = 33;
opts.scoreThresholdNews = 33;
opts.defaultToFirstWatchList = false;
opts.displayFilteredItems = false;
opts.languages = ['en', 'no', 'sv', 'da'];
opts.feeds = [14, 15, 19, 26, 28, 100, 1009, 2008, 2090, 2186, 2209, 17665, 17921, 18177];
opts.selectedFeeds = getDefaultFeedsForCountry(userCountry);
opts.showHeader = true;
opts.showScore = true;
opts.uniqueId = url.searchParams.get('uniqueid');
if (watchList) {
    opts.watchList = watchList;
}
let wire = infront.wireWidget('#content', opts);

function generic_error_handler(error_code, error_message) {
    console.log(error_code + ': ' + error_message);
}

function generic_success_handler(result) {
    console.log(result);
}
```

## Markup (template.html)

```html
<div id="content"></div>
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

/* Terminal Pseudo States Override */
/* Not needed for web, but doesn't ruin anything */
.cell-w-wire__card__content__header,
.cell-w-wire__card__content__header:link,
.cell-w-wire__card__content__header:active,
.cell-w-wire__card__content__header:visited,
.cell-w-wire__card__content__header:hover,
.cell-w-wire__card__content__header--no-link,
.cell-w-wire__card__content__header--no-link:link,
.cell-w-wire__card__content__header--no-link:active,
.cell-w-wire__card__content__header--no-link:visited,
.cell-w-wire__card__content__header--no-link:hover,
.cell-w-wire__card__footer__content,
.cell-w-wire__card__footer__content:link,
.cell-w-wire__card__footer__content:active,
.cell-w-wire__card__footer__content:visited,
.cell-w-wire__card__footer__content:hover,
.cell-w-wire__card__market-data__item,
.cell-w-wire__card__market-data__item:link,
.cell-w-wire__card__market-data__item:active,
.cell-w-wire__card__market-data__item:visited,
.cell-w-wire__card__market-data__item:hover,
.cell-w-wire__card__footer__clicker,
.cell-w-wire__card__footer__clicker:link,
.cell-w-wire__card__footer__clicker:active,
.cell-w-wire__card__footer__clicker:visited,
.cell-w-wire__card__footer__clicker:hover,
.cell-status-neutral,
.cell-status-neutral:link,
.cell-status-neutral:active,
.cell-status-neutral:hover,
.cell-status-neutral:visited {
    color: #fff;
    text-decoration: none;
}

.cell-status-positive:link,
.cell-status-positive:active,
.cell-status-positive:visited,
.cell-status-positive:hover,
.cell-status-negative:link,
.cell-status-negative:active,
.cell-status-negative:visited,
.cell-status-negative:hover {
    text-decoration: none;
}

/* End Terminal Pseudo States Override */

/* Wire specific CSS - MOVE TO WTK */
.cell-w-wire {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    background-color: #002839;
    padding: 10px;
}

.cell-w-wire .cell-tooltip  {
    max-width: 500px;
    min-width: 300px;
    width: 100%;
    user-select: none;
}

.cell-w-wire__setup-button {
    background-image: url(ic_more_vert_white_24px.svg);
    background-position: top 1px left 1px;
    background-repeat: no-repeat;
    background-size: 24px;
    cursor: pointer;
    height: 24px;
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
}

.cell-w-wire__header {
    border-bottom: 1px solid #005578;
    font-size: 24px;
    margin-bottom: 0;
    padding-bottom: 10px;
    position: relative;
}

.cell-w-wire__connection-status {
    width: 100%;
    padding: 10px 0;
}

.cell-label__warning {
    background-color: #ff5a5a;
    border-radius: 5px;
    color: #fff;
    font-size: 13px;
    padding: 2px 4px 1px;
}

.cell-w-wire__card {
    border-bottom: 1px solid #005578;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    font-size: 13px;
    margin-bottom: 0;
    padding: 8px 0 5px;
    position: relative;
    overflow-y: hidden;
    animation: appear-kf 0.5s linear;
}

.cell-w-wire__card:last-child {
    margin-bottom: 0;
}

.cell-w-wire__card--filtered {
    opacity: 0.4;
}

.cell-w-wire__card__content__time {
    color: #afafaf;
    margin-bottom: 5px;
    animation: card-time 3.5s linear;
}

.cell-w-wire__card__flashes {
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid yellow;
    border-width: 0 0 0 2px;
    margin-bottom: 5px;
    padding: 6px 6px 0px;
    width: 100%;
}

.cell-w-wire__card__flashes:empty {
    display: none;
}

.cell-w-wire__card__calendar__table {
    border-spacing: 0;
    table-layout: fixed;
    width: 100%;
}

.cell-w-wire__card__calendar__table__col1 {
    text-align: left;
    width: 50%;
}

.cell-w-wire__card__calendar__table__col2,
.cell-w-wire__card__calendar__table__col3,
.cell-w-wire__card__calendar__table__col4,
.cell-w-wire__card__calendar__table__col5 {
    text-align: right;
    width: 12.5%;
}

.cell-w-wire__card__calendar__table__header-cell {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-weight: bold;
    padding: 0 0 4px;
}

.cell-w-wire__card__calendar__table__cell {
    padding: 4px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    white-space: nowrap;
}

.cell-w-wire__card__calendar__table__cell > .cell-flag {
    margin-top: 1px;
}

.cell-w-wire__card__calendar__table__cell:empty::after {
    content: '-';
}

.cell-w-wire__card__flashes--collapsed .cell-w-wire__card__flashes__item:nth-child(n + 3) {
    border-width: 0;
    height: 0;
    overflow: hidden;
    padding-top: 0;
    padding-bottom: 0;
    transition: all ease-out 0.15s;
}

.cell-w-wire__card__calendar--collapsed:nth-child(n + 3) td {
    display: none;
}

.cell-w-wire__card__flashes__item {
    padding: 0 0 6px;
    line-height: 1.25;
    transition: all ease-out 0.15s;
}

.cell-w-wire__card__flashes__item__time {
    padding-right: 5px;
    animation: card-time 3.5s linear;
}

.cell-w-wire__card__calendar__item {
    padding: 0 0 3px;
    line-height: 1.25;
    transition: all ease-out 0.15s;
}

.cell-w-wire__card__content__header {
    cursor: pointer;
    display: block;
    font-weight: bold;
    line-height: 1.25;
    margin-bottom: 5px;
    padding: 0;
}

.cell-w-wire__card__content__header:empty {
    display: none;
}

.cell-w-wire__card__content__header:hover {
    text-decoration: underline;
}

.cell-w-wire__card__content__header--read {
    opacity: 0.6;
}

.cell-w-wire__card__content__header__description {
    display: block;
    font-style: italic;
    line-height: inherit;
    padding: 3px;
}

.cell-w-wire__card__pill-wrapper {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 2px 0 3px;
    max-width: 100%;
    overflow: hidden;
}

.cell-w-wire__card__pill-wrapper:empty {
    display: none;
}

.cell-w-wire__card__pill-wrapper__pill {
    background-color: #009cdc;
    border-radius: 5px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    margin-right: 5px;
    padding: 2px 4px 1px;
    text-transform: uppercase;
    white-space: nowrap;
}

.cell-w-wire__card__pill-wrapper__pill--type {
    background-color: #fff;
    color: #111;
}

.cell-w-wire__card__pill-wrapper__pill--alert {
    background-color: #ff5a5a;
    color: #fff;
}

.cell-w-wire__card__pill-wrapper__pill--motion {
    background-color: #00838f;
    color: #fff;
}

.cell-w-wire__card__score {
    background-color: transparent;
    color: rgba(255, 255, 255, 0.3);
    font-size: 12px;
    font-weight: bold;
    margin: 0 0 0 3px;
    padding: 0px 4px;
    position: absolute;
    right: 0;
    top: 10px;
}

.cell-w-wire__card__market-data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    padding: 5px;
}

.cell-w-wire__card__market-data__item {
    margin-right: 6px;
}

.cell-w-wire__card__footer__content:empty,
.cell-w-wire__card__market-data__item:empty,
.cell-w-wire__card__footer__clicker:empty {
    display: none;
}

.cell-w-wire__card__footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
}

.cell-w-wire__card__footer__content {
    align-items: center;
    display: flex;
    height: 24px;
}

.cell-w-wire__card__footer__clicker {
    align-items: center;
    background-image: url(baseline-keyboard_arrow_down-24px.svg);
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 24px;
    cursor: pointer;
    display: flex;
    height: 24px;
    padding: 0 24px 0 5px;
}

.cell-w-wire__card__footer__clicker--expanded {
    background-image: url(baseline-keyboard_arrow_up-24px.svg);
}

.cell-w-wire__card__footer__clicker:hover {
    background-color: #003e59;
}

.cell-w-wire__card__footer__clicker--alert {
    background-image: url(ic_notifications_active_white_18px.svg);
    background-size: 18px;
    background-position: top 4px right 0px;
}

.cell-w-wire__group {
    float: left;
    width: 100%;
    border: 1px solid #0a5373;
    border-bottom-width: 0;
    margin: 2px 0 10px;
    padding: 0;
}

.cell-w-wire__box {
    float: left;
    width: 100%;
    border: 1px solid #0a5373;
    margin: 2px 2px 7px;
    padding: 10px;
}

.cell-w-wire__group__row {
    align-items: center;
    width: 100%;
    height: 46px;
    border-bottom: 1px solid #0a5373;
    padding: 0 10px;
}

.cell-slider__wrapper {
    margin: 8px 0;
}

.cell-slider__range-wrapper {
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
}

.cell-slider__range-holder {
    position: relative;
}

.cell-slider__range-background {
    background: #9e9e9e;
    display: block;
    height: 4px;
    margin-top: -4px;
    width: 100%;
}

.cell-slider__selected-range {
    background: #0098ca;
    display: block;
    height: 4px;
    margin-top: -4px;
    width: 100%;
}

.cell-slider__bullets-container {
    /*width: 100%;*/
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.cell-slider__bullet-item__marker {
    width: 8px;
    height: 4px;
    margin-top: -4px;
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.cell-slider__bullet-item__label {
    margin-left: -23px;
    width: 50px;
    float: left;
    position: absolute;
    text-align: center;
    margin-top: 12px;
    cursor: pointer;
}

.cell-slider__bullet {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    background: #0098ca;
    left: -5.5px;
    top: -5.5px;
    cursor: pointer;
}

.cell-description {
    color: #0098ca;
    display: block;
}

@keyframes appear-kf {
    0% {
        opacity: 0;
        transform: translateX(15px);
        max-height: 0;
    }

    50% {
        opacity: 0;
        transform: translateX(15px);
        max-height: 200px;
    }

    100% {
        opacity: 1;
        transform: translateX(0);
        max-height: 200px;
    }
}

@keyframes card-time {
    0% {
        color: #ffee58;
    }

    80% {
        color: #ffee58;
    }

    100% {
        color: #afafaf;
    }
}

/* New toolkit classes, to be used on WT settings as well */
.cell-list-row-group {
    border: 1px solid #0a5373;
    border-bottom-width: 0;
    float: left;
    margin: 2px 0 7px;
    width: 100%;
}

.cell-list-row {
    align-items: center;
    border-bottom: 1px solid #0a5373;
    display: flex;
    height: 46px;
    padding: 0 10px;
    width: 100%;
}

.cell-list-row--tall {
    height: 60px;
}

.cell-list-row__col1 {
    display: flex;
    flex-grow: 2;
    flex-direction: column;
}

.cell-list-row__col2 {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
}

.cell-list-label {
    float: left;
    margin: 2px 0;
}

.cell-list-label--desc {
    color: #5bd8ff;
}

.cell-w-wire__slider-values {
    color: #5bd8ff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

/* Not sure if these rewrites are ok */
.cell-super-absolute {
    width: 100%;
}

.cell-w-wire-settings .cell-tooltip {
    max-width: 500px;
    min-width: 300px;
    width: 100%;
    user-select: none;
}
```

