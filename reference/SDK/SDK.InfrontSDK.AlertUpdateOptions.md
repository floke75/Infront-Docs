---
title: "AlertUpdateOptions"
qualified_name: "SDK.InfrontSDK.AlertUpdateOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Alerts"
nav_path: "SDK > InfrontSDK > Alerts > AlertUpdateOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.AlertUpdateOptions.html"
defines: ["AlertUpdateOptions"]
member_count: 9
members: ["action", "alert?", "alertId?", "revisionIndex?", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["action", "alert?", "alertId?", "revisionIndex?", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.AlertsResponse"]
reference_count: 8
references: ["SDK.InfrontSDK.AlertUpdateAction", "SDK.InfrontSDK.ServerAlert", "SDK.InfrontSDK.AlertData", "SDK.InfrontSDK.AlertsResponse", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.alertUpdate", "SDK.InfrontSDK.DataRequestOptions"]
---

# AlertUpdateOptions

Options for updating server alerts.

#### See

[alertUpdate](./SDK.InfrontSDK.alertUpdate.md)

```ts
interface AlertUpdateOptions {
    action: AlertUpdateAction;
    alert?: ServerAlert | AlertData;
    alertId?: string;
    revisionIndex?: number;
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: AlertsResponse): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.AlertUpdateOptions))

- DataRequestOptions<AlertsResponse>

  - AlertUpdateOptions

### Properties

#### action

```ts
action: AlertUpdateAction
```

Specify the operation to perform.

#### `Optional` alert

```ts
alert?: ServerAlert | AlertData
```

Data container for a simple alert. Used for AddAlert and ModifyAlert actions.

#### `Optional` alertId

```ts
alertId?: string
```

GUID identifying the alert. Only required when deleting or modifying an alert.

#### `Optional` revisionIndex

```ts
revisionIndex?: number
```

Must be specified when deleting or modifying an alert. The operation will only be performed if
this value matches the value stored on the server.

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
onData(data: AlertsResponse): void
```

A callback to be called to pass the output.

##### Parameters

- data: AlertsResponse

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
