---
title: "CdapiCommonMicDetail"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonMicDetail"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonMicDetail"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonMicDetail.html"
defines: ["CdapiCommonMicDetail"]
member_count: 2
members: ["code", "name"]
member_groups:
  "Properties": ["code", "name"]
---

# CdapiCommonMicDetail

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.Mic_Detail

```ts
interface CdapiCommonMicDetail {
    code: string;
    name: string;
}
```

### Properties

#### `Readonly` code

```ts
code: string
```

ISO 10383 MIC code (e.g. "XETR", "XNYS").

#### `Readonly` name

```ts
name: string
```

Human-readable market name.
