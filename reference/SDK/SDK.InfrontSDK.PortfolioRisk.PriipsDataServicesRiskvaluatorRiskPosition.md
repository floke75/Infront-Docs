---
title: "PriipsDataServicesRiskvaluatorRiskPosition"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskPosition"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorRiskPosition"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskPosition.html"
defines: ["PriipsDataServicesRiskvaluatorRiskPosition"]
member_count: 8
members: ["assetClass", "currency", "fxRate", "positionId", "productIdentifier", "sectors", "spot", "weight"]
member_groups:
  "Properties": ["assetClass", "currency", "fxRate", "positionId", "productIdentifier", "sectors", "spot", "weight"]
reference_count: 4
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskPositionAssetClass", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCurrency", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductIdentifier", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskPositionGicsClassification"]
---

# PriipsDataServicesRiskvaluatorRiskPosition

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.RiskPosition

```ts
interface PriipsDataServicesRiskvaluatorRiskPosition {
    assetClass: PriipsDataServicesRiskvaluatorRiskPositionAssetClass;
    currency: PriipsDataStaticCurrency;
    fxRate: number;
    positionId: string;
    productIdentifier: PriipsDataStaticProductIdentifier;
    sectors: readonly PriipsDataServicesRiskvaluatorRiskPositionGicsClassification[];
    spot: number;
    weight: number;
}
```

### Properties

#### `Readonly` assetClass

```ts
assetClass: PriipsDataServicesRiskvaluatorRiskPositionAssetClass
```

##### Remarks

Format: enum

#### `Readonly` currency

```ts
currency: PriipsDataStaticCurrency
```

The currency of the spot

#### `Readonly` fxRate

```ts
fxRate: number
```

Fx-rate from the position currency to the portfolio currency

##### Remarks

Format: double

#### `Readonly` positionId

```ts
positionId: string
```

Identifier of this position

#### `Readonly` productIdentifier

```ts
productIdentifier: PriipsDataStaticProductIdentifier
```

The identifier of the position

#### `Readonly` sectors

```ts
sectors: readonly PriipsDataServicesRiskvaluatorRiskPositionGicsClassification[]
```

The sectors of the risk position, each with a given weight

#### `Readonly` spot

```ts
spot: number
```

Position spot value in its currency

##### Remarks

Format: double

#### `Readonly` weight

```ts
weight: number
```

The weight of the position in the portfolio

##### Remarks

Format: double
