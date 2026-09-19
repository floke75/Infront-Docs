---
title: "CdapiCommonEptRisk"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptRisk"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEptRisk"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptRisk.html"
defines: ["CdapiCommonEptRisk"]
member_count: 17
members: ["credit_risk_measure", "flex_var_equivalent_volatility_historical", "flex_var_equivalent_volatility_reference_asset_allocation", "flex_var_equivalent_volatility_risk_limit", "has_a_contractual_maturity_date", "has_existing_credit_risk", "is_flexible", "is_risk_limit_relevant", "is_summary_risk_indicator_adjusted", "liquidity_risk", "market_risk_measure", "maturity_date", "portfolio_var_equivalent_volatility_reference", "recommended_holding_period", "source", "summary_risk_indicator", "valuation_frequency"]
member_groups:
  "Properties": ["credit_risk_measure", "flex_var_equivalent_volatility_historical", "flex_var_equivalent_volatility_reference_asset_allocation", "flex_var_equivalent_volatility_risk_limit", "has_a_contractual_maturity_date", "has_existing_credit_risk", "is_flexible", "is_risk_limit_relevant", "is_summary_risk_indicator_adjusted", "liquidity_risk", "market_risk_measure", "maturity_date", "portfolio_var_equivalent_volatility_reference", "recommended_holding_period", "source", "summary_risk_indicator", "valuation_frequency"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonDictionary", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptRiskSource"]
---

# CdapiCommonEptRisk

EptRisk holds the EPT risk assessment data for a portfolio / fund share class.
Covers the PRIIPs Summary Risk Indicator (SRI), valuation frequency, VEV calculation
parameters, credit risk, recommended holding period, and maturity information.
Source: INFRONT.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EptRisk

```ts
interface CdapiCommonEptRisk {
    credit_risk_measure: number;
    flex_var_equivalent_volatility_historical: number;
    flex_var_equivalent_volatility_reference_asset_allocation: number;
    flex_var_equivalent_volatility_risk_limit: number;
    has_a_contractual_maturity_date: boolean;
    has_existing_credit_risk: boolean;
    is_flexible: boolean;
    is_risk_limit_relevant: boolean;
    is_summary_risk_indicator_adjusted: boolean;
    liquidity_risk: CdapiCommonDictionary;
    market_risk_measure: number;
    maturity_date: string;
    portfolio_var_equivalent_volatility_reference: number;
    recommended_holding_period: string;
    source: CdapiCommonEptRiskSource;
    summary_risk_indicator: number;
    valuation_frequency: CdapiCommonDictionary;
}
```

### Properties

#### `Readonly` credit_risk_measure

```ts
credit_risk_measure: number
```

EPT 01110: Credit Risk Measure (CRM) — the credit risk component of the SRI (A–F scale).

##### Remarks

Format: int32

#### `Readonly` flex_var_equivalent_volatility_historical

```ts
flex_var_equivalent_volatility_historical: number
```

EPT 01040: Historical VEV for flexible products — calculated from historical returns.

##### Remarks

Format: double

#### `Readonly` flex_var_equivalent_volatility_reference_asset_allocation

```ts
flex_var_equivalent_volatility_reference_asset_allocation: number
```

EPT 01050: Reference asset allocation VEV for flexible products.

##### Remarks

Format: double

#### `Readonly` flex_var_equivalent_volatility_risk_limit

```ts
flex_var_equivalent_volatility_risk_limit: number
```

EPT 01070: VEV corresponding to the product's risk limit.

##### Remarks

Format: double

#### `Readonly` has_a_contractual_maturity_date

```ts
has_a_contractual_maturity_date: boolean
```

EPT 01125: If true, the product has a contractual maturity date.

#### `Readonly` has_existing_credit_risk

```ts
has_existing_credit_risk: boolean
```

EPT 01080: If true, the product has a credit risk component (e.g. issuer/guarantor default risk).

#### `Readonly` is_flexible

```ts
is_flexible: boolean
```

EPT 01030: If true, the product uses a flexible investment strategy (varies asset allocation).

#### `Readonly` is_risk_limit_relevant

```ts
is_risk_limit_relevant: boolean
```

EPT 01060: If true, a risk limit applies to the product.

#### `Readonly` is_summary_risk_indicator_adjusted

```ts
is_summary_risk_indicator_adjusted: boolean
```

EPT 01095: If true, the SRI was adjusted (e.g. due to illiquidity or other factors).

#### `Readonly` liquidity_risk

```ts
liquidity_risk: CdapiCommonDictionary
```

EPT 01140: Liquidity risk classification.

#### `Readonly` market_risk_measure

```ts
market_risk_measure: number
```

EPT 01100: Market Risk Measure (MRM) — the market risk component of the SRI (1–7).

##### Remarks

Format: int32

#### `Readonly` maturity_date

```ts
maturity_date: string
```

EPT 01130: Maturity date of the product. ISO-8601 recommended.

#### `Readonly` portfolio_var_equivalent_volatility_reference

```ts
portfolio_var_equivalent_volatility_reference: number
```

EPT 01020: Reference VEV (Value at Risk Equivalent Volatility) — the annualised volatility
used as the basis for the Market Risk Measure (MRM) calculation.

##### Remarks

Format: double

#### `Readonly` recommended_holding_period

```ts
recommended_holding_period: string
```

EPT 01120: Recommended holding period in years.

#### `Readonly` source

```ts
source: CdapiCommonEptRiskSource
```

##### Remarks

Format: enum

#### `Readonly` summary_risk_indicator

```ts
summary_risk_indicator: number
```

EPT 01090: Summary Risk Indicator (SRI) — composite score 1–7 combining MRM and CRM.
1 = lowest risk; 7 = highest risk.

##### Remarks

Format: int32

#### `Readonly` valuation_frequency

```ts
valuation_frequency: CdapiCommonDictionary
```

EPT 01010: Valuation frequency of the portfolio (e.g. "Daily", "Weekly").
