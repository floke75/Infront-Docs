---
title: "CdapiGetCommonListingsVerifyOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonListingsVerifyOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetCommonListingsVerifyOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonListingsVerifyOptions.html"
defines: ["CdapiGetCommonListingsVerifyOptions"]
member_count: 5
members: ["check_snapquote?", "onData?", "onError?", "onFinally?", "vwd_key?"]
member_groups:
  "Properties": ["check_snapquote?", "onData?", "onError?", "onFinally?", "vwd_key?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonVerifyListingsData"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonVerifyListingsData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonListingsVerify"]
---

# CdapiGetCommonListingsVerifyOptions

Request options for [cdapiGetCommonListingsVerify](./SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonListingsVerify.md)

```ts
interface CdapiGetCommonListingsVerifyOptions {
    check_snapquote?: boolean;
    onData?: CoreDataRequestSuccessCallback<CdapiCommonVerifyListingsData>;
    onError?: CoreDataRequestErrorCallback<CdapiCommonVerifyListingsData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiCommonVerifyListingsData>;
    vwd_key?: string | readonly string[];
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiCommonVerifyListingsData>

  - CdapiGetCommonListingsVerifyOptions

### Properties

#### `Optional` ` Readonly`check_snapquote

```ts
check_snapquote?: boolean
```

check snapquote data

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiCommonVerifyListingsData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiCommonVerifyListingsData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiCommonVerifyListingsData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`vwd_key

```ts
vwd_key?: string | readonly string[]
```

Our internal identifier combining instrument information with trading venue
