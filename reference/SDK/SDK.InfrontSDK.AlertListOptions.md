---
title: "AlertListOptions"
qualified_name: "SDK.InfrontSDK.AlertListOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Alerts"
nav_path: "SDK > InfrontSDK > Alerts > AlertListOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.AlertListOptions.html"
defines: ["AlertListOptions"]
member_count: 5
members: ["signal?", "subscribe", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["signal?", "subscribe"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "Utils.InfrontUtil.ObservableArray"]
reference_count: 5
references: ["Utils.InfrontUtil.ObservableArray", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.alertList", "SDK.InfrontSDK.DataRequestOptions"]
---

# AlertListOptions

Options for requesting all alerts for the current user.

#### See

[alertList](./SDK.InfrontSDK.alertList.md)

```ts
interface AlertListOptions {
    signal?: AbortSignal;
    subscribe: boolean;
    onData(data: ObservableArray): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.AlertListOptions))

- DataRequestOptions<ObservableArray>

  - AlertListOptions

### Properties

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

Activate subscription.

Overrides DataRequestOptions.subscribe

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
