---
title: "CdapiFundClassification"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundClassification"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundClassification"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundClassification.html"
defines: ["CdapiFundClassification"]
member_count: 4
members: ["_meta", "efc", "fund_type", "id"]
member_groups:
  "Properties": ["_meta", "efc", "fund_type", "id"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiFundClassificationFundClassification"]
---

# CdapiFundClassification

Classification holds the fund category classification criteria.
Used to classify funds by EFC category and fund type.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.Classification

```ts
interface CdapiFundClassification {
    _meta: BasedefEntityMeta;
    efc: CdapiFundClassificationFundClassification;
    fund_type: CdapiFundClassificationFundClassification;
    id: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` efc

```ts
efc: CdapiFundClassificationFundClassification
```

EFC (European Fund Classification) category — the standardised pan-European
fund category as defined by the EFC association.

#### `Readonly` fund_type

```ts
fund_type: CdapiFundClassificationFundClassification
```

Fund type — Infront's internal fund type classification.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this classification record (= listing or instrument id).
