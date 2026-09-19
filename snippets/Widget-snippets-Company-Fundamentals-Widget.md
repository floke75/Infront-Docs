---
title: "Company Fundamentals Widget"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Company Fundamentals Widget"
description: "Test snippet for Companyfundamentalswidget"
tags: ["widget", "test", "widget:CompanyFundamentalsWidget", "widget:companyFundamentals"]
demonstrates: ["CompanyFundamentalsWidget", "companyFundamentals"]
example_config: {"title":"Company Fundamentals Widget","description":"Test snippet for Companyfundamentalswidget","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:CompanyFundamentalsWidget","widget:companyFundamentals"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Companyfundamentalswidget"
source_files: ["script.ts", "template.html", "config.json"]
---

# Company Fundamentals Widget

Test snippet for Companyfundamentalswidget

Demonstrates: `CompanyFundamentalsWidget`, `companyFundamentals`

## Script (script.ts)

```typescript
var opts = new Infront.CompanyFundamentalsWidgetOptions();
//opts.actualLimit = -2;
//opts.estimateLimit = 2;
opts.hideEstimates = false;
opts.estimatesSubfix = 'e';
opts.layout = Infront.ListLayout.FLEX;
opts.accessId = 1; // SEB access
opts.instrument = new Infront.Instrument(17921, 'ACAD');
opts.rows = [
    Infront.CompanyFundamentalsRows.PSales,
    Infront.CompanyFundamentalsRows.EV_Sales,
    Infront.CompanyFundamentalsRows.PE_Adjusted,
    Infront.CompanyFundamentalsRows.ROE,
    Infront.CompanyFundamentalsRows.Dividend_yield,
    Infront.CompanyFundamentalsRows.Change_y,
    Infront.CompanyFundamentalsRows.Credit_losses,
    Infront.CompanyFundamentalsRows.PE,

    Infront.CompanyFundamentalsRows.Revenue,
    Infront.CompanyFundamentalsRows.Net_commission_income,
    Infront.CompanyFundamentalsRows.Net_interest_income,
    Infront.CompanyFundamentalsRows.Profit_before_tax,
    Infront.CompanyFundamentalsRows.Profit_after_tax,
    Infront.CompanyFundamentalsRows.Total_income,

    Infront.CompanyFundamentalsRows.FINANS_NETTO,

    Infront.CompanyFundamentalsRows.Total_costs,
    Infront.CompanyFundamentalsRows.Total_assets,

    Infront.CompanyFundamentalsRows.Stocks,
    Infront.CompanyFundamentalsRows.Dividend_per_share,
    Infront.CompanyFundamentalsRows.EPS,
    Infront.CompanyFundamentalsRows.EPS_adjusted,

    Infront.CompanyFundamentalsRows.EBIT,
    Infront.CompanyFundamentalsRows.EBITA,
    Infront.CompanyFundamentalsRows.EBITDA,
];
widget = infront.companyFundamentals('#fundamentals', opts);
```

## Markup (template.html)

```html
<div id="fundamentals"></div>
```

