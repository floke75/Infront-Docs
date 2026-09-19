---
title: "CdapiInformationEvent"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiInformationEvent"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiInformationEvent"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiInformationEvent.html"
defines: ["CdapiInformationEvent"]
member_count: 7
members: ["headline", "id", "isin", "report_period", "source", "timestamp", "type"]
member_groups:
  "Properties": ["headline", "id", "isin", "report_period", "source", "timestamp", "type"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventSource", "SDK.InfrontSDK.CoreDataAPI.CdapiInformationEventType"]
---

# CdapiInformationEvent

Event represents a corporate or financial event associated with an instrument.
Events may originate from Infront or Standard & Poor's.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.information.Event

```ts
interface CdapiInformationEvent {
    headline: string;
    id: number;
    isin: string;
    report_period: string;
    source: CdapiInformationEventSource;
    timestamp: string;
    type: CdapiInformationEventType;
}
```

### Properties

#### `Readonly` headline

```ts
headline: string
```

Headline or short description of the event.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this event.

##### Remarks

Format: int32

#### `Readonly` isin

```ts
isin: string
```

Primary ISIN of the instrument this event relates to.

#### `Readonly` report_period

```ts
report_period: string
```

Reporting period the event covers. Source: INFRONT.
Possible values:
1 = Annual
2 = H1 (first half)
3 = Q1 (first quarter)
4 = Q2 (second quarter)
5 = Q3 (third quarter)
6 = Q4 (fourth quarter)
7 = H2 (second half)

#### `Readonly` source

```ts
source: CdapiInformationEventSource
```

Data source for this event (INFRONT or STANDARD_AND_POORS).

##### Remarks

Format: enum

#### `Readonly` timestamp

```ts
timestamp: string
```

Event timestamp in UTC. ISO-8601 format recommended (e.g. "2024-01-15T14:30:00Z").

#### `Readonly` type

```ts
type: CdapiInformationEventType
```

Type classification of the event. See nested Type message.
