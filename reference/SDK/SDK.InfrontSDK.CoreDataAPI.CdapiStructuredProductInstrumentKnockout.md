---
title: "CdapiStructuredProductInstrumentKnockout"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentKnockout"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiStructuredProductInstrumentKnockout"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentKnockout.html"
defines: ["CdapiStructuredProductInstrumentKnockout"]
member_count: 7
members: ["_meta", "financing_rate", "id", "knock_out_level", "premium_relative", "source", "strike_price"]
member_groups:
  "Properties": ["_meta", "financing_rate", "id", "knock_out_level", "premium_relative", "source", "strike_price"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentKnockoutSource"]
---

# CdapiStructuredProductInstrumentKnockout

InstrumentKnockout represents master data for knock-out products (turbo warrants / barrier products).
A knock-out product expires worthless if the underlying price reaches the knock-out barrier level.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.structured_product.InstrumentKnockout

```ts
interface CdapiStructuredProductInstrumentKnockout {
    _meta: BasedefEntityMeta;
    financing_rate: number;
    id: string;
    knock_out_level: number;
    premium_relative: number;
    source: CdapiStructuredProductInstrumentKnockoutSource;
    strike_price: number;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` financing_rate

```ts
financing_rate: number
```

Financing rate charged daily for holding a leveraged long position (cost of carry).

##### Remarks

Format: double

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this instrument.

#### `Readonly` knock_out_level

```ts
knock_out_level: number
```

Knock-out barrier level — if the underlying reaches this price, the product expires worthless.

##### Remarks

Format: double

#### `Readonly` premium_relative

```ts
premium_relative: number
```

Premium relative to the underlying — the percentage premium over the intrinsic value.

##### Remarks

Format: double

#### `Readonly` source

```ts
source: CdapiStructuredProductInstrumentKnockoutSource
```

Data source for this record (shares the Source enum with InstrumentStructuredProduct).

##### Remarks

Format: enum

#### `Readonly` strike_price

```ts
strike_price: number
```

Strike price used to calculate the intrinsic value of the knock-out product.

##### Remarks

Format: double
