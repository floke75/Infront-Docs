---
title: "Equity Trade booster widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "EtaWidget"
option_count: 12
options: ["target", "options", "company", "mode", "universe", "showFaq", "buyLabel", "buyAction", "sellLabel", "sellAction", "selectLabel", "selectAction"]
source_url: "https://doc.infrontfinance.com/v2/VisualWidgets#EtaWidget"
---

# Equity Trade booster widget

```javascript
InfinWidget = InfinancialsUI.EtaWidget(target, [options]);
```

Scores a company based on 4 strategies (value, momentum, growth and quality) and proposes alternatives investment ideas to a company with optional filters on industries and macro regions.

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

The company ISIN or Infinancials code

### `mode`

- **Type:** `EtaMode`
- **Required:** No
- **Default:** `EtaMode.SCORE`

Available mode options:

- EtaMode.SCORE
- EtaMode.SECTOR

### `universe`

- **Type:** `String`
- **Required:** Yes

This parameter define the company universe we will look into and find alternatives.

### `showFaq`

- **Type:** `Boolean`
- **Required:** No

Display a FAQ Link on the bottom.

### `buyLabel`

- **Type:** `String`

**Required**  No **Default**  "Buy" Define Buy button label - Available in the language map as: etaWidget.buttonBuy

### `buyAction`

- **Type:** `Function`

**Required**  No **Prototype**  (eta:EtaObject)=>{} This function will have an EtaObject has first argument; here is the EtaObject declaration:

- **company:** String
  Company isin code
- **name:** String
  Company name - you've clicked on.
- **ticker:** String
  Company Ticker
- **growth:** Integer
  Company Growth score.
- **quality:** Integer
  Company Quality score.
- **momentum:** Integer
  Company Momentum score.
- **value:** Integer
  Company Value score.

### `sellLabel`

- **Type:** `String`

**Required**  No **Default**  "Sell" Define Sell button label - Available in the language map as: etaWidget.buttonSell

### `sellAction`

- **Type:** `Function`

**Required**  No **Prototype**  (eta:EtaObject)=>{} This function will have an EtaObject has first argument - see EtaObject declaration above.

### `selectLabel`

- **Type:** `String`

**Required**  No **Default**  "Company overview" Define Sell button label - Available in the language map as: etaWidget.buttonSelect

### `selectAction`

- **Type:** `Function`

**Required**  No **Prototype**  (eta:EtaObject)=>{} This function will have an EtaObject has first argument - see EtaObject declaration above.

### Example

```html
<script type="text/javascript">
    var opts = new Infinancials.EtaWidgetOptions();
    opts.company = "US0378331005";
    opts.universe = "FULL";
    opts.selectAction = function(eta) {
        var msg = new InterLibraryLink.Message(InterLibraryLink.DataType.isin, eta.company);
        InterLibraryLink.ControllerLinkFactory.getInstance().broadcastMessage(msg);
    };
    opts.buyLabel = "BUY BUTTON";
        opts.buyAction = function(eta) {
        alert("Buy window - etaObject = ", eta);
    };
    opts.sellLabel = "SELL BUTTON";
        opts.sellAction = function(eta) {
        alert("Sell window - etaObject = ", eta);
    };
    opts.showFaq = true;
    var etaWidget = infinancialsUI.EtaWidget("eta", opts);
</script>
...
<div id="eta"></div>
```
