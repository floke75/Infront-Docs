---
title: "Infront Web Toolkit v3 Release Notes — CommonFramework 2.0.71 & InfrontUI 3.0.71 …"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "site"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "v3"
widget_id: "Infront-Web-Toolkit-v3-Release-Notes"
source_url: "https://doc.infrontfinance.com/Releases/v3#Infront-Web-Toolkit-v3-Release-Notes"
part_of: "Infront-Web-Toolkit-v3-Release-Notes"
part_index: 2
sections: "CommonFramework 2.0.71 & InfrontUI 3.0.71, CommonFramework 2.0.70 & InfrontUI 3.0.70, CommonFramework 2.0.69 & InfrontUI 3.0.69, CommonFramework 2.0.68 & InfrontUI 3.0.68, CommonFramework 2.0.67 & InfrontUI 3.0.67, CommonFramework 2.0.66 & InfrontUI 3.0.66, CommonFramework 2.0.65 & InfrontUI 3.0.65, CommonFramework 2.0.64 & InfrontUI 3.0.64, CommonFramework 2.0.63 & InfrontUI 3.0.63, CommonFramework 2.0.62 & InfrontUI 3.0.62, CommonFramework 2.0.61 & InfrontUI 3.0.61, CommonFramework 2.0.60 & InfrontUI 3.0.60, CommonFramework 2.0.59 & InfrontUI 3.0.59, CommonFramework 2.0.58 & InfrontUI 3.0.58, CommonFramework 2.0.57 & InfrontUI 3.0.57, CommonFramework 2.0.55 & InfrontUI 3.0.55, CommonFramework 2.0.51 & InfrontUI 3.0.51, CommonFramework 2.0.49 & InfrontUI 3.0.49, CommonFramework 2.0.43 & InfrontUI 3.0.43, CommonFramework 2.0.40 & InfrontUI 3.0.40, CommonFramework 2.0.38 & InfrontUI 3.0.38, CommonFramework 2.0.37 & InfrontUI 3.0.37, CommonFramework 2.0.36 & InfrontUI 3.0.36, CommonFramework 2.0.35 & InfrontUI 3.0.35, CommonFramework 2.0.34 & InfrontUI 3.0.34, CommonFramework 2.0.33 & InfrontUI 3.0.33, CommonFramework 2.0.32 & InfrontUI 3.0.32, CommonFramework 2.0.31 & InfrontUI 3.0.31, CommonFramework 2.0.23 & InfrontUI 3.0.23, CommonFramework 2.0.22 & InfrontUI 3.0.22, CommonFramework 2.0.21 & InfrontUI 3.0.21, CommonFramework 2.0.20 & InfrontUI 3.0.20, CommonFramework 2.0.19 & InfrontUI 3.0.19, CommonFramework 2.0.18 & InfrontUI 3.0.18, CommonFramework 2.0.16 & InfrontUI 3.0.16, CommonFramework 2.0.14 & InfrontUI 3.0.14, CommonFramework 2.0.13 & InfrontUI 3.0.13, CommonFramework 2.0.12 & InfrontUI 3.0.12, Commonframework 2.0.11 & InfrontUI 3.0.11, CommonFramework 2.0.8 & InfrontUI 3.0.8, CommonFramework 2.0.7 & InfrontUI 3.0.7, CommonFramework 2.0.6 & InfrontUI 3.0.6, CommonFramework 2.0.14 & InfrontUI 3.0.14, CommonFramework 2.0.13 & InfrontUI 3.0.13, CommonFramework 2.0.12 & InfrontUI 3.0.12, Commonframework 2.0.11 & InfrontUI 3.0.11, CommonFramework 2.0.8 & InfrontUI 3.0.8, CommonFramework 2.0.7 & InfrontUI 3.0.7, CommonFramework 2.0.6 & InfrontUI 3.0.6"
---

> Part 2 of 2 of [Infront Web Toolkit v3 Release Notes](../Infront-Web-Toolkit-v3-Release-Notes.md).

