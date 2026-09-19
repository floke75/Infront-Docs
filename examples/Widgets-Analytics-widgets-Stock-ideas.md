---
title: "Stock ideas"
kind: example
page_type: example
product: "Infront Web Toolkit"
version: "4.3.1"
nav_path: "Widgets > Analytics widgets > Stock ideas"
description: "Displays a stock ideas widget using EtaWidgetOptions for a given company."
tags: ["stock-ideas-widget", "EtaWidgetOptions", "widgets", "examples", "wtk", "requests"]
example_config: {"title":"Stock ideas","description":"Displays a stock ideas widget using EtaWidgetOptions for a given company.","modify_date":"2021-05-26T11:17:33","owner":"","tags":["stock-ideas-widget","EtaWidgetOptions","widgets","examples","wtk","requests"]}
source_url: "https://docs.infrontfinance.com/examples/Widgets/Widgets/Analyticswidgets/Stockideas"
source_files: ["script.ts", "template.html", "config.json"]
---

# Stock ideas

Displays a stock ideas widget using EtaWidgetOptions for a given company.

## Script (script.ts)

```typescript

var opts = new Infinancials.EtaWidgetOptions();
opts.company = "US0378331005";
opts.universe = "FULL";
var buttonSelect = new Infinancials.ButtonObject();
buttonSelect.action = function (instrument) {
    var msg = new InterLibraryLink.Message(InterLibraryLink.DataType.infinInstrument, instrument);
    console.log("InterLibraryLink.ControllerLinkFactory.getInstance() ===> ", InterLibraryLink.ControllerLinkFactory.getInstance());
    InterLibraryLink.ControllerLinkFactory.getInstance().broadcastMessage(msg);
};
buttonSelect.label = 'Overview';
buttonSelect.cssClass = "cell-no-margin-bottom cell-button cell-button--confirm cell-pull-left";

var buttonBuySell = new Infinancials.ButtonObject();
buttonBuySell.action = function (instrument) {
    alert("BUY/SELL",instrument);
};
buttonBuySell.label = "BUY/SELL";
buttonBuySell.cssClass = "cell-5-margin-left cell-no-margin-bottom cell-button cell-button--confirm cell-pull-left";

opts.buttonList = [buttonSelect,buttonBuySell];
opts.isInfrontWT=true;
opts.showFaq = true;
var etaWidget = infinancialsUI.EtaWidget("eta", opts);
```

## Markup (template.html)

```html
<div id="eta"></div>
```

