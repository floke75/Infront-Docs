---
title: "CdapiCommonTickSizeTable"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTickSizeTable"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonTickSizeTable"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonTickSizeTable.html"
defines: ["CdapiCommonTickSizeTable"]
member_count: 2
members: ["to", "value"]
member_groups:
  "Properties": ["to", "value"]
---

# CdapiCommonTickSizeTable

Table holds a single price range upper bound and the tick value within it.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.TickSize_Table

```ts
interface CdapiCommonTickSizeTable {
    to: number;
    value: number;
}
```

### Properties

#### `Readonly` to

```ts
to: number
```

Upper bound of this price range. Not set if the range extends to infinity.

##### Remarks

Format: double

#### `Readonly` value

```ts
value: number
```

Minimum price increment (tick) applicable within this range.

##### Remarks

Format: double