### CommonFramework 2.0.71 & InfrontUI 3.0.71

###### **05 Mar 2019**

Features:

- Feature: Rewritten focus mini widget to flex
- Feature: send sso token to trading

Fixes

- Fix: Repopulate order type selector when receiving algos
- Fix: search dropdown label text color
- Fix: labels with uppercase
- Fix: hard-code the number of decimals instead of taking it from the feed metadata
- Fix: Changed strategy for hidden fields
- Fix: caching custom fields
- Fix: caching algos
- Fix: defined correct value for activating order in request to trading server
- Fix: trading - more better logging of sso auto login
- Fix: missing return on invalid auto login type
- Fix: not all fields were copied to the original order object when receiving an order status update
- Fix: Publish TradingErrorEvent if order status has error
- Fix: Modify algo order must change order status from "monitor" to "working"

### CommonFramework 2.0.70 & InfrontUI 3.0.70

###### **01 Mar 2019**

Features:

- Feature: Added compact view to positions mobile widget

Fixes

- Fix: Option enableChangeStatusColors doesn't work in PutCallWidget
- Fix: mandatory algo fields should be marked with a star
- Fix: column chooser settings colors (Light theme)
- Fix: check if logged in before updating assets pie chart
- Fix: looking for valid order types in wrong property
- Fix: Algo fields shown for order types that are not algos
- Fix: Fixed notification message container spacing
- Fix: PutCallWidget - Forward contracts does not have strike prices, but marks the close strikes with color
- Fix: ChartWidget - Global chart settings should be optional
- Fix: Items in forOrderTypes array were not converted to MWS string
- Fix: News list widget is not loading for instruments

### CommonFramework 2.0.69 & InfrontUI 3.0.69

###### **27 Feb 2019**

Features:

- Feature: added empty list message if table is not populated in positions flex widget
- Feature: Now translated columns can be sorted either by original or translated values
- Feature: format change field as percentage in Portfolio value widget
- Feature: Added exchange code to Feed name
- Feature: Added token to TGW login request

Fixes

- Fix: remove double scrollbar from Watchlists
- Fix: crash in instrumentInfoPromise

### CommonFramework 2.0.68 & InfrontUI 3.0.68

###### **26 Feb 2019**

Fixes

- Fix: use decimal logic on symbol object to get correct number of decimals
- Fix: concatenate partially filled orders
- Fix: OrdersWidget - filter on all algo orders
- Fix: hidden algo params not included in insert order
- Fix: Updated sortable table arrow colors
- Fix: change notification time-out to 20sec
- Fix: News list widget - Added missing flash icon
- Fix: MyListWidget - Added missing styles for the dropdown list and delete button
- Fix: Wrong order status
- Fix: customerId and changeHist not included whn inserting / modifying order
- Fix: hidden drop down algo fields has no value field
- Fix: Algo orders always inserted as buy orders
- Fix: Algo orders should have order status "working"

### CommonFramework 2.0.67 & InfrontUI 3.0.67

###### **22 Feb 2019**

Features:

- Feature: Styling - Moved flags from the theme to the framework

Fixes

- Fix: Focus widget - Fixed scale styling
- Fix: ChartWidget - Update chart after change indicator period
- Fix: Notification message - Fixed broken (x) close button
- Fix: Notification message - Added missing styles
- Fix: Order book col widths and colors for wide and compact
- Fix: Order book wide/compact bar colors
- Fix: better language support for column chooser
- Fix: focus widget style related fixes
- Fix: OrdersWidget - specifies that heading for cancel and modify columns should be empty.
- Fix: updated logic tor activate button to also evaluate the order state
- Fix: Styling - Custom dropdown style fixes
- Fix: if user has both realtime and delayed feed, the realtime feed should be preferred

### CommonFramework 2.0.66 & InfrontUI 3.0.66

###### **20 Feb 2019**

Features:

