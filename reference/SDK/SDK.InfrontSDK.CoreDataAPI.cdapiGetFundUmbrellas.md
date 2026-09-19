---
title: "cdapiGetFundUmbrellas"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundUmbrellas"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundUmbrellas"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundUmbrellas.html"
defines: ["cdapiGetFundUmbrellas"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundUmbrellasOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundUmbrellasData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundUmbrellas

```ts
cdapiGetFundUmbrellas(
    options: CdapiGetFundUmbrellasOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundUmbrellasData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundUmbrellasData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundUmbrellasData>>
```

ListUmbrellas

Calls GET /fund/umbrellas

#### Parameters

- options: [CdapiGetFundUmbrellasOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundUmbrellasOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundUmbrellasData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundUmbrellasData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundUmbrellasData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundUmbrellasData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundUmbrellasData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundUmbrellasData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListUmbrellas
