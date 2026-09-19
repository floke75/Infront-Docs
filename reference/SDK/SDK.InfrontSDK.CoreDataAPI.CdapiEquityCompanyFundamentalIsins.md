---
title: "CdapiEquityCompanyFundamentalIsins"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalIsins"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyFundamentalIsins"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyFundamentalIsins.html"
defines: ["CdapiEquityCompanyFundamentalIsins"]
member_count: 1
members: ["list"]
member_groups:
  "Properties": ["list"]
---

# CdapiEquityCompanyFundamentalIsins

Isins holds the list of ISINs associated with this issuer.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyFundamental_Isins

```ts
interface CdapiEquityCompanyFundamentalIsins {
    list: readonly string[];
}
```

### Properties

#### `Readonly` list

```ts
list: readonly string[]
```

List of ISIN strings for this issuer's instruments.
