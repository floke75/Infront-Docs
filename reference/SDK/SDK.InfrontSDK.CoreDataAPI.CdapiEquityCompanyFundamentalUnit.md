---
title: "CdapiEquityCompanyFundamentalUnit"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalUnit"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyFundamentalUnit"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalUnit.html"
defines: ["CdapiEquityCompanyFundamentalUnit"]
member_count: 2
members: ["code", "name"]
member_groups:
  "Properties": ["code", "name"]
---

# CdapiEquityCompanyFundamentalUnit

Unit describes the scaling unit in which a financial figure is expressed.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyFundamental_Unit

```ts
interface CdapiEquityCompanyFundamentalUnit {
    code: string;
    name: string;
}
```

### Properties

#### `Readonly` code

```ts
code: string
```

Short unit code (e.g. "M" for millions, "K" for thousands).

#### `Readonly` name

```ts
name: string
```

Human-readable unit name (e.g. "Millions", "Thousands").
