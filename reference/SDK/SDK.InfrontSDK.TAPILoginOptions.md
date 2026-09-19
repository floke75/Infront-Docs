---
title: "TAPILoginOptions"
qualified_name: "SDK.InfrontSDK.TAPILoginOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > TAPILoginOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.TAPILoginOptions.html"
defines: ["TAPILoginOptions"]
member_count: 8
members: ["password", "signal?", "subscribe?", "token", "username", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["password", "signal?", "subscribe?", "token", "username"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.TAPILoginMetadata"]
reference_count: 4
references: ["SDK.InfrontSDK.TAPILoginMetadata", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.DataRequestOptions"]
---

# TAPILoginOptions

Login request options.

```ts
interface TAPILoginOptions {
    password: string;
    signal?: AbortSignal;
    subscribe?: boolean;
    token: string;
    username: string;
    onData(data: TAPILoginMetadata[]): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.TAPILoginOptions))

- DataRequestOptions<TAPILoginMetadata[]>

  - TAPILoginOptions

### Properties

#### password

```ts
password: string
```

TAPI password.

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

#### token

```ts
token: string
```

KeyCloak identity token

#### username

```ts
username: string
```

TAPI username.

### Methods

#### onData

```ts
onData(data: TAPILoginMetadata[]): void
```

A callback to be called to pass the output.

##### Parameters

- data: TAPILoginMetadata[]

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
