---
title: "cdapiGetInformationDocuments"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationDocuments"
kind: function
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > cdapiGetInformationDocuments"
source_url: "https://docs.infrontfinance.com/docs/functions/SDK.InfrontSDK.CoreDataAPI.cdapiGetInformationDocuments.html"
defines: ["cdapiGetInformationDocuments"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationDocumentsOptions", "SDK.InfrontSDK.CoreDataAPI.CdapiInformationDocumentsData", "SDK.InfrontSDK.TypedDataRequest"]
---

# cdapiGetInformationDocuments

```ts
cdapiGetInformationDocuments(
    options: CdapiGetInformationDocumentsOptions,
    onSuccess?: CoreDataRequestSuccessCallback<CdapiInformationDocumentsData>,
    onError?: CoreDataRequestErrorCallback<CdapiInformationDocumentsData>,
): TypedDataRequest<CoreDataResponseArray<CdapiInformationDocumentsData>>
```

ListDocuments retrieves documents. The language of the documents can be adjusted via the language header in the request.

Calls GET /information/documents

#### Parameters

- options: [CdapiGetInformationDocumentsOptions](./SDK.InfrontSDK.CoreDataAPI.CdapiGetInformationDocumentsOptions.md)
- `Optional` onSuccess: CoreDataRequestSuccessCallback<[CdapiInformationDocumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiInformationDocumentsData.md)>
- `Optional` onError: CoreDataRequestErrorCallback<[CdapiInformationDocumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiInformationDocumentsData.md)>

#### Returns [TypedDataRequest](./SDK.InfrontSDK.TypedDataRequest.md)<CoreDataResponseArray<[CdapiInformationDocumentsData](./SDK.InfrontSDK.CoreDataAPI.CdapiInformationDocumentsData.md)>>

#### Remarks

CDAPI Operation ID: DocumentService_ListDocuments
