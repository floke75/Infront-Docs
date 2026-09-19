---
title: "PriipsDataStaticProductIdentifier"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductIdentifier"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticProductIdentifier"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductIdentifier.html"
defines: ["PriipsDataStaticProductIdentifier"]
member_count: 3
members: ["identifier", "productName", "productShortName"]
member_groups:
  "Properties": ["identifier", "productName", "productShortName"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticIdentifier"]
---

# PriipsDataStaticProductIdentifier

ProductIdentifier contains the identifiers of a product

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.ProductIdentifier

```ts
interface PriipsDataStaticProductIdentifier {
    identifier: PriipsDataStaticIdentifier;
    productName: string;
    productShortName: string;
}
```

### Properties

#### `Readonly` identifier

```ts
identifier: PriipsDataStaticIdentifier
```

Product identifier containing tickers and IDs

#### `Readonly` productName

```ts
productName: string
```

Product name

#### `Readonly` productShortName

```ts
productShortName: string
```

Product short name
