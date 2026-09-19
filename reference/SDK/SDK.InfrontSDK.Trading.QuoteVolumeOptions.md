---
title: "QuoteVolumeOptions"
qualified_name: "SDK.InfrontSDK.Trading.QuoteVolumeOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "RFQ Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > RFQ Trading > QuoteVolumeOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.QuoteVolumeOptions.html"
defines: ["QuoteVolumeOptions"]
member_count: 16
members: ["clientBIC?", "comment?", "currency?", "portfolio", "providerId?", "quoteId?", "requestedVolume?", "settlementDate?", "settlementType?", "signal?", "subscribe?", "symbolId", "volumeIsCash?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["clientBIC?", "comment?", "currency?", "portfolio", "providerId?", "quoteId?", "requestedVolume?", "settlementDate?", "settlementType?", "signal?", "subscribe?", "symbolId", "volumeIsCash?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.Trading.QuoteVolume"]
reference_count: 8
references: ["SDK.InfrontSDK.Trading.SettleType", "SDK.InfrontSDK.SymbolId", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.Trading.QuoteVolume", "SDK.InfrontSDK.Trading.TradingGatewayInfo"]
---

# QuoteVolumeOptions

Options for requesting a quote for a given volume of a financial instrument.

```ts
interface QuoteVolumeOptions {
    clientBIC?: string;
    comment?: string;
    currency?: string;
    portfolio: string;
    providerId?: number;
    quoteId?: string;
    requestedVolume?: number;
    settlementDate?: Date;
    settlementType?: SettleType;
    signal?: AbortSignal;
    subscribe?: boolean;
    symbolId: SymbolId;
    volumeIsCash?: boolean;
    onData(data: ObservableArray): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.Trading.QuoteVolumeOptions))

- DataRequestOptions<ObservableArray<QuoteVolume>>

  - QuoteVolumeOptions

### Properties

#### `Optional` clientBIC

```ts
clientBIC?: string
```

Optional client BIC to include with the quote request. This is used by some brokers to identify the client.

#### `Optional` comment

```ts
comment?: string
```

Optional comment to include with the quote request.

#### `Optional` currency

```ts
currency?: string
```

Settlement currency.

#### portfolio

```ts
portfolio: string
```

The portfolio to use for the quote request. This is used by the server to determine which brokers to send the request to, and is also returned in the quote response.

#### `Optional` providerId

```ts
providerId?: number
```

Provider id for the trading gateway. This value is returned in the TradingGatewayInfo

#### `Optional` quoteId

```ts
quoteId?: string
```

Client-provided unique ID for this quote request. Auto-generated if not provided.

#### `Optional` requestedVolume

```ts
requestedVolume?: number
```

The volume to request a quote for. This can be either share volume or cash amount, depending on the value of volumeIsCash.

#### `Optional` settlementDate

```ts
settlementDate?: Date
```

The settlement date for the quote request.

#### `Optional` settlementType

```ts
settlementType?: SettleType
```

The settlement type for the quote request. This indicates how the settlement date should be determined for the trade if the quote is accepted.

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

The symbol to request a quote for.

#### `Optional` volumeIsCash

```ts
volumeIsCash?: boolean
```

If true, requestedVolume is a cash amount rather than share volume.

### Methods

#### onData

```ts
onData(data: ObservableArray): void
```

A callback to be called to pass the output.

##### Parameters

- data: [ObservableArray](../Utils/Utils.InfrontUtil.ObservableArray.md)

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
