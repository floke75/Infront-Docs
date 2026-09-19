---
title: "League Table widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "VisualWidgets"
widget_id: "LeagueTableWidget"
option_count: 5
options: ["target", "options", "region", "nbtop", "nbbot"]
source_url: "https://doc.infrontfinance.com/v2/VisualWidgets#LeagueTableWidget"
---

# League Table widget

```javascript
InfinWidget = InfrontUI.LeagueTableWidget(target, [options]);
```

TOP 10 market capitalizations within the selected market/sector.
This widget can be linked to world map and sectors momentum widgets.

### `target`

- **Type:** `String or HTMLElement`

An identifier for the target element. If a string it will be interpreted as an element id.

### `options`

- **Type:** `Object`
- **Required:** No

A map of configuration-options.

### Configuration options

### `region`

- **Type:** `String`
- **Required:** No
- **Default:** `InfinancialsConstants.Regions.WORLD`

Available Regions:

- InfinancialsConstants.Regions.WORLD
- InfinancialsConstants.Regions.AFRIC
- InfinancialsConstants.Regions.ASIAC
- InfinancialsConstants.Regions.EUROP
- InfinancialsConstants.Regions.LATAM
- InfinancialsConstants.Regions.NAMER
- InfinancialsConstants.Regions.SOPAC

### `nbtop`

- **Type:** `Integer`
- **Required:** No
- **Default:** `InfinancialsConstants.Utils.NB_10`

Available options to display Top companies:

- InfinancialsConstants.Utils.NB_10
- InfinancialsConstants.Utils.NB_5
- InfinancialsConstants.Utils.NB_0

### `nbbot`

- **Type:** `Integer`
- **Required:** No
- **Default:** `InfinancialsConstants.Utils.NB_0`

Available options to display Flop companies:

- InfinancialsConstants.Utils.NB_10
- InfinancialsConstants.Utils.NB_5
- InfinancialsConstants.Utils.NB_0

### Example

```html
<script>
    var opts = new Infinancials.LeaugueTableWidgetOptions();
    opts.columns = [
        "POSITION",
        "COMPANY_NAME",
        "LT_MARKET_CAP",
        {
            name: "ACTION_BUTTON",
            content:"<div class='cell-link--chain' title='Update linked widgets'></div>",
            onClick:function(rowId, value) {
                if(rowId.hasOwnProperty('instrument')) {
                    var msg = new InterLibraryLink.Message(InterLibraryLink.DataType.infinInstrument, rowId['instrument']);
                    InterLibraryLink.ControllerLinkFactory.getInstance(). =broadcastMessage(msg);
                }
            }
        }
    ];
    var ltWidget = infinancialsUI.LeagueTableWidget("leagueTable", opts);
</script>
...
<div id="leagueTable"></div>
```
