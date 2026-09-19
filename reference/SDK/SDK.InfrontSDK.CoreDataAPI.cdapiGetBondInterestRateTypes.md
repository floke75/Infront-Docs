---
title: "cdapiGetBondInterestRateTypes"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondInterestRateTypes"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondInterestRateTypes"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondInterestRateTypes.html"
defines: ["cdapiGetBondInterestRateTypes"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRateTypesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRateTypesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondInterestRateTypes

```ts
cdapiGetBondInterestRateTypes(
    options: CdapiGetBondInterestRateTypesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiBondInterestRateTypesData>,
    onError?: CoreDataRequestErrorCallback<CdapiBondInterestRateTypesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiBondInterestRateTypesData>>
```

ListInterestRateTypesResponse retrieves interest rate types that could be
filtered by various attributes. available for source: EDI,WM

Calls GET /bond/interest-rate-types

#### Parameters

- options: [CdapiGetBondInterestRateTypesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondInterestRateTypesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondInterestRateTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRateTypesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondInterestRateTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRateTypesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondInterestRateTypesData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondInterestRateTypesData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListInterestRateTypes
