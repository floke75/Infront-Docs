---
title: "Screener widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "ScreenerWidget"
option_count: 7
options: ["target", "options", "universe", "industry", "financials", "enableCriteria", "nbCriteria"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#ScreenerWidget"
---

# Screener widget

```javascript
InfinWidget = InfinancialsUI.ScreenerWidget(target, [options]);
```

The Market Screener tool allows users to filter the database according to a set of user-defined criteria. It is useful for a variety of purposes, such as finding the best investment opportunities, or company peers in a specific business sector.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`

A map of configuration-options.

### Configuration options

### `universe`

- **Type:** `ScreenerUniverseOptions`
- **Required:** No

A map of configuration-options to define the Universe parameters:

```javascript
class ScreenerUniverseOptions {
    /* This is a Object containing: include or exclude -- string[] values.*/
    location: Object;
    
    index: string[];
    marketplace: string[];
    onlyactivecompanies: boolean;   /* If true, display only active companies. */
    onlyestimates: boolean;         /* If true, display only companies with estimates. */
    onlygprv: boolean;              /* If true, display only companies with GPRV Chart available. */
}
```

### `industry`

- **Type:** `ScreenerIndustryOptions`
- **Required:** No

A map of configuration-options to define the Industry parameters:

```javascript
class ScreenerIndustryOptions {
    keywords: string; /* Search for companies with specifics keywords in their business summary. */
}
```

### `financials`

- **Type:** `ScreenerFinancialsOptions`
- **Required:** No

A map of configuration-options to define the Financials parameters:

```javascript
class ScreenerFinancialsOptions {
    fields: String[];   /* Define the field you want to display - based on InfinancialsConstants.ScreenerFields */
    fieldsLimit: Object /* Oject with two attributes: min and max. Define the minimum or/and the maximum value for this fields. */
}
```

Available ScreenerFields constants, InfinancialsConstants.ScreenerFields:

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

### `enableCriteria`

- **Type:** `Boolean`
- **Required:** No

Enable criteria selection.

### `nbCriteria`

- **Type:** `Integer`
- **Required:** No

Define mow many criteria select box we want to display (up to 2).

### Example

```html
<script>
    var opts = new Infinancials.ScreenerWidgetOptions();
    opts.enableCriteria = true;
    opts.nbCriteria = 1;
    opts.universe = new Infinancials.ScreenerUniverseOptions();
    opts.universe.location = {
        include: ["USA","FRA"]
    }
    opts.financials = new Infinancials.ScreenerFinancialsOptions();
    opts.financials.field = [InfinancialsConstants.ScreenerFields.MARKET_CAP];
    opts.columns= [
        "FLAG"
        "COMPANY_NAME",
        {
            name: "FIELD",
            heading: new Infront.Observable(),
        },{
            name: "ACTION_BUTTON",
            heading: "",
            sortable: false,
            content:"<div class='cell-link--chain' title='Update linked widgets'></div>",
            onClick:function(lineId, value,extras) {
                var msg = new InterLibraryLink.Message(InterLibraryLink.DataType.infinInstrument, extras['instrument']);
                InterLibraryLink.ControllerLinkFactory.getInstance(). broadcastMessage(msg);
            }
        }
    ];
    var scWidget= infinancialsUI.ScreenerWidget("screener", opts);
</script>
...
<div id="screener"></div>
```