- Feature: PositionsFlexWidget - column filtering based on specified display columns
- Feature: PositionsFlexWidget - added displayRow option
- Feature: Updated Positions widget layout and added icon masking for FilterableQuoteList
- Feature: Lists - added new table layout options
- Feature: Lists - dropdown functionality and flex cards
- Feature: update ToMws methods of algos & algo params to include more info
- Feature: Propagate error trading error responses to widget
- Feature: propagate error conditions to user on insert order and activate order
- Feature: Notify user on modify order errors
- Feature: Runtime debugger
- Feature: added method to evaluate if order can be modified

Fixes

- Fix: active check box and activate / deactivate button are now evaluated separately
- Fix: remove duplicates from anonymous user broker statistics
- Fix: Trading - Display error message if order activate / deactivate fails
- Fix: Trading - added additional condition to check for stop-loss
- Fix: Updated dropdown radio icons
- Fix: Updated ascending descending sorting icons directions
- Fix: Lists - does not populate all instruments
- Fix: QuoteListWidget - Sorting issues
- Fix: Watchlist - Disable sorting for delete column
- Fix: Trading - ignore hidden algo fields when populating and evaluating fields
- Fix: Updated Positions widget layout and added icon masking for FilterableQuoteList
- Fix: crash on reset algo
- Fix: Trading - Not possible to insert strategy orders (buy/sell does not send the order)
- Fix: Lists - rows don't disappear after collapsing
- Fix: Infront Analytics - add token_type for analytics
- Fix: Trading - handle order entry fail codes
- Fix: Trading - filter out algos that are not available for the selected market
- Fix: Trading - Algos may be restricted to certain markets
- Fix: Trading - logout does not clean up everything
- Fix: Chains - If provider id is provided then add it to chains request
- Fix: Trading - algo fields need feed number to evaluate hidden property
- Fix: default precision
- Fix: VWAP - too many decimals
- Fix: Trading - LowLevelDisconnect event now only sent the first time
- Fix: Trading - crash if portfolio positions requested after trading logout
- Fix: Trading - Outstanding requests not included in disconnect notification
- Fix: Login server did not inherit from IDS.BaseClass

### CommonFramework 2.0.65 & InfrontUI 3.0.65

###### **11 Feb 2019**

Features:

- Feature: added certificate tracker type
- Feature: FeedMetaData - added feed properties
- Feature: Infront Analytics feature string
- Feature: handles additional columns
- Feature: Trading login window improvements
- Feature: function for generic expandable table row
- Feature: added flex version of positions widget
- Feature: Widgets linker
- Feature: PutCallWidget - add option to hide range chooser
- Feature: Get infront sector on symbol search

Fixes

- Fix: Publish trading disconnect event
- Fix: response not sent on login failed
- Fix: Handle login failed
- Fix: ValidUntil not sent on insert order / modify order
- Fix: Improved tradingPower logic
- Fix: Disconnect previous trading server if it exists on trading login
- Fix: TimeSeries - wrong date encoding
- Fix: Result column empty
- Fix: Updated cell flex component and positions mobile widget
- Fix: added missing language translate on chart indicator dialog
- Fix: Remove spinner on loginFailed
- Fix: Newslist icons
- Fix: Editing watchlists
- Fix: notifications bug and ui bugs
- Fix: Added missing latest trade widget classes
- Fix: validity selector should be disabled on modify order if required by TGW
- Fix: Column Chooser - Updated table sass configuration
- Fix: Column Chooser - Updated the widget styling and sass components
- Fix: reset login dialog and disconnect from server when changing trading gateway
- Fix: Updated custom dropdown an added custom pop-up components
- Fix: checks if currency is blank string value. if it is blank string, then treat it as null
- Fix: trading power issue
- Fix: do not create unbound observers when there is no valid cache key

### CommonFramework 2.0.64 & InfrontUI 3.0.64

###### **04 Feb 2019**

Features:

- Feature: Added cache inspector for cachedObservables
- Feature: Added performance tags

Fixes

