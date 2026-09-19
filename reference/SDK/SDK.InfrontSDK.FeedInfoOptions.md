---
title: "FeedInfoOptions"
qualified_name: "SDK.InfrontSDK.FeedInfoOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Feeds"
nav_path: "SDK > InfrontSDK > Feeds > FeedInfoOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.FeedInfoOptions.html"
defines: ["FeedInfoOptions"]
member_count: 7
members: ["feed", "infoType", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["feed", "infoType", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.FeedInfo"]
reference_count: 7
references: ["SDK.InfrontSDK.FeedInfoType", "SDK.InfrontSDK.FeedInfo", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.feedInfo", "SDK.InfrontSDK.FeedListOptions", "SDK.InfrontSDK.DataRequestOptions"]
---

# FeedInfoOptions

Use this options to retrieve feed(s) meta data. It is possible to get data for multiple feeds by assigning an array of feed numbers.
This options should be passed to [feedInfo](./SDK.InfrontSDK.feedInfo.md).

#### See

FeedListOptions

```ts
interface FeedInfoOptions {
    feed: number | number[];
    infoType: FeedInfoType;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: string[] | FeedInfo[]): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.FeedInfoOptions))

- DataRequestOptions<FeedInfo[] | string[]>

  - FeedInfoOptions

### Properties

#### feed

```ts
feed: number | number[]
```

Feed number(s). This option can be a number or an array of numbers.

#### infoType

```ts
infoType: FeedInfoType
```

Specify the type of data to be returned.

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

### Methods

#### onData

```ts
onData(data: string[] | FeedInfo[]): void
```

A callback to be called to pass the output.

##### Parameters

- data: string[] | FeedInfo[]

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
