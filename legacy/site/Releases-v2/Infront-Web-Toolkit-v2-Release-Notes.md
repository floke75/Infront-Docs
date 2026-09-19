---
title: "Infront Web Toolkit v2 Release Notes"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "site"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "v2"
widget_id: "Infront-Web-Toolkit-v2-Release-Notes"
source_url: "https://doc.infrontfinance.com/Releases/v2#Infront-Web-Toolkit-v2-Release-Notes"
---

# Infront Web Toolkit v2 Release Notes

Heads up! These docs are for v2. Check out the latest version of Infront Web Toolkit!

### CommonFramework 1.2.85 & InfrontUI 2.1.137

###### **14 Jan 2019**

Features:

- Feature: Columns - Flag column now available if creating empty column with flag: true
- Feature: Added flex option to the financial calender widget
- Feature: Notifications - Allow grouping trade notifications with same order id
- Feature: Chart - Load more data to cover indicators period
- Feature: Added at-market order to (legacy) horizontal order entry widget
- Feature: Added CERTIFICATE as tradeable instrument type in (legacy) OrderEntryHorizWidget
- Feature: Refresh portfolio values function

Fixes:

- Fix: Reimplemented stopMarket orders
- Fix: Fixed bugs in the reimplementation of atMarket stop loss orders in OrderEntryHorizWidget
- Fix: Orderbook - Checks for either volume or number of order to be 0 in order to delete the row to prevent duplication
- Fix: only one message of the most recent trade shows per notification box for notification grouping
- Fix: Stop Market orders now shows as stop-loss orders in orders list
- Fix: Normal stop Market orders didn't show as stoploss orders
- Fix: Enabled order Entry for Certificates
- Fix: Bug in chartwidget causing it to pause updating when adding indicators.
- Fix: Fixed bug in parseIso8601DateString that fails whe month is 0 (January)

### CommonFramework 1.2.81 & InfrontUI 2.1.131

###### **16 Oct 2018**

Features:

- Feature: Columns - Flag column now available if creating empty column with flag: true
- Feature: Added flex option to the financial calender widget
- Feature: Notifications - Allow grouping trade notifications with same order id
- Feature: Chart - Load more data to cover indicators period
- Feature: Added at-market order to (legacy) horizontal order entry widget

Fixes:

