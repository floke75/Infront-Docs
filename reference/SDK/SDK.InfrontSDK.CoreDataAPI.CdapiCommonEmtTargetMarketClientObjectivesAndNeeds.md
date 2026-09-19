---
title: "CdapiCommonEmtTargetMarketClientObjectivesAndNeeds"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketClientObjectivesAndNeeds"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEmtTargetMarketClientObjectivesAndNeeds"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketClientObjectivesAndNeeds.html"
defines: ["CdapiCommonEmtTargetMarketClientObjectivesAndNeeds"]
member_count: 10
members: ["intended_compatible_with_clients_having_esg_preferences", "minimum_recommended_holding_period", "option_or_leveraged_return_profile", "other_specific_investment_need", "return_profile_growth", "return_profile_hedging", "return_profile_income", "return_profile_other", "return_profile_pension_scheme_germany", "return_profile_preservation"]
member_groups:
  "Properties": ["intended_compatible_with_clients_having_esg_preferences", "minimum_recommended_holding_period", "option_or_leveraged_return_profile", "other_specific_investment_need", "return_profile_growth", "return_profile_hedging", "return_profile_income", "return_profile_other", "return_profile_pension_scheme_germany", "return_profile_preservation"]
---

# CdapiCommonEmtTargetMarketClientObjectivesAndNeeds

ClientObjectivesAndNeeds captures the investment return profile and holding period.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EmtTargetMarket_ClientObjectivesAndNeeds

```ts
interface CdapiCommonEmtTargetMarketClientObjectivesAndNeeds {
    intended_compatible_with_clients_having_esg_preferences: string;
    minimum_recommended_holding_period: string;
    option_or_leveraged_return_profile: string;
    other_specific_investment_need: string;
    return_profile_growth: string;
    return_profile_hedging: string;
    return_profile_income: string;
    return_profile_other: string;
    return_profile_pension_scheme_germany: string;
    return_profile_preservation: string;
}
```

### Properties

#### `Readonly` intended_compatible_with_clients_having_esg_preferences

```ts
intended_compatible_with_clients_having_esg_preferences: string
```

EMT 05105: Whether the product is intended for investors with ESG preferences.

#### `Readonly` minimum_recommended_holding_period

```ts
minimum_recommended_holding_period: string
```

EMT 05080: Minimum recommended holding period.

#### `Readonly` option_or_leveraged_return_profile

```ts
option_or_leveraged_return_profile: string
```

EMT 05050: Suitable for option or leveraged return profiles.

#### `Readonly` other_specific_investment_need

```ts
other_specific_investment_need: string
```

EMT 05115: Other specific investment need this product addresses.

#### `Readonly` return_profile_growth

```ts
return_profile_growth: string
```

EMT 05020: Suitable for capital growth.

#### `Readonly` return_profile_hedging

```ts
return_profile_hedging: string
```

EMT 05040: Suitable as a hedging instrument.

#### `Readonly` return_profile_income

```ts
return_profile_income: string
```

EMT 05030: Suitable for regular income.

#### `Readonly` return_profile_other

```ts
return_profile_other: string
```

EMT 05060: Other return profile objectives.

#### `Readonly` return_profile_pension_scheme_germany

```ts
return_profile_pension_scheme_germany: string
```

EMT 05070: Suitable for pension scheme investors (Germany).

#### `Readonly` return_profile_preservation

```ts
return_profile_preservation: string
```

EMT 05010: Suitable for capital preservation.
