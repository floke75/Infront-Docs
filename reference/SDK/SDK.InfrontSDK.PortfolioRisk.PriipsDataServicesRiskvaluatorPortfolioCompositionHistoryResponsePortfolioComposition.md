---
title: "PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryResponsePortfolioComposition"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryResponsePortfolioComposition"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryResponsePortfolioComposition"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryResponsePortfolioComposition.html"
defines: ["PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryResponsePortfolioComposition"]
member_count: 3
members: ["portfolioCurrency", "positions", "valuationDatetime"]
member_groups:
  "Properties": ["portfolioCurrency", "positions", "valuationDatetime"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCurrency", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskPosition"]
---

# PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryResponsePortfolioComposition

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PortfolioCompositionHistoryResponse_PortfolioComposition

```ts
interface PriipsDataServicesRiskvaluatorPortfolioCompositionHistoryResponsePortfolioComposition {
    portfolioCurrency: PriipsDataStaticCurrency;
    positions: readonly PriipsDataServicesRiskvaluatorRiskPosition[];
    valuationDatetime: string;
}
```

### Properties

#### `Readonly` portfolioCurrency

```ts
portfolioCurrency: PriipsDataStaticCurrency
```

The portfolio currency

#### `Readonly` positions

```ts
positions: readonly PriipsDataServicesRiskvaluatorRiskPosition[]
```

The portfolio composition as a list of risk positions

#### `Readonly` valuationDatetime

```ts
valuationDatetime: string
```

timestamp where the profits and losses have been computed

##### Remarks

Format: date-time
