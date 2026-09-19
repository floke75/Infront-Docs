---
title: "cdapiPostFundClassificationEfcs"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundClassificationEfcs"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostFundClassificationEfcs"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostFundClassificationEfcs.html"
defines: ["cdapiPostFundClassificationEfcs"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostFundClassificationEfcsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationEfcsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostFundClassificationEfcs

```ts
cdapiPostFundClassificationEfcs(
    options: CdapiPostFundClassificationEfcsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundClassificationEfcsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundClassificationEfcsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundClassificationEfcsData>>
```

ListClassificationEfcs

Calls POST /fund/classification/efcs

#### Parameters

- options: [CdapiPostFundClassificationEfcsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostFundClassificationEfcsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundClassificationEfcsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationEfcsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundClassificationEfcsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationEfcsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundClassificationEfcsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationEfcsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListClassificationEfcs_2
