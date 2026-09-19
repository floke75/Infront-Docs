---
title: "KeyfiguresOptions"
qualified_name: "SDK.InfrontSDK.KeyfiguresOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > KeyfiguresOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.KeyfiguresOptions.html"
defines: ["KeyfiguresOptions"]
member_count: 9
members: ["fields?", "instrument?", "isin?", "rawData?", "signal?", "source?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["fields?", "instrument?", "isin?", "rawData?", "signal?", "source?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions"]
reference_count: 3
references: ["SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.DataRequestOptions"]
---

# KeyfiguresOptions

Options for the keyfigures function.

```ts
interface KeyfiguresOptions {
    fields?: string;
    instrument?: Instrument;
    isin?: string | string[];
    rawData?: boolean;
    signal?: AbortSignal;
    source?: CdapiKeyfigureSource;
    onData(data: Keyfigure[] | RawEquityIssuer[]): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.KeyfiguresOptions))

- DataRequestOptions<Infront.Keyfigure[] | Infront.RawEquityIssuer[]>

  - KeyfiguresOptions

### Properties

#### `Optional` fields

```ts
fields?: string
```

CDAPI fields are CSV strings, separated by ",", no spaces!
Please note that in SDK-language this "fields" are "tags"!

#### `Optional` instrument

```ts
instrument?: Instrument
```

identifier for single instrument

#### `Optional` isin

```ts
isin?: string | string[]
```

identifier for company or instrument

#### `Optional` rawData

```ts
rawData?: boolean
```

rawData = true: CDAPI data as is
rawData = false: mapped data as defined in Infront.Keyfigure

#### `Optional` signal

```ts
signal?: AbortSignal
```

Signal to abort the request.

Inherited from DataRequestOptions.signal

#### `Optional` source

```ts
source?: CdapiKeyfigureSource
```

supported sources are 'equity' (default) and 'equity_infront'

### Methods

#### onData

```ts
onData(data: Keyfigure[] | RawEquityIssuer[]): void
```

A callback to be called to pass the output.

##### Parameters

- data: Keyfigure[] | RawEquityIssuer[]

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
