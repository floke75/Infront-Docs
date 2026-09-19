---
title: "cdapiGetBondSpecialRedemptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondSpecialRedemptions"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondSpecialRedemptions"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondSpecialRedemptions.html"
defines: ["cdapiGetBondSpecialRedemptions"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondSpecialRedemptionsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondSpecialRedemptionsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondSpecialRedemptions

```ts
cdapiGetBondSpecialRedemptions(
    options: CdapiGetBondSpecialRedemptionsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiBondSpecialRedemptionsData>,
    onError?: CoreDataRequestErrorCallback<CdapiBondSpecialRedemptionsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiBondSpecialRedemptionsData>>
```

ListSpecialRedemptionsResponse retrieves special redemptions that could be
filtered by various attributes. available for source: WM

Calls GET /bond/special-redemptions

#### Parameters

- options: [CdapiGetBondSpecialRedemptionsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondSpecialRedemptionsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondSpecialRedemptionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondSpecialRedemptionsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondSpecialRedemptionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondSpecialRedemptionsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondSpecialRedemptionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondSpecialRedemptionsData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListSpecialRedemptions
