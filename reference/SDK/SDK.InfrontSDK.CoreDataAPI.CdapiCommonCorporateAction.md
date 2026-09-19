---
title: "CdapiCommonCorporateAction"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonCorporateAction"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonCorporateAction"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonCorporateAction.html"
defines: ["CdapiCommonCorporateAction"]
member_count: 18
members: ["_meta", "currency_code", "date", "declared_currency_code", "declared_gross_amount", "denominator", "event_label", "ex_date", "id", "instrument_id", "isin", "numerator", "payment_date", "record_date", "source", "sub_type", "type", "value"]
member_groups:
  "Properties": ["_meta", "currency_code", "date", "declared_currency_code", "declared_gross_amount", "denominator", "event_label", "ex_date", "id", "instrument_id", "isin", "numerator", "payment_date", "record_date", "source", "sub_type", "type", "value"]
reference_count: 4
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonCorporateActionSource", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonCorporateActionSubType", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonCorporateActionType"]
---

# CdapiCommonCorporateAction

CorporateAction represents a single corporate action event affecting a security
(e.g. dividend, stock split, rights issue, merger). Sources: INFRONT_HISTORY, WM, EDI.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.CorporateAction

```ts
interface CdapiCommonCorporateAction {
    _meta: BasedefEntityMeta;
    currency_code: string;
    date: string;
    declared_currency_code: string;
    declared_gross_amount: number;
    denominator: number;
    event_label: string;
    ex_date: string;
    id: number;
    instrument_id: string;
    isin: string;
    numerator: number;
    payment_date: string;
    record_date: string;
    source: CdapiCommonCorporateActionSource;
    sub_type: CdapiCommonCorporateActionSubType;
    type: CdapiCommonCorporateActionType;
    value: number;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` currency_code

```ts
currency_code: string
```

ISO 4217 currency code in which the value is denominated.

#### `Readonly` date

```ts
date: string
```

Effective date of the corporate action. ISO-8601 recommended.
EDI: for DMRGR (merger) = effective_date; for all others = primary_value_date.

#### `Readonly` declared_currency_code

```ts
declared_currency_code: string
```

ISO 4217 currency code of the declared gross amount. Source: EDI.

#### `Readonly` declared_gross_amount

```ts
declared_gross_amount: number
```

Declared gross amount per share (e.g. gross dividend). Source: EDI.

##### Remarks

Format: double

#### `Readonly` denominator

```ts
denominator: number
```

Denominator of the (reverse) split ratio. Source: EDI.

##### Remarks

Format: double

#### `Readonly` event_label

```ts
event_label: string
```

EDI event label — descriptive label for MARKER event types only. Source: EDI.

#### `Readonly` ex_date

```ts
ex_date: string
```

Ex-date — date from which a buyer is no longer entitled to the corporate action benefit.

#### `Readonly` id

```ts
id: number
```

Internal unique identifier for this corporate action.

##### Remarks

Format: int32

#### `Readonly` instrument_id

```ts
instrument_id: string
```

Internal instrument identifier of the affected instrument.

#### `Readonly` isin

```ts
isin: string
```

ISIN of the affected instrument.

#### `Readonly` numerator

```ts
numerator: number
```

Numerator of the (reverse) split ratio. Source: EDI.

##### Remarks

Format: double

#### `Readonly` payment_date

```ts
payment_date: string
```

Payment date — date on which the benefit (e.g. cash dividend) is paid.

#### `Readonly` record_date

```ts
record_date: string
```

Record date — date by which shareholders must be registered to be eligible
(e.g. to receive dividends or vote at AGM). Source: EDI.

#### `Readonly` source

```ts
source: CdapiCommonCorporateActionSource
```

##### Remarks

Format: enum

#### `Readonly` sub_type

```ts
sub_type: CdapiCommonCorporateActionSubType
```

Sub-type providing additional classification granularity. Source: EDI.

#### `Readonly` type

```ts
type: CdapiCommonCorporateActionType
```

Type classification (e.g. DIV, SPLIT, DMRGR).

#### `Readonly` value

```ts
value: number
```

Value of the corporate action (e.g. dividend amount, split ratio).
EDI: for DMRGR = ratio_new; for others = rate_value_01 or null.

##### Remarks

Format: double
