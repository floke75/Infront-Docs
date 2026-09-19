---
title: "Quotelistcustomdropdown"
kind: widget-snippet
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widget snippets > Quotelistcustomdropdown"
description: "Test snippet for Quotelistcustomdropdown"
tags: ["widget", "test", "widget:DropDown", "widget:quoteList"]
demonstrates: ["DropDown", "quoteList"]
example_config: {"title":"Quotelistcustomdropdown","description":"Test snippet for Quotelistcustomdropdown","modify_date":"2025-12-16","owner":"Infront","tags":["widget","test","widget:DropDown","widget:quoteList"],"flags":{"show_description":true,"show_creator":true,"show_date":true,"show_metadata":true}}
source_url: "https://docs.infrontfinance.com/tests/Quotelistcustomdropdown"
source_files: ["script.ts", "template.html", "config.json"]
---

# Quotelistcustomdropdown

Test snippet for Quotelistcustomdropdown

Demonstrates: `DropDown`, `quoteList`

## Script (script.ts)

```typescript
//var feed = 17952; //Warrants
var feed = 18177; //OSS
//var feed = 17924; //Bonds
//var feed = 17923; //Options Stockholm
opts = new Infront.QuoteListWidgetOptions();
opts.columns = [
    {
        name: 'TICKER',
        hover: 'FULL_NAME',
        flag: true,
    },
    'BID',
    'ASK',
    'STRIKE_PRICE',
    'EXPIRY_DATE',
    'S_DATETIME',
    'ISSUER',
    'ISSUER_FULL_NAME',
    'FEED',
];
opts.sortable = true;
opts.enableChangeStatusColors = true;
opts.feed = feed;
opts.showFilters = true;
opts.enableColumnsResize = true;
opts.enableColumnsMove = true;

var srcDrp = new Infront.DropDownOptions();
srcDrp.title = 'Source';
srcDrp.list = ['Nasdaq Stockholm, Warrants', 'NDX Sweden Warrants'];
srcDrp.preSelectedItems = srcDrp.list[0];
srcDrp.closeOnClick = true;
srcDrp.sortAlphabetically = false;
srcDrp.onItemClicked = (item) => {
    alert('You clicked this: ' + item);
};

opts.customDropDowns = [srcDrp];

infront.quoteList('#quotelist', opts);
```

## Markup (template.html)

```html
<div class="container">
    <div class="cell-row">
        <div class="cell cell--w8" id="quotelist"></div>
    </div>
</div>
```

