---
title: "CdapiCommonEetOtherGeneral"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOtherGeneral"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetOtherGeneral"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOtherGeneral.html"
defines: ["CdapiCommonEetOtherGeneral"]
member_count: 2
members: ["currency", "identifying_data"]
member_groups:
  "Properties": ["currency", "identifying_data"]
---

# CdapiCommonEetOtherGeneral

General holds basic product identification and currency.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetOther_General

```ts
interface CdapiCommonEetOtherGeneral {
    currency: string;
    identifying_data: string;
}
```

### Properties

#### `Readonly` currency

```ts
currency: string
```

EET 20030: ISO 4217 currency code of the instrument.

#### `Readonly` identifying_data

```ts
identifying_data: string
```

EET 20000: Financial instrument identifying data (e.g. ISIN).
