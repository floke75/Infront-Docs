---
title: "DocumentUrlOptions"
qualified_name: "SDK.InfrontSDK.DocumentUrlOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Documents"
nav_path: "SDK > InfrontSDK > Documents > DocumentUrlOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.DocumentUrlOptions.html"
defines: ["DocumentUrlOptions"]
member_count: 5
members: ["signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.DocumentUrl"]
reference_count: 6
references: ["SDK.InfrontSDK.DocumentUrl", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.documentUrl", "SDK.InfrontSDK.Document", "SDK.InfrontSDK.DataRequestOptions"]
---

# DocumentUrlOptions

Options to request regulatory document URL.

#### See

[documentUrl](./SDK.InfrontSDK.documentUrl.md) | Document

```ts
interface DocumentUrlOptions {
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: DocumentUrl): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.DocumentUrlOptions))

- DataRequestOptions<DocumentUrl>

  - DocumentUrlOptions

### Properties

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
onData(data: DocumentUrl): void
```

A callback to be called to pass the output.

##### Parameters

- data: DocumentUrl

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
