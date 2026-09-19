---
title: "Column Chooser"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Market data widgets > Column Chooser"
description: "Displays a quote list widget with a column chooser and customizable columns using QuoteListWidgetOptions."
tags: ["quote-list-widget", "QuoteListWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Column Chooser","description":"Displays a quote list widget with a column chooser and customizable columns using QuoteListWidgetOptions.","modify_date":"2020-10-13T07:14:04","owner":"","tags":["quote-list-widget","QuoteListWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Marketdatawidgets/ColumnChooser"
source_files: ["script.ts", "template.html", "config.json"]
---

# Column Chooser

Displays a quote list widget with a column chooser and customizable columns using QuoteListWidgetOptions.

## Script (script.ts)

```typescript
const quoteListWidgetOpts = new Infront.QuoteListWidgetOptions();
quoteListWidgetOpts.feed = 26;
quoteListWidgetOpts.sortable = true;
quoteListWidgetOpts.enableChangeStatusColors = true;
quoteListWidgetOpts.showFilters = false;
quoteListWidgetOpts.instrumentTypes = ["STOCK"];
quoteListWidgetOpts.widgetTitle = "Quote List Widget";
quoteListWidgetOpts.sortable = true;
quoteListWidgetOpts.defaultSortedColumn = 0;
quoteListWidgetOpts.id = "test0-light";
quoteListWidgetOpts.loadSavedColumns = true;
quoteListWidgetOpts.enableColumnsMove = true;
quoteListWidgetOpts.instruments = [
    new Infront.Instrument(26, "BMW"),
    new Infront.Instrument(26, "ADS"),
    new Infront.Instrument(26, "SAP"),
    new Infront.Instrument(26, "DTE"),
    new Infront.Instrument(26, "ALV")
];
quoteListWidgetOpts.columns = [
    {
        name: "FULL_NAME",
        //frozen: "left"
    },
    {
        "name": "s_market_price",
        "footer": "sum"
    },
    {
        "name": "CHANGE",
        "heading": "Change",
        "locked": true
    },
    {
        "name": "LAST",
        "footer": "sum",
        "hover": "FULL_NAME",
    },
    {
        "name": "DELETEBUTTON",
        "type": "custom",
        "heading": "",
        "visible": true,
        "frozen": "right",
        "content": "<span class=\"cell-table__deletebutton\"></span>",
        "className": "cell-tablecell--interaction--full-button",
        "onClick": (item, value) => alert("You clicked this row: " + JSON.stringify(item))
    }
];
quoteListWidgetOpts.availableColumns = [
    {
        "name": "TICKER",
        "categories": ["Most used", "Common"]
    },
    {
        "name": "TICKER",
        "heading": "Ticker",
        "id": "SymbolB",
        "categories": ["Most used", "Common"]
    },
    {
        "name": "TICKER_",
        "heading": "Red Ticker",
        "id": "RedSymbol",
        "type": "computed",
        "computeFields": ["TICKER"],
        "compute": (rowId, args) => {
            if (args[0]) {
                if (args[0].length < 4)
                    return "<span style=\"color: red;\">+" + args[0] + "</span>";
                else
                    return args[0];
            }
            return "";
        },
        "categories": ["Most used", "Common"]
    },
    {
        "name": "FULL_NAME",
        "categories": ["Most used", "Common"]
    },
    {
        "name": "ISIN",
        "categories": ["Most used", "Other"]
    },
    "PCT_CHANGE",
    {
        "name": "CHANGE",
        "heading": "Change"
    }
];
const quoteListWidget = infront.quoteList("#quotelist", quoteListWidgetOpts);
const columnCooserOpts = new Infront.ColumnChooserWidgetOptions();
columnCooserOpts.listWidget = quoteListWidget;

const columnChooserWidget = infront.columnChooserWidget("#columnChooser", columnCooserOpts);
```

## Markup (template.html)

```html
<div class="cell-row" id="columnChooser"></div>
<div class="cell-row" id="quotelist"></div>
```

