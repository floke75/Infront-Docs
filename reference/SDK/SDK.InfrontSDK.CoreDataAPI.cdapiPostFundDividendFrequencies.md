---
title: "cdapiPostFundDividendFrequencies"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiPostFundDividendFrequencies"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiPostFundDividendFrequencies"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiPostFundDividendFrequencies.html"
defines: ["cdapiPostFundDividendFrequencies"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiPostFundDividendFrequenciesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundDividendFrequenciesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiPostFundDividendFrequencies

```ts
cdapiPostFundDividendFrequencies(
    options: CdapiPostFundDividendFrequenciesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiFundDividendFrequenciesData,
    >,
    onError?: CoreDataRequestErrorCallback<CdapiFundDividendFrequenciesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundDividendFrequenciesData>>
```

ListDividendFrequencies

Calls POST /fund/dividend-frequencies

#### Parameters

- options: [CdapiPostFundDividendFrequenciesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiPostFundDividendFrequenciesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundDividendFrequenciesData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundDividendFrequenciesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundDividendFrequenciesData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundDividendFrequenciesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundDividendFrequenciesData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundDividendFrequenciesData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListDividendFrequencies_2
