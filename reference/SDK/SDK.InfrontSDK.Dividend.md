---
title: "Dividend"
qualified_name: "SDK.InfrontSDK.Dividend"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > Dividend"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Dividend.html"
defines: ["Dividend"]
member_count: 3
members: ["amount", "currency", "date"]
member_groups:
  "Properties": ["amount", "currency", "date"]
reference_count: 1
references: ["SDK.InfrontSDK.History"]
---

# Dividend

Dividend details representation.

#### See

History

```ts
interface Dividend {
    amount: number;
    currency: string;
    date: Date;
}
```

### Properties

#### amount

```ts
amount: number
```

Dividend amount.

#### currency

```ts
currency: string
```

Dividend currency.

#### date

```ts
date: Date
```

Dividend date.
