---
title: "cdapiGetCommonIssuerRelationships"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonIssuerRelationships"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonIssuerRelationships"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonIssuerRelationships.html"
defines: ["cdapiGetCommonIssuerRelationships"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonIssuerRelationshipsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuersData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonIssuerRelationships

```ts
cdapiGetCommonIssuerRelationships(
    options: CdapiGetCommonIssuerRelationshipsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiCommonIssuersData>,
    onError?: CoreDataRequestErrorCallback<CdapiCommonIssuersData>,
): TypedDataRequest<CoreDataResponseArray<CdapiCommonIssuersData>>
```

ListIssuerRelationships retrieves relations between issuers.

Calls GET /common/issuer/relationships

#### Parameters

- options: [CdapiGetCommonIssuerRelationshipsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonIssuerRelationshipsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonIssuersData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuersData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonIssuersData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuersData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonIssuersData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonIssuersData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListIssuerRelationships
