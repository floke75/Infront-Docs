---
title: "Stock Ideas Generator widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "EtaWidget"
option_count: 9
options: ["target", "options", "company", "view", "mode", "universe", "showFaq", "buttonList", "isInfrontWT"]
source_url: "https://doc.infrontfinance.com/v3/VisualWidgets#EtaWidget"
---

# Stock Ideas Generator widget

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

### `view`

- **Type:** `EtaView`
- **Required:** No
- **Default:** `EtaView.FULL`

Available mode options:

- EtaView.FULL
- EtaView.CARD

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

### `buttonList`

- **Type:** `ButtonObject[]`
- **Required:** No

This option will have an ButtonObject Array; here is the ButtonObject declaration:

- **label:** String
  Label display inside the button
- **cssClass:** String
  Class of the button
- **action:** (this,eta) => {}
  Define the functions behavior

### `isInfrontWT`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

This parameter define the type of display.

### Example

```html
<script type="text/javascript">
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
</script>
...
<div id="eta"></div>
```
