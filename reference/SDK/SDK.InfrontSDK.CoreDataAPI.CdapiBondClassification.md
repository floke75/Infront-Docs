---
title: "CdapiBondClassification"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiBondClassification"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiBondClassification"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiBondClassification.html"
defines: ["CdapiBondClassification"]
member_count: 2
members: ["bond_category", "bond_type"]
member_groups:
  "Properties": ["bond_category", "bond_type"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiBondClassificationBondCategory", "SDK.InfrontSDK.CoreDataAPI.CdapiBondClassificationBondType"]
---

# CdapiBondClassification

available for sources: edi, xid

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.bond.Classification

```ts
interface CdapiBondClassification {
    bond_category: CdapiBondClassificationBondCategory;
    bond_type: CdapiBondClassificationBondType;
}
```

### Properties

#### `Readonly` bond_category

```ts
bond_category: CdapiBondClassificationBondCategory
```

EDI,XID: Category of the financial instrument

#### `Readonly` bond_type

```ts
bond_type: CdapiBondClassificationBondType
```

EDI,XID: Macro category to which the financial instrument belongs.
