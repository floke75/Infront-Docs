---
title: "PriipsDataServicesRiskvaluatorPortfolioCompositionResponse"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioCompositionResponse"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorPortfolioCompositionResponse"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorPortfolioCompositionResponse.html"
defines: ["PriipsDataServicesRiskvaluatorPortfolioCompositionResponse"]
member_count: 2
members: ["portfolioCurrency", "positions"]
member_groups:
  "Properties": ["portfolioCurrency", "positions"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCurrency", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorRiskPosition"]
---

# PriipsDataServicesRiskvaluatorPortfolioCompositionResponse

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.PortfolioCompositionResponse

```ts
interface PriipsDataServicesRiskvaluatorPortfolioCompositionResponse {
    portfolioCurrency: PriipsDataStaticCurrency;
    positions: readonly PriipsDataServicesRiskvaluatorRiskPosition[];
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
