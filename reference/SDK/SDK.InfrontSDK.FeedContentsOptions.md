---
title: "FeedContentsOptions"
qualified_name: "SDK.InfrontSDK.FeedContentsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Feeds"
nav_path: "SDK > InfrontSDK > Feeds > FeedContentsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.FeedContentsOptions.html"
defines: ["FeedContentsOptions"]
member_count: 12
members: ["additionalData?", "chain?", "chainName?", "contentType", "feed", "providerId?", "ranking?", "signal?", "subscribe", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["additionalData?", "chain?", "chainName?", "contentType", "feed", "providerId?", "ranking?", "signal?", "subscribe"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.Ranking", "SDK.InfrontSDK.ChainContent", "SDK.InfrontSDK.SymbolId", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.SymbolData"]
reference_count: 12
references: ["SDK.InfrontSDK.AdditionalDataKind", "SDK.InfrontSDK.FeedContentType", "SDK.InfrontSDK.RankingOptions", "SDK.InfrontSDK.SymbolId", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.SymbolData", "SDK.InfrontSDK.ChainContent", "SDK.InfrontSDK.Ranking", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.feedContents", "SDK.InfrontSDK.DataRequestOptions"]
---

# FeedContentsOptions

Options to retrieve the contents of one or more feeds.

#### See

[feedContents](./SDK.InfrontSDK.feedContents.md)

```ts
interface FeedContentsOptions {
    additionalData?: BrokerData | BrokerData[];
    chain?: { name: string; providerId: number };
    chainName?: string;
    contentType: FeedContentType;
    feed: number;
    providerId?: number;
    ranking?: RankingOptions;
    signal?: AbortSignal;
    subscribe: boolean;
    onData(
        data:
            | number[]
            | SymbolId[]
            | ObservableArray<SymbolData>
            | ChainContent
            | Ranking[]
            | ObservableArray<Ranking>,
    ): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.FeedContentsOptions))

- DataRequestOptions<    | number[]    | Ranking[]    | ChainContent    | SymbolId[]    | ObservableArray<SymbolData>    | ObservableArray<Ranking>,>

  - FeedContentsOptions

### Properties

#### `Optional` additionalData

```ts
additionalData?: BrokerData | BrokerData[]
```

Additional data to be requested for the symbols. See [AdditionalDataKind](./SDK.InfrontSDK.AdditionalDataKind.md) for available data kinds.

#### `Optional` chain

```ts
chain?: { name: string; providerId: number }
```

Chain options.

#### `Optional` chainName

```ts
chainName?: string
```

Chain name. Required when requesting chain content

#### contentType

```ts
contentType: FeedContentType
```

Specify the type of content to be returned.

#### feed

```ts
feed: number
```

Feed number(s). This option can be a number or an array of numbers.

#### `Optional` providerId

```ts
providerId?: number
```

Provider id. Required when requesting chain content

#### `Optional` ranking

```ts
ranking?: RankingOptions
```

Ranking options. If this is not defined it will rank the feed using `Turnover`.

#### `Optional` signal

```ts
signal?: AbortSignal
```

Signal to abort the request.

Inherited from DataRequestOptions.signal

#### subscribe

```ts
subscribe: boolean
```

Activate subscription if this is supported by the content type.

Overrides DataRequestOptions.subscribe

### Methods

#### onData

```ts
onData(
    data:
        | number[]
        | SymbolId[]
        | ObservableArray<SymbolData>
        | ChainContent
        | Ranking[]
        | ObservableArray<Ranking>,
): void
```

A callback to be called to pass the output.

##### Parameters

- data:
  | number[]
  | SymbolId[]
  | [ObservableArray](../Utils/Utils.InfrontUtil.ObservableArray.md)<SymbolData>
  | ChainContent
  | Ranking[]
  | [ObservableArray](../Utils/Utils.InfrontUtil.ObservableArray.md)<Ranking>

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
