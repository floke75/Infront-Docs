---
title: "PriipsDataProductPortfolioPosition"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataProductPortfolioPosition"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataProductPortfolioPosition"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataProductPortfolioPosition.html"
defines: ["PriipsDataProductPortfolioPosition"]
member_count: 3
members: ["positionId", "product", "weight"]
member_groups:
  "Properties": ["positionId", "product", "weight"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticData"]
---

# PriipsDataProductPortfolioPosition

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.product.Portfolio_Position

```ts
interface PriipsDataProductPortfolioPosition {
    positionId: string;
    product: PriipsDataStaticData;
    weight: number;
}
```

### Properties

#### `Readonly` positionId

```ts
positionId: string
```

Identifier of the position inside the portfolio. Must be unique within this portfolio. If unset, may be generated.

#### `Readonly` product

```ts
product: PriipsDataStaticData
```

Information about the product. Can be filled to a lesser extent (only basic fields like name, identifier...)
and substituted from external sources.

#### `Readonly` weight

```ts
weight: number
```

Weight of the position inside the portfolio (i. e. how many shares of the product are contained in the portfolio)

##### Remarks

Format: double
