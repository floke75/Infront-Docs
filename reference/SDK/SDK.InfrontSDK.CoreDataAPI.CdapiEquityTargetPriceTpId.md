---
title: "CdapiEquityTargetPriceTpId"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityTargetPriceTpId"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityTargetPriceTpId"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityTargetPriceTpId.html"
defines: ["CdapiEquityTargetPriceTpId"]
member_count: 2
members: ["instrument_id", "issuer_id"]
member_groups:
  "Properties": ["instrument_id", "issuer_id"]
---

# CdapiEquityTargetPriceTpId

TpId is the composite identifier for a target price record.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.TargetPrice_TpId

```ts
interface CdapiEquityTargetPriceTpId {
    instrument_id: string;
    issuer_id: string;
}
```

### Properties

#### `Readonly` instrument_id

```ts
instrument_id: string
```

Optional instrument identifier — links the target price to a specific listing.

#### `Readonly` issuer_id

```ts
issuer_id: string
```

Issuer identifier.
