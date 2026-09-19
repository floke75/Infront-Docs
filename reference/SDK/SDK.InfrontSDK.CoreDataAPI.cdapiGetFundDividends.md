---
title: "cdapiGetFundDividends"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundDividends"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundDividends"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundDividends.html"
defines: ["cdapiGetFundDividends"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundDividendsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundDividendData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundDividends

```ts
cdapiGetFundDividends(
    options: CdapiGetFundDividendsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundDividendData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundDividendData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundDividendData>>
```

ListDividend

Calls GET /fund/dividends

#### Parameters

- options: [CdapiGetFundDividendsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundDividendsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundDividendData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundDividendData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundDividendData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundDividendData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundDividendData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundDividendData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListDividends
