---
title: "CdapiCommonAttributeConfig"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfig"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonAttributeConfig"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfig.html"
defines: ["CdapiCommonAttributeConfig"]
member_count: 13
members: ["_meta", "description", "entity", "id", "ids_tag", "label", "mdps_field_id", "mdps_field_name", "path", "relation", "service", "source", "type"]
member_groups:
  "Properties": ["_meta", "description", "entity", "id", "ids_tag", "label", "mdps_field_id", "mdps_field_name", "path", "relation", "service", "source", "type"]
reference_count: 4
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigRelation", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigService", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigType"]
---

# CdapiCommonAttributeConfig

AttributeConfig is a metadata configuration entity describing all data attributes
delivered by a CDAPI service. Used for the data catalog, field documentation,
and package entitlement mapping.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.AttributeConfig

```ts
interface CdapiCommonAttributeConfig {
    _meta: BasedefEntityMeta;
    description: string;
    entity: string;
    id: number;
    ids_tag: string;
    label: string;
    mdps_field_id: number;
    mdps_field_name: string;
    path: string;
    relation: CdapiCommonAttributeConfigRelation;
    service: CdapiCommonAttributeConfigService;
    source: string;
    type: CdapiCommonAttributeConfigType;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` description

```ts
description: string
```

Detailed description of the attribute's meaning and usage.

#### `Readonly` entity

```ts
entity: string
```

Entity type this attribute belongs to (e.g. "Instrument", "Listing", "Issuer").

#### `Readonly` id

```ts
id: number
```

##### Remarks

Format: int32

#### `Readonly` ids_tag

```ts
ids_tag: string
```

IDS tag name for IDS feed specification cross-reference.

#### `Readonly` label

```ts
label: string
```

Human-readable display label.

#### `Readonly` mdps_field_id

```ts
mdps_field_id: number
```

MDPS (Market Data Platform Service) field ID for vwd platform cross-reference.

##### Remarks

Format: int32

#### `Readonly` mdps_field_name

```ts
mdps_field_name: string
```

MDPS field name for vwd platform cross-reference.

#### `Readonly` path

```ts
path: string
```

JSON path to the attribute in the response payload (e.g. "instrument.isin").

#### `Readonly` relation

```ts
relation: CdapiCommonAttributeConfigRelation
```

##### Remarks

Format: enum

#### `Readonly` service

```ts
service: CdapiCommonAttributeConfigService
```

##### Remarks

Format: enum

#### `Readonly` source

```ts
source: string
```

Data source name for this attribute (e.g. "EDI", "WM", "INFRONT").

#### `Readonly` type

```ts
type: CdapiCommonAttributeConfigType
```

##### Remarks

Format: enum
