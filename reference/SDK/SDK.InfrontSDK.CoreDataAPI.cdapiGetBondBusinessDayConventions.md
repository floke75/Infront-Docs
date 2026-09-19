---
title: "cdapiGetBondBusinessDayConventions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondBusinessDayConventions"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondBusinessDayConventions"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondBusinessDayConventions.html"
defines: ["cdapiGetBondBusinessDayConventions"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondBusinessDayConventionsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondListBusinessDayConventionsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondBusinessDayConventions

```ts
cdapiGetBondBusinessDayConventions(
    options: CdapiGetBondBusinessDayConventionsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiBondListBusinessDayConventionsData,
    >,
    onError?: CoreDataRequestErrorCallback<
        CdapiBondListBusinessDayConventionsData,
    >,
): TypedDataRequest<
    CoreDataResponseArray<CdapiBondListBusinessDayConventionsData>,
>
```

ListBusinessDayConventions retrieves businnes day conventions that could
be filtered by various attributes. available for source: EDI

Calls GET /bond/business-day-conventions

#### Parameters

- options: [CdapiGetBondBusinessDayConventionsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondBusinessDayConventionsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondListBusinessDayConventionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondListBusinessDayConventionsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondListBusinessDayConventionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondListBusinessDayConventionsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondListBusinessDayConventionsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondListBusinessDayConventionsData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListBusinessDayConventions
