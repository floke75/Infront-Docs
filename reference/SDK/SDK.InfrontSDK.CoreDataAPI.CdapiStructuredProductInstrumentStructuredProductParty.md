---
title: "CdapiStructuredProductInstrumentStructuredProductParty"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentStructuredProductParty"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiStructuredProductInstrumentStructuredProductParty"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductInstrumentStructuredProductParty.html"
defines: ["CdapiStructuredProductInstrumentStructuredProductParty"]
member_count: 7
members: ["_meta", "area_code", "id", "location", "name", "tk_party_key", "type"]
member_groups:
  "Properties": ["_meta", "area_code", "id", "location", "name", "tk_party_key", "type"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiStructuredProductDictionary"]
---

# CdapiStructuredProductInstrumentStructuredProductParty

Party represents a legal entity involved in the structured product
(e.g. issuer, guarantor, calculation agent).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.structured_product.InstrumentStructuredProduct_Party

```ts
interface CdapiStructuredProductInstrumentStructuredProductParty {
    _meta: BasedefEntityMeta;
    area_code: string;
    id: number;
    location: string;
    name: string;
    tk_party_key: number;
    type: CdapiStructuredProductDictionary;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata.

#### `Readonly` area_code

```ts
area_code: string
```

Area / region code associated with this party.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this party.

##### Remarks

Format: int32

#### `Readonly` location

```ts
location: string
```

Geographic location of this party.

#### `Readonly` name

```ts
name: string
```

Legal name of the party.

#### `Readonly` tk_party_key

```ts
tk_party_key: number
```

Internal TK party key used for legacy system cross-reference.

##### Remarks

Format: int32

#### `Readonly` type

```ts
type: CdapiStructuredProductDictionary
```

Type classification of the party role (e.g. "ISSUER", "GUARANTOR").
