---
title: "cdapiGetFundCompartments"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCompartments"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundCompartments"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCompartments.html"
defines: ["cdapiGetFundCompartments"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCompartmentsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundCompartmentsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundCompartments

```ts
cdapiGetFundCompartments(
    options: CdapiGetFundCompartmentsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundCompartmentsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundCompartmentsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundCompartmentsData>>
```

ListCompartments

Calls GET /fund/compartments

#### Parameters

- options: [CdapiGetFundCompartmentsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCompartmentsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundCompartmentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundCompartmentsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundCompartmentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundCompartmentsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundCompartmentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundCompartmentsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListCompartments
