---
title: "Company Fundamentals Widget (Sweden only)"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "CompanyFundamentalsWidget"
extends: "SingleInstrumentWidgetOptions"
option_count: 5
options: ["actualLimit", "estimateLimit", "hideEstimates", "estimatesSubfix", "rows"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#CompanyFundamentalsWidget"
---

# Company Fundamentals Widget (Sweden only)

```javascript
InfrontWidget = Infront.companyFundamentals(target, [options]);
```

Extends [SingleInstrumentWidgetOptions](../CoreObjects/SingleInstrumentWidgetOptions.md)

This widget is used for displaying company fundamentals data.

### `actualLimit`

- **Type:** `number | undefined`
- **Required:** No

If number is positive negative, show years from beginning

### `estimateLimit`

- **Type:** `number | undefined`
- **Required:** No

Sets estimate limit

### `hideEstimates`

- **Type:** `boolean`
- **Required:** No

Hides estimates

### `estimatesSubfix`

- **Type:** `string`
- **Required:** No

Sets subfix for estimate numbers

### `rows`

- **Type:** `Infront.CompanyFundamentalsRows[]`
- **Required:** Yes

Sets an array that specifies what data fields to show

- CompanyFundamentalsRows.EV_Sales
- CompanyFundamentalsRows.PE_ratio
- CompanyFundamentalsRows.ROE
- CompanyFundamentalsRows.Dividend_yield
- CompanyFundamentalsRows.Change_y
- CompanyFundamentalsRows.Credit_losses
- CompanyFundamentalsRows.PE
- CompanyFundamentalsRows.Revenue
- CompanyFundamentalsRows.Net_commission_income
- CompanyFundamentalsRows.Net_interest_income
- CompanyFundamentalsRows.Profit_before_tax
- CompanyFundamentalsRows.Profit_after_tax
- CompanyFundamentalsRows.Total_income
- CompanyFundamentalsRows.Total_costs
- CompanyFundamentalsRows.Total_assets
- CompanyFundamentalsRows.Stocks
- CompanyFundamentalsRows.Dividend_per_share
- CompanyFundamentalsRows.EPS
- CompanyFundamentalsRows.EPS_adjusted
- CompanyFundamentalsRows.EBIT
- CompanyFundamentalsRows.EBITA
- CompanyFundamentalsRows.EBITDA

### Example

```html
<script type="text/javascript">
    /* This configuration creates a window to add or modify company fundamentals widget.
     */
    var opts = new Infront.CompanyFundamentalsWidgetOptions();
            opts.actualLimit = -2;
            opts.estimateLimit = 2;
            opts.hideEstimates = false;
            opts.estimatesSubfix = "e";
            
            opts.instrument = new Infront.Instrument(17921, "SHB B");

            opts.rows = [
                Infront.CompanyFundamentalsRows.EV_Sales,
                Infront.CompanyFundamentalsRows.PE_ratio,
                Infront.CompanyFundamentalsRows.ROE,
                Infront.CompanyFundamentalsRows.Dividend_yield,
                Infront.CompanyFundamentalsRows.Change_y,
                Infront.CompanyFundamentalsRows.Credit_losses,
                Infront.CompanyFundamentalsRows.PE,
            ];

            widget = infront.companyFundamentals("#companyFundamentals", opts);

</script>
...
<div id="companyFundamentals"></div>
```
