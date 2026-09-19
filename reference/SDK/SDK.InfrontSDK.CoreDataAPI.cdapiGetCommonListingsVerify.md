---
title: "cdapiGetCommonListingsVerify"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonListingsVerify"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonListingsVerify"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonListingsVerify.html"
defines: ["cdapiGetCommonListingsVerify"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonListingsVerifyOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonVerifyListingsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonListingsVerify

```ts
cdapiGetCommonListingsVerify(
    options: CdapiGetCommonListingsVerifyOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonVerifyListingsData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonVerifyListingsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonVerifyListingsData>>
```

VerifyListings retrievs basic fields for listings including status information

Calls GET /common/listings/verify

#### Parameters

- options: [CdapiGetCommonListingsVerifyOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonListingsVerifyOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonVerifyListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonVerifyListingsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonVerifyListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonVerifyListingsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonVerifyListingsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonVerifyListingsData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_VerifyListings
