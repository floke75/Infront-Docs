---
title: "NewsHeadlinesOptions"
qualified_name: "SDK.InfrontSDK.NewsHeadlinesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "News"
nav_path: "SDK > InfrontSDK > News > NewsHeadlinesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.NewsHeadlinesOptions.html"
defines: ["NewsHeadlinesOptions"]
member_count: 10
members: ["from?", "idHint?", "limit?", "signal?", "source", "subscribe?", "to?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["from?", "idHint?", "limit?", "signal?", "source", "subscribe?", "to?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.NewsHeadline"]
reference_count: 7
references: ["SDK.InfrontSDK.SymbolId", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.NewsHeadline", "SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.newsHeadlines"]
---

# NewsHeadlinesOptions

An interface used to request news headlines. Output will be passed as NewsHeadline to DataRequestOptions.onData callback.

#### See

[newsHeadlines](./SDK.InfrontSDK.newsHeadlines.md) | NewsHeadline

```ts
interface NewsHeadlinesOptions {
    from?: Date;
    idHint?: string;
    limit?: number;
    signal?: AbortSignal;
    source: number | number[] | SymbolId | SymbolId[];
    subscribe?: boolean;
    to?: Date;
    onData(data: ObservableArray): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.NewsHeadlinesOptions))

- DataRequestOptions<ObservableArray<NewsHeadline>>

  - NewsHeadlinesOptions

### Properties

#### `Optional` from

```ts
from?: Date
```

Request news headlines from this date/time. Use this option in combination with [to](#to) option.

##### Remarks

To request news headlines using [from](#from)/[to](#to) options do not use [limit](#limit) option.

#### `Optional` idHint

```ts
idHint?: string
```

News headline id. Use this option to request more news headlines earlier to the one with this id.

#### `Optional` limit

```ts
limit?: number
```

Set maximum number of news headlines.
This option can be used in combination with [idHint](#idhint) to request more news headlines.

##### Remarks

To request news headlines using [from](#from)/[to](#to) options do not use [limit](#limit) option.

#### `Optional` signal

```ts
signal?: AbortSignal
```

Signal to abort the request.

Inherited from DataRequestOptions.signal

#### source

```ts
source: number | number[] | SymbolId | SymbolId[]
```

Set news headlines source. This option can be one or a list of SymbolId or feed number.

#### `Optional` subscribe

```ts
subscribe?: boolean
```

Subscribe flag. Use this option to subscribe to data updates.

##### Remarks

If the current user does not have streaming access, no updates would be sent even when subscribe is true.

Inherited from DataRequestOptions.subscribe

#### `Optional` to

```ts
to?: Date
```

Request news headlines to this date/time. Use this option in combination with [from](#from) option.

##### Remarks

To request news headlines using [from](#from)/[to](#to) options do not use [limit](#limit) option.

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
