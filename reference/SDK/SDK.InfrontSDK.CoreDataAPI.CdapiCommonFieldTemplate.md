---
title: "CdapiCommonFieldTemplate"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonFieldTemplate"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonFieldTemplate"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonFieldTemplate.html"
defines: ["CdapiCommonFieldTemplate"]
member_count: 2
members: ["code", "config"]
member_groups:
  "Properties": ["code", "config"]
---

# CdapiCommonFieldTemplate

FieldTemplate provides a named configuration template mapping a field code
to a list of configuration strings. Used for customisable data field groupings.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.FieldTemplate

```ts
interface CdapiCommonFieldTemplate {
    code: string;
    config: readonly string[];
}
```

### Properties

#### `Readonly` code

```ts
code: string
```

Short code identifying this template (e.g. "SNAPQUOTE_STANDARD").

#### `Readonly` config

```ts
config: readonly string[]
```

List of field names or attribute codes included in this template.
