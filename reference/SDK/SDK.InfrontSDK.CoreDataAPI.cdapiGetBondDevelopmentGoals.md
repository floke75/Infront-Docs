---
title: "cdapiGetBondDevelopmentGoals"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetBondDevelopmentGoals"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetBondDevelopmentGoals"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetBondDevelopmentGoals.html"
defines: ["cdapiGetBondDevelopmentGoals"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetBondDevelopmentGoalsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiBondListDevelopmentGoalsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetBondDevelopmentGoals

```ts
cdapiGetBondDevelopmentGoals(
    options: CdapiGetBondDevelopmentGoalsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiBondListDevelopmentGoalsData,
    >,
    onError?: CoreDataRequestErrorCallback<CdapiBondListDevelopmentGoalsData>,
): TypedDataRequest<
    CoreDataResponseArray<CdapiBondListDevelopmentGoalsData>,
>
```

ListBusinessDayConventions retrieves businnes day conventions that could
be filtered by various attributes. available for source: EDI

Calls GET /bond/development-goals

#### Parameters

- options: [CdapiGetBondDevelopmentGoalsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetBondDevelopmentGoalsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiBondListDevelopmentGoalsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondListDevelopmentGoalsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiBondListDevelopmentGoalsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondListDevelopmentGoalsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiBondListDevelopmentGoalsData](./SDK.InfrontSDK.CoreDataAPI.CdapiBondListDevelopmentGoalsData.md)>>

#### Remarks

CDAPI Operation ID: BondService_ListDevelopmentGoals
