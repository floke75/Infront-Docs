---
title: "FinancialCalendarOptions<T>"
qualified_name: "SDK.InfrontSDK.FinancialCalendarOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Calendar"
nav_path: "SDK > InfrontSDK > Calendar > FinancialCalendarOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.FinancialCalendarOptions.html"
defines: ["FinancialCalendarOptions"]
member_count: 10
members: ["countryCodes?", "from?", "limit?", "signal?", "source", "subscribe?", "to?", "onData", "onError?", "onStatus?"]
member_groups:
  "Properties": ["countryCodes?", "from?", "limit?", "signal?", "source", "subscribe?", "to?"]
  "Methods": ["onData", "onError?", "onStatus?"]
related_types: ["SDK.InfrontSDK.DataRequestOptions"]
reference_count: 6
references: ["SDK.InfrontSDK.CalendarEvent", "SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.RequestStatus", "SDK.InfrontSDK.RequestDetails", "SDK.InfrontSDK.financialCalendar", "SDK.InfrontSDK.DataRequestOptions"]
---

# FinancialCalendarOptions<T>

Options interface used to request financial calendar.

#### See

[financialCalendar](./SDK.InfrontSDK.financialCalendar.md) | CalendarEvent

```ts
interface FinancialCalendarOptions<T = CalendarEvent[]> {
    countryCodes?: string | string[];
    from?: Date;
    limit?: number;
    signal?: AbortSignal;
    source: string | number | number[] | string[] | SymbolId | SymbolId[];
    subscribe?: false;
    to?: Date;
    onData(data: T): void;
    onError?(error: ErrorBase): void;
    onStatus?(
        requestName: string,
        status: RequestStatus,
        extra?: RequestDetails,
    ): void;
}
```

#### Type Parameters

- T = CalendarEvent[]

#### Hierarchy ([View Summary](../type-hierarchy.md#SDK.InfrontSDK.FinancialCalendarOptions))

- DataRequestOptions<T>

  - FinancialCalendarOptions

### Properties

#### `Optional` countryCodes

```ts
countryCodes?: string | string[]
```

ISO 3166-1 Alpha-2 country codes to restrict the results to.
Omit or leave empty to include all countries.

This is the recommended way to filter by country when also specifying a
feed-number source (e.g. Trading Economics). Passing country codes via
`source` still works for backward compatibility but is discouraged.

##### See

[Wikipedia list of country ISO 3166-1 codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).

#### `Optional` from

```ts
from?: Date
```

Get events from this date. Default value is today.

#### `Optional` limit

```ts
limit?: number
```

Sets the maximum number for returned events.

#### `Optional` signal

```ts
signal?: AbortSignal
```

Signal to abort the request.

Inherited from DataRequestOptions.signal

#### source

```ts
source: string | number | number[] | string[] | SymbolId | SymbolId[]
```

Calendar source(s). This can be one or a list of symbol id, feed number, country ISO code.

##### See

[Wikipedia list of country ISO 3166-1 codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).

#### `Optional` subscribe

```ts
subscribe?: false
```

Subscribe flag. Use this option to subscribe to data updates.

##### Remarks

If the current user does not have streaming access, no updates would be sent even when subscribe is true.

Overrides DataRequestOptions.subscribe

#### `Optional` to

```ts
to?: Date
```

Get events to this date. Default values is next month.

### Methods

#### onData

```ts
onData(data: T): void
```

A callback to be called to pass the output.

##### Parameters

- data: [T](#t)

  Output should be passed here.

##### Returns void

Inherited from DataRequestOptions.onData

#### `Optional` onError

```ts
onError?(error: ErrorBase): void
```

A callback to be called to pass the error(s).

##### Parameters

- error: ErrorBase

##### Returns void

Inherited from DataRequestOptions.onError

#### `Optional` onStatus

```ts
onStatus?(
    requestName: string,
    status: RequestStatus,
    extra?: RequestDetails,
): void
```

Request status callback. Use this callback to get more details about the current state of the request.

##### Parameters

- requestName: string
- status: [RequestStatus](./SDK.InfrontSDK.RequestStatus.md)

  Request status.
- `Optional` extra: RequestDetails

  Detailed information.

##### Returns void

Inherited from DataRequestOptions.onStatus
