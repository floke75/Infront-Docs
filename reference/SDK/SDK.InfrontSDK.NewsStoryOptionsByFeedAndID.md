---
title: "NewsStoryOptionsByFeedAndID"
qualified_name: "SDK.InfrontSDK.NewsStoryOptionsByFeedAndID"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > NewsStoryOptionsByFeedAndID"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.NewsStoryOptionsByFeedAndID.html"
defines: ["NewsStoryOptionsByFeedAndID"]
member_count: 8
members: ["feed", "headline?", "id", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["feed", "headline?", "id", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.NewsStory"]
reference_count: 5
references: ["SDK.InfrontSDK.NewsHeadline", "SDK.InfrontSDK.NewsStory", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.DataRequestOptions"]
---

# NewsStoryOptionsByFeedAndID

Request news story using the headline id and feed number.

#### See

NewsStoryOptions

```ts
interface NewsStoryOptionsByFeedAndID {
    feed: number;
    headline?: NewsHeadline;
    id: string;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: NewsStory): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.NewsStoryOptionsByFeedAndID))

- DataRequestOptions<NewsStory>

  - NewsStoryOptionsByFeedAndID

### Properties

#### feed

```ts
feed: number
```

News headline feed.

#### `Optional` headline

```ts
headline?: NewsHeadline
```

News headline instance to request story for.

#### id

```ts
id: string
```

News headline id.

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
onData(data: NewsStory): void
```

A callback to be called to pass the output.

##### Parameters

- data: NewsStory

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
