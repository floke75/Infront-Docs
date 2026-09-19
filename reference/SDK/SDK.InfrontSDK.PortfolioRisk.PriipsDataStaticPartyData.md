---
title: "PriipsDataStaticPartyData"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticPartyData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticPartyData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticPartyData.html"
defines: ["PriipsDataStaticPartyData"]
member_count: 2
members: ["id", "role"]
member_groups:
  "Properties": ["id", "role"]
reference_count: 1
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticPartyDataRole"]
---

# PriipsDataStaticPartyData

PartyData contains data for a party that belongs to the product.enum
INTERNAL: Intended to be used for UBP (and Safra, no longer our customer) and only for display on the KID.
INTERNAL: All UBP products must have PartyData.

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.PartyData

```ts
interface PriipsDataStaticPartyData {
    id: number;
    role: PriipsDataStaticPartyDataRole;
}
```

### Properties

#### `Readonly` id

```ts
id: number
```

##### Remarks

Format: int32

#### `Readonly` role

```ts
role: PriipsDataStaticPartyDataRole
```

##### Remarks

Format: enum
