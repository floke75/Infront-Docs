---
title: "InfrontSectorsOptions"
qualified_name: "SDK.InfrontSDK.InfrontSectorsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > InfrontSectorsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.InfrontSectorsOptions.html"
defines: ["InfrontSectorsOptions"]
member_count: 14
members: ["countryCode?", "fields?", "hasCompanyData?", "instrument?", "isin?", "nearbyMarketCap?", "regionCode?", "sectorId?", "sectorsType?", "signal?", "subSectorId?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["countryCode?", "fields?", "hasCompanyData?", "instrument?", "isin?", "nearbyMarketCap?", "regionCode?", "sectorId?", "sectorsType?", "signal?", "subSectorId?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions"]
reference_count: 3
references: ["SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.DataRequestOptions"]
---

# InfrontSectorsOptions

Options for the infrontSectors function.

```ts
interface InfrontSectorsOptions {
    countryCode?: string | string[];
    fields?: string;
    hasCompanyData?: boolean;
    instrument?: Instrument;
    isin?: string | string[];
    nearbyMarketCap?: number;
    regionCode?: string | string[];
    sectorId?: number | number[];
    sectorsType?: "sectors" | "subSectors";
    signal?: AbortSignal;
    subSectorId?: number | number[];
    onData(data: InfrontSector[]): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.InfrontSectorsOptions))

- DataRequestOptions<Infront.InfrontSector[]>

  - InfrontSectorsOptions

### Properties

#### `Optional` countryCode

```ts
countryCode?: string | string[]
```

filter companies by ISO2 country-code(s)

#### `Optional` fields

```ts
fields?: string
```

CDAPI fields are CSV strings, separated by ",", no spaces!
Please note that in SDK-language this "fields" are "tags"!

#### `Optional` hasCompanyData

```ts
hasCompanyData?: boolean
```

filter/sorting to find companies that have metadata

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

#### `Optional` nearbyMarketCap

```ts
nearbyMarketCap?: number
```

filter/sorting to find companies nearby to a defined market_capitalization

#### `Optional` regionCode

```ts
regionCode?: string | string[]
```

filter companies by region-code(s)

#### `Optional` sectorId

```ts
sectorId?: number | number[]
```

filter companies by sector(s)

#### `Optional` sectorsType

```ts
sectorsType?: "sectors" | "subSectors"
```

either request list of sectors (default) or sub-sectors

#### `Optional` signal

```ts
signal?: AbortSignal
```

Signal to abort the request.

Inherited from DataRequestOptions.signal

#### `Optional` subSectorId

```ts
subSectorId?: number | number[]
```

filter companies by sub-sector(s)

### Methods

#### onData

```ts
onData(data: InfrontSector[]): void
```

A callback to be called to pass the output.

##### Parameters

- data: InfrontSector[]

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
