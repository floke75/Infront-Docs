---
title: "PortfolioRiskWtkProvider"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PortfolioRiskWtkProvider"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PortfolioRiskWtkProvider"
source_url: "https://docs.infrontfinance.com/docs/classes/SDK.InfrontSDK.PortfolioRisk.PortfolioRiskWtkProvider.html"
defines: ["PortfolioRiskWtkProvider"]
member_count: 1
members: ["convertToRiskPortfolio"]
member_groups:
  "Methods": ["convertToRiskPortfolio"]
related_types: ["SDK.InfrontSDK.PortfolioRisk.PortfolioRiskProvider"]
reference_count: 4
references: ["SDK.InfrontSDK.Trading.PortfolioData", "SDK.InfrontSDK.PortfolioRisk.InputPortfolio", "SDK.InfrontSDK.PortfolioRisk.PriipsDataProductPortfolio", "SDK.InfrontSDK.PortfolioRisk.PortfolioRiskProvider"]
---

# PortfolioRiskWtkProvider

Portfolio Risk Provider

Implementation for SDK/WTK trading portfolios.

#### Implements

- [PortfolioRiskProvider](./SDK.InfrontSDK.PortfolioRisk.PortfolioRiskProvider.md)

### Methods

#### convertToRiskPortfolio

```ts
convertToRiskPortfolio(
    rawPortfolio?: PortfolioData,
    inputPortfolio?: InputPortfolio,
    valuationDatetime?: Date,
): PriipsDataProductPortfolio
```

Convert a raw SDK/WTK trading portfolio or a standardized input-portfolio into a risk-portfolio as required by Risk backend.

##### Parameters

- `Optional` rawPortfolio: [PortfolioData](./SDK.InfrontSDK.Trading.PortfolioData.md)

  input either raw SDK/WTK trading portfolio (data)
- `Optional` inputPortfolio: [InputPortfolio](./SDK.InfrontSDK.PortfolioRisk.InputPortfolio.md)

  or an already standardized input-portfolio
- valuationDatetime: Date = ...

  optional valuation datetime, default to now

##### Returns [PriipsDataProductPortfolio](./SDK.InfrontSDK.PortfolioRisk.PriipsDataProductPortfolio.md)

-risk-portfolio as required by Risk backend

Implementation of PortfolioRiskProvider.convertToRiskPortfolio
