---
title: "cdapiGetEquityClassificationGicsIndustryGroups"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityClassificationGicsIndustryGroups"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetEquityClassificationGicsIndustryGroups"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetEquityClassificationGicsIndustryGroups.html"
defines: ["cdapiGetEquityClassificationGicsIndustryGroups"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityClassificationGicsIndustryGroupsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsIndustryGroupsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetEquityClassificationGicsIndustryGroups

```ts
cdapiGetEquityClassificationGicsIndustryGroups(
    options: CdapiGetEquityClassificationGicsIndustryGroupsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiEquityGicsIndustryGroupsData,
    >,
    onError?: CoreDataRequestErrorCallback<CdapiEquityGicsIndustryGroupsData>,
): TypedDataRequest<
    CoreDataResponseArray<CdapiEquityGicsIndustryGroupsData>,
>
```

ListClassificationGicsIndustryGroups retrieves gics industry groups.

Calls GET /equity/classification/gics/industry-groups

#### Parameters

- options: [CdapiGetEquityClassificationGicsIndustryGroupsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetEquityClassificationGicsIndustryGroupsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiEquityGicsIndustryGroupsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsIndustryGroupsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiEquityGicsIndustryGroupsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsIndustryGroupsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiEquityGicsIndustryGroupsData](./SDK.InfrontSDK.CoreDataAPI.CdapiEquityGicsIndustryGroupsData.md)>>

#### Remarks

CDAPI Operation ID: EquityService_ListClassificationGicsIndustryGroups
