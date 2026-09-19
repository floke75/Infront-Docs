---
title: "CdapiGetEquityCompanyTargetPriceHistoriesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyTargetPriceHistoriesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetEquityCompanyTargetPriceHistoriesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyTargetPriceHistoriesOptions.html"
defines: ["CdapiGetEquityCompanyTargetPriceHistoriesOptions"]
member_count: 9
members: ["align_with_close?", "company_code?", "instrument_id?", "isin?", "issuer_id?", "onData?", "onError?", "onFinally?", "source?"]
member_groups:
  "Properties": ["align_with_close?", "company_code?", "instrument_id?", "isin?", "issuer_id?", "onData?", "onError?", "onFinally?", "source?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyTargetPriceHistoriesData"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyTargetPriceHistoriesData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyTargetPriceHistoriesOptionsSource", "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyTargetPriceHistories"]
---

# CdapiGetEquityCompanyTargetPriceHistoriesOptions

Request options for [cdapiGetEquityCompanyTargetPriceHistories](./SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyTargetPriceHistories.md)

```ts
interface CdapiGetEquityCompanyTargetPriceHistoriesOptions {
    align_with_close?: boolean;
    company_code?: string;
    instrument_id?: string;
    isin?: string;
    issuer_id?: string;
    onData?: CoreDataRequestSuccessCallback<
        CdapiEquityCompanyTargetPriceHistoriesData,
    >;
    onError?: CoreDataRequestErrorCallback<
        CdapiEquityCompanyTargetPriceHistoriesData,
    >;
    onFinally?: CoreDataRequestFinallyCallback<
        CdapiEquityCompanyTargetPriceHistoriesData,
    >;
    source?: CdapiGetEquityCompanyTargetPriceHistoriesOptionsSource;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiEquityCompanyTargetPriceHistoriesData>

  - CdapiGetEquityCompanyTargetPriceHistoriesOptions

### Properties

#### `Optional` ` Readonly`align_with_close

```ts
align_with_close?: boolean
```

align_with_close (filter out target-prices when there is no close price)

#### `Optional` ` Readonly`company_code

```ts
company_code?: string
```

company_code

#### `Optional` ` Readonly`instrument_id

```ts
instrument_id?: string
```

instrument_id

#### `Optional` ` Readonly`isin

```ts
isin?: string
```

ISIN

#### `Optional` ` Readonly`issuer_id

```ts
issuer_id?: string
```

issuer_id

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<
    CdapiEquityCompanyTargetPriceHistoriesData,
>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<
    CdapiEquityCompanyTargetPriceHistoriesData,
>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<
    CdapiEquityCompanyTargetPriceHistoriesData,
>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`source

```ts
source?: CdapiGetEquityCompanyTargetPriceHistoriesOptionsSource
```

source derived from CompanyEstimate
