---
title: "CdapiEntitlementOrbitData"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEntitlementOrbitData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEntitlementOrbitData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEntitlementOrbitData.html"
defines: ["CdapiEntitlementOrbitData"]
member_count: 2
members: ["entitlement_data", "orbit_id"]
member_groups:
  "Properties": ["entitlement_data", "orbit_id"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEntitlementOrbitEntitlementData"]
---

# CdapiEntitlementOrbitData

OrbitData represents the full entitlement configuration for a single Orbit identity.
An Orbit groups a set of entitlement items that are collectively granted to an entity.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.entitlement.OrbitData

```ts
interface CdapiEntitlementOrbitData {
    entitlement_data: readonly CdapiEntitlementOrbitEntitlementData[];
    orbit_id: number;
}
```

### Properties

#### `Readonly` entitlement_data

```ts
entitlement_data: readonly CdapiEntitlementOrbitEntitlementData[]
```

List of entitlement items associated with this Orbit,
each granting access to specific services on a specific feed.

#### `Readonly` orbit_id

```ts
orbit_id: number
```

Internal unique identifier for this Orbit.

##### Remarks

Format: int32