- Fix: Mylists enhancements
- Fix: Column Chooser - Updated the widget styling
- Fix: Always log IAS login problems
- Fix: crash on feed service with undefined service
- Fix: sent chains request to incorrect server
- Fix: Expanded cache inspector to cover all cached items
- Fix: Review trading manager cache handling
- Fix: Removed legacy MWS support

### CommonFramework 2.0.63 & InfrontUI 3.0.63

###### **29 Jan 2019**

Features:

- Feature: Now it is possible to hide time field in chart tooltip

Fixes

- Fix: Chart - Improve tooltip performance in chart tooltip
- Fix: Chart - Tooltip now also follows the default/feed default decimals
- Fix: Do not request market properties if trading login fails
- Fix: Updated column chooser widget styling

### CommonFramework 2.0.62 & InfrontUI 3.0.62

###### **28 Jan 2019**

Fixes

- Fix: Restored missing order book bidding bars (dark theme)
- Fix: Restored missing order book bidding bars
- Fix: Decimals in chart tooltip
- Fix: Updated styling of choose-able column modal
- Fix: Added missing historical period 3 years
- Fix: Trading - Deactivate order does not work

### CommonFramework 2.0.61 & InfrontUI 3.0.61

###### **25 Jan 2019**

Features:

- Feature: financialCalendar - added category support

Fixes

- Fix: HistoryWidget - reverse ratio
- Fix: financialCalendar - change column location for category and added language translate of categoryType
- Fix: Added missing historical period 3 years
- Fix: Added pending content to symbol-data to indicate that data has been requested and not received. Fixed bug where immediate unsubscribe would modify arrays being looped over.

### CommonFramework 2.0.60 & InfrontUI 3.0.60

###### **22 Jan 2019**

Features:

- Feature: QuoteListWidget - Now it's possible to add custom dropdowns to the lists
- Feature: HistoryWidget - option to view split as ratio
- Feature: QuoteListWidget - Preferred underlying property and minor fixes
- Feature: Define EusipaCode column

Fixes

- Fix: Removed alertUpdate triggering my widgets as this is now handled by StreamingAlertUpdate
- Fix: DropDown - allow default title even when selectionUpdatesTitle is on
- Fix: HistoryWidget - only compute ratio if enabled
- Fix: HistoryWidget - don't show ratio if odd split value

### CommonFramework 2.0.59 & InfrontUI 3.0.59

###### **16 Jan 2019**

Features:

- Feature: Flexlist now keyboard navigable
- Feature: Screener now keyboard navigable
- Feature: ChartWidget - Currency convert

Fixes

- Fix: default for ShowFullName in SelectPortfolioWidget

### CommonFramework 2.0.58 & InfrontUI 3.0.58

###### **14 Jan 2019**

Features:

- Feature: Added One week and ten years periods for historical charts.

Fixes

- Fix: should be able to show algotype on Strategy dropdown in modify mode
- Fix: Toggle expand restore chart in case no instruments
- Fix: Images Cleanup - Added CSS inline data svg mixin (IE fix)

### CommonFramework 2.0.57 & InfrontUI 3.0.57

###### **09 Jan 2019**

Features:

- Feature Static value overlay now shows server calculated values for all historical periods, as well as for 1D
- Feature: MyListsWidget - Set column change status for special columns
- Feature: Support sorting for custom, translated and computed columns, fix secondary sorting
- Feature: ListCommon - Now it is possible to show default content if the list is empty
- Feature: RankingWidget - Support custom ranking

Fixes

- Fix: incorrect algo displayed on modify order
- Fix: Funds that are not etfs now show full name on ChartWidget
- Fix: Lists - Sorting string-columns is now case-insensitive
- Fix: chart widget should be able to show both the reference symbol and symbol if enableReferenceSymbol = true, and the currency is set.
- Fix: QuoteListWidget - Now it is possible to ignore underlyings or issuers when filtering
- Fix: bugfix. chart widget should be able to show multiple graphs
- Fix: QuoteListWidget - New choice to ignore expiries
- Fix: ScreenerWidget: Fix potential bug

### CommonFramework 2.0.55 & InfrontUI 3.0.55

###### **17 Dec 2018**

Features:

- Feature Static value overlay now shows server calculated values for all historical periods, as well as for 1D
- Feature: MyListsWidget - Set column change status for special columns
- Feature: Support sorting for custom, translated and computed columns, fix secondary sorting
- Feature: ListCommon - Now it is possible to show default content if the list is empty
- Feature: RankingWidget - Support custom ranking

Fixes

- Fix: Draw diagonal line while change the period and chart is loading
- Fix: NewsListWidget - Sort headlines list only when finish adding headlines
- Fix: Should be able to show algotype on Strategy dropdown in modify mode
- Fix: Moved SEK fund performance tags to separate Enum
- Fix: ChartWidget_2 - Fullname is now shown when giving feature string.
- Fix: ChartWidget_2 - Adjust splits for historical trades
- Fix: ListCommon - IE compatibility issue

### CommonFramework 2.0.51 & InfrontUI 3.0.51

###### **30 Nov 2018**

Features:

- Feature: QuoteListWidget - Improve loading instruments from feeds
- Feature: added option to show instrument with selected currency in chart widget

Fixes

- Fix: PutCallWidget - Timing issue when loading the underlyings

### CommonFramework 2.0.49 & InfrontUI 3.0.49

###### **19 Nov 2018**

Features:

- Feature: added HOLDING_INVESTED & HOLDING_MARKET_VALUE fields
- Feature: added HOLDING_TOTAL_PROFIT column
- Feature: Add columns definitions ISSUER_FULL_NAME, NEXT_COUPON_DATE, COUPON_RATE, COUPONS_PER_YEAR, MATURITY_DATE
- Feature: Feature: Define new columns - Bid Yield and Ask Yield
- Feature: Define new column - RecommendationType
- Feature: Added sources and show flashnews only strings to swedish translation chart widget
- Feature: Supports setting custom dateTime format for xAxis
- Feature: Market info displayed in chart (tooltip always showing last)

Fixes

- Fix: Bug where chart label would update before the redraw chart job is completed
- Fix: Corner case where there was a crash if storage server does not respond
- Fix: PutCallWidget - fix translation
- Fix: Screen flicker & excessive server load when editing watch list
- Fix: Reference feed and symbol work in progress
- Fix: Strings for chart types now change depending on language used on the edit popup for chart widget
- Fix: Newslist shownewsflashonly string translated to swedish
- Fix: Added reference symbol option to chart widget, if true, it should find reference symbol of instrument and show graph
- Fix: ChartWidget - Can add an instrument, delete that instrument and then add the same instrument again and still get the full name.
- Fix: NewsListWidget - Don't list empty news items

### CommonFramework 2.0.43 & InfrontUI 3.0.43

###### **23 Oct 2018**

Features:

- Feature: Searchbox - support to rightalign searchbox results

Fixes

- Fix: ChartWidget - Multi-lang support for days, months and hover text

### CommonFramework 2.0.40 & InfrontUI 3.0.40

###### **18 Oct 2018**

Features:

- Feature: added "MY_VOLUME" & "MY_AVG_PRICE" columns to MyListsWidget
- Feature: added option to set chainButtonTitle on quotelist
- Feature: MyList holding fields

Fixes

- Fix: localization - quote list, historical overview, next button
- Fix: historical overview to use language mapping

### CommonFramework 2.0.38 & InfrontUI 3.0.38

###### **11 Oct 2018**

Features:

- Feature: PutCallWidget - Add option to hide "All" tab
- Feature: Screener supports filtering certificates

Fixes

- Fix: QuoteList - Underlying dropdown is not visible
- Fix: Chart - Funds that are not ETFs show full name instead of ticker
- Fix: RankingWidget - support working without streaming and support historic data
- Fix: ChartWidget - Language localize periods

### CommonFramework 2.0.37 & InfrontUI 3.0.37

###### **01 Oct 2018**

Features:

- Feature: Added columns (DELTA, ELAST, UNDER_TICKER, MARKET)
- Feature: Added NAV column (NAV)
- Feature: Timestamp now shown inline with label when tooltip: advanced.

Fixes

- Fix: symbol type & subtype columns was not shown

### CommonFramework 2.0.36 & InfrontUI 3.0.36

###### **27 Sep 2018**

Features:

- Feature: Chart support just hiding y OR x-axis, and to invert either of them

Fixes

- Fix: symbol type & subtype columns was not shown

### CommonFramework 2.0.35 & InfrontUI 3.0.35

###### **25 Sep 2018**

Features:

- Feature: ColumnChooserWidget - Disable drag & drop, reload displayed list and align-free freeze
- Feature: PutCallWidget - support for dynamic columns (moving, adding, removing and resizing)

Fixes

- Fix: PutCallWidget - defining columns in options, last price in extra subtitle and minor improvements

### CommonFramework 2.0.34 & InfrontUI 3.0.34

###### **17 Sep 2018**

Fixes

- Fix: PutCallWidget - major improvements
- Fix: Bug that made iOS-users not able to click outside of a object to close it

### CommonFramework 2.0.33 & InfrontUI 3.0.33

###### **13 Sep 2018**

Features:

- Feature: NEW! putCallWidget

Fixes

- Fix: maxItems does not work in BrokerstatsWidget

### CommonFramework 2.0.32 & InfrontUI 3.0.32

###### **29 Aug 2018**

Features:

- Feature: DropDown - Selection updates dropdown title

Fixes

- Fix: QuoteList - Support chain categorization, Remove sorting numbers from chain labels
- Fix: ColumnManager - Editing columns is disabled by default

### CommonFramework 2.0.31 & InfrontUI 3.0.31

###### **27 Aug 2018**

Features:

- Feature: Dynamic table columns - flex tables, footer, hidden columns and create rows from result
- Feature: Option to hide searchfield in alert widget
- Feature: BrokerstatsWidget - Now displays message when trying to display something on a market without broker statistics
- Feature: Added Historical Return columns (ONE_W_LAST_DIV, ONE_W_LAST_DIV, THREE_M_LAST_DIV, SIX_M_LAST_DIV, ONE_Y_LAST_DIV, YTD_LAST_DIV)
- Feature: Added delayed indicator to focus widget
- Feature: Support new fields (INDIC_TRADE, INDIC_INCVOL, INDIC_HIGH, INDIC_LOW, NMS, INDIC_OPEN, INDIC_OPEN_VOL)
- Feature: Columns - Flag column now available if creating empty column with flag: true
- Feature: Chart supports custom buttons and changing menu config without reinitialize the widget
- Feature: ColumnChooserWidget
- Feature: Lists - Arrange columns by drag and drop
- Feature: ColumnManager, ColumnChooser - Add touch support
- Feature: ColumnManager - Edit popup, enhancements and styling
- Feature: Watchlists can now be deleted
- Feature: AlertNotifications - deviceClient is now an optional parameter with the new default as "iOSClient"
- Feature: Kickout should now trigger a disconnected event
- Feature: handle unsuccessful trading login

Fixes

- Fix: Chartwidget2 - Fixed short-languagestrings
- Fix: Value_date included and now able to process date with value_date set as the current date
- Fix: AlertListWidget - Sent broken Alert-object on modify alert click
- Fix: AlertMiniWidget - Make whole card clickable, not just arrow
- Fix: AppendTrades to support receiving arrays of trades spanning multiple periods
- Fix: CustomFieldsWidget - Fixed exception where customfields.items was undefined
- Fix: Append trades support arrays in trades spanning multiple periods and make fewer Date-objects for efficiency
- Fix: IntradayTradesWidget - Hide buyer/seller column when no brokerstats are available from feed.
- Fix: OrderEntryWidget - Subscription changed from S_MARKET_PRICE to underlying fields Last, bid, ask & previous_close
- Fix: AssetsPieChart - Fix updating problem for donut chart
- Fix: Clear CacheBasedFilter after changing the portfolio
- Fix: OrderEntryWidget - Fixed exception when receiving data after dateSelector was destroyed
- Fix: Dynamic columns - LoadColumns can be called after creating ColumnManager
- Fix: OrderEntryWidget - Tick size warning
- Fix: Infinite request loop if not enough news items
- Fix: Filter duplicate news items on cs response
- Fix: NewsListWidget - When changing news page fire onPageChange event
- Fix: NewsListWidget - Possible infinite request loop
- Fix: Crash in headline filter logic
- Fix: AlertWidget - Flags no longer flicker when refreshing alerts
- Fix: Optimized for fewer callbacks to QuoteListWidget from ScreenerWidget
- Fix: Chart: Added null-check to resize method
- Fix: ScreenerWidget - Removed bug created by delaying initialization
- Refactor: Chart - Now redraws chart async to avoid multiple redraws from a single large trades-update
- Refactor: ChartWidget - Changed "var" to "let" & fixed some potential issues
- Fix: Moving columns - Ignore click event if the column has been moved
- Fix: ColumnManager - Keep column widths when switching between the tabs
- Fix: ColumnChooser - prevent selection of locked columns and clear filter after remove a column from display
- Fix: cancel trading login did not disconnect the server
- Fix: Watchlists - Now disposes connections correctly
- Fix: Corner case crash on realtime news
- Fix: Story encoding is now UTF8
- Fix: Show blank instead of 0.00 in tables with quotes
- Fix: Better timezone handling
- Fix: TradesSubscriptions - Now prevents multiple versions of the same trade
- Fix: Fixed timestamp from NewsServer (using default UTC)
- Fix: Detecting duplicate news
- Fix: Watchlists - Bug where added instruments might not be Instrument objects
- Fix: ReConnect when servers goes down
- Fix: Reconnect timer increment
- Fix: ReRequestAll when response from server requires it (not on first connect)
- Fix: Trades - Now always sends callback even if no trades was received.
- Fix: Allowing 5000 ms before switching servers on initial connect
- Fix: realtime ranking format
- Fix: Convert search to a static function
- Fix: Show correct high and low values
- Fix: HistoryWidget - Removed undefined/-1 check on startDate in history getTimeSeries method to allow "ALL" time period requests.
- Fix: GetHosts - No longer occasionally return duplicate hosts
- Refactor: StaticData - Major performance boost & reduced number of requests
- Fix: News - No longer destroys connection to avoid occasional crash with newswidget unsubscribe (Semi-quickfix)
- Fix: Subscribe/unsubscribe - Now removes trades-callback when unsubscribing
- Fix: login request sent without username / password
- Fix: Login, Filtering out pure feature feeds
- Fix: if chain description is missing use chain name
- Fix: History widget not properly populated on change instrument

### CommonFramework 2.0.23 & InfrontUI 3.0.23

###### **02 May 2018**

Features:

- Added xDateFormat option on chartwidget for formatting, example: opts.xDateFormat = "%a %d %b %k:%M:%S"
- Chart now uses language strings for months & weekdays
- Added “shortTime” for months & weekdays to language-file. (Corresponds to %a and %b, use %A and %B for “long” version)

### CommonFramework 2.0.22 & InfrontUI 3.0.22

###### **19 Apr 2018**

Features:

- New field available: “SORT_NU”

### CommonFramework 2.0.21 & InfrontUI 3.0.21

###### **12 Apr 2018**

Features:

- Chartwidgetoptions now has .decimals property. (ex opts.decimals = 1)
- Gaps in chart should now be fixed

### CommonFramework 2.0.20 & InfrontUI 3.0.20

###### **04 Apr 2018**

Features:

- New fields: "ONE_D_PERF_SEK" & "ONE_W_PERF_SEK"

