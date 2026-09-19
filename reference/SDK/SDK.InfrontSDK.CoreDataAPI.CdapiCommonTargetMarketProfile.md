---
title: "CdapiCommonTargetMarketProfile"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTargetMarketProfile"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonTargetMarketProfile"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonTargetMarketProfile.html"
defines: ["CdapiCommonTargetMarketProfile"]
member_count: 21
members: ["_meta", "client_category", "client_category_negative", "clients_objective", "clients_objective_negative", "distribution_strategy", "distribution_strategy_negative", "investment_horizon", "investment_horizon_negative", "knowledge_experience", "knowledge_experience_negative", "loss_bearing_ability", "loss_bearing_ability_negative", "risk_indicator_calculation_method", "risk_yield_profile", "risk_yield_profile_negative", "source", "special_needs", "special_needs_negative", "sri", "sri_negative"]
member_groups:
  "Properties": ["_meta", "client_category", "client_category_negative", "clients_objective", "clients_objective_negative", "distribution_strategy", "distribution_strategy_negative", "investment_horizon", "investment_horizon_negative", "knowledge_experience", "knowledge_experience_negative", "loss_bearing_ability", "loss_bearing_ability_negative", "risk_indicator_calculation_method", "risk_yield_profile", "risk_yield_profile_negative", "source", "special_needs", "special_needs_negative", "sri", "sri_negative"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonTargetMarketProfileSource"]
---

# CdapiCommonTargetMarketProfile

TargetMarketProfile holds the MiFID II target market assessment for a financial instrument.
Each dimension has both a positive target market (for whom the product is appropriate)
and a negative target market (for whom it is NOT appropriate).
Source: WM (reuses MifidCost.MifidSource).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.TargetMarketProfile

```ts
interface CdapiCommonTargetMarketProfile {
    _meta: BasedefEntityMeta;
    client_category: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    client_category_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    clients_objective: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    clients_objective_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    distribution_strategy: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    distribution_strategy_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    investment_horizon: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    investment_horizon_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    knowledge_experience: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    knowledge_experience_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    loss_bearing_ability: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    loss_bearing_ability_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    risk_indicator_calculation_method: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    risk_yield_profile: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    risk_yield_profile_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    source: CdapiCommonTargetMarketProfileSource;
    special_needs: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    special_needs_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    sri: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
    sri_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` client_category

```ts
client_category: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Positive target market — client categories for which the product is appropriate.

#### `Readonly` client_category_negative

```ts
client_category_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Negative target market — client categories for which the product is NOT appropriate.

#### `Readonly` clients_objective

```ts
clients_objective: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Client investment objectives compatibility (positive target market).

#### `Readonly` clients_objective_negative

```ts
clients_objective_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Client investment objectives exclusions (negative target market).

#### `Readonly` distribution_strategy

```ts
distribution_strategy: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Distribution channels through which the product may be sold (positive target market).

#### `Readonly` distribution_strategy_negative

```ts
distribution_strategy_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Distribution strategy exclusions (negative target market).

#### `Readonly` investment_horizon

```ts
investment_horizon: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Recommended investment horizon (positive target market).

#### `Readonly` investment_horizon_negative

```ts
investment_horizon_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Investment horizon exclusions (negative target market).

#### `Readonly` knowledge_experience

```ts
knowledge_experience: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Knowledge and experience requirements (positive target market).

#### `Readonly` knowledge_experience_negative

```ts
knowledge_experience_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Knowledge and experience exclusions (negative target market).

#### `Readonly` loss_bearing_ability

```ts
loss_bearing_ability: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Loss bearing ability requirements (positive target market).

#### `Readonly` loss_bearing_ability_negative

```ts
loss_bearing_ability_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Loss bearing ability exclusions (negative target market).

#### `Readonly` risk_indicator_calculation_method

```ts
risk_indicator_calculation_method: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Method used to derive the product's risk indicator score.

#### `Readonly` risk_yield_profile

```ts
risk_yield_profile: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Risk/yield profile compatibility (positive target market).

#### `Readonly` risk_yield_profile_negative

```ts
risk_yield_profile_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Risk/yield profile exclusions (negative target market).

#### `Readonly` source

```ts
source: CdapiCommonTargetMarketProfileSource
```

##### Remarks

Format: enum

#### `Readonly` special_needs

```ts
special_needs: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Special investor group compatibility (positive target market).

#### `Readonly` special_needs_negative

```ts
special_needs_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

Special investor group exclusions (negative target market).

#### `Readonly` sri

```ts
sri: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

SRRI/SRI compatibility (positive target market).

#### `Readonly` sri_negative

```ts
sri_negative: CdapiCommonTargetMarketProfileTargetMarketDictionaryEntry
```

SRRI/SRI exclusions (negative target market).
