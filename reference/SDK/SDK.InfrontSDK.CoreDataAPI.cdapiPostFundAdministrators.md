---
title: "cdapiPostFundAdministrators"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundAdministrators"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostFundAdministrators"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostFundAdministrators.html"
defines: ["cdapiPostFundAdministrators"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostFundAdministratorsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundAdministratorsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostFundAdministrators

```ts
cdapiPostFundAdministrators(
    options: CdapiPostFundAdministratorsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundAdministratorsData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundAdministratorsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundAdministratorsData>>
```

ListAdministrators retrievs a list of administrators.

Calls POST /fund/administrators

#### Parameters

- options: [CdapiPostFundAdministratorsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostFundAdministratorsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundAdministratorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundAdministratorsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundAdministratorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundAdministratorsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundAdministratorsData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundAdministratorsData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListAdministrators_2
