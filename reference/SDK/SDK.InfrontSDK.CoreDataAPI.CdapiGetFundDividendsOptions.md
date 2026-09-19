---
title: "CdapiGetFundDividendsOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetFundDividendsOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetFundDividendsOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetFundDividendsOptions.html"
defines: ["CdapiGetFundDividendsOptions"]
member_count: 3
members: ["onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiFundDividendData"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiFundDividendData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundDividends"]
---

# CdapiGetFundDividendsOptions

Request options for [cdapiGetFundDividends](./SDK.InfrontSDK.CoreDataAPI.cdapiGetFundDividends.md)

```ts
interface CdapiGetFundDividendsOptions {
    onData?: CoreDataRequestSuccessCallback<CdapiFundDividendData>;
    onError?: CoreDataRequestErrorCallback<CdapiFundDividendData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiFundDividendData>;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiFundDividendData>

  - CdapiGetFundDividendsOptions

### Properties

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiFundDividendData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiFundDividendData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiFundDividendData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally
