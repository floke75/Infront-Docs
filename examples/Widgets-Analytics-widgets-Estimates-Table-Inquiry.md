---
title: "Estimates Table Inquiry"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Estimates Table Inquiry"
description: "Displays an inquiry table for financial estimates using EstimatesTableInquiryWidget. Allows detailed analysis of quarterly and annual financial data."
tags: ["EstimatesTableInquiryWidget", "EstimatesTableInquiryWidgetOptions", "Analyticswidgets", "widgets", "examples", "wtk", "requests", "sdk"]
example_config: {"title":"Estimates Table Inquiry","description":"Displays an inquiry table for financial estimates using EstimatesTableInquiryWidget. Allows detailed analysis of quarterly and annual financial data.","modify_date":"2020-07-22T18:32:24","owner":"","tags":["EstimatesTableInquiryWidget","EstimatesTableInquiryWidgetOptions","Analyticswidgets","widgets","examples","wtk","requests","sdk"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/EstimatesTableInquiry"
source_files: ["script.ts", "template.html", "style.css", "config.json"]
---

# Estimates Table Inquiry

Displays an inquiry table for financial estimates using EstimatesTableInquiryWidget. Allows detailed analysis of quarterly and annual financial data.

## Script (script.ts)

```typescript
const opts = new Infinancials.EstimatesTableInquiryWidgetOptions();
opts.company = "90103EF";
opts.currency = -1;
opts.item = Infinancials.EstimatesTableInquiryItem.MAIN;
opts.period = Infinancials.EstimatesTableInquiryPeriodType.Quarterly;
opts.title = "INCOME STATEMENT";
opts.chartElement = "chartEstimatesInq";
const widget = visual.EstimatesTableInquiryWidget("estimatesDetailTable", opts);
```

## Markup (template.html)

```html
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="estimatesDetailTable"></div>
    </div>
</div>
<div class="cell-row">
    <div class="cell cell--w12">
        <div class="cell-content" id="chartEstimatesInq"></div>
    </div>
</div>
```

## Styles (style.css)

```css
/* DO NOT EDIT -----------------------------------------------
 * Needs to be here because of highchart dynamic overflow issue
 */
.cell-w-chart-estimates-inquiry .cell-clear.cell-chart-element {
  overflow: visible !important;
}
```

