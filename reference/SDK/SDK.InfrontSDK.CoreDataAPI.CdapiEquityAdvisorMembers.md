---
title: "CdapiEquityAdvisorMembers"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityAdvisorMembers"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityAdvisorMembers"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityAdvisorMembers.html"
defines: ["CdapiEquityAdvisorMembers"]
member_count: 4
members: ["fax", "name", "telephone", "type"]
member_groups:
  "Properties": ["fax", "name", "telephone", "type"]
---

# CdapiEquityAdvisorMembers

Members represents a single advisor contact entry.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.Advisor_Members

```ts
interface CdapiEquityAdvisorMembers {
    fax: string;
    name: string;
    telephone: string;
    type: string;
}
```

### Properties

#### `Readonly` fax

```ts
fax: string
```

Contact fax number.

#### `Readonly` name

```ts
name: string
```

Name of the advisor or advisory firm.

#### `Readonly` telephone

```ts
telephone: string
```

Contact telephone number.

#### `Readonly` type

```ts
type: string
```

Type / role of the advisor (e.g. "Investment Advisor", "Sub-Advisor").
