---
title: "cdapiGetBondBondSeniorities"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondBondSeniorities"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondBondSeniorities"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondBondSeniorities.html"
defines: ["cdapiGetBondBondSeniorities"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondBondSenioritiesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondBondSenioritiesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondBondSeniorities

```ts
cdapiGetBondBondSeniorities(
    options: CdapiGetBondBondSenioritiesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiBondBondSenioritiesData>,
    onError?: CoreDataRequestErrorCallback<CdapiBondBondSenioritiesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiBondBondSenioritiesData>>
```

ListBondSenioritiesResponse retrieves bond seniorities that could
be filtered by various attributes. available for source: EDI

Calls GET /bond/bond-seniorities

#### Parameters

- options: [CdapiGetBondBondSenioritiesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondBondSenioritiesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondBondSenioritiesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondBondSenioritiesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondBondSenioritiesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondBondSenioritiesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondBondSenioritiesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondBondSenioritiesData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListBondSeniorities
