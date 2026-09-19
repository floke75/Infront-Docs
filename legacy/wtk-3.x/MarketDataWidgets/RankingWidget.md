---
title: "Ranking widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "RankingWidget"
extends: "CommonListOptions"
option_count: 13
options: ["feed", "chain", "rows", "rankingPeriod", "rankingField", "instrumentTypes", "minTurnover", "columns", "streaming", "sortOrder", "enablePeriodSelector", "onInstrumentSelected", "customRanking"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#RankingWidget"
---

# Ranking widget

```javascript
InfrontWidget = InfrontUI.rankingWidget(target, [options]);
```

Extends [CommonListOptions](../CoreObjects/CommonListOptions.md)

Displays a configurable ranked list for a given feed and period.

### `feed`

- **Type:** `number`
- **Required:** Yes

Infront feed number.

### `chain`

- **Type:** `string`
- **Required:** No

Chain name to narrow down ranking to that chain only.

### `rows`

- **Type:** `number`
- **Default:** `all`

Number of rows to show.

### `rankingPeriod`

- **Type:** `enum RankingPeriod`
- **Default:** `INTRADAY`

The period for the data, can be any of the following:

- Infront.RankingPeriod.INTRADAY
- Infront.RankingPeriod.ONE_WEEK
- Infront.RankingPeriod.ONE_MONTH
- Infront.RankingPeriod.ONE_YEAR
- Infront.RankingPeriod.YTD

### `rankingField`

- **Type:** `enum RankingField`
- **Default:** `RankingField.PCT_CHANGE`

The field to rank/sort on, can be any of the following:

- RankingField.LV_PCT_CHANGE (last valid % change)
- RankingField.PCT_CHANGE
- RankingField.TURNOVER
- RankingField.VOLUME

Note: Ranking widget cannot use TURNOVER, LV_PCT_CHANGE, and VOLUME columns when option enablePeriodSelector = true.

### `instrumentTypes`

- **Type:** `string[]`
- **Default:** `all`

A list of instrument types can be found [in the core objects section](../CoreObjects/Common-constants.md).

### `minTurnover`

- **Type:** `number`
- **Default:** `0`

The minimum turnover required before an instrument shows up in the list.

### `columns`

- **Type:** `any[]`
- **Default:** `["TICKER", "LAST", "CHANGE", "PCT_CHANGE", "ONEXCH_VOLUME", "ONEXCH_TURNOVER"]`

Displays content based on provided columns

### `streaming`

- **Type:** `boolean`
- **Default:** `false`

If enabled, broadcasts data to the widget.

### `sortOrder`

- **Type:** `SortOrder`
- **Default:** `SortOrder.Desc`

Decides sort order based on given values - SortOrder.Asc | SortOrder.Desc | SortOrder.None

### `enablePeriodSelector`

- **Type:** `boolean`
- **Default:** `true`

Enables period selector

### `onInstrumentSelected`

- **Type:** `(instrument: Instrument) => void`
- **Required:** No

Callback that indicates whether the instrument is selected and returns it

### `customRanking`

- **Type:** `CustomRanking`
- **Default:** `undefined`

Sets custom ranking based on these values:

- LARGE_CAP
- MID_CAP
- SMALL_CAP
- FIRST_NORTH

### Example

```html
<script type="text/javascript">
/* Shows losers (Infront.SortOrder.Asc) for Nasdaq OMX Copenhagen (17665)
* 10 rows with period selector, only stocks
*/
    var opts = new Infront.RankingWidgetOptions();
    opts.feed = 17665;
    opts.sortOrder = Infront.SortOrder.Asc;
    opts.rows = 10;
    opts.rankingPeriod = Infront.RankingPeriod.ONE_WEEK;
    opts.enablePeriodSelector = true;
    opts.instrumentTypes = ["STOCK"];
    infrontUI.rankingWidget("#ranking", opts);
</script>
...
<div id="ranking"></div>
    
```
