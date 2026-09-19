---
title: "CdapiCommonDataCatalogSource"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonDataCatalogSource"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonDataCatalogSource"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonDataCatalogSource.html"
defines: ["CdapiCommonDataCatalogSource"]
member_count: 2
members: ["id", "trading_venue"]
member_groups:
  "Properties": ["id", "trading_venue"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonTradingVenue"]
---

# CdapiCommonDataCatalogSource

DataCatalogSource describes a data provider within the CDAPI data catalog.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.DataCatalogSource

```ts
interface CdapiCommonDataCatalogSource {
    id: number;
    trading_venue: readonly CdapiCommonTradingVenue[];
}
```

### Properties

#### `Readonly` id

```ts
id: number
```

##### Remarks

Format: int32

#### `Readonly` trading_venue

```ts
trading_venue: readonly CdapiCommonTradingVenue[]
```

Trading venue(s) associated with this data source.
