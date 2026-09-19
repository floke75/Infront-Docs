---
title: "cdapiPostFundAssetAllocations"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundAssetAllocations"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostFundAssetAllocations"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostFundAssetAllocations.html"
defines: ["cdapiPostFundAssetAllocations"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostFundAssetAllocationsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundAssetAllocationsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostFundAssetAllocations

```ts
cdapiPostFundAssetAllocations(
    options: CdapiPostFundAssetAllocationsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundAssetAllocationsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundAssetAllocationsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundAssetAllocationsData>>
```

ListAssetAllocations

Calls POST /fund/asset-allocations

#### Parameters

- options: [CdapiPostFundAssetAllocationsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostFundAssetAllocationsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundAssetAllocationsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundAssetAllocationsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundAssetAllocationsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundAssetAllocationsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundAssetAllocationsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundAssetAllocationsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListAssetAllocations_2
