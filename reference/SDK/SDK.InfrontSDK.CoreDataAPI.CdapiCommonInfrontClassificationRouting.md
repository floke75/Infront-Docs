---
title: "CdapiCommonInfrontClassificationRouting"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonInfrontClassificationRouting"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonInfrontClassificationRouting"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonInfrontClassificationRouting.html"
defines: ["CdapiCommonInfrontClassificationRouting"]
member_count: 2
members: ["grpc", "rest"]
member_groups:
  "Properties": ["grpc", "rest"]
---

# CdapiCommonInfrontClassificationRouting

Routing holds gRPC and REST routing identifiers for this instrument's CDAPI service.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.InfrontClassification_Routing

```ts
interface CdapiCommonInfrontClassificationRouting {
    grpc: string;
    rest: string;
}
```

### Properties

#### `Readonly` grpc

```ts
grpc: string
```

gRPC service route (e.g. "equity", "bond", "derivative").

#### `Readonly` rest

```ts
rest: string
```

REST API route.
