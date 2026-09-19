---
title: "CdapiInformationEventType"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventType"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiInformationEventType"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventType.html"
defines: ["CdapiInformationEventType"]
member_count: 3
members: ["code", "id", "name"]
member_groups:
  "Properties": ["code", "id", "name"]
---

# CdapiInformationEventType

Type classifies the kind of corporate event (e.g. earnings release, dividend, AGM).

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.information.Event_Type

```ts
interface CdapiInformationEventType {
    code: string;
    id: number;
    name: string;
}
```

### Properties

#### `Readonly` code

```ts
code: string
```

Short code for programmatic identification.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this event type.

##### Remarks

Format: int32

#### `Readonly` name

```ts
name: string
```

Human-readable name of the event type.
