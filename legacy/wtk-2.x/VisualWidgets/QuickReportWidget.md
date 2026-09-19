---
title: "Quick Report widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "QuickReportWidget"
option_count: 6
options: ["target", "options", "company", "columns", "median", "medianPosition"]
source_url: "https://doc.infrontfinance.com/v2/VisualWidgets#QuickReportWidget"
---

# Quick Report widget

```javascript
InfinWidget = InfinancialsUI.QRWidget(target, [options]);
```

This widget displays in a table financial criteria you select for a list of peers.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### Configuration options

### `company`

- **Type:** `String`
- **Required:** No

### `columns`

- **Type:** `Array<any>`
- **Required:** No

Available columns for the QuickReport Widget, InfinancialsConstants.QRColumnsNames:

|  |  |  |  |
|---|---|---|---|
| MARKET_CAP | NET_SALES | NET_SALES_3YEARS_CAGR | EST_NET_SALES_GR2 |
| EST_EPS_GR2 | EV_EBITDA | EST_EV_EBITDA_FY0 | EST_EV_EBITDA_FY1 |
| PRICE_EARNINGS | EST_PRICE_EARNINGS_FY0 | EST_PRICE_EARNINGS_FY1 | P_BOOK |
| EST_P_BOOK_FY0 | EST_P_BOOK_FY1 | EBIT_MARGIN | EST_EBIT_MARGIN_FY0 |
| EST_EBIT_MARGIN_FY1 | NET_DEBT_EQUITY | EST_DIV_YIELD_FY0 | EST_DIV_YIELD_FY1 |
| STOCK_1W_VAR | STOCK_1M_VAR | STOCK_3M_VAR | STOCK_1JAN_VAR |
| EPS_NTM_4W | LEVERED_BETA_1Y | RECOMMENDATION | UPSIDE_MED_TARGET |
| GRPV_G_SCORE | GRPV_P_SCORE | GRPV_R_SCORE | GRPV_V_SCORE |
| YTD_PRICE_CHANGE |  |  |  |

### `median`

- **Type:** `Boolean`
- **Required:** No
- **Default:** `False`

Display a median row in the result table.

### `medianPosition`

- **Type:** `Integer`
- **Required:** No

Define where do you want to display the median row.

### Example

```html
<script>
    var opts = new Infinancials.QRWidgetOptions();
    opts.company = "US0378331005";
    opts.columns= ["FLAG", {
        name: "COMPANY_NAME",
        onClick: function(rowId, value) {
            if(rowId.hasOwnProperty('instrument')) {
                var msg = new InterLibraryLink.Message(InterLibraryLink.DataType.infinInstrument, rowId['instrument']);
                alert(msg);
            }
        }
    },
    InfinancialsConstants.QRColumnsNames.MARKET_CAP, 
    InfinancialsConstants.QRColumnsNames.LEVERED_BETA_1Y, 
    InfinancialsConstants.QRColumnsNames.YTD_PRICE_CHANGE];
    opts.median = true;
    opts.medianeposition = 1;
    var qrWidget = infinancialsUI.QRWidget("quickreport", opts);
</script>
...
<div id="quickreport"></div>
```
