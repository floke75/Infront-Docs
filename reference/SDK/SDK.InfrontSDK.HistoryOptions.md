---
title: "HistoryOptions"
qualified_name: "SDK.InfrontSDK.HistoryOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > HistoryOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.HistoryOptions.html"
defines: ["HistoryOptions"]
member_count: 7
members: ["adjustDividends?", "adjustSplits?", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["adjustDividends?", "adjustSplits?", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.History"]
reference_count: 5
references: ["SDK.InfrontSDK.History", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.history", "SDK.InfrontSDK.DataRequestOptions"]
---

# HistoryOptions

Options interface used to request company history.

#### See

[history](./SDK.InfrontSDK.history.md) | History

```ts
interface HistoryOptions {
    adjustDividends?: boolean;
    adjustSplits?: boolean;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: History): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.HistoryOptions))

- DataRequestOptions<History>

  - HistoryOptions

### Properties

#### `Optional` adjustDividends

```ts
adjustDividends?: boolean
```

Use this option to turn on dividends adjustments. This can only be applied on historical trades.

##### Remarks

Default value is true.

#### `Optional` adjustSplits

```ts
adjustSplits?: boolean
```

Use this option to turn on splits adjustments. This can only be applied on historical trades.

##### Remarks

Default value is true.

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
onData(data: History): void
```

A callback to be called to pass the output.

##### Parameters

- data: History

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
