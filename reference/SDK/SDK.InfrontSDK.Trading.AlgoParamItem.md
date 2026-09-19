---
title: "AlgoParamItem"
qualified_name: "SDK.InfrontSDK.Trading.AlgoParamItem"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > AlgoParamItem"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.AlgoParamItem.html"
defines: ["AlgoParamItem"]
member_count: 19
members: ["customNuRef", "default", "description", "dropdownItems", "element", "feeds", "hidden", "id", "label", "mandatory", "max", "maxLen", "min", "multiLine", "paramType", "properties", "get", "observe", "set"]
member_groups:
  "Properties": ["customNuRef", "default", "description", "dropdownItems", "element", "feeds", "hidden", "id", "label", "mandatory", "max", "maxLen", "min", "multiLine", "paramType", "properties"]
  "Methods": ["get", "observe", "set"]
reference_count: 3
references: ["SDK.InfrontSDK.Trading.DropdownItem", "SDK.InfrontSDK.Unbind", "SDK.InfrontSDK.Trading.AlgoItem"]
---

# AlgoParamItem

Output interface for an algo parameter.

#### See

AlgoItem

```ts
interface AlgoParamItem {
    customNuRef: number;
    default: string;
    description: string;
    dropdownItems: DropdownItem[];
    element: string;
    feeds: number[];
    hidden: boolean;
    id: string;
    label: string;
    mandatory: boolean;
    max: number;
    maxLen: number;
    min: number;
    multiLine: boolean;
    paramType: ParamType;
    properties: ParamProperty[];
    get(): any;
    observe(callback: (val: any) => void): Unbind;
    set(value: any): void;
}
```

### Properties

#### customNuRef

```ts
customNuRef: number
```

Optional field

#### default

```ts
default: string
```

The default value of this param, if any

#### description

```ts
description: string
```

Description of the AlgoParamItem.

#### dropdownItems

```ts
dropdownItems: DropdownItem[]
```

Contains the list items of a dropdown list

#### element

```ts
element: string
```

Optional field

#### feeds

```ts
feeds: number[]
```

If present, the AlgoParamItem is only applicable for the specified feeds

#### hidden

```ts
hidden: boolean
```

If true this item should not be displayed

#### id

```ts
id: string
```

The id of the AlgoParamItem

#### label

```ts
label: string
```

The display label for the AlgoParamItem

#### mandatory

```ts
mandatory: boolean
```

If true the AlgoParamItem is a mandatory input field

#### max

```ts
max: number
```

Optional maximum value

#### maxLen

```ts
maxLen: number
```

Maximum number of input characters

#### min

```ts
min: number
```

Optional minimum value

#### multiLine

```ts
multiLine: boolean
```

If true this field can contain multiple lines

#### paramType

```ts
paramType: ParamType
```

The type of parameter

#### properties

```ts
properties: ParamProperty[]
```

List of additional properties for this AlgoParamItem

### Methods

#### get

```ts
get(): any
```

Returns the current value of the AlgoParamItem

##### Returns any

#### observe

```ts
observe(callback: (val: any) => void): Unbind
```

Bind to the value of the AlgoParamItem

##### Parameters

- callback: (val: any) => void

##### Returns Unbind

#### set

```ts
set(value: any): void
```

Set the current value of the AlgoParamItem

##### Parameters

- value: any

##### Returns void
