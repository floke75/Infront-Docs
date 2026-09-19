---
title: "cdapiPostFundCompartments"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundCompartments"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostFundCompartments"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostFundCompartments.html"
defines: ["cdapiPostFundCompartments"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostFundCompartmentsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundCompartmentsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostFundCompartments

```ts
cdapiPostFundCompartments(
    options: CdapiPostFundCompartmentsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundCompartmentsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundCompartmentsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundCompartmentsData>>
```

ListCompartments

Calls POST /fund/compartments

#### Parameters

- options: [CdapiPostFundCompartmentsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostFundCompartmentsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundCompartmentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundCompartmentsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundCompartmentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundCompartmentsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundCompartmentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundCompartmentsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListCompartments_2
