---
title: "Trade"
qualified_name: "SDK.InfrontSDK.Trade"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > Trade"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trade.html"
defines: ["Trade"]
member_count: 13
members: ["accumulatedVolume", "ask", "bid", "buyer", "dateTime", "market", "mid", "price", "seller", "spreadPercentage", "type", "value", "volume"]
member_groups:
  "Properties": ["accumulatedVolume", "ask", "bid", "buyer", "dateTime", "market", "mid", "price", "seller", "spreadPercentage", "type", "value", "volume"]
reference_count: 2
references: ["SDK.InfrontSDK.trades", "SDK.InfrontSDK.TradesOptions"]
---

# Trade

An interface used to store an intraday trade.

#### See

[trades](./SDK.InfrontSDK.trades.md) | TradesOptions

```ts
interface Trade {
    accumulatedVolume: number;
    ask: number;
    bid: number;
    buyer: string;
    dateTime: Date;
    market: string;
    mid: number;
    price: number;
    seller: string;
    spreadPercentage: number;
    type: string;
    value: number;
    volume: number;
}
```

### Properties

#### accumulatedVolume

```ts
accumulatedVolume: number
```

Total amount of traded volume in case of index.

#### ask

```ts
ask: number
```

Ask price, which is the lowest price a seller states as accepted for a security.

#### bid

```ts
bid: number
```

Bid price, which is the highest price that a buyer is willing to pay for a security.

#### buyer

```ts
buyer: string
```

Buyer short name. This is not available by all markets.

#### dateTime

```ts
dateTime: Date
```

Trade date and time.

#### market

```ts
market: string
```

Executed market.

#### mid

```ts
mid: number
```

Mid price, which is the price between the best price of the sellers ask price and the best price of the buyers bid price.
This is a computed value. mid = (bid + ask) / 2.

#### price

```ts
price: number
```

Trade actual price.

#### seller

```ts
seller: string
```

Seller short name. This is not available by all markets.

#### spreadPercentage

```ts
spreadPercentage: number
```

The percentage of bid-ask spread. This is a computed value. Spread % = (1 - (bid/ask)) * 100.

#### type

```ts
type: string
```

Trade type. Can take one of the following values.

@CORS Cross trade.
@AUCT Auction trade.
@VALU Valuation trade - not actual trade.
@INT Internalized trade.
@ICRO Internalized cross trade
@IPO IPO trade
@PUBL
@BLCK Block trade
@REP Reported trade
@BISO BISO trade
@TEND Tender offer
@OFF Off-exchange trade
@OFFD Off-exchange trade with delayed publication
@@LST Trading at Last

#### value

```ts
value: number
```

Trade value is the total price for the trade.
This is a computed value. value = price * volume.

#### volume

```ts
volume: number
```

Total number of security that was traded.
