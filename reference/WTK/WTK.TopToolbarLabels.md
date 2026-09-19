---
title: "TopToolbarLabels"
qualified_name: "WTK.TopToolbarLabels"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > TopToolbarLabels"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.TopToolbarLabels.html"
defines: ["TopToolbarLabels"]
member_count: 9
members: ["annotationMenu?", "chartTypeMenu?", "compareMenu?", "currencyMenu?", "indicatorMenu?", "newCompareMenu?", "periodMenu?", "resolutionMenu?", "templateMenu?"]
member_groups:
  "Properties": ["annotationMenu?", "chartTypeMenu?", "compareMenu?", "currencyMenu?", "indicatorMenu?", "newCompareMenu?", "periodMenu?", "resolutionMenu?", "templateMenu?"]
reference_count: 1
references: ["WTK.DropDownSelectedItem"]
---

# TopToolbarLabels

```ts
interface TopToolbarLabels {
    annotationMenu?: DropDownSelectedItem;
    chartTypeMenu?: DropDownSelectedItem;
    compareMenu?: DropDownSelectedItem;
    currencyMenu?: DropDownSelectedItem;
    indicatorMenu?: DropDownSelectedItem;
    newCompareMenu?: DropDownSelectedItem;
    periodMenu?: DropDownSelectedItem;
    resolutionMenu?: DropDownSelectedItem;
    templateMenu?: DropDownSelectedItem;
}
```

### Properties

#### `Optional` annotationMenu

```ts
annotationMenu?: DropDownSelectedItem
```

dropdown label for adding annotations

#### `Optional` chartTypeMenu

```ts
chartTypeMenu?: DropDownSelectedItem
```

dropdown label for setting chart-type of main instrument

#### `Optional` compareMenu

```ts
compareMenu?: DropDownSelectedItem
```

##### Deprecated

dropdown label for benchmark instrument search and search history

#### `Optional` currencyMenu

```ts
currencyMenu?: DropDownSelectedItem
```

dropdown label for selecting currency of main instrument

#### `Optional` indicatorMenu

```ts
indicatorMenu?: DropDownSelectedItem
```

dropdown label for adding technical indicators and oscillators

#### `Optional` newCompareMenu

```ts
newCompareMenu?: DropDownSelectedItem
```

dropdown label for benchmark instrument search, favorites and history

#### `Optional` periodMenu

```ts
periodMenu?: DropDownSelectedItem
```

dropdown label for period-selection

#### `Optional` resolutionMenu

```ts
resolutionMenu?: DropDownSelectedItem
```

dropdown label for resolution-selection

#### `Optional` templateMenu

```ts
templateMenu?: DropDownSelectedItem
```

dropdown label for saving and applying templates
