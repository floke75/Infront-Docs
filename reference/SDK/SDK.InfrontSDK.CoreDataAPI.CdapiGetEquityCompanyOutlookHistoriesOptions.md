---
title: "CdapiGetEquityCompanyOutlookHistoriesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyOutlookHistoriesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetEquityCompanyOutlookHistoriesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyOutlookHistoriesOptions.html"
defines: ["CdapiGetEquityCompanyOutlookHistoriesOptions"]
member_count: 8
members: ["company_code?", "instrument_id?", "isin?", "issuer_id?", "onData?", "onError?", "onFinally?", "source?"]
member_groups:
  "Properties": ["company_code?", "instrument_id?", "isin?", "issuer_id?", "onData?", "onError?", "onFinally?", "source?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyOutlookHistoriesData"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyOutlookHistoriesData", "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityCompanyOutlookHistoriesOptionsSource", "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyOutlookHistories"]
---

# CdapiGetEquityCompanyOutlookHistoriesOptions

Request options for [cdapiGetEquityCompanyOutlookHistories](./SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityCompanyOutlookHistories.md)

```ts
interface CdapiGetEquityCompanyOutlookHistoriesOptions {
    company_code?: string;
    instrument_id?: string;
    isin?: string;
    issuer_id?: string;
    onData?: CoreDataRequestSuccessCallback<
        CdapiEquityCompanyOutlookHistoriesData,
    >;
    onError?: CoreDataRequestErrorCallback<
        CdapiEquityCompanyOutlookHistoriesData,
    >;
    onFinally?: CoreDataRequestFinallyCallback<
        CdapiEquityCompanyOutlookHistoriesData,
    >;
    source?: CdapiGetEquityCompanyOutlookHistoriesOptionsSource;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiEquityCompanyOutlookHistoriesData>

  - CdapiGetEquityCompanyOutlookHistoriesOptions

### Properties

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
onData?: CoreDataRequestSuccessCallback<CdapiEquityCompanyOutlookHistoriesData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiEquityCompanyOutlookHistoriesData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<
    CdapiEquityCompanyOutlookHistoriesData,
>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`source

```ts
source?: CdapiGetEquityCompanyOutlookHistoriesOptionsSource
```

source derived from CompanyEstimate
