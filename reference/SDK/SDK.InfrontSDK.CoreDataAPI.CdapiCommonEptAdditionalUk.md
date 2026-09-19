---
title: "CdapiCommonEptAdditionalUk"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptAdditionalUk"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEptAdditionalUk"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEptAdditionalUk.html"
defines: ["CdapiCommonEptAdditionalUk"]
member_count: 20
members: ["anti_dilution_benefit_derived", "assumed_portfolio_return", "has_ucits_existing_performance_fees", "investment_objective_portfolio", "ongoing_costs_portfolio_transaction_costs", "other_materially_relevant_risk_narrative_portfolio", "performance_information_adverse_conditions", "performance_information_comparator", "performance_information_higher_returns", "performance_information_lower_returns_or_loss", "performance_information_main_factors", "priip_or_ucits_or_both_data_delivery", "priips_kid_publication_date", "priips_kid_web_address", "transactions_costs_methodology", "ucits_kiid_publication_date", "ucits_kiid_web_address", "ucits_ongoing_charges", "ucits_performance_fees", "ucits_srri"]
member_groups:
  "Properties": ["anti_dilution_benefit_derived", "assumed_portfolio_return", "has_ucits_existing_performance_fees", "investment_objective_portfolio", "ongoing_costs_portfolio_transaction_costs", "other_materially_relevant_risk_narrative_portfolio", "performance_information_adverse_conditions", "performance_information_comparator", "performance_information_higher_returns", "performance_information_lower_returns_or_loss", "performance_information_main_factors", "priip_or_ucits_or_both_data_delivery", "priips_kid_publication_date", "priips_kid_web_address", "transactions_costs_methodology", "ucits_kiid_publication_date", "ucits_kiid_web_address", "ucits_ongoing_charges", "ucits_performance_fees", "ucits_srri"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonDictionary"]
---

# CdapiCommonEptAdditionalUk

Uk holds UK-specific PRIIPs/UCITS disclosure fields (post-Brexit UK regulatory requirements).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EptAdditional_Uk

```ts
interface CdapiCommonEptAdditionalUk {
    anti_dilution_benefit_derived: string;
    assumed_portfolio_return: number;
    has_ucits_existing_performance_fees: boolean;
    investment_objective_portfolio: string;
    ongoing_costs_portfolio_transaction_costs: number;
    other_materially_relevant_risk_narrative_portfolio: string;
    performance_information_adverse_conditions: string;
    performance_information_comparator: string;
    performance_information_higher_returns: string;
    performance_information_lower_returns_or_loss: string;
    performance_information_main_factors: string;
    priip_or_ucits_or_both_data_delivery: string;
    priips_kid_publication_date: string;
    priips_kid_web_address: string;
    transactions_costs_methodology: CdapiCommonDictionary;
    ucits_kiid_publication_date: string;
    ucits_kiid_web_address: string;
    ucits_ongoing_charges: number;
    ucits_performance_fees: number;
    ucits_srri: number;
}
```

### Properties

#### `Readonly` anti_dilution_benefit_derived

```ts
anti_dilution_benefit_derived: string
```

EPT 08040: Anti-dilution benefit derived — e.g. swing pricing benefit received.

#### `Readonly` assumed_portfolio_return

```ts
assumed_portfolio_return: number
```

EPT 08140: Assumed portfolio annual return used in calculations.

##### Remarks

Format: double

#### `Readonly` has_ucits_existing_performance_fees

```ts
has_ucits_existing_performance_fees: boolean
```

EPT 08190: If true, performance fees exist for this UCITS fund.

#### `Readonly` investment_objective_portfolio

```ts
investment_objective_portfolio: string
```

EPT 08070: Investment objective of the portfolio (UK narrative).

#### `Readonly` ongoing_costs_portfolio_transaction_costs

```ts
ongoing_costs_portfolio_transaction_costs: number
```

EPT 08020: UK ongoing portfolio transaction costs.

##### Remarks

Format: double

#### `Readonly` other_materially_relevant_risk_narrative_portfolio

```ts
other_materially_relevant_risk_narrative_portfolio: string
```

EPT 08080: Other materially relevant risk narrative (UK).

#### `Readonly` performance_information_adverse_conditions

```ts
performance_information_adverse_conditions: string
```

EPT 08130: Adverse conditions scenario narrative (UK).

#### `Readonly` performance_information_comparator

```ts
performance_information_comparator: string
```

EPT 08100: Performance comparator / benchmark description (UK).

#### `Readonly` performance_information_higher_returns

```ts
performance_information_higher_returns: string
```

EPT 08110: Higher returns scenario narrative (UK).

#### `Readonly` performance_information_lower_returns_or_loss

```ts
performance_information_lower_returns_or_loss: string
```

EPT 08120: Lower returns or loss scenario narrative (UK).

#### `Readonly` performance_information_main_factors

```ts
performance_information_main_factors: string
```

EPT 08090: Main factors affecting performance narrative (UK).

#### `Readonly` priip_or_ucits_or_both_data_delivery

```ts
priip_or_ucits_or_both_data_delivery: string
```

EPT 08010: Indicates whether data covers PRIIPs KID, UCITS KIID, or both.

#### `Readonly` priips_kid_publication_date

```ts
priips_kid_publication_date: string
```

EPT 08050: UK PRIIPs KID publication date. ISO-8601 recommended.

#### `Readonly` priips_kid_web_address

```ts
priips_kid_web_address: string
```

EPT 08060: Web address of the UK PRIIPs KID.

#### `Readonly` transactions_costs_methodology

```ts
transactions_costs_methodology: CdapiCommonDictionary
```

EPT 08030: Transaction costs methodology used (e.g. arrival price, slippage).

#### `Readonly` ucits_kiid_publication_date

```ts
ucits_kiid_publication_date: string
```

EPT 08150: UCITS KIID publication date. ISO-8601 recommended.

#### `Readonly` ucits_kiid_web_address

```ts
ucits_kiid_web_address: string
```

EPT 08160: Web address of the UCITS KID.

#### `Readonly` ucits_ongoing_charges

```ts
ucits_ongoing_charges: number
```

EPT 08180: UCITS ongoing charges figure (OCF).

##### Remarks

Format: double

#### `Readonly` ucits_performance_fees

```ts
ucits_performance_fees: number
```

EPT 08200: UCITS performance fee amount.

##### Remarks

Format: double

#### `Readonly` ucits_srri

```ts
ucits_srri: number
```

EPT 08170: UCITS SRRI (Synthetic Risk and Reward Indicator) — scale 1–7.

##### Remarks

Format: int32
