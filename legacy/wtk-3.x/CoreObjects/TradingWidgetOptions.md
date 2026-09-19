---
title: "TradingWidgetOptions"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "CoreObjects"
widget_id: "TradingWidgetOptions"
extends: "WidgetBaseOptions"
option_count: 4
options: ["clickToLogin", "rememberCanceledLogin", "tradingLoginCallback", "hasTradingContentCallback"]
source_url: "https://doc.infrontfinance.com/v3/CoreObjects#TradingWidgetOptions"
---

# TradingWidgetOptions

Extends [WidgetBaseOptions](./WidgetOptions.md)

### `clickToLogin`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

Option for deciding if the widget should show the trading login when clicked on, if the user isn't logged in to trading.

### `rememberCanceledLogin`

- **Type:** `boolean`
- **Required:** No
- **Default:** `false`

Remembers that login is canceled, ensures you wont be logged in

### `tradingLoginCallback`

- **Type:** `(didLogin: boolean, item?: any) => void`
- **Required:** No
- **Default:** `null`

Callback that indicates that the user has logged in to trading.

### `hasTradingContentCallback`

- **Type:** `(hasTradingContent: boolean, item?: any) => void`
- **Required:** No

Callback that indicates that trading content has been received
