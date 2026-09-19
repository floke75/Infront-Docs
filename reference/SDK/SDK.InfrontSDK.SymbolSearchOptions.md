---
title: "SymbolSearchOptions"
qualified_name: "SDK.InfrontSDK.SymbolSearchOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Search"
nav_path: "SDK > InfrontSDK > Search > SymbolSearchOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.SymbolSearchOptions.html"
defines: ["SymbolSearchOptions"]
member_count: 11
members: ["fields?", "limit?", "matchResultFields?", "parameters", "searchType?", "signal?", "subscribe?", "onData", "onError?", "onFeedScoreAdjustment?", "onStatus?"]
member_groups:
  "Properties": ["fields?", "limit?", "matchResultFields?", "parameters", "searchType?", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onFeedScoreAdjustment?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.SearchResultItem"]
reference_count: 11
references: ["SDK.InfrontSDK.SearchResultField", "SDK.InfrontSDK.SearchParameters", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.FeedInfo", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.SearchResultItem", "SDK.InfrontSDK.symbolData", "SDK.InfrontSDK.SearchField", "SDK.InfrontSDK.SearchType"]
---

# SymbolSearchOptions

Options interface to request symbol search.

```ts
interface SymbolSearchOptions {
    fields?: SearchResultField[];
    limit?: number;
    matchResultFields?: boolean;
    parameters: string | SearchParameters;
    searchType?: SearchTypeSet;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: ObservableArray): void;
    onError?(error: ErrorBase): void;
    onFeedScoreAdjustment?(factor: number, feedInfo: FeedInfo): number;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.SymbolSearchOptions))

- DataRequestOptions<ObservableArray<SearchResultItem>>

  - SymbolSearchOptions

### Properties

#### `Optional` fields

```ts
fields?: SearchResultField[]
```

An array of fields used to specify what data fields should be presented in search result(s).
If the desired field is not available in [SearchResultField](./SDK.InfrontSDK.SearchResultField.md) then do [symbolData](./SDK.InfrontSDK.symbolData.md) to get it.

#### `Optional` limit

```ts
limit?: number
```

Maximum number of search results. Default value is 20.

#### `Optional` matchResultFields

```ts
matchResultFields?: boolean
```

If true, the search will try to match the search text in the result fields and rank the results accordingly. Default is true.

#### parameters

```ts
parameters: string | SearchParameters
```

This can be free-text string or key-value pairs used as search key. All provided keys must be members of SearchField.

#### `Optional` searchType

```ts
searchType?: SearchTypeSet
```

Type of results included in the search. See [SearchType](./SDK.InfrontSDK.SearchType.md) for available search types.

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

#### `Optional` onFeedScoreAdjustment

```ts
onFeedScoreAdjustment?(factor: number, feedInfo: FeedInfo): number
```

Use this callback to modify how a feed is ranked in the search result.

##### Parameters

- factor: number

  The default feed score adjustment factor based on feed access.
- feedInfo: FeedInfo

  Feed metadata that can be used to determine the feed score adjustment factor.

##### Returns number

A number that will be multiplied with the matching score to calculate the total score.
Numbers not in the range 0..2 will be ignored;

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
