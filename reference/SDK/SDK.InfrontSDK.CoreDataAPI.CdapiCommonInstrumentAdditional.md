---
title: "CdapiCommonInstrumentAdditional"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonInstrumentAdditional"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonInstrumentAdditional"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonInstrumentAdditional.html"
defines: ["CdapiCommonInstrumentAdditional"]
member_count: 4
members: ["_meta", "id", "quotation_type", "source"]
member_groups:
  "Properties": ["_meta", "id", "quotation_type", "source"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonDictionary", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonInstrumentAdditionalSource"]
---

# CdapiCommonInstrumentAdditional

InstrumentAdditional delivers additional instrument-level attributes. Source: WM.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.InstrumentAdditional

```ts
interface CdapiCommonInstrumentAdditional {
    _meta: BasedefEntityMeta;
    id: string;
    quotation_type: CdapiCommonDictionary;
    source: CdapiCommonInstrumentAdditionalSource;
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

#### `Readonly` quotation_type

```ts
quotation_type: CdapiCommonDictionary
```

Quotation type — how prices are expressed for this instrument.
code: Quotation Type Code / name: Name / name_long: Long Name / name_short: Short Name.

#### `Readonly` source

```ts
source: CdapiCommonInstrumentAdditionalSource
```

Data source for this record.

##### Remarks

Format: enum
