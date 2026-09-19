---
title: "CdapiCommonXidClassification"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonXidClassification"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonXidClassification"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonXidClassification.html"
defines: ["CdapiCommonXidClassification"]
member_count: 1
members: ["instrument_type"]
member_groups:
  "Properties": ["instrument_type"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonXidClassificationData"]
---

# CdapiCommonXidClassification

XidClassification holds the XID instrument type.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.XidClassification

```ts
interface CdapiCommonXidClassification {
    instrument_type: CdapiCommonXidClassificationData;
}
```

### Properties

#### `Readonly` instrument_type

```ts
instrument_type: CdapiCommonXidClassificationData
```

XID instrument type (code/name).
