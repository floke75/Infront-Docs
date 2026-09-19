---
title: "TradingTableWidgetOptions"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "CoreObjects"
widget_id: "TradingTableWidgetOptions"
extends: "CommonListOptions"
option_count: 6
options: ["showPortfolio", "showPortfolioSelect", "showDeleteAll", "clickToLogin", "titleClick", "hideEmptyList"]
source_url: "https://doc.infrontfinance.com/v3/CoreObjects#TradingTableWidgetOptions"
---

# TradingTableWidgetOptions

Extends [CommonListOptions](./CommonListOptions.md)

### `showPortfolio`

- **Type:** `boolean`
- **Default:** `false`

Displays Portfolio

### `showPortfolioSelect`

- **Type:** `boolean`
- **Default:** `false`

Displays Portfolio select

### `showDeleteAll`

- **Type:** `boolean`
- **Default:** `false`

Displays "delete all"

### `clickToLogin`

- **Type:** `boolean`
- **Default:** `false`

Displays "Click to login"

### `titleClick`

- **Type:** `() => void`

Callback that indicates that the title was clicked.

### `hideEmptyList`

- **Type:** `boolean`
- **Default:** `true`

Allows to hide the list if it is empty. If it assigned to true, "cell-display-none" class will be added to the widget if it is empty.
