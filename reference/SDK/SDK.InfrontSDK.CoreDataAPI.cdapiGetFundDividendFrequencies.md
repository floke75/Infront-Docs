---
title: "cdapiGetFundDividendFrequencies"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundDividendFrequencies"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundDividendFrequencies"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundDividendFrequencies.html"
defines: ["cdapiGetFundDividendFrequencies"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundDividendFrequenciesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundDividendFrequenciesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundDividendFrequencies

```ts
cdapiGetFundDividendFrequencies(
    options: CdapiGetFundDividendFrequenciesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiFundDividendFrequenciesData,
    >,
    onError?: CoreDataRequestErrorCallback<CdapiFundDividendFrequenciesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundDividendFrequenciesData>>
```

ListDividendFrequencies

Calls GET /fund/dividend-frequencies

#### Parameters

- options: [CdapiGetFundDividendFrequenciesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundDividendFrequenciesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundDividendFrequenciesData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundDividendFrequenciesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundDividendFrequenciesData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundDividendFrequenciesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundDividendFrequenciesData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundDividendFrequenciesData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListDividendFrequencies
