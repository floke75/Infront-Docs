---
title: "CdapiSnapquoteSnapquote"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiSnapquoteSnapquote"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiSnapquoteSnapquote"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiSnapquoteSnapquote.html"
defines: ["CdapiSnapquoteSnapquote"]
member_count: 68
members: ["_meta", "ask_price", "ask_price_high", "ask_price_low", "ask_size", "ask_timestamp", "bid_price", "bid_price_high", "bid_price_low", "bid_size", "bid_timestamp", "close_date", "close_price", "close_timestamp", "cumulative_trades", "cumulative_volume", "currency_isoalpha_3", "fixing_price", "high_price", "high_timestamp", "id", "isma_yield", "issue_price", "last_price", "last_price_trading_phase", "last_timestamp", "low_price", "low_timestamp", "mid_price", "nav", "netchange", "netchange_percent", "official_ask_price", "official_bid_price", "open_interest", "open_price", "open_timestamp", "previous_ask_price", "previous_bid_price", "previous_close_price", "previous_cumulative_volume", "previous_date", "previous_fixing_price", "previous_high_price", "previous_issue_price", "previous_low_price", "previous_nav", "previous_netchange", "previous_netchange_percent", "previous_open_interest", "previous_open_price", "previous_repurchase_price", "previous_settlement_price", "previous_vwap_price", "quality", "repurchase_price", "settlement_price", "trading_status_id", "turnover", "unofficial_ask_price", "unofficial_bid_price", "volume", "vwap_price", "yield", "yield_bond_ask_price", "yield_bond_bid_price", "yield_on_ask_price", "yield_on_bid_price"]
member_groups:
  "Properties": ["_meta", "ask_price", "ask_price_high", "ask_price_low", "ask_size", "ask_timestamp", "bid_price", "bid_price_high", "bid_price_low", "bid_size", "bid_timestamp", "close_date", "close_price", "close_timestamp", "cumulative_trades", "cumulative_volume", "currency_isoalpha_3", "fixing_price", "high_price", "high_timestamp", "id", "isma_yield", "issue_price", "last_price", "last_price_trading_phase", "last_timestamp", "low_price", "low_timestamp", "mid_price", "nav", "netchange", "netchange_percent", "official_ask_price", "official_bid_price", "open_interest", "open_price", "open_timestamp", "previous_ask_price", "previous_bid_price", "previous_close_price", "previous_cumulative_volume", "previous_date", "previous_fixing_price", "previous_high_price", "previous_issue_price", "previous_low_price", "previous_nav", "previous_netchange", "previous_netchange_percent", "previous_open_interest", "previous_open_price", "previous_repurchase_price", "previous_settlement_price", "previous_vwap_price", "quality", "repurchase_price", "settlement_price", "trading_status_id", "turnover", "unofficial_ask_price", "unofficial_bid_price", "volume", "vwap_price", "yield", "yield_bond_ask_price", "yield_bond_bid_price", "yield_on_ask_price", "yield_on_bid_price"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiSnapquoteSnapquoteIdentifier", "SDK.InfrontSDK.CoreDataAPI.CdapiSnapquoteSnapquoteQuality"]
---

# CdapiSnapquoteSnapquote

Snapquote holds the complete real-time or delayed price snapshot for a single instrument listing.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.snapquote.Snapquote

```ts
interface CdapiSnapquoteSnapquote {
    _meta: BasedefEntityMeta;
    ask_price: number;
    ask_price_high: number;
    ask_price_low: number;
    ask_size: number;
    ask_timestamp: string;
    bid_price: number;
    bid_price_high: number;
    bid_price_low: number;
    bid_size: number;
    bid_timestamp: string;
    close_date: string;
    close_price: number;
    close_timestamp: string;
    cumulative_trades: number;
    cumulative_volume: number;
    currency_isoalpha_3: string;
    fixing_price: number;
    high_price: number;
    high_timestamp: string;
    id: CdapiSnapquoteSnapquoteIdentifier;
    isma_yield: number;
    issue_price: number;
    last_price: number;
    last_price_trading_phase: string;
    last_timestamp: string;
    low_price: number;
    low_timestamp: string;
    mid_price: number;
    nav: number;
    netchange: number;
    netchange_percent: number;
    official_ask_price: number;
    official_bid_price: number;
    open_interest: number;
    open_price: number;
    open_timestamp: string;
    previous_ask_price: number;
    previous_bid_price: number;
    previous_close_price: number;
    previous_cumulative_volume: number;
    previous_date: string;
    previous_fixing_price: number;
    previous_high_price: number;
    previous_issue_price: number;
    previous_low_price: number;
    previous_nav: number;
    previous_netchange: number;
    previous_netchange_percent: number;
    previous_open_interest: number;
    previous_open_price: number;
    previous_repurchase_price: number;
    previous_settlement_price: number;
    previous_vwap_price: number;
    quality: CdapiSnapquoteSnapquoteQuality;
    repurchase_price: number;
    settlement_price: number;
    trading_status_id: number;
    turnover: number;
    unofficial_ask_price: number;
    unofficial_bid_price: number;
    volume: number;
    vwap_price: number;
    yield: number;
    yield_bond_ask_price: number;
    yield_bond_bid_price: number;
    yield_on_ask_price: number;
    yield_on_bid_price: number;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` ask_price

```ts
ask_price: number
```

Best ask price (lowest price a seller is willing to accept).
ADF: ADF_Brief | IDS: IDS_REALTIME_ASK

##### Remarks

Format: double

#### `Readonly` ask_price_high

```ts
ask_price_high: number
```

Highest ask price of the current trading day.
ADF: ADF_Brief_Tageshoch | IDS: n/a

##### Remarks

Format: double

#### `Readonly` ask_price_low

```ts
ask_price_low: number
```

Lowest ask price of the current trading day.
ADF: ADF_Brief_Tagestief | IDS: n/a

##### Remarks

Format: double

#### `Readonly` ask_size

```ts
ask_size: number
```

Volume available at the best ask price.
ADF: ADF_Brief_Umsatz | IDS: IDS_REALTIME_ASK_SIZE

##### Remarks

Format: double

#### `Readonly` ask_timestamp

```ts
ask_timestamp: string
```

Timestamp of the last ask update.
ADF: ADF_Zeit_Quotierung | IDS: IDS_REALTIME_ASK_TIME

#### `Readonly` bid_price

```ts
bid_price: number
```

Best bid price (highest price a buyer is willing to pay).
ADF: ADF_Geld | IDS: IDS_REALTIME_BID

##### Remarks

Format: double

#### `Readonly` bid_price_high

```ts
bid_price_high: number
```

Highest bid price of the current trading day.
ADF: ADF_Geld_Tageshoch | IDS: n/a

##### Remarks

Format: double

#### `Readonly` bid_price_low

```ts
bid_price_low: number
```

Lowest bid price of the current trading day.
ADF: ADF_Geld_Tagestief | IDS: n/a

##### Remarks

Format: double

#### `Readonly` bid_size

```ts
bid_size: number
```

Volume available at the best bid price.
ADF: ADF_Geld_Umsatz | IDS: IDS_REALTIME_BID_SIZE

##### Remarks

Format: double

#### `Readonly` bid_timestamp

```ts
bid_timestamp: string
```

Timestamp of the last bid update.
ADF: ADF_Zeit_Quotierung | IDS: IDS_REALTIME_BID_TIME

#### `Readonly` close_date

```ts
close_date: string
```

Date of the official closing price. ISO-8601 format recommended.
ADF: ADF_Schluss_Datum | IDS: IDS_REALTIME_OFFICIAL_CLOSE_DATE

#### `Readonly` close_price

```ts
close_price: number
```

Official closing price of the current (or most recent) trading session.
ADF: ADF_Schluss | IDS: IDS_REALTIME_OFFICIAL_CLOSE

##### Remarks

Format: double

#### `Readonly` close_timestamp

```ts
close_timestamp: string
```

Timestamp of the closing price.
ADF: ADF_Schluss_Zeit | IDS: n/a

#### `Readonly` cumulative_trades

```ts
cumulative_trades: number
```

Total number of individual trades executed during the current trading day.
ADF: ADF_Anzahl_Handel | IDS: IDS_REALTIME_TRADE_MOVES

##### Remarks

Format: double

#### `Readonly` cumulative_volume

```ts
cumulative_volume: number
```

Cumulative traded volume for the current trading day (exchange-reported).
ADF: ADF_Umsatz_gesamt | IDS: IDS_REALTIME_ACVOLUME

##### Remarks

Format: double

#### `Readonly` currency_isoalpha_3

```ts
currency_isoalpha_3: string
```

ISO 4217 currency code of the instrument's trading currency (e.g. "EUR", "USD").
ADF: ADF_Waehrung | IDS: IDS_REALTIME_CURRENCY

#### `Readonly` fixing_price

```ts
fixing_price: number
```

Fixing price — price established at the midday auction (Kassafeststellung).
ADF: ADF_Kassa | IDS: n/a

##### Remarks

Format: double

#### `Readonly` high_price

```ts
high_price: number
```

Highest traded price of the current trading day.
ADF: ADF_Tageshoch | IDS: IDS_REALTIME_HIGH

##### Remarks

Format: double

#### `Readonly` high_timestamp

```ts
high_timestamp: string
```

Timestamp at which the day's high price was reached.
ADF: ADF_Tageshoch_Zeit | IDS: n/a

#### `Readonly` id

```ts
id: CdapiSnapquoteSnapquoteIdentifier
```

Composite identifier for this snapquote. See nested Identifier message.

#### `Readonly` isma_yield

```ts
isma_yield: number
```

ISMA yield — bond yield calculated according to ISMA (now ICMA) conventions.
ADF: ADF_Rendite_ISMA | IDS: n/a

##### Remarks

Format: double

#### `Readonly` issue_price

```ts
issue_price: number
```

Issue price — applicable to funds and structured products.
ADF: ADF_Ausgabe | IDS: n/a

##### Remarks

Format: double

#### `Readonly` last_price

```ts
last_price: number
```

Last traded price.
ADF: ADF_Bezahlt | IDS: IDS_REALTIME_LAST

##### Remarks

Format: double

#### `Readonly` last_price_trading_phase

```ts
last_price_trading_phase: string
```

Trading phase during which the last price was established (e.g. "AUCTION", "CONTINUOUS").
ADF: ADF_Bezahltkurs_Handelsphase | IDS: n/a

#### `Readonly` last_timestamp

```ts
last_timestamp: string
```

Timestamp of the last trade (includes date, time, and milliseconds where available).
ADF: ADF_Bezahlt_Zeit + ADF_Boersenzeit + ADF_Zeit | IDS: IDS_REALTIME_DATE + IDS_REALTIME_TIME + IDS_REALTIME_MSTIME

#### `Readonly` low_price

```ts
low_price: number
```

Lowest traded price of the current trading day.
ADF: ADF_Tagestief | IDS: IDS_REALTIME_LOW

##### Remarks

Format: double

#### `Readonly` low_timestamp

```ts
low_timestamp: string
```

Timestamp at which the day's low price was reached.
ADF: ADF_Tagestief_Zeit | IDS: n/a

#### `Readonly` mid_price

```ts
mid_price: number
```

Mid price — arithmetic mean of the best bid and ask prices.
ADF: ADF_Mittelkurs | IDS: IDS_REALTIME_MID

##### Remarks

Format: double

#### `Readonly` nav

```ts
nav: number
```

Net asset value — applicable to funds and ETFs.
ADF: ADF_NAV | IDS: IDS_REALTIME_NAV

##### Remarks

Format: double

#### `Readonly` netchange

```ts
netchange: number
```

Absolute price change compared to the previous session's close price.
ADF: ADF_Veraenderung | IDS: IDS_REALTIME_CHANGE

##### Remarks

Format: double

#### `Readonly` netchange_percent

```ts
netchange_percent: number
```

Percentage price change compared to the previous session's close price.
ADF: ADF_Prozentuale_Veraenderung | IDS: IDS_REALTIME_CHANGE_PST

##### Remarks

Format: double

#### `Readonly` official_ask_price

```ts
official_ask_price: number
```

Official ask price; also used as the LME (London Metal Exchange) reference ask price.
ADF: ADF_Official_Ask | IDS: n/a

##### Remarks

Format: double

#### `Readonly` official_bid_price

```ts
official_bid_price: number
```

Official bid price; also used as the LME reference bid price.
ADF: ADF_Official_Bid | IDS: n/a

##### Remarks

Format: double

#### `Readonly` open_interest

```ts
open_interest: number
```

Open interest — total number of outstanding derivative contracts not yet settled.
ADF: ADF_Open_Interest | IDS: n/a

##### Remarks

Format: int32

#### `Readonly` open_price

```ts
open_price: number
```

Opening price of the current trading session.
ADF: ADF_Anfang | IDS: IDS_REALTIME_OPEN

##### Remarks

Format: double

#### `Readonly` open_timestamp

```ts
open_timestamp: string
```

Timestamp at which the opening price was established.
ADF: ADF_Anfang_Zeit | IDS: n/a

#### `Readonly` previous_ask_price

```ts
previous_ask_price: number
```

Previous trading day's last ask price.
ADF: ADF_Brief_Vortag | IDS: IDS_REALTIME_YASK

##### Remarks

Format: double

#### `Readonly` previous_bid_price

```ts
previous_bid_price: number
```

Previous trading day's last bid price.
ADF: ADF_Geld_Vortag | IDS: IDS_REALTIME_YBID

##### Remarks

Format: double

#### `Readonly` previous_close_price

```ts
previous_close_price: number
```

Previous trading day's official closing price.
ADF: ADF_Schluss_Vortag | IDS: IDS_REALTIME_YLAST

##### Remarks

Format: double

#### `Readonly` previous_cumulative_volume

```ts
previous_cumulative_volume: number
```

Previous trading day's total cumulative volume.
ADF: ADF_Umsatz_gesamt_Vortag | IDS: IDS_REALTIME_YVOLUME

##### Remarks

Format: double

#### `Readonly` previous_date

```ts
previous_date: string
```

Date of the previous closing price. ISO-8601 format recommended.
ADF: ADF_Schluss_Vortagesdatum | IDS: IDS_REALTIME_LAST_TRADE_DATE

#### `Readonly` previous_fixing_price

```ts
previous_fixing_price: number
```

Previous trading day's fixing price from the midday auction.
ADF: ADF_Kassa_Vortag | IDS: n/a

##### Remarks

Format: double

#### `Readonly` previous_high_price

```ts
previous_high_price: number
```

Previous trading day's high price.
ADF: ADF_Tageshoch_Vortag | IDS: n/a

##### Remarks

Format: double

#### `Readonly` previous_issue_price

```ts
previous_issue_price: number
```

Previous trading day's issue price.
ADF: ADF_Ausgabe_Vortag | IDS: n/a

##### Remarks

Format: double

#### `Readonly` previous_low_price

```ts
previous_low_price: number
```

Previous trading day's low price.
ADF: ADF_Tagestief_Vortag | IDS: n/a

##### Remarks

Format: double

#### `Readonly` previous_nav

```ts
previous_nav: number
```

Previous trading day's net asset value.
ADF: ADF_NAV_VORTAG | IDS: n/a

##### Remarks

Format: double

#### `Readonly` previous_netchange

```ts
previous_netchange: number
```

Absolute price change of the previous trading day compared to the day before it.
ADF: ADF_Veraenderung_Vortag | IDS: n/a

##### Remarks

Format: double

#### `Readonly` previous_netchange_percent

```ts
previous_netchange_percent: number
```

Percentage price change of the previous trading day compared to the day before it.
ADF: ADF_Veraenderung_Vortag | IDS: n/a

##### Remarks

Format: double

#### `Readonly` previous_open_interest

```ts
previous_open_interest: number
```

Previous trading day's open interest.
ADF: ADF_Open_Interest_Vortag | IDS: unknown

##### Remarks

Format: int32

#### `Readonly` previous_open_price

```ts
previous_open_price: number
```

Previous trading day's opening price.
ADF: ADF_Anfang_Vortag | IDS: n/a

##### Remarks

Format: double

#### `Readonly` previous_repurchase_price

```ts
previous_repurchase_price: number
```

Previous trading day's repurchase (redemption) price — applicable to funds.
ADF: ADF_Ruecknahme_Vortag | IDS: n/a

##### Remarks

Format: double

#### `Readonly` previous_settlement_price

```ts
previous_settlement_price: number
```

Previous trading day's settlement price.
ADF: ADF_Settlement_Vortag | IDS: n/a

##### Remarks

Format: double

#### `Readonly` previous_vwap_price

```ts
previous_vwap_price: number
```

Previous trading day's volume-weighted average price (VWAP).
ADF: ADF_VWAP_Vortag | IDS: n/a

##### Remarks

Format: double

#### `Readonly` quality

```ts
quality: CdapiSnapquoteSnapquoteQuality
```

Data quality level: END_OF_DAY, DELAYED, or REALTIME.

##### Remarks

Format: enum

#### `Readonly` repurchase_price

```ts
repurchase_price: number
```

Current repurchase (redemption) price — applicable to funds.
ADF: ADF_Ruecknahme | IDS: n/a

##### Remarks

Format: double

#### `Readonly` settlement_price

```ts
settlement_price: number
```

Daily settlement price — official price used for daily mark-to-market of derivatives.
ADF: ADF_Settlement | IDS: n/a

##### Remarks

Format: double

#### `Readonly` trading_status_id

```ts
trading_status_id: number
```

Trading status identifier indicating the current market state (e.g. open, halted, closed).
ADF: ADF_Handelsstatus | IDS: n/a

##### Remarks

Format: uint32

#### `Readonly` turnover

```ts
turnover: number
```

Total turnover (traded value) for the current trading day in the instrument's currency.
ADF: ADF_Umsatz_gesamt_in_Whrg | IDS: IDS_REALTIME_ONEXCH_TURNOVER

##### Remarks

Format: double

#### `Readonly` unofficial_ask_price

```ts
unofficial_ask_price: number
```

Unofficial ask price; also used as the LME unofficial reference ask price.
ADF: ADF_Unofficial_Ask | IDS: n/a

##### Remarks

Format: double

#### `Readonly` unofficial_bid_price

```ts
unofficial_bid_price: number
```

Unofficial bid price; also used as the LME unofficial reference bid price.
ADF: ADF_Unofficial_Bid | IDS: n/a

##### Remarks

Format: double

#### `Readonly` volume

```ts
volume: number
```

Cumulative traded volume for the current trading day.
ADF: ADF_Bezahlt_Umsatz | IDS: IDS_REALTIME_ONEXCH_VOLUME

##### Remarks

Format: double

#### `Readonly` vwap_price

```ts
vwap_price: number
```

Volume-weighted average price (VWAP) for the current trading day.
ADF: ADF_VWAP | IDS: n/a

##### Remarks

Format: double

#### `Readonly` yield

```ts
yield: number
```

Yield of the instrument (e.g. bond yield, dividend yield).
ADF: ADF_Rendite | IDS: IDS_REALTIME_YIELD

##### Remarks

Format: double

#### `Readonly` yield_bond_ask_price

```ts
yield_bond_ask_price: number
```

Zero coupon bond yield calculated on the ask price.
ADF: ADF_Rendite_Bond_Brief | IDS: n/a

##### Remarks

Format: double

#### `Readonly` yield_bond_bid_price

```ts
yield_bond_bid_price: number
```

Zero coupon bond yield calculated on the bid price.
ADF: ADF_Rendite_Bond_Geld | IDS: n/a

##### Remarks

Format: double

#### `Readonly` yield_on_ask_price

```ts
yield_on_ask_price: number
```

Yield calculated on the current ask price.
ADF: ADF_Rendite_Brief | IDS: IDS_REALTIME_ASK_YIELD

##### Remarks

Format: double

#### `Readonly` yield_on_bid_price

```ts
yield_on_bid_price: number
```

Yield calculated on the current bid price.
ADF: ADF_Rendite_Geld | IDS: IDS_REALTIME_BID_YIELD

##### Remarks

Format: double
