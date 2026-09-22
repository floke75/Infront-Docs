---
title: "QuoteVolume"
qualified_name: "SDK.InfrontSDK.Trading.QuoteVolume"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "RFQ Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > RFQ Trading > QuoteVolume"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.QuoteVolume.html"
defines: ["QuoteVolume"]
member_count: 14
members: ["accruedInterest", "accruedInterestDays", "ask", "askVolume", "bid", "bidVolume", "brokerId", "errorMessage", "portfolio", "rfqQuoteId", "settlementDate", "validFrom", "validUntil", "volume"]
member_groups:
  "Properties": ["accruedInterest", "accruedInterestDays", "ask", "askVolume", "bid", "bidVolume", "brokerId", "errorMessage", "portfolio", "rfqQuoteId", "settlementDate", "validFrom", "validUntil", "volume"]
---

# QuoteVolume

> Not the same page as [`quoteVolume`](./SDK.InfrontSDK.Trading.quoteVolume.md), the function — the names differ only in case.

A single quote response received from a broker.

```ts
interface QuoteVolume {
    accruedInterest: number;
    accruedInterestDays: number;
    ask: number;
    askVolume: number;
    bid: number;
    bidVolume: number;
    brokerId: string;
    errorMessage: string;
    portfolio: string;
    rfqQuoteId: string;
    settlementDate: Date;
    validFrom: Date;
    validUntil: Date;
    volume: number;
}
```

### Properties

#### accruedInterest

```ts
accruedInterest: number
```

Accrued interest for bond trades.

#### accruedInterestDays

```ts
accruedInterestDays: number
```

Number of accrued interest days.

#### ask

```ts
ask: number
```

The ask price offered by the broker.

#### askVolume

```ts
askVolume: number
```

Maximum volume the broker will sell.

#### bid

```ts
bid: number
```

The bid price offered by the broker.

#### bidVolume

```ts
bidVolume: number
```

Maximum volume the broker will buy.

#### brokerId

```ts
brokerId: string
```

The broker's ID.

#### errorMessage

```ts
errorMessage: string
```

Error message if the broker rejected the request.

#### portfolio

```ts
portfolio: string
```

The portfolio from the original request.

#### rfqQuoteId

```ts
rfqQuoteId: string
```

The broker's unique ID for this quote (used when placing an order based on this quote).

#### settlementDate

```ts
settlementDate: Date
```

Settlement date for the trade.

#### validFrom

```ts
validFrom: Date
```

Time from which this quote is valid.

#### validUntil

```ts
validUntil: Date
```

Time until which this quote is valid.

#### volume

```ts
volume: number
```

Volume from original quote request.
