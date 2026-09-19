---
title: "CdapiEquityCompanyPosition"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyPosition"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyPosition"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyPosition.html"
defines: ["CdapiEquityCompanyPosition"]
member_count: 5
members: ["_meta", "board", "id", "management", "source"]
member_groups:
  "Properties": ["_meta", "board", "id", "management", "source"]
reference_count: 4
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyPositionBoard", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyPositionManagement", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyPositionSource"]
---

# CdapiEquityCompanyPosition

CompanyPosition holds the management and board composition of a company.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyPosition

```ts
interface CdapiEquityCompanyPosition {
    _meta: BasedefEntityMeta;
    board: CdapiEquityCompanyPositionBoard;
    id: string;
    management: CdapiEquityCompanyPositionManagement;
    source: CdapiEquityCompanyPositionSource;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` board

```ts
board: CdapiEquityCompanyPositionBoard
```

Board / supervisory board composition.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this record (= issuer_id).

#### `Readonly` management

```ts
management: CdapiEquityCompanyPositionManagement
```

Executive management team composition.

#### `Readonly` source

```ts
source: CdapiEquityCompanyPositionSource
```

Data source — reuses CompanyBasic.Source enum.

##### Remarks

Format: enum
