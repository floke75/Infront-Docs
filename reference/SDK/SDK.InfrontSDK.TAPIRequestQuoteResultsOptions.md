---
title: "TAPIRequestQuoteResultsOptions"
qualified_name: "SDK.InfrontSDK.TAPIRequestQuoteResultsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > TAPIRequestQuoteResultsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.TAPIRequestQuoteResultsOptions.html"
defines: ["TAPIRequestQuoteResultsOptions"]
member_count: 5
members: ["signal?", "subscribe?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["signal?", "subscribe?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.TAPIRequestQuoteResultsMetadata"]
reference_count: 4
references: ["SDK.InfrontSDK.TAPIRequestQuoteResultsMetadata", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.DataRequestOptions"]
---

# TAPIRequestQuoteResultsOptions

Quote Results request options.

```ts
interface TAPIRequestQuoteResultsOptions {
    signal?: AbortSignal;
    subscribe?: boolean;
    onData(data: TAPIRequestQuoteResultsMetadata[]): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.TAPIRequestQuoteResultsOptions))

- DataRequestOptions<TAPIRequestQuoteResultsMetadata[]>

  - TAPIRequestQuoteResultsOptions

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
onData(data: TAPIRequestQuoteResultsMetadata[]): void
```

A callback to be called to pass the output.

##### Parameters

- data: TAPIRequestQuoteResultsMetadata[]

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
