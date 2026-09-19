---
title: "SectorCompaniesOptions"
qualified_name: "SDK.InfrontSDK.SectorCompaniesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > SectorCompaniesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.SectorCompaniesOptions.html"
defines: ["SectorCompaniesOptions"]
member_count: 13
members: ["countryCode?", "fields?", "keyfigureSource?", "limit?", "nearbyMarketCap?", "regionCode?", "sectorId?", "signal?", "sort?", "subSectorId?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["countryCode?", "fields?", "keyfigureSource?", "limit?", "nearbyMarketCap?", "regionCode?", "sectorId?", "signal?", "sort?", "subSectorId?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions"]
reference_count: 3
references: ["SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.DataRequestOptions"]
---

# SectorCompaniesOptions

Options for the sectorCompanies function.

```ts
interface SectorCompaniesOptions {
    countryCode?: string | string[];
    fields?: string;
    keyfigureSource?: CdapiKeyfigureSource;
    limit?: number;
    nearbyMarketCap?: number;
    regionCode?: string | string[];
    sectorId?: number | number[];
    signal?: AbortSignal;
    sort?: string[];
    subSectorId?: number | number[];
    onData(data: SectorCompany[]): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.SectorCompaniesOptions))

- DataRequestOptions<Infront.SectorCompany[]>

  - SectorCompaniesOptions

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

#### `Optional` keyfigureSource

```ts
keyfigureSource?: CdapiKeyfigureSource
```

supported sources are 'equity' (default) and 'equity_infront'

#### `Optional` limit

```ts
limit?: number
```

limit amount of companies, maximum is 100

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

#### `Optional` signal

```ts
signal?: AbortSignal
```

Signal to abort the request.

Inherited from DataRequestOptions.signal

#### `Optional` sort

```ts
sort?: string[]
```

sort the companies

use repeated field to apply sorting.

- '+' at the beginning of the string sorts ASC
- '-' at the beginning of the string sorts DESC

#### `Optional` subSectorId

```ts
subSectorId?: number | number[]
```

filter companies by sub-sector(s)

### Methods

#### onData

```ts
onData(data: SectorCompany[]): void
```

A callback to be called to pass the output.

##### Parameters

- data: SectorCompany[]

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
