---
title: "CdapiGetEquityAdvisorsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityAdvisorsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetEquityAdvisorsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityAdvisorsOptions.html"
defines: ["CdapiGetEquityAdvisorsOptions"]
member_count: 3
members: ["onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityAdvisorsData"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEquityAdvisorsData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityAdvisors"]
---

# CdapiGetEquityAdvisorsOptions

Request options for [cdapiGetEquityAdvisors](./SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityAdvisors.md)

```ts
interface CdapiGetEquityAdvisorsOptions {
    onData?: CoreDataRequestSuccessCallback<CdapiEquityAdvisorsData>;
    onError?: CoreDataRequestErrorCallback<CdapiEquityAdvisorsData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiEquityAdvisorsData>;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiEquityAdvisorsData>

  - CdapiGetEquityAdvisorsOptions

### Properties

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiEquityAdvisorsData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiEquityAdvisorsData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiEquityAdvisorsData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally
