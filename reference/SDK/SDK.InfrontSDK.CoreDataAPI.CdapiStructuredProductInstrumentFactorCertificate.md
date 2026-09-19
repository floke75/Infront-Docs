---
title: "CdapiStructuredProductInstrumentFactorCertificate"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentFactorCertificate"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiStructuredProductInstrumentFactorCertificate"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentFactorCertificate.html"
defines: ["CdapiStructuredProductInstrumentFactorCertificate"]
member_count: 6
members: ["_meta", "id", "management_fee", "participation_factor", "participation_level", "source"]
member_groups:
  "Properties": ["_meta", "id", "management_fee", "participation_factor", "participation_level", "source"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentFactorCertificateSource"]
---

# CdapiStructuredProductInstrumentFactorCertificate

InstrumentFactorCertificate represents master data for factor / leverage certificates.
A factor certificate provides a fixed daily leverage factor on the underlying's return,
reset each trading day to maintain a constant leverage ratio.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.structured_product.InstrumentFactorCertificate

```ts
interface CdapiStructuredProductInstrumentFactorCertificate {
    _meta: BasedefEntityMeta;
    id: string;
    management_fee: number;
    participation_factor: number;
    participation_level: number;
    source: CdapiStructuredProductInstrumentFactorCertificateSource;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this instrument.

#### `Readonly` management_fee

```ts
management_fee: number
```

Annual management fee as a decimal (e.g. 0.005 = 0.50% p.a.).

##### Remarks

Format: double

#### `Readonly` participation_factor

```ts
participation_factor: number
```

Participation factor — the fixed daily leverage multiplier applied to the underlying's return
(e.g. 3.0 = 3x long leverage, -2.0 = 2x short leverage).

##### Remarks

Format: double

#### `Readonly` participation_level

```ts
participation_level: number
```

Participation level — the percentage of the underlying's move that is reflected in the product.

##### Remarks

Format: double

#### `Readonly` source

```ts
source: CdapiStructuredProductInstrumentFactorCertificateSource
```

Data source for this record (shares the Source enum with InstrumentStructuredProduct).

##### Remarks

Format: enum
