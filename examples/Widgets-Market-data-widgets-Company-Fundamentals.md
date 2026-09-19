---
title: "Company Fundamentals"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Company Fundamentals"
description: "Displays company fundamentals with customizable rows and instrument selection."
tags: ["company-fundamentals-widget", "CompanyFundamentalsWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Company Fundamentals","description":"Displays company fundamentals with customizable rows and instrument selection.","modify_date":"2021-05-10T14:54:57","owner":"","tags":["company-fundamentals-widget","CompanyFundamentalsWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/CompanyFundamentals"
source_files: ["script.ts", "template.html", "config.json"]
---

# Company Fundamentals

Displays company fundamentals with customizable rows and instrument selection.

## Script (script.ts)

```typescript
/*Sweden only*/

var opts = new Infront.CompanyFundamentalsWidgetOptions();
opts.actualLimit = -2;
opts.estimateLimit = 2;
opts.hideEstimates = false;
opts.estimatesSubfix = "e";
            
opts.instrument = new Infront.Instrument(17921, "SHB B");

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
Infront.CompanyFundamentalsRows.Eget_kapital,
Infront.CompanyFundamentalsRows.Netto_resultat,
Infront.CompanyFundamentalsRows.Total_costs,
Infront.CompanyFundamentalsRows.Total_assets,
Infront.CompanyFundamentalsRows.Stocks,
Infront.CompanyFundamentalsRows.Dividend_per_share,
Infront.CompanyFundamentalsRows.EPS,
Infront.CompanyFundamentalsRows.EPS_adjusted,
Infront.CompanyFundamentalsRows.EarningsYield,
Infront.CompanyFundamentalsRows.EarningsYieldAdjusted,
Infront.CompanyFundamentalsRows.EBIT,
Infront.CompanyFundamentalsRows.EBITA,
Infront.CompanyFundamentalsRows.EBITDA
];

widget = infront.companyFundamentals("#companydescription", opts);
```

## Markup (template.html)

```html
<div class="cell-row" id="companydescription"></div>
```

