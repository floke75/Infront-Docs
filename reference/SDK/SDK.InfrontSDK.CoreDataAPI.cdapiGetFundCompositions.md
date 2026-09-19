---
title: "cdapiGetFundCompositions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCompositions"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundCompositions"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCompositions.html"
defines: ["cdapiGetFundCompositions"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCompositionsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundCompositions

```ts
cdapiGetFundCompositions(
    options: CdapiGetFundCompositionsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundCompositionData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundCompositionData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundCompositionData>>
```

ListCompositions

Calls GET /fund/compositions

#### Parameters

- options: [CdapiGetFundCompositionsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCompositionsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundCompositionData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundCompositionData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundCompositionData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundCompositionData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListCompositions
