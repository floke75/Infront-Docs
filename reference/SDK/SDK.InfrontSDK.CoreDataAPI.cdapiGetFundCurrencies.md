---
title: "cdapiGetFundCurrencies"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCurrencies"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundCurrencies"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCurrencies.html"
defines: ["cdapiGetFundCurrencies"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCurrenciesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonCurrenciesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundCurrencies

```ts
cdapiGetFundCurrencies(
    options: CdapiGetFundCurrenciesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonCurrenciesData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonCurrenciesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonCurrenciesData>>
```

ListCurrencies retrieves Currencies.

Calls GET /fund/currencies

#### Parameters

- options: [CdapiGetFundCurrenciesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCurrenciesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonCurrenciesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonCurrenciesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonCurrenciesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonCurrenciesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonCurrenciesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonCurrenciesData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListCurrencies
