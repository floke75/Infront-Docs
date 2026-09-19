---
title: "LoginDataOptions"
qualified_name: "SDK.InfrontSDK.LoginDataOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Login"
nav_path: "SDK > InfrontSDK > Login > LoginDataOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.LoginDataOptions.html"
defines: ["LoginDataOptions"]
member_count: 6
members: ["flags", "signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["flags", "signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.LoginData"]
reference_count: 6
references: ["SDK.InfrontSDK.LoginData", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.loginData", "SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.LoginDataFlags"]
---

# LoginDataOptions

Options interface used to retrieve detailed information about login for the current session.
[LoginDataOptions](#) should be used as input argument to [loginData](./SDK.InfrontSDK.loginData.md).
Assign the corresponding flag(s) to select the desired output.

The output will be passed to [onData](#ondata) callback.

#### See

[loginData](./SDK.InfrontSDK.loginData.md)

```ts
interface LoginDataOptions {
    flags: { ConnectionStatus?: true; Features?: true; LoginDetails?: true };
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: LoginData): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.LoginDataOptions))

- DataRequestOptions<LoginData>

  - LoginDataOptions

### Properties

#### flags

```ts
flags: { ConnectionStatus?: true; Features?: true; LoginDetails?: true }
```

Switch on flags to determine desired output. This should be an object with key from [LoginDataFlags](./SDK.InfrontSDK.LoginDataFlags.md).

@example:

```typescript
flags = {
	Features: true,
	LoginDetails: true,
	Streaming: true
}
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

Subscribe flag. Use this option to subscribe to data updates.

##### Remarks

If the current user does not have streaming access, no updates would be sent even when subscribe is true.

Inherited from DataRequestOptions.subscribe

### Methods

#### onData

```ts
onData(data: LoginData): void
```

A callback to be called to pass the output.

##### Parameters

- data: LoginData

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
