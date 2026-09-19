---
title: "cdapiGetBondSpecialDebitorRedemptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondSpecialDebitorRedemptions"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondSpecialDebitorRedemptions"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondSpecialDebitorRedemptions.html"
defines: ["cdapiGetBondSpecialDebitorRedemptions"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondSpecialDebitorRedemptionsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondSpecialDebitorRedemptionsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondSpecialDebitorRedemptions

```ts
cdapiGetBondSpecialDebitorRedemptions(
    options: CdapiGetBondSpecialDebitorRedemptionsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiBondSpecialDebitorRedemptionsData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiBondSpecialDebitorRedemptionsData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiBondSpecialDebitorRedemptionsData>,
>
```

ListSpecialDebitorRedemptionsResponse retrieves reference interest rate
redemptions that could be filtered by various attributes. available for
source: WM

Calls GET /bond/special-debitor-redemptions

#### Parameters

- options: [CdapiGetBondSpecialDebitorRedemptionsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondSpecialDebitorRedemptionsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondSpecialDebitorRedemptionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondSpecialDebitorRedemptionsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondSpecialDebitorRedemptionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondSpecialDebitorRedemptionsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondSpecialDebitorRedemptionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondSpecialDebitorRedemptionsData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListSpecialDebitorRedemptions
