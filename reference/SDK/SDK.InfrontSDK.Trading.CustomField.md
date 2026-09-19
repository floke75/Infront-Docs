---
title: "CustomField"
qualified_name: "SDK.InfrontSDK.Trading.CustomField"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > Trading > CustomField"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.Trading.CustomField.html"
defines: ["CustomField"]
member_count: 17
members: ["default", "display", "dropdownItems", "feeds", "hidden", "id", "label", "mandatory", "market", "max", "maxLen", "min", "orderTypes", "paramType", "prefix", "properties", "value"]
member_groups:
  "Properties": ["default", "display", "dropdownItems", "feeds", "hidden", "id", "label", "mandatory", "market", "max", "maxLen", "min", "orderTypes", "paramType", "prefix", "properties", "value"]
reference_count: 2
references: ["SDK.InfrontSDK.Trading.DropdownItem", "SDK.InfrontSDK.Trading.MarketProperties"]
---

# CustomField

Output interface for a custom field.

#### See

MarketProperties.getCustomFields

```ts
interface CustomField {
    default: string;
    display: string;
    dropdownItems: DropdownItem[];
    feeds: number[];
    hidden: boolean;
    id: number;
    label: string;
    mandatory: boolean;
    market: string;
    max: number;
    maxLen: number;
    min: number;
    orderTypes: OrderType[];
    paramType: ParamType;
    prefix: string;
    properties: ParamProperty[];
    value: string;
}
```

### Properties

#### default

```ts
default: string
```

Optional default value of the custom field

#### display

```ts
display: string
```

Optional field

#### dropdownItems

```ts
dropdownItems: DropdownItem[]
```

Contains the list items of a dropdown list

#### feeds

```ts
feeds: number[]
```

If present, the custom field is only applicable for the specified feeds

#### hidden

```ts
hidden: boolean
```

If true this item should not be displayed

#### id

```ts
id: number
```

The id of the custom field

#### label

```ts
label: string
```

The display label for the custom field

#### mandatory

```ts
mandatory: boolean
```

If true the custom field is a mandatory input field

#### market

```ts
market: string
```

If specified, the custom field is only applicable to the markets listed

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

#### orderTypes

```ts
orderTypes: OrderType[]
```

If specified, the custom field is only applicable to the order types listed

#### paramType

```ts
paramType: ParamType
```

The type of parameter

#### prefix

```ts
prefix: string
```

Optional prefix that will be added to the input value before order data is submitted

#### properties

```ts
properties: ParamProperty[]
```

List of additional properties

#### value

```ts
value: string
```

The value of the custom field
