---
title: "Carnegieordersfiltering"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Carnegieordersfiltering"
description: "Test snippet for Carnegieordersfiltering"
tags: ["widget", "test", "widget:PortfolioSelectWidget", "widget:ordersWidget", "widget:portfolioSelectWidget"]
demonstrates: ["PortfolioSelectWidget", "ordersWidget", "portfolioSelectWidget"]
example_config: {"title":"Carnegieordersfiltering","description":"Test snippet for Carnegieordersfiltering","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:PortfolioSelectWidget","widget:ordersWidget","widget:portfolioSelectWidget"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true},"styles":["../themes/light-latest/theme.css"]}
source_url: "https://docs.infrontfinance.com/tests/Carnegieordersfiltering"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Carnegieordersfiltering

Test snippet for Carnegieordersfiltering

Demonstrates: `PortfolioSelectWidget`, `ordersWidget`, `portfolioSelectWidget`

## Script (script.ts)

```typescript
// for (let key of Object.keys(Infront.CustomValidityLookup)) {
//     delete Infront.CustomValidityLookup[key];
// }
// Infront.CustomValidityLookup["Xs:21=1"] = "GTC";

var opts = new Infront.PortfolioSelectWidgetOptions();
opts.id = 'pww1';
infront.portfolioSelectWidget('#portfolio-selector', opts);

const filter1 = (item) => {
    const orderCreatedToday = InfrontUtil.isToday(item.CreateDate);
    const orderStatus = Infront.orderStatusToStr(item.OrderStatus);

    const test =
        orderCreatedToday ||
        (!orderCreatedToday &&
            Infront.OrdersWidget.deletableOrderStatuses.indexOf(orderStatus) > -1);

    return test;
};

infront.ordersWidget('#orders1', ordersOptions(true, false, filter1));
infront.ordersWidget('#orders2', ordersOptions(false, true));
// infront.ordersWidget("#orders3", ordersOptions(true, true));
// infront.ordersWidget("#orders4", ordersOptions(undefined, undefined));
```

## Markup (template.html)

```html
<div id="root">
    <div class="cell-row">
        <div class="cell cell--w12"></div>
        <div class="portfolio-selector" id="portfolio-selector"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w6">
        <div class="cell-content" id="orders1"></div>
    </div>
    <div class="cell cell--w6">
        <div class="cell-content" id="orders2"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w6">
        <div id="orders3" class="cell-content"></div>
    </div>
    <div class="cell cell--w6">
        <div id="orders4" class="cell-content"></div>
    </div>
</div>
```

## Styles (style.css)

```css
.portfolio-selector {
    float: right;
    width: auto;
}
```

