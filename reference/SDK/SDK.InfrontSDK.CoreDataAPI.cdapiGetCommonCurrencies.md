---
title: "cdapiGetCommonCurrencies"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCurrencies"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonCurrencies"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCurrencies.html"
defines: ["cdapiGetCommonCurrencies"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCurrenciesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonCurrenciesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonCurrencies

```ts
cdapiGetCommonCurrencies(
    options: CdapiGetCommonCurrenciesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonCurrenciesData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonCurrenciesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonCurrenciesData>>
```

ListCurrencies retrieves Currencies.

Calls GET /common/currencies

#### Parameters

- options: [CdapiGetCommonCurrenciesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCurrenciesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonCurrenciesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonCurrenciesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonCurrenciesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonCurrenciesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonCurrenciesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonCurrenciesData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListCurrencies
