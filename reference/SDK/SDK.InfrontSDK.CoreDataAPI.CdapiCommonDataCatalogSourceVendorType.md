---
title: "CdapiCommonDataCatalogSourceVendorType"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonDataCatalogSourceVendorType"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonDataCatalogSourceVendorType"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonDataCatalogSourceVendorType.html"
defines: ["CdapiCommonDataCatalogSourceVendorType"]
member_count: 2
members: ["code", "id"]
member_groups:
  "Properties": ["code", "id"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonDataCatalogSourceVendorTypeCode"]
---

# CdapiCommonDataCatalogSourceVendorType

VendorType classifies the type of data vendor.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.DataCatalogSource_VendorType

```ts
interface CdapiCommonDataCatalogSourceVendorType {
    code: CdapiCommonDataCatalogSourceVendorTypeCode;
    id: number;
}
```

### Properties

#### `Readonly` code

```ts
code: CdapiCommonDataCatalogSourceVendorTypeCode
```

##### Remarks

Format: enum

#### `Readonly` id

```ts
id: number
```

##### Remarks

Format: int32
