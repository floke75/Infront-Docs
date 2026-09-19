---
title: "CdapiEntitlementOrbitEntitlementData"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEntitlementOrbitEntitlementData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEntitlementOrbitEntitlementData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEntitlementOrbitEntitlementData.html"
defines: ["CdapiEntitlementOrbitEntitlementData"]
member_count: 1
members: ["entitlement"]
member_groups:
  "Properties": ["entitlement"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEntitlementEntitlementItem"]
---

# CdapiEntitlementOrbitEntitlementData

OrbitEntitlementData wraps a single EntitlementItem within the Orbit permission model.
Orbit is the platform's entitlement management layer.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.entitlement.OrbitEntitlementData

```ts
interface CdapiEntitlementOrbitEntitlementData {
    entitlement: CdapiEntitlementEntitlementItem;
}
```

### Properties

#### `Readonly` entitlement

```ts
entitlement: CdapiEntitlementEntitlementItem
```

The entitlement item defining feed and service permissions.
