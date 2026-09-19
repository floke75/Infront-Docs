---
title: "FeedListOptions<T>"
qualified_name: "SDK.InfrontSDK.FeedListOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Feeds"
nav_path: "SDK > InfrontSDK > Feeds > FeedListOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.FeedListOptions.html"
defines: ["FeedListOptions"]
member_count: 7
members: ["feedInfo?", "serviceTypes?", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["feedInfo?", "serviceTypes?", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
reference_count: 3
references: ["SDK.InfrontSDK.FeedInfo", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails"]
---

# FeedListOptions<T>

Options to request a list of feeds. Use serviceTypes option to filter feed list by service type(s).

```ts
interface FeedListOptions<T extends boolean = true> {
    feedInfo?: T;
    serviceTypes?: {
        AdditionalData?: true;
        Alert?: true;
        AuxiliaryData?: true;
        Calc?: true;
        Calendar?: true;
        Chains?: true;
        Chat?: true;
        Consolidated?: true;
        Delayed?: true;
        FreeTextSearch?: true;
        Fundamentals?: true;
        FxTrading?: true;
        Historical?: true;
        Im?: true;
        Kid?: true;
        MarketData?: true;
        Markets?: true;
        News?: true;
        NewsContrib?: true;
        OrderEntry?: true;
        PortfolioTracker?: true;
        Realtime?: true;
        SymbolMapping?: true;
        SymbolSearch?: true;
        TopInvestors?: true;
        Trading?: true;
        Unknown?: true;
        Wire?: true;
    };
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(
        data: T extends true ? FeedInfo[] : T extends false ? number[] : never,
    ): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Type Parameters

- T extends boolean = true

#### Hierarchy

- FeedListReturnType<T>

  - FeedListOptions

### Properties

#### `Optional` feedInfo

```ts
feedInfo?: T
```

Retrieve feed meta data.

#### `Optional` serviceTypes

```ts
serviceTypes?: {
    AdditionalData?: true;
    Alert?: true;
    AuxiliaryData?: true;
    Calc?: true;
    Calendar?: true;
    Chains?: true;
    Chat?: true;
    Consolidated?: true;
    Delayed?: true;
    FreeTextSearch?: true;
    Fundamentals?: true;
    FxTrading?: true;
    Historical?: true;
    Im?: true;
    Kid?: true;
    MarketData?: true;
    Markets?: true;
    News?: true;
    NewsContrib?: true;
    OrderEntry?: true;
    PortfolioTracker?: true;
    Realtime?: true;
    SymbolMapping?: true;
    SymbolSearch?: true;
    TopInvestors?: true;
    Trading?: true;
    Unknown?: true;
    Wire?: true;
}
```

Filter feed list based on service supported by the feed.

#### `Optional` signal

```ts
signal?: AbortSignal
```

Signal to abort the request.

Inherited from FeedListReturnType.signal

#### `Optional` subscribe

```ts
subscribe?: boolean
```

Subscribe flag. Use this option to subscribe to data updates.

##### Remarks

If the current user does not have streaming access, no updates would be sent even when subscribe is true.

Inherited from FeedListReturnType.subscribe

### Methods

#### onData

```ts
onData(
    data: T extends true ? FeedInfo[] : T extends false ? number[] : never,
): void
```

A callback to be called to pass the output.

##### Parameters

- data: [T](#t) extends true ? FeedInfo[]: [T](#t) extends false ? number[]: never

  Output should be passed here.

##### Returns void

Inherited from FeedListReturnType.onData

#### `Optional` onError

```ts
onError?(error: ErrorBase): void
```

A callback to be called to pass the error(s).

##### Parameters

- error: ErrorBase

##### Returns void

Inherited from FeedListReturnType.onError

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

Inherited from FeedListReturnType.onStatus
