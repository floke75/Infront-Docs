---
title: "cdapiGetBondRedemptionTypes"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondRedemptionTypes"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondRedemptionTypes"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondRedemptionTypes.html"
defines: ["cdapiGetBondRedemptionTypes"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondRedemptionTypesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondRedemptionTypesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondRedemptionTypes

```ts
cdapiGetBondRedemptionTypes(
    options: CdapiGetBondRedemptionTypesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiBondRedemptionTypesData>,
    onError?: CoreDataRequestErrorCallback<CdapiBondRedemptionTypesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiBondRedemptionTypesData>>
```

ListRedemptionTypesResponse retrieves reference interest rates that could
be filtered by various attributes. available for source: WM

Calls GET /bond/redemption-types

#### Parameters

- options: [CdapiGetBondRedemptionTypesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondRedemptionTypesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondRedemptionTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondRedemptionTypesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondRedemptionTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondRedemptionTypesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondRedemptionTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondRedemptionTypesData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListRedemptionTypes
