---
title: "CdapiCommonWmClassification"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonWmClassification"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonWmClassification"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonWmClassification.html"
defines: ["CdapiCommonWmClassification"]
member_count: 7
members: ["instrument_type_addon_1", "instrument_type_addon_2", "instrument_type_addon_3", "instrument_type_addon_4", "product_group_segment", "product_type_segment", "security_type"]
member_groups:
  "Properties": ["instrument_type_addon_1", "instrument_type_addon_2", "instrument_type_addon_3", "instrument_type_addon_4", "product_group_segment", "product_type_segment", "security_type"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonWmClassificationData"]
---

# CdapiCommonWmClassification

WmClassification holds the WM Datenservice instrument type hierarchy.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.WmClassification

```ts
interface CdapiCommonWmClassification {
    instrument_type_addon_1: CdapiCommonWmClassificationData;
    instrument_type_addon_2: CdapiCommonWmClassificationData;
    instrument_type_addon_3: CdapiCommonWmClassificationData;
    instrument_type_addon_4: CdapiCommonWmClassificationData;
    product_group_segment: CdapiCommonWmClassificationData;
    product_type_segment: CdapiCommonWmClassificationData;
    security_type: CdapiCommonWmClassificationData;
}
```

### Properties

#### `Readonly` instrument_type_addon_1

```ts
instrument_type_addon_1: CdapiCommonWmClassificationData
```

WM instrument type add-on 1 (WM_Instrument_Type_Add_on_1_Code/Name).

#### `Readonly` instrument_type_addon_2

```ts
instrument_type_addon_2: CdapiCommonWmClassificationData
```

WM instrument type add-on 2.

#### `Readonly` instrument_type_addon_3

```ts
instrument_type_addon_3: CdapiCommonWmClassificationData
```

WM instrument type add-on 3.

#### `Readonly` instrument_type_addon_4

```ts
instrument_type_addon_4: CdapiCommonWmClassificationData
```

WM instrument type add-on 4.

#### `Readonly` product_group_segment

```ts
product_group_segment: CdapiCommonWmClassificationData
```

WM product group segment (WM_Product_Group_Segment_Code/Name).

#### `Readonly` product_type_segment

```ts
product_type_segment: CdapiCommonWmClassificationData
```

WM product type segment (WM_Product_Type_Segment_Code/Name).

#### `Readonly` security_type

```ts
security_type: CdapiCommonWmClassificationData
```

WM security type (WM_Security_Type_Code/Name).
