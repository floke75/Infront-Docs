---
title: "cdapiGetFundCustomFieldValues"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCustomFieldValues"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetFundCustomFieldValues"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCustomFieldValues.html"
defines: ["cdapiGetFundCustomFieldValues"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCustomFieldValuesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiFundCustomFieldValuesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetFundCustomFieldValues

```ts
cdapiGetFundCustomFieldValues(
    options: CdapiGetFundCustomFieldValuesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiFundCustomFieldValuesData>,
    onError?: CoreDataRequestErrorCallback<CdapiFundCustomFieldValuesData>,
): TypedDataRequest<CoreDataResponseArray<CdapiFundCustomFieldValuesData>>
```

ListCustomFieldValues delivers a list of customer specific field values

Calls GET /fund/custom-field-values

#### Parameters

- options: [CdapiGetFundCustomFieldValuesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCustomFieldValuesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiFundCustomFieldValuesData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundCustomFieldValuesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiFundCustomFieldValuesData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundCustomFieldValuesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiFundCustomFieldValuesData](./SDK.InfrontSDK.CoreDataAPI.CdapiFundCustomFieldValuesData.md)>>

#### Remarks

CDAPI Operation ID: FundService_ListCustomFieldValues
