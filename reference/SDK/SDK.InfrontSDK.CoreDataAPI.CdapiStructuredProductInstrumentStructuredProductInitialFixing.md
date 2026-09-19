---
title: "CdapiStructuredProductInstrumentStructuredProductInitialFixing"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentStructuredProductInitialFixing"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiStructuredProductInstrumentStructuredProductInitialFixing"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentStructuredProductInitialFixing.html"
defines: ["CdapiStructuredProductInstrumentStructuredProductInitialFixing"]
member_count: 3
members: ["_meta", "date", "id"]
member_groups:
  "Properties": ["_meta", "date", "id"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta"]
---

# CdapiStructuredProductInstrumentStructuredProductInitialFixing

InitialFixing represents the initial reference price fixing for the underlying asset,
used as the baseline for payoff calculations.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.structured_product.InstrumentStructuredProduct_InitialFixing

```ts
interface CdapiStructuredProductInstrumentStructuredProductInitialFixing {
    _meta: BasedefEntityMeta;
    date: string;
    id: number;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata.

#### `Readonly` date

```ts
date: string
```

Date on which the initial fixing price was determined. ISO-8601 recommended.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this fixing record.

##### Remarks

Format: int32
