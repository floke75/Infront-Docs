---
title: "cdapiPostFundUmbrellas"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundUmbrellas"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostFundUmbrellas"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostFundUmbrellas.html"
defines: ["cdapiPostFundUmbrellas"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostFundUmbrellasOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundUmbrellasData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostFundUmbrellas

```ts
cdapiPostFundUmbrellas(
    options: CdapiPostFundUmbrellasOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundUmbrellasData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundUmbrellasData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundUmbrellasData>>
```

ListUmbrellas

Calls POST /fund/umbrellas

#### Parameters

- options: [CdapiPostFundUmbrellasOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostFundUmbrellasOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundUmbrellasData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundUmbrellasData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundUmbrellasData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundUmbrellasData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundUmbrellasData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundUmbrellasData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListUmbrellas_2
