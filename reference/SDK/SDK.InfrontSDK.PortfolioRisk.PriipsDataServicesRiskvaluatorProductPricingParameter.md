---
title: "PriipsDataServicesRiskvaluatorProductPricingParameter"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorProductPricingParameter"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataServicesRiskvaluatorProductPricingParameter"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorProductPricingParameter.html"
defines: ["PriipsDataServicesRiskvaluatorProductPricingParameter"]
member_count: 15
members: ["bondId", "discountCurveId", "dividendShift", "endOfDay", "model", "spot", "spotShift", "spreadAddOn", "spreadCurveId", "useDividendYield", "useDynamicSpreadAddOn", "useHistoricalVola", "valuationMethod", "volaProxyId", "volaShift"]
member_groups:
  "Properties": ["bondId", "discountCurveId", "dividendShift", "endOfDay", "model", "spot", "spotShift", "spreadAddOn", "spreadCurveId", "useDividendYield", "useDynamicSpreadAddOn", "useHistoricalVola", "valuationMethod", "volaProxyId", "volaShift"]
reference_count: 2
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorProductPricingParameterModel", "SDK.InfrontSDK.PortfolioRisk.PriipsDataServicesRiskvaluatorProductPricingParameterValuationMethod"]
---

# PriipsDataServicesRiskvaluatorProductPricingParameter

INTERNAL: Parameters which relate to pricing engine parameters

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.services.riskvaluator.ProductPricingParameter

```ts
interface PriipsDataServicesRiskvaluatorProductPricingParameter {
    bondId: string;
    discountCurveId: string;
    dividendShift: number;
    endOfDay: boolean;
    model: PriipsDataServicesRiskvaluatorProductPricingParameterModel;
    spot: number;
    spotShift: number;
    spreadAddOn: number;
    spreadCurveId: string;
    useDividendYield: boolean;
    useDynamicSpreadAddOn: boolean;
    useHistoricalVola: boolean;
    valuationMethod: PriipsDataServicesRiskvaluatorProductPricingParameterValuationMethod;
    volaProxyId: string;
    volaShift: number;
}
```

### Properties

#### `Readonly` bondId

```ts
bondId: string
```

Use the corresponding bond

#### `Readonly` discountCurveId

```ts
discountCurveId: string
```

The discounting curve used to discount risk-neutral payments

#### `Readonly` dividendShift

```ts
dividendShift: number
```

A dividend shift to be added to the underlying dividend yield

##### Remarks

Format: double

#### `Readonly` endOfDay

```ts
endOfDay: boolean
```

evaluate the product as end of day

#### `Readonly` model

```ts
model: PriipsDataServicesRiskvaluatorProductPricingParameterModel
```

##### Remarks

Format: enum

#### `Readonly` spot

```ts
spot: number
```

A spot for the underlying or product

##### Remarks

Format: double

#### `Readonly` spotShift

```ts
spotShift: number
```

Shift of the spot of the underlying

##### Remarks

Format: double

#### `Readonly` spreadAddOn

```ts
spreadAddOn: number
```

A shift of spread applied to the corresponding spread curve

##### Remarks

Format: double

#### `Readonly` spreadCurveId

```ts
spreadCurveId: string
```

The id of the spread curve to be used for discounting coupon payments

#### `Readonly` useDividendYield

```ts
useDividendYield: boolean
```

Use the dividend yield in the calculation

#### `Readonly` useDynamicSpreadAddOn

```ts
useDynamicSpreadAddOn: boolean
```

Use dynamic spread add on

#### `Readonly` useHistoricalVola

```ts
useHistoricalVola: boolean
```

Use historical volatilities in place of the implied volatilities
from market quotations

#### `Readonly` valuationMethod

```ts
valuationMethod: PriipsDataServicesRiskvaluatorProductPricingParameterValuationMethod
```

The valuation method used to price the product

##### Remarks

Format: enum

#### `Readonly` volaProxyId

```ts
volaProxyId: string
```

Use the corresponding identifier as proxy for the volatility

#### `Readonly` volaShift

```ts
volaShift: number
```

A constant shift of the volatility surface

##### Remarks

Format: double
