---
title: "SymbolData"
qualified_name: "SDK.InfrontSDK.SymbolData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Symbols"
nav_path: "SDK > InfrontSDK > Symbols > SymbolData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.SymbolData.html"
defines: ["SymbolData"]
member_count: 4
members: ["get", "getConverted", "notifyOnContent", "observe"]
member_groups:
  "Methods": ["get", "getConverted", "notifyOnContent", "observe"]
reference_count: 8
references: ["SDK.InfrontSDK.SymbolField", "SDK.InfrontSDK.SymbolFieldType", "SDK.InfrontSDK.SymbolDataContent", "SDK.InfrontSDK.InitialUpdate", "SDK.InfrontSDK.Unbind", "SDK.InfrontSDK.symbolData", "SDK.InfrontSDK.SymbolDataOptions", "Utils.InfrontUtil.Binding"]
---

# SymbolData

> Not the same page as [`symbolData`](./SDK.InfrontSDK.symbolData.md), the function — the names differ only in case.

Output interface used by [symbolData](./SDK.InfrontSDK.symbolData.md).

#### See

SymbolDataOptions

```ts
interface SymbolData {
    get<T extends SymbolField>(
        field: T,
        valueCallback?: (value: SymbolFieldType[T]) => void,
        locale?: string,
    ): SymbolFieldType[T];
    getConverted<T extends SymbolField>(
        field: T,
        targetCurrency: string,
        valueCallback?: (value: any) => void,
    ): SymbolFieldType[T];
    notifyOnContent(
        content: SymbolDataContent,
        callback: (symbolData: SymbolData) => void,
    ): any;
    observe(
        field: SymbolField,
        callback: (val: any) => void,
        targetCurrency?: string,
        initialUpdate?: InitialUpdate,
    ): Unbind;
}
```

### Methods

#### get

```ts
get<T extends SymbolField>(
    field: T,
    valueCallback?: (value: SymbolFieldType[T]) => void,
    locale?: string,
): SymbolFieldType[T]
```

Retrieve data from symbol based on passed [field](./SDK.InfrontSDK.SymbolField.md).

##### Type Parameters

- T extends [SymbolField](./SDK.InfrontSDK.SymbolField.md)

  Field type. This param will be used to force the correct field type.

##### Parameters

- field: [T](#gett)

  A field name.
- `Optional` valueCallback: (value: [SymbolFieldType](./SDK.InfrontSDK.SymbolFieldType.md)[[T](#gett)]) => void

  Does one-time binding. Use this callback to get the value once it is ready. This callback will be called once and there is no need to do unbind manually.
- `Optional` locale: string

  Selected locale to fetch field value in different language, if available.

##### Returns [SymbolFieldType](./SDK.InfrontSDK.SymbolFieldType.md)[[T](#gett)]

field value.

##### Remarks

Using [get](#get) for direct assignment should be used in combination with SymbolDataOptions.interactive assigned to false to
make sure the value is available. Otherwise, use [get](#get) with a callback.

#### getConverted

```ts
getConverted<T extends SymbolField>(
    field: T,
    targetCurrency: string,
    valueCallback?: (value: any) => void,
): SymbolFieldType[T]
```

Get one-time converted value of the passed field.

##### Type Parameters

- T extends [SymbolField](./SDK.InfrontSDK.SymbolField.md)

##### Parameters

- field: [T](#getconvertedt)

  A field name
- targetCurrency: string

  Currency code to convert the value to. The currency code must be "Alpha-3" string.
- `Optional` valueCallback: (value: any) => void

  Does one-time binding. Use this callback to get the value once it is ready. This callback will be called once and there is no need to do unbind manually.

##### Returns [SymbolFieldType](./SDK.InfrontSDK.SymbolFieldType.md)[[T](#getconvertedt)]

##### See

[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)

##### Remarks

It is very important to make sure that the target currency data has been requested before calling if the

#### notifyOnContent

```ts
notifyOnContent(
    content: SymbolDataContent,
    callback: (symbolData: SymbolData) => void,
): any
```

Getting notified once content is ready.

##### Parameters

- content: [SymbolDataContent](./SDK.InfrontSDK.SymbolDataContent.md)
- callback: (symbolData: SymbolData) => void

##### Returns any

#### observe

```ts
observe(
    field: SymbolField,
    callback: (val: any) => void,
    targetCurrency?: string,
    initialUpdate?: InitialUpdate,
): Unbind
```

Observe symbol field changes. Output could be a simple callback or InfrontUtil.Binding.

##### Parameters

- field: [SymbolField](./SDK.InfrontSDK.SymbolField.md)

  A field name.
- callback: (val: any) => void

  Get updated value. This will be called every time new update is pushed. First call after observing the value will be affected by the initialUpdate [InitialUpdate](./SDK.InfrontSDK.InitialUpdate.md) parameter.
- `Optional` targetCurrency: string

  Currency code to convert the value to. The currency code must be "Alpha-3" string. See [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
- `Optional` initialUpdate: [InitialUpdate](./SDK.InfrontSDK.InitialUpdate.md)

  Define whether to do an initial callback after observing or not. See [InitialUpdate](./SDK.InfrontSDK.InitialUpdate.md).

##### Returns Unbind
