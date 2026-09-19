---
title: "AcceptQuoteOrderOptions"
qualified_name: "SDK.InfrontSDK.Trading.AcceptQuoteOrderOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "RFQ Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > RFQ Trading > AcceptQuoteOrderOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.AcceptQuoteOrderOptions.html"
defines: ["AcceptQuoteOrderOptions"]
member_count: 18
members: ["brokerId", "buyOrSell", "clientBIC?", "comment?", "portfolio", "price", "providerId?", "quoteRequestId", "rfqQuoteId", "settlementCurrency?", "settlementDate?", "signal?", "subscribe?", "symbolId", "volume", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["brokerId", "buyOrSell", "clientBIC?", "comment?", "portfolio", "price", "providerId?", "quoteRequestId", "rfqQuoteId", "settlementCurrency?", "settlementDate?", "signal?", "subscribe?", "symbolId", "volume"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions"]
reference_count: 5
references: ["SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.Trading.TradingGatewayInfo"]
---

# AcceptQuoteOrderOptions

Options for placing an order based on a received RFQ quote.

```ts
interface AcceptQuoteOrderOptions {
    brokerId: string;
    buyOrSell: BuyOrSell;
    clientBIC?: string;
    comment?: string;
    portfolio: string;
    price: number;
    providerId?: number;
    quoteRequestId: string;
    rfqQuoteId: string;
    settlementCurrency?: string;
    settlementDate?: Date;
    signal?: AbortSignal;
    subscribe?: boolean;
    symbolId: SymbolId;
    volume: number;
    onData(data: InsertOrderResponse): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.Trading.AcceptQuoteOrderOptions))

- DataRequestOptions<Infront.InsertOrderResponse>

  - AcceptQuoteOrderOptions

### Properties

#### brokerId

```ts
brokerId: string
```

The brokerId received in the QuoteVolume response.

#### buyOrSell

```ts
buyOrSell: BuyOrSell
```

Buy or sell.

#### `Optional` clientBIC

```ts
clientBIC?: string
```

Optional client BIC to include with the order. This is used by some brokers to identify the client.

#### `Optional` comment

```ts
comment?: string
```

Optional comment to include with the order.

#### portfolio

```ts
portfolio: string
```

The portfolio to place the order in.

#### price

```ts
price: number
```

Price to trade at (bid price for sell, ask price for buy).

#### `Optional` providerId

```ts
providerId?: number
```

Provider id for the trading gateway. This value is returned in the TradingGatewayInfo

#### quoteRequestId

```ts
quoteRequestId: string
```

The clientUUID from the original quoteVolume request (options.quoteId or auto-generated).

#### rfqQuoteId

```ts
rfqQuoteId: string
```

The rfqQuoteId received in the QuoteVolume response from the broker.

#### `Optional` settlementCurrency

```ts
settlementCurrency?: string
```

Settlement currency. This is used by some brokers to determine the settlement currency for the trade. If not provided, the server will use the default settlement currency for the symbol.

#### `Optional` settlementDate

```ts
settlementDate?: Date
```

Settlement date from the QuoteVolume response.

#### `Optional` signal

```ts
signal?: AbortSignal
```

Signal to abort the request.

Inherited from DataRequestOptions.signal

#### `Optional` subscribe

```ts
subscribe?: boolean
```

Subscribe flag. Use this option to subscribe to data updates.

##### Remarks

If the current user does not have streaming access, no updates would be sent even when subscribe is true.

Inherited from DataRequestOptions.subscribe

#### symbolId

```ts
symbolId: SymbolId
```

The symbol to place the order for.

#### volume

```ts
volume: number
```

Volume to trade.

### Methods

#### onData

```ts
onData(data: InsertOrderResponse): void
```

A callback to be called to pass the output.

##### Parameters

- data: InsertOrderResponse

  Output should be passed here.

##### Returns void

Inherited from DataRequestOptions.onData

#### `Optional` onError

```ts
onError?(error: ErrorBase): void
```

A callback to be called to pass the error(s).

##### Parameters

- error: ErrorBase

##### Returns void

Inherited from DataRequestOptions.onError

#### `Optional` onStatus

```ts
onStatus?(
    requestName: string,
    status: RequestStatus,
    extra?: RequestDetails,
): void
```

Request status callback. Use this callback to get more details about the current state of the request.

##### Parameters

- requestName: string
- status: [RequestStatus](./SDK.InfrontSDK.RequestStatus.md)

  Request status.
- `Optional` extra: RequestDetails

  Detailed information.

##### Returns void

Inherited from DataRequestOptions.onStatus
