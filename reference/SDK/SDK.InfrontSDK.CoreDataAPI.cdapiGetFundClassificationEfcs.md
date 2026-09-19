---
title: "cdapiGetFundClassificationEfcs"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundClassificationEfcs"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundClassificationEfcs"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundClassificationEfcs.html"
defines: ["cdapiGetFundClassificationEfcs"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundClassificationEfcsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationEfcsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundClassificationEfcs

```ts
cdapiGetFundClassificationEfcs(
    options: CdapiGetFundClassificationEfcsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundClassificationEfcsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundClassificationEfcsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundClassificationEfcsData>>
```

ListClassificationEfcs

Calls GET /fund/classification/efcs

#### Parameters

- options: [CdapiGetFundClassificationEfcsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundClassificationEfcsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundClassificationEfcsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationEfcsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundClassificationEfcsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationEfcsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundClassificationEfcsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationEfcsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListClassificationEfcs
