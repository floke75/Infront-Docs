---
title: "CountryListOptions"
qualified_name: "SDK.InfrontSDK.CountryListOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > CountryListOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CountryListOptions.html"
defines: ["CountryListOptions"]
member_count: 11
members: ["countriesType?", "countryCode?", "hasCompanyData?", "language?", "regionCode?", "sectorId?", "signal?", "subSectorId?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["countriesType?", "countryCode?", "hasCompanyData?", "language?", "regionCode?", "sectorId?", "signal?", "subSectorId?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions", "SDK.InfrontSDK.Country"]
reference_count: 5
references: ["SDK.InfrontSDK.Country", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.countryList", "SDK.InfrontSDK.DataRequestOptions"]
---

# CountryListOptions

Options for the [countryList](./SDK.InfrontSDK.countryList.md) function.

```ts
interface CountryListOptions {
    countriesType?: "common" | "equityIssuer" | "issuer";
    countryCode?: string | string[];
    hasCompanyData?: boolean;
    language?: string;
    regionCode?: string | string[];
    sectorId?: number | number[];
    signal?: AbortSignal;
    subSectorId?: number | number[];
    onData(data: Country[]): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.CountryListOptions))

- DataRequestOptions<Country[]>

  - CountryListOptions

### Properties

#### `Optional` countriesType

```ts
countriesType?: "common" | "equityIssuer" | "issuer"
```

either request list of all counties or just those linked to issuers

#### `Optional` countryCode

```ts
countryCode?: string | string[]
```

filter countries by ISO2 country-code(s)

#### `Optional` hasCompanyData

```ts
hasCompanyData?: boolean
```

filter/sorting to find countries that have metadata

#### `Optional` language

```ts
language?: string
```

language to use for human-readable data

#### `Optional` regionCode

```ts
regionCode?: string | string[]
```

filter countries by region-code(s)

#### `Optional` sectorId

```ts
sectorId?: number | number[]
```

filter countries by sector(s)

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

filter countries by sub-sector(s)

### Methods

#### onData

```ts
onData(data: Country[]): void
```

A callback to be called to pass the output.

##### Parameters

- data: Country[]

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
