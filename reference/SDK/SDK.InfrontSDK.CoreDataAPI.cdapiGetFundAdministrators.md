---
title: "cdapiGetFundAdministrators"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundAdministrators"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundAdministrators"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundAdministrators.html"
defines: ["cdapiGetFundAdministrators"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundAdministratorsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundAdministratorsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundAdministrators

```ts
cdapiGetFundAdministrators(
    options: CdapiGetFundAdministratorsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundAdministratorsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundAdministratorsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundAdministratorsData>>
```

ListAdministrators retrievs a list of administrators.

Calls GET /fund/administrators

#### Parameters

- options: [CdapiGetFundAdministratorsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundAdministratorsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundAdministratorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundAdministratorsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundAdministratorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundAdministratorsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundAdministratorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundAdministratorsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListAdministrators
