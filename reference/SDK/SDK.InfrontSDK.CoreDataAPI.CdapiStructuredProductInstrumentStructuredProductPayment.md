---
title: "CdapiStructuredProductInstrumentStructuredProductPayment"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentStructuredProductPayment"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiStructuredProductInstrumentStructuredProductPayment"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentStructuredProductPayment.html"
defines: ["CdapiStructuredProductInstrumentStructuredProductPayment"]
member_count: 4
members: ["_meta", "date", "id", "income_type"]
member_groups:
  "Properties": ["_meta", "date", "id", "income_type"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductDictionary"]
---

# CdapiStructuredProductInstrumentStructuredProductPayment

Payment represents a scheduled income or coupon payment on the structured product.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.structured_product.InstrumentStructuredProduct_Payment

```ts
interface CdapiStructuredProductInstrumentStructuredProductPayment {
    _meta: BasedefEntityMeta;
    date: string;
    id: number;
    income_type: CdapiStructuredProductDictionary;
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

Value date on which the payment is made. ISO-8601 recommended.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this payment record.

##### Remarks

Format: int32

#### `Readonly` income_type

```ts
income_type: CdapiStructuredProductDictionary
```

Type of income payment (e.g. "COUPON", "DIVIDEND_EQUIVALENT").
