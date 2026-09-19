---
title: "CdapiEntitlementEntitlementItem"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEntitlementEntitlementItem"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEntitlementEntitlementItem"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEntitlementEntitlementItem.html"
defines: ["CdapiEntitlementEntitlementItem"]
member_count: 2
members: ["feed_number", "service_types"]
member_groups:
  "Properties": ["feed_number", "service_types"]
reference_count: 1
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiEntitlementEntitlementItemServiceTypes"]
---

# CdapiEntitlementEntitlementItem

EntitlementItem represents the service-level permissions granted for a specific market data feed.
It combines a feed number with the list of services the client is authorised to use on that feed.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.entitlement.EntitlementItem

```ts
interface CdapiEntitlementEntitlementItem {
    feed_number: number;
    service_types: readonly CdapiEntitlementEntitlementItemServiceTypes[];
}
```

### Properties

#### `Readonly` feed_number

```ts
feed_number: number
```

Numeric identifier of the market data feed (exchange or data source).

##### Remarks

Format: int32

#### `Readonly` service_types

```ts
service_types: readonly CdapiEntitlementEntitlementItemServiceTypes[]
```

List of service types the client is authorised to use for this feed.
