---
title: "PriipsDataStaticProductComponents"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductComponents"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticProductComponents"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductComponents.html"
defines: ["PriipsDataStaticProductComponents"]
---

# PriipsDataStaticProductComponents

ProductComponents contains product components, for PRIIPs the payoffs of these components are considered.
When using several product components, then the payoffs of the components will be accumulated.
The payoff description for each product components can be found at the corresponding product component.
Keep in mind that the payoff, if it depends on an underlying, will be multiplied with an eventual FX risk
and the basket weight.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.ProductComponents
