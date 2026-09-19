---
title: "cdapiGetCommonFieldTemplates"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonFieldTemplates"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetCommonFieldTemplates"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetCommonFieldTemplates.html"
defines: ["cdapiGetCommonFieldTemplates"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonFieldTemplatesOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonListFieldTemplatesData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetCommonFieldTemplates

```ts
cdapiGetCommonFieldTemplates(
    options: CdapiGetCommonFieldTemplatesOptions,
    onSuccess?: CoreDataRequestSuccessCallback<
        CdapiCommonListFieldTemplatesData,
    >,
    onError?: CoreDataRequestErrorCallback<CdapiCommonListFieldTemplatesData>,
): TypedDataRequest<
    CoreDataResponseArray<CdapiCommonListFieldTemplatesData>,
>
```

ListFieldTemplates retrieves field templates representing list of fields.

Calls GET /common/field-templates

#### Parameters

- options: [CdapiGetCommonFieldTemplatesOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetCommonFieldTemplatesOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiCommonListFieldTemplatesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonListFieldTemplatesData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiCommonListFieldTemplatesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonListFieldTemplatesData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiCommonListFieldTemplatesData](./SDK.InfrontSDK.CoreDataAPI.CdapiCommonListFieldTemplatesData.md)>>

#### Remarks

CDAPI Operation ID: CommonService_ListFieldTemplates