- Fix: OrderEntryWidget - Tick size warning
- Fix: LanguageFile default - Changed "orders" to "#" in orderbook num orders col (so it fits and doesn't clip the col header).

### CommonFramework 1.2.81 & InfrontUI 2.1.131

###### **30 May 2018**

Features:

- Feature: Chartwidget - Now possible to specify tooltop xDateFormat
- Feature: Dynamic table columns - flex tables, footer, hidden columns and create rows from result
- Feature: BrokerstatsWidget - Now displays message (from language file) when trying to display broker statistics on a market without broker statistics support
- Feature: Added delayed indicator to focus widget
- Feature: Added Historical Return columns (ONE_W_LAST_DIV, ONE_W_LAST_DIV, THREE_M_LAST_DIV, SIX_M_LAST_DIV, ONE_Y_LAST_DIV, YTD_LAST_DIV)

Fixes:

- Fix: CapsLock message was previously shown on special letters as well as upper case letters. Now it is only shown on upper case letters.
- Fix: Show blank instead of 0.00 for market prices in tables
- Fix: AlertMiniWidget - Make whole card clickable, not just arrow
- Fix: FinancialCalendarWidget - Now destroys dropdown properly
- Fix: OrderEntryWidget - Subscription changed from S_MARKET_PRICE to underlying fields Last, bid, ask & previous_close
- Fix: AssetsPieChart - Fix updating problem for donut chart

### CommonFramework 1.2.80 & InfrontUI 2.1.129

###### **30 Apr 2018**

Features:

- Feature: Toolkit now computes average price for a position
- Feature: Chart options now supports opts.decimals to a number for adjusting number of decimals shown on the axis labels. (Hover still shows all decimals)
- Feature: NewsListWidget - Add a "flash news only" filter
- Feature: OrderFields/OrderAlgoFields - Support Trigger Price column
- Feature: IntradayTradesSimpleWidget - add optional buyer/seller columns
- Feature: HistoricalOverviewWidget - Can now click periods to change the selected period
- Feature: HistoricalOverviewWidget - Now remembers clicked period
- Feature: Charts now can have 3x number of points in visible zoom area and no limitation to number of total points.

Fixes:

- Fix: Calculation of todays PL for intraday short-positions.
- Fix: OrderEntryWidget - trading power value converted twice
- Fix: Heading on fields - Show heading when the heading attribute is not present, but not if heading is explicit set to null or the empty string
- Fix: NewsListWidget - Create "FlashOnly" filter only if dropdown exists
- Fix: OrderEntryWidget - fix activate/deactivate orders
- Fix: IntradayTradesSimpleWidget - Trades in wrong order
- Fix: OrderEntryWidget - Detect child orders to ignore execute activate/deactivate
- Fix: OrderEntryWidget - Open Volume can be 0 or null when modify the order
- Fix: Added checks to prevent storing identical values to storage.
- Fix: ChartWidget - Resolution Auto now clickable
- Fix: IntradayTradesSimpleWidget - show buyer/seller columns only if feed supports it
- Fix: TradingLoginDialog - Now should work with autofill without having to focus the username & password fields first
- Fix: ChartWidget - When adding indicators to compare chart, they will now be in compare mode
- Refactor: ChartWidget - Major performance boost when loading chart with indicators
- Feature - ChartWidget: Tooltip label day & month now uses languagestrings
- Fix: IntradayTradesMiniWidget - Fixed exception when receiving more trades at once than there was rows

### CommonFramework 1.2.76 & InfrontUI 2.1.119

###### **03 Apr 2018**

Features:

- Feature: Added logging of slow client-server non-trading traffic
- Feature: Support secondary sorting in instruments lists

Fixes:

- Fix: Adjusted portfolio polling to also allow polling with one minute intervals
- Fix: Repeated portfolio polling
- Fix: MyListWidget - Close when clicking outside on mobile
- Fix: OrderEntryWideget - convert the currency value of Trading power to match selected instrument
- Fix: Chart - Auto resolution option now gets highlighted when selected
- Fix: AssetsPieChartWidget - Now redraws max 1 time per second to improve performance

### CommonFramework 1.2.75 & InfrontUI 2.1.117

###### **15 Mar 2018**

Fixes:

- Fix: Remove watchlist, handling of empty lists & adding default list.
- Fix: OrderEntryWidget - use contract size to calc the gross price
- Fix: OrderEntryWidget - reset custom fields before requesting for them
- Fix: OrderEntryWidget - Re-disable price field after placing order that don't support price
- Fix: MyListWidget - Prevented dropdown from closing when clicking add list in the list-dropdown

### CommonFramework 1.2.74 & InfrontUI 2.1.114

###### **14 Mar 2018**

Features:

- Feature: Watchlist requests now all returns promises
- Feature: News list widget - Highlight color on matching terms
- Feature: Added trading field BASE_CURRENCY_RESULT
- Feature: MylistWidget - Now uses promise-based requests
- Feature: ScreenerActiveFiltersWidget - Now has a "Remove All Filters" button

Fixes:

- Fix: Fixed support for cash-position updates when polling portfolio values
- Fix: Added libs to support promise (when polyfilled)
- Fix: Trading Login - Stop creating multiple new login dialogs when login fails
- Fix: ChartIndicators: Error in stochastic running computation
- Fix: ChartWidget - Fixed exception when trying to update indicator for tick that didn't yet exist for main instrument
- Fix: IntradayTradesMiniWidget - Title language & decimals with linking now works
- Fix: ChartWidget - Improved compare state updating loading instruments from storage
- Fix: ChartWidget - Fixed indicator exception in corner cases

### CommonFramework 1.2.73 & InfrontUI 2.1.113

###### **08 Mar 2018**

Features:

- Feature: IndexOverviewWidget: New layout "SIMPLE"
- Feature: Notifications - Support close when clicking on AlertNotification
- Feature: ChartWidget - periodSelected is now exposed
- Feature: Search box now supports only creating input box in dom, and returning searchresult in callback
- Feature: TradingLoginDialog - Warn the user if the caps lock is on
- Feature: OrderStackWidget - display price from custom fields for orders with no price
- Feature: OrderEntryWidget: Add TGW name in titlebar

Fixes:

- Fix: Exception when trying to resend list from screener before items were filtered.
- Fix: ScreenerWidget: OnChange event trigger only when adding filter
- Fix: Chart time selector dropdown in IE11
- Fix: AlertWidget - Instrument undefined when adding alert directly from an instrument
- Fix: ChartWidget - Wrong min & max time if we got trade subscription update before trades-requests
- Fix: ChartWidget - Corrected MinMax when changing to a bigger resolution
- Fix: OrderEntryWidget - Wrong fields loaded when modifying an order
- Fix: NewsListWidget - Add progress indicator for flex option
- Fix: ChartWidget - Fixed issue where same axis could be saved multiple times
- Fix: QuoteListWidget - Doesn't remember sort column

### CommonFramework 1.2.72 & InfrontUI 2.1.111

###### **16 Feb 2018**

Features:

- IndexOverviewWidget: New layout "SIMPLE"

Fixes:

- ChartWidget: Fixed issue where indicators could not be removed
- ChartWidget: Fixed issue where axisID could be invalid
- ChartWidget: Fixed issue where navigator would not be updated correctly
- QuoteListWidget: WidgetTitle can now be removed by setting it to null from options

### CommonFramework 1.2.71 & InfrontUI 2.1.110

###### **23 Jan 2018**

Features:

- ScreenerWidget: New radio-button filter type
- ScreenerWidget: New onChange event on option
- MyListWidget: Now sorts lists alphabetically

Fixes:

- PortfolioSingleValueWidget: Fixed today’s profit/loss not being calculated in a few odd cases
- MyListWidget: Fixed issue with IE11
- ChartWidget: Fixed issue when editing indicator where color wouldn’t get changed
- QuoteList: Fixed an issue where some chains wouldn’t load
