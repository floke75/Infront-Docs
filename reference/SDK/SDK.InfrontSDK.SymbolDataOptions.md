---
title: "SymbolDataOptions<T>"
qualified_name: "SDK.InfrontSDK.SymbolDataOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > SymbolDataOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.SymbolDataOptions.html"
defines: ["SymbolDataOptions"]
member_count: 9
members: ["content?", "fields?", "id", "interactive?", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["content?", "fields?", "id", "interactive?", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.SymbolData", "Utils.InfrontUtil.ObservableArray"]
reference_count: 9
references: ["SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.SymbolDataContentSet", "SDK.InfrontSDK.SymbolField", "SDK.InfrontSDK.SymbolData", "Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.SymbolDataContent"]
---

# SymbolDataOptions<T>

Options interface to request symbol data. Use [SymbolDataOptions.content](#content) to specify the desired data.

```ts
interface SymbolDataOptions<T extends SymbolId | SymbolId[] = SymbolId> {
    content?: SymbolDataContentSet;
    fields?: SymbolField[];
    id: T;
    interactive?: boolean;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(
        data: T extends SymbolId ? SymbolData : ObservableArray<SymbolData>,
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

- T extends SymbolId | SymbolId[] = SymbolId

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.SymbolDataOptions))

- DataRequestOptions<    T

  ```ts
  extends
  ```

  SymbolId ? SymbolData: ObservableArray<SymbolData>,>

  - SymbolDataOptions

### Properties

#### `Optional` content

```ts
content?: SymbolDataContentSet
```

Select symbol data content. If this is not assigned it will request for basic data.

This should be an object with key from [SymbolDataContent](./SDK.InfrontSDK.SymbolDataContent.md).

@example:

```typescript
content: {
	Basic: true,
	HistoricalPerformance: true
}
```

#### `Optional` fields

```ts
fields?: SymbolField[]
```

A list of symbol fields to be requested. Use this option to request the desired symbol data content without the need to set [SymbolDataOptions.content](#content).

This option can be used in combination with [SymbolDataOptions.content](#content).

#### id

```ts
id: T
```

Symbol id to request data for. Symbol can be identified by (feed, ticker), (ISIN, mic, currency) or (company id).
Only one way to identify the symbol should be used when requesting.

#### `Optional` interactive

```ts
interactive?: boolean
```

Don't wait until the whole content is available. Default value is true.

##### Remarks

To get notified whenever the content is available use notifyOnContent callback.

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
onData(
    data: T extends SymbolId ? SymbolData : ObservableArray<SymbolData>,
): void
```

A callback to be called to pass the output.

##### Parameters

- data: [T](#t) extends SymbolId ? SymbolData: [ObservableArray](../Utils/Utils.InfrontUtil.ObservableArray.md)<SymbolData>

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
