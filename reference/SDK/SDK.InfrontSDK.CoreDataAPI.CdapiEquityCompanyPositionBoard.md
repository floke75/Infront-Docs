---
title: "CdapiEquityCompanyPositionBoard"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyPositionBoard"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyPositionBoard"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyPositionBoard.html"
defines: ["CdapiEquityCompanyPositionBoard"]
member_count: 3
members: ["chairman", "members", "vice_chairman"]
member_groups:
  "Properties": ["chairman", "members", "vice_chairman"]
---

# CdapiEquityCompanyPositionBoard

Board holds the supervisory or non-executive board composition.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyPosition_Board

```ts
interface CdapiEquityCompanyPositionBoard {
    chairman: string;
    members: readonly string[];
    vice_chairman: string;
}
```

### Properties

#### `Readonly` chairman

```ts
chairman: string
```

Name of the board chairman.

#### `Readonly` members

```ts
members: readonly string[]
```

Names of all other board members.

#### `Readonly` vice_chairman

```ts
vice_chairman: string
```

Name of the vice-chairman.
