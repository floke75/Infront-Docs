---
title: "CdapiCommonEmtTargetMarket"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarket"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEmtTargetMarket"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarket.html"
defines: ["CdapiCommonEmtTargetMarket"]
member_count: 5
members: ["_meta", "client_objectives_and_needs", "id", "source", "target_market_reference_date"]
member_groups:
  "Properties": ["_meta", "client_objectives_and_needs", "id", "source", "target_market_reference_date"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketClientObjectivesAndNeeds", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketSource"]
---

# CdapiCommonEmtTargetMarket

EmtTargetMarket holds the MiFID II target market assessment as defined in the EMT.
Source: INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EmtTargetMarket

```ts
interface CdapiCommonEmtTargetMarket {
    _meta: BasedefEntityMeta;
    client_objectives_and_needs: CdapiCommonEmtTargetMarketClientObjectivesAndNeeds;
    id: number;
    source: CdapiCommonEmtTargetMarketSource;
    target_market_reference_date: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata — placed at field 9 (ordering preserved for compatibility).

#### `Readonly` client_objectives_and_needs

```ts
client_objectives_and_needs: CdapiCommonEmtTargetMarketClientObjectivesAndNeeds
```

Client investment objectives and recommended holding period.

#### `Readonly` id

```ts
id: number
```

##### Remarks

Format: int32

#### `Readonly` source

```ts
source: CdapiCommonEmtTargetMarketSource
```

##### Remarks

Format: enum

#### `Readonly` target_market_reference_date

```ts
target_market_reference_date: string
```

EMT 01000: Target market assessment reference date. ISO-8601 recommended.
