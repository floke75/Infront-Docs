---
title: "cdapiGetFundAssetAllocations"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundAssetAllocations"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundAssetAllocations"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundAssetAllocations.html"
defines: ["cdapiGetFundAssetAllocations"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundAssetAllocationsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundAssetAllocationsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundAssetAllocations

```ts
cdapiGetFundAssetAllocations(
    options: CdapiGetFundAssetAllocationsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundAssetAllocationsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundAssetAllocationsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundAssetAllocationsData>>
```

ListAssetAllocations

Calls GET /fund/asset-allocations

#### Parameters

- options: [CdapiGetFundAssetAllocationsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundAssetAllocationsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundAssetAllocationsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundAssetAllocationsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundAssetAllocationsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundAssetAllocationsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundAssetAllocationsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundAssetAllocationsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListAssetAllocations
