---
title: "AlertDeviceOptions"
qualified_name: "SDK.InfrontSDK.AlertDeviceOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Alerts"
nav_path: "SDK > InfrontSDK > Alerts > AlertDeviceOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.AlertDeviceOptions.html"
defines: ["AlertDeviceOptions"]
member_count: 6
members: ["action", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["action", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.AlertUpdateResponse", "SDK.InfrontSDK.AlertsEmailDeviceResponse"]
reference_count: 6
references: ["SDK.InfrontSDK.AlertDeviceUpdateAction", "SDK.InfrontSDK.AlertsEmailDeviceResponse", "SDK.InfrontSDK.AlertUpdateResponse", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.DataRequestOptions"]
---

# AlertDeviceOptions

Get or update alert devices as specified by the [AlertDeviceOptions.action](#action).

#### See

[AlertDeviceUpdateAction](./SDK.InfrontSDK.AlertDeviceUpdateAction.md) for available actions.

#### Param: options

```ts
interface AlertDeviceOptions {
    action: AlertDeviceUpdateAction;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: AlertsEmailDeviceResponse | AlertUpdateResponse): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.AlertDeviceOptions))

- DataRequestOptions<AlertUpdateResponse | AlertsEmailDeviceResponse>

  - AlertDeviceOptions

### Properties

#### action

```ts
action: AlertDeviceUpdateAction
```

action

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
onData(data: AlertsEmailDeviceResponse | AlertUpdateResponse): void
```

A callback to be called to pass the output.

##### Parameters

- data: AlertsEmailDeviceResponse | AlertUpdateResponse

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
