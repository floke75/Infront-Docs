---
title: "CdapiCommonEetAdditionalSupplementary"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetAdditionalSupplementary"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetAdditionalSupplementary"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetAdditionalSupplementary.html"
defines: ["CdapiCommonEetAdditionalSupplementary"]
member_count: 2
members: ["is_sustainability_risk_deemed_to_be_relevant", "total_fund_aum_or_notional"]
member_groups:
  "Properties": ["is_sustainability_risk_deemed_to_be_relevant", "total_fund_aum_or_notional"]
---

# CdapiCommonEetAdditionalSupplementary

Supplementary holds high-level ESG supplementary fields.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetAdditional_Supplementary

```ts
interface CdapiCommonEetAdditionalSupplementary {
    is_sustainability_risk_deemed_to_be_relevant: boolean;
    total_fund_aum_or_notional: number;
}
```

### Properties

#### `Readonly` is_sustainability_risk_deemed_to_be_relevant

```ts
is_sustainability_risk_deemed_to_be_relevant: boolean
```

EET 70000: If true, sustainability risk is deemed relevant for this instrument.

#### `Readonly` total_fund_aum_or_notional

```ts
total_fund_aum_or_notional: number
```

EET 70010: Total fund AUM (Assets Under Management) or notional value.

##### Remarks

Format: double
