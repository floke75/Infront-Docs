---
title: "CdapiCommonAttributeConfigSourcePackage"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigSourcePackage"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonAttributeConfigSourcePackage"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonAttributeConfigSourcePackage.html"
defines: ["CdapiCommonAttributeConfigSourcePackage"]
member_count: 2
members: ["is_free", "source"]
member_groups:
  "Properties": ["is_free", "source"]
---

# CdapiCommonAttributeConfigSourcePackage

SourcePackage identifies a source-specific entitlement package for this attribute.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.AttributeConfig_SourcePackage

```ts
interface CdapiCommonAttributeConfigSourcePackage {
    is_free: boolean;
    source: string;
}
```

### Properties

#### `Readonly` is_free

```ts
is_free: boolean
```

If true, this attribute is available in the free tier for this source.

#### `Readonly` source

```ts
source: string
```

Data source name (e.g. "EDI", "WM", "INFRONT").
