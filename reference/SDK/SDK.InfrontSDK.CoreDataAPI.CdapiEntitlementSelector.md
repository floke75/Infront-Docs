---
title: "CdapiEntitlementSelector"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEntitlementSelector"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEntitlementSelector"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEntitlementSelector.html"
defines: ["CdapiEntitlementSelector"]
member_count: 2
members: ["quality", "selector_id"]
member_groups:
  "Properties": ["quality", "selector_id"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEntitlementSelectorQuality"]
---

# CdapiEntitlementSelector

Selector represents a single market data feed permission,
combining a feed identifier with the quality level the user is entitled to receive.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.entitlement.Selector

```ts
interface CdapiEntitlementSelector {
    quality: CdapiEntitlementSelectorQuality;
    selector_id: number;
}
```

### Properties

#### `Readonly` quality

```ts
quality: CdapiEntitlementSelectorQuality
```

Entitlement quality level for this feed.

##### Remarks

Format: enum

#### `Readonly` selector_id

```ts
selector_id: number
```

Numeric identifier of the market data feed (exchange or data source).

##### Remarks

Format: int32
