---
title: "CdapiEntitlementEntitlement"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEntitlementEntitlement"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEntitlementEntitlement"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEntitlementEntitlement.html"
defines: ["CdapiEntitlementEntitlement"]
member_count: 4
members: ["_meta", "id", "selectors", "selectors_hash"]
member_groups:
  "Properties": ["_meta", "id", "selectors", "selectors_hash"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiEntitlementSelector"]
---

# CdapiEntitlementEntitlement

Entitlement represents the complete set of market data feed permissions for a single entity
(e.g. a user account or a client application).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.entitlement.Entitlement

```ts
interface CdapiEntitlementEntitlement {
    _meta: BasedefEntityMeta;
    id: number;
    selectors: readonly CdapiEntitlementSelector[];
    selectors_hash: string;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).
Defined externally in dev/infrontfinance/basedef/message.proto.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this entitlement record.

##### Remarks

Format: int32

#### `Readonly` selectors

```ts
selectors: readonly CdapiEntitlementSelector[]
```

List of individual feed selectors that make up this entitlement.
Each selector grants access to one feed at a specific quality level.

#### `Readonly` selectors_hash

```ts
selectors_hash: string
```

Hash of the selectors list — used for efficient change detection without
comparing each selector individually.
