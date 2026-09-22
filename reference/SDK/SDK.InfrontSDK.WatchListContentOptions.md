---
title: "WatchListContentOptions"
qualified_name: "SDK.InfrontSDK.WatchListContentOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "WatchLists"
nav_path: "SDK > InfrontSDK > WatchLists > WatchListContentOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.WatchListContentOptions.html"
defines: ["WatchListContentOptions"]
member_count: 10
members: ["action", "listName", "listNameUpdated?", "provider?", "signal?", "subscribe?", "symbolId", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["action", "listName", "listNameUpdated?", "provider?", "signal?", "subscribe?", "symbolId"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.WatchlistContent"]
reference_count: 6
references: ["SDK.InfrontSDK.WatchListContentAction", "SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.WatchlistContent", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.DataRequestOptions"]
---

# WatchListContentOptions

Options to request all items for a specific watchlist or save, delete or add a symbol

```ts
interface WatchListContentOptions {
    action: WatchListContentAction;
    listName: string;
    listNameUpdated?: string;
    provider?: number;
    signal?: AbortSignal;
    subscribe?: boolean;
    symbolId: SymbolId | SymbolId[];
    onData(data: boolean | WatchlistContent): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.WatchListContentOptions))

- DataRequestOptions<WatchlistContent | boolean>

  - WatchListContentOptions

### Properties

#### action

```ts
action: WatchListContentAction
```

Specify the operation to perform.

#### listName

```ts
listName: string
```

Name of the watch list to be modified.

#### `Optional` listNameUpdated

```ts
listNameUpdated?: string
```

New watchlist name to be used in combination with action to rename an existing watchlist. This option has no effect unless [action](#action) equals [WatchListContentAction.RenameWatchList](./SDK.InfrontSDK.WatchListContentAction.md#renamewatchlist).

#### `Optional` provider

```ts
provider?: number
```

Optional provider scope for the watchlist content action

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
symbolId: SymbolId | SymbolId[]
```

One or more symbol ids to be added or removed from the specified watch list.

### Methods

#### onData

```ts
onData(data: boolean | WatchlistContent): void
```

A callback to be called to pass the output.

##### Parameters

- data: boolean | [WatchlistContent](./SDK.InfrontSDK.WatchlistContent.class.md)

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
