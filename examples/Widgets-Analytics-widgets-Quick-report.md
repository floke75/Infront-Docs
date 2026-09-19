---
title: "Quick report"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Quick report"
description: "Displays a quick report widget using QRWidgetOptions for a given company."
tags: ["quick-report-widget", "QRWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Quick report","description":"Displays a quick report widget using QRWidgetOptions for a given company.","modify_date":"2021-05-26T11:12:28","owner":"","tags":["quick-report-widget","QRWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Quickreport"
source_files: ["script.ts", "template.html", "config.json"]
---

# Quick report

Displays a quick report widget using QRWidgetOptions for a given company.

## Script (script.ts)

```typescript

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
```

## Markup (template.html)

```html
<div id="quickreport"></div>
```

