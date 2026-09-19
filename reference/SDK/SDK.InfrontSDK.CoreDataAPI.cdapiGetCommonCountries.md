---
title: "cdapiGetCommonCountries"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCountries"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonCountries"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonCountries.html"
defines: ["cdapiGetCommonCountries"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCountriesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonCountriesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonCountries

```ts
cdapiGetCommonCountries(
    options: CdapiGetCommonCountriesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonCountriesData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonCountriesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonCountriesData>>
```

ListCountries retrieves Countries.

Calls GET /common/countries

#### Parameters

- options: [CdapiGetCommonCountriesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonCountriesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonCountriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonCountriesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonCountriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonCountriesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonCountriesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonCountriesData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListCountries
