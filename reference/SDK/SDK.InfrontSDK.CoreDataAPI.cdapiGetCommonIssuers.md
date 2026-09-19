---
title: "cdapiGetCommonIssuers"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonIssuers"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonIssuers"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonIssuers.html"
defines: ["cdapiGetCommonIssuers"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonIssuersOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuersData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonIssuers

```ts
cdapiGetCommonIssuers(
    options: CdapiGetCommonIssuersOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonIssuersData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonIssuersData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonIssuersData>>
```

ListIssuers retrieves Issuers.

Calls GET /common/issuers

#### Parameters

- options: [CdapiGetCommonIssuersOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonIssuersOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonIssuersData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuersData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonIssuersData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuersData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonIssuersData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuersData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListIssuers
