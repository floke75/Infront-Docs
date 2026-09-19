---
title: "TimeSeriesOptions"
qualified_name: "SDK.InfrontSDK.TimeSeriesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > TimeSeriesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.TimeSeriesOptions.html"
defines: ["TimeSeriesOptions"]
member_count: 15
members: ["adjustDividends?", "adjustFromDate?", "adjustSplits?", "daysBack?", "fields", "from?", "id", "resolution?", "signal?", "subscribe?", "targetCurrency?", "to?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["adjustDividends?", "adjustFromDate?", "adjustSplits?", "daysBack?", "fields", "from?", "id", "resolution?", "signal?", "subscribe?", "targetCurrency?", "to?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.TimeSeries"]
reference_count: 10
references: ["SDK.InfrontSDK.SymbolField", "SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK", "SDK.InfrontSDK.Resolution", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.timeSeries", "SDK.InfrontSDK.TimeSeries", "SDK.InfrontSDK.DataRequestOptions"]
---

# TimeSeriesOptions

Options interface for time series request.

#### See

[timeSeries](./SDK.InfrontSDK.timeSeries.md) | TimeSeries

```ts
interface TimeSeriesOptions {
    adjustDividends?: boolean;
    adjustFromDate?: boolean;
    adjustSplits?: boolean;
    daysBack?: number;
    fields: SymbolField[];
    from?: Date;
    id: SymbolId;
    resolution?: InfrontSDK.Resolution;
    signal?: AbortSignal;
    subscribe?: boolean;
    targetCurrency?: string;
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

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.TimeSeriesOptions))

- DataRequestOptions<ObservableArray<TimeSeries>>

  - TimeSeriesOptions

### Properties

#### `Optional` adjustDividends

```ts
adjustDividends?: boolean
```

Use this option to turn on dividends adjustments. This can only be applied on historical trades.

##### Remarks

Default value is true.

#### `Optional` adjustFromDate

```ts
adjustFromDate?: boolean
```

Add one extra trading day before the 'from' date. The default value is false.
Note: This flag only works for historical trades.

#### `Optional` adjustSplits

```ts
adjustSplits?: boolean
```

Use this option to turn on splits adjustments. This can only be applied on historical trades.

##### Remarks

Default value is true.

#### `Optional` daysBack

```ts
daysBack?: number
```

Number of days to request data for. If option to is not assigned today will be used. Default value is 1.

#### fields

```ts
fields: SymbolField[]
```

List of fields that need to be present for a time series item to be considered valid.

#### `Optional` from

```ts
from?: Date
```

Request trades from this date. Use this option to request for historical trades.

##### Remarks

This must be used in combination with [to](#to) option.

##### See

[to](#to)

#### id

```ts
id: SymbolId
```

Symbol id to be used to request for trades.

#### `Optional` resolution

```ts
resolution?: InfrontSDK.Resolution
```

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

Subscribe flag. Use this option to subscribe to realtime updates.

##### Remarks

If the current user does not have streaming access, no updates would be sent even when subscribe is true.

Overrides DataRequestOptions.subscribe

#### `Optional` targetCurrency

```ts
targetCurrency?: string
```

Convert all prices to selected currency

#### `Optional` to

```ts
to?: Date
```

Request trades to this date. Default value is today.

##### See

[from](#from) | [daysBack](#daysback)

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