### CommonFramework 2.0.19 & InfrontUI 3.0.19

###### **20 Mar 2018**

Features:

- New fields: "ONE_M_PERF_SEK" "THREE_M_PERF_SEK" "SIX_M_PERF_SEK" "ONE_Y_PERF_SEK" "TWO_Y_PERF_SEK" "THREE_Y_PERF_SEK" "FIVE_Y_PERF_SEK" "TEN_Y_PERF_SEK" "YTD_Y_PERF_SEK"
- FilterGroups now has optional property "hideFromActiveFilters". Set to true to avoid it from showing up in ActiveFiltersWidget

### CommonFramework 2.0.18 & InfrontUI 3.0.18

###### **15 Mar 2018**

Features:

- Morningstar 3y rating: STAR_RATING_3Y
- Fund ongoing charge: FUND_ONGOING_CHARGE
- ActiveFilterWidget: Now has a remove all filters button

### CommonFramework 2.0.16 & InfrontUI 3.0.16

###### **02 Mar 2018**

Features:

- Contributed fields renamed and change
- ScreenerWidget: onChange event now also triggers on removed filters

### CommonFramework 2.0.14 & InfrontUI 3.0.14

###### **08 Feb 2018**

### CommonFramework 2.0.13 & InfrontUI 3.0.13

###### **07 Feb 2018**

### CommonFramework 2.0.12 & InfrontUI 3.0.12

###### **24 Jan 2018**

### Commonframework 2.0.11 & InfrontUI 3.0.11

###### **15 Jan 2018**

### CommonFramework 2.0.8 & InfrontUI 3.0.8

###### **12 Jan 2018**

### CommonFramework 2.0.7 & InfrontUI 3.0.7

###### **12 Jan 2018**

### CommonFramework 2.0.6 & InfrontUI 3.0.6

###### **11 Jan 2018**

### CommonFramework 2.0.14 & InfrontUI 3.0.14

Features:

- ScreenerWidget: New radio-button filter type
- ScreenerWidget: New onChange event on option

### CommonFramework 2.0.13 & InfrontUI 3.0.13

Features:

- SSL Now activated for all server types.
- ScreenerWidget: New onChange event on option

Fixes:

- Connectivity and stability improvements

### CommonFramework 2.0.12 & InfrontUI 3.0.12

Features:

- New Morningstar fields: FUND_SUSTAINABILITY_RATING & FUND_SUSTAINABILITY_RATING_DATE
- New Contributed fields: CONTRIBUTED_FUNDTEXT, CONTRIBUTED_STANDARDTEXTS & CONTRIBUTED_STANDARDTEXTS
- FundAllocationPieChartWidget: New option.animation for turning off animation.(Default to true for now)
- Massive scripting performance boost (Up to 50% improvement of script execution time)
- Improved caching of static data & time-series for improved performance when viewing previously visited instruments
- SSL for websockets now activated. It follows the "secureConnection" setting on the infrontUI options & requires the page to be loaded on https to activate.

Fixes:

- Chartwidget: Fixed issue where defaultPeriod was ignored for instruments without intraday
- Chartwidget: Removed initial animation when opening a chart, might be changed to an option later
- Connectivity and stability improvements

### Commonframework 2.0.11 & InfrontUI 3.0.11

Feature: Added "cell-flex-list__row-wrapper--expanded" to expanded row wrappers when expanded
Fix: Row expanded class now applied when expanded instead of the reverse.

### CommonFramework 2.0.8 & InfrontUI 3.0.8

Feature: Added “CONTRIBUTED_MAINSUPPLY” field

### CommonFramework 2.0.7 & InfrontUI 3.0.7

Fixes:

- Screener filter bug fix
- Chart historical dates offset

### CommonFramework 2.0.6 & InfrontUI 3.0.6

Feature: added --expanded--expanded class to the expanded rows when expanded
Fixes: Removing search filter criteria from SelectedFilterWidget now works
