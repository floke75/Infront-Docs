---
title: "CdapiCommonRating"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonRating"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonRating"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonRating.html"
defines: ["CdapiCommonRating"]
member_count: 31
members: ["_meta", "endorsement_indicator", "local_long_term_observation_reason", "local_long_term_outlook", "local_long_term_rating", "local_long_term_rating_action", "local_long_term_rating_date", "local_short_term_observation_reason", "local_short_term_outlook", "local_short_term_rating", "local_short_term_rating_action", "local_short_term_rating_date", "long_term_observation_date", "long_term_observation_reason", "long_term_outlook", "long_term_outlook_date", "long_term_previous_rating", "long_term_previous_rating_date", "long_term_rating", "long_term_rating_action", "long_term_rating_date", "short_term_observation_date", "short_term_observation_reason", "short_term_outlook", "short_term_outlook_date", "short_term_previous_rating", "short_term_previous_rating_date", "short_term_rating", "short_term_rating_action", "short_term_rating_date", "source"]
member_groups:
  "Properties": ["_meta", "endorsement_indicator", "local_long_term_observation_reason", "local_long_term_outlook", "local_long_term_rating", "local_long_term_rating_action", "local_long_term_rating_date", "local_short_term_observation_reason", "local_short_term_outlook", "local_short_term_rating", "local_short_term_rating_action", "local_short_term_rating_date", "long_term_observation_date", "long_term_observation_reason", "long_term_outlook", "long_term_outlook_date", "long_term_previous_rating", "long_term_previous_rating_date", "long_term_rating", "long_term_rating_action", "long_term_rating_date", "short_term_observation_date", "short_term_observation_reason", "short_term_outlook", "short_term_outlook_date", "short_term_previous_rating", "short_term_previous_rating_date", "short_term_rating", "short_term_rating_action", "short_term_rating_date", "source"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonRatingSource"]
---

# CdapiCommonRating

Rating holds credit ratings from major agencies for an instrument or issuer.
Covers foreign currency (FC) and local currency (LC) ratings in both short-term
and long-term categories, with outlook, observation, and rating action history.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.Rating

```ts
interface CdapiCommonRating {
    _meta: BasedefEntityMeta;
    endorsement_indicator: string;
    local_long_term_observation_reason: string;
    local_long_term_outlook: string;
    local_long_term_rating: string;
    local_long_term_rating_action: string;
    local_long_term_rating_date: string;
    local_short_term_observation_reason: string;
    local_short_term_outlook: string;
    local_short_term_rating: string;
    local_short_term_rating_action: string;
    local_short_term_rating_date: string;
    long_term_observation_date: string;
    long_term_observation_reason: string;
    long_term_outlook: string;
    long_term_outlook_date: string;
    long_term_previous_rating: string;
    long_term_previous_rating_date: string;
    long_term_rating: string;
    long_term_rating_action: string;
    long_term_rating_date: string;
    short_term_observation_date: string;
    short_term_observation_reason: string;
    short_term_outlook: string;
    short_term_outlook_date: string;
    short_term_previous_rating: string;
    short_term_previous_rating_date: string;
    short_term_rating: string;
    short_term_rating_action: string;
    short_term_rating_date: string;
    source: CdapiCommonRatingSource;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` endorsement_indicator

```ts
endorsement_indicator: string
```

ESMA endorsement indicator — whether the FC rating is eligible for regulatory use in the EU.

#### `Readonly` local_long_term_observation_reason

```ts
local_long_term_observation_reason: string
```

Reason the LC Long-Term rating is under observation.

#### `Readonly` local_long_term_outlook

```ts
local_long_term_outlook: string
```

LC Long-Term outlook.

#### `Readonly` local_long_term_rating

```ts
local_long_term_rating: string
```

Local Currency Long-Term rating — creditworthiness for LC obligations >1 year.

#### `Readonly` local_long_term_rating_action

```ts
local_long_term_rating_action: string
```

Direction of change in the LC Long-Term rating (S&P).

#### `Readonly` local_long_term_rating_date

```ts
local_long_term_rating_date: string
```

Date of the current LC Long-Term rating.

#### `Readonly` local_short_term_observation_reason

```ts
local_short_term_observation_reason: string
```

Reason the LC Short-Term rating is under observation.

#### `Readonly` local_short_term_outlook

```ts
local_short_term_outlook: string
```

LC Short-Term outlook.

#### `Readonly` local_short_term_rating

```ts
local_short_term_rating: string
```

Local Currency Short-Term rating — creditworthiness for LC obligations <1 year.

#### `Readonly` local_short_term_rating_action

```ts
local_short_term_rating_action: string
```

Direction of change in the LC Short-Term rating.

#### `Readonly` local_short_term_rating_date

```ts
local_short_term_rating_date: string
```

Date of the current LC Short-Term rating.

#### `Readonly` long_term_observation_date

```ts
long_term_observation_date: string
```

Date the FC Long-Term rating was placed under observation.

#### `Readonly` long_term_observation_reason

```ts
long_term_observation_reason: string
```

Reason the FC Long-Term rating is under observation (CreditWatch/Review).

#### `Readonly` long_term_outlook

```ts
long_term_outlook: string
```

FC Long-Term outlook (e.g. "Stable", "Positive", "Negative", "Developing").

#### `Readonly` long_term_outlook_date

```ts
long_term_outlook_date: string
```

Date the outlook for the FC Long-Term rating was assigned.

#### `Readonly` long_term_previous_rating

```ts
long_term_previous_rating: string
```

Previous FC Long-Term rating (prior to the most recent change).

#### `Readonly` long_term_previous_rating_date

```ts
long_term_previous_rating_date: string
```

Date of the previous FC Long-Term rating.

#### `Readonly` long_term_rating

```ts
long_term_rating: string
```

Foreign Currency Long-Term rating — creditworthiness for FC obligations >1 year.

#### `Readonly` long_term_rating_action

```ts
long_term_rating_action: string
```

Direction of change in the FC Long-Term rating (e.g. "Upgraded", "Downgraded", "Affirmed").

#### `Readonly` long_term_rating_date

```ts
long_term_rating_date: string
```

Date of the current FC Long-Term rating. ISO-8601 recommended.

#### `Readonly` short_term_observation_date

```ts
short_term_observation_date: string
```

Date the FC Short-Term rating was placed under observation.

#### `Readonly` short_term_observation_reason

```ts
short_term_observation_reason: string
```

Reason the FC Short-Term rating is under observation.

#### `Readonly` short_term_outlook

```ts
short_term_outlook: string
```

FC Short-Term outlook.

#### `Readonly` short_term_outlook_date

```ts
short_term_outlook_date: string
```

Date the outlook for the FC Short-Term rating was assigned.

#### `Readonly` short_term_previous_rating

```ts
short_term_previous_rating: string
```

Previous FC Short-Term rating.

#### `Readonly` short_term_previous_rating_date

```ts
short_term_previous_rating_date: string
```

Date of the previous FC Short-Term rating.

#### `Readonly` short_term_rating

```ts
short_term_rating: string
```

Foreign Currency Short-Term rating — creditworthiness for FC obligations <1 year.

#### `Readonly` short_term_rating_action

```ts
short_term_rating_action: string
```

Direction of change in the FC Short-Term rating.

#### `Readonly` short_term_rating_date

```ts
short_term_rating_date: string
```

Date of the current FC Short-Term rating. ISO-8601 recommended.

#### `Readonly` source

```ts
source: CdapiCommonRatingSource
```

Credit rating agency.

##### Remarks

Format: enum
