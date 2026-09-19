---
title: "cdapiGetCommonIssuerRegions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonIssuerRegions"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonIssuerRegions"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonIssuerRegions.html"
defines: ["cdapiGetCommonIssuerRegions"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonIssuerRegionsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerRegionsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonIssuerRegions

```ts
cdapiGetCommonIssuerRegions(
    options: CdapiGetCommonIssuerRegionsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonIssuerRegionsData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonIssuerRegionsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonIssuerRegionsData>>
```

ListIssuerRegions retrieves issuer sector.

Calls GET /common/issuer/regions

#### Parameters

- options: [CdapiGetCommonIssuerRegionsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonIssuerRegionsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonIssuerRegionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerRegionsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonIssuerRegionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerRegionsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonIssuerRegionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuerRegionsData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListIssuerRegions
