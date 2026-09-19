---
title: "OptionsTopToolbar"
qualified_name: "WTK.OptionsTopToolbar"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > OptionsTopToolbar"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.OptionsTopToolbar.html"
defines: ["OptionsTopToolbar"]
member_count: 13
members: ["annotationMenu?", "chartTypeMenu?", "compareMenu?", "currencyMenu?", "cursorEventsButton?", "fullScreenButton?", "indicatorMenu?", "instrumentHeader?", "newCompareMenu?", "periodMenu?", "resolutionMenu?", "settingsMenu?", "templateMenu?"]
member_groups:
  "Properties": ["annotationMenu?", "chartTypeMenu?", "compareMenu?", "currencyMenu?", "cursorEventsButton?", "fullScreenButton?", "indicatorMenu?", "instrumentHeader?", "newCompareMenu?", "periodMenu?", "resolutionMenu?", "settingsMenu?", "templateMenu?"]
---

# OptionsTopToolbar

OptionsTopToolbar

```ts
interface OptionsTopToolbar {
    annotationMenu?: boolean;
    chartTypeMenu?: boolean;
    compareMenu?: boolean;
    currencyMenu?: boolean;
    cursorEventsButton?: boolean;
    fullScreenButton?: boolean;
    indicatorMenu?: boolean;
    instrumentHeader?: boolean;
    newCompareMenu?: boolean;
    periodMenu?: boolean;
    resolutionMenu?: boolean;
    settingsMenu?: boolean;
    templateMenu?: boolean;
}
```

### Properties

#### `Optional` annotationMenu

```ts
annotationMenu?: boolean
```

dropdown for adding annotations

#### `Optional` chartTypeMenu

```ts
chartTypeMenu?: boolean
```

dropdown for setting chart-type of main instrument

#### `Optional` compareMenu

```ts
compareMenu?: boolean
```

##### Deprecated

benchmark instrument search and search history

#### `Optional` currencyMenu

```ts
currencyMenu?: boolean
```

dropdown for selecting currency of main instrument

#### `Optional` cursorEventsButton

```ts
cursorEventsButton?: boolean
```

button to toggle cursor hover effects

#### `Optional` fullScreenButton

```ts
fullScreenButton?: boolean
```

button to toggle fullscreen view

#### `Optional` indicatorMenu

```ts
indicatorMenu?: boolean
```

dropdown for adding technical indicators and oscillators

#### `Optional` instrumentHeader

```ts
instrumentHeader?: boolean
```

display data in the header (like performances)

#### `Optional` newCompareMenu

```ts
newCompareMenu?: boolean
```

benchmark instrument search, favorites and history

#### `Optional` periodMenu

```ts
periodMenu?: boolean
```

dropdown for period-selection

#### `Optional` resolutionMenu

```ts
resolutionMenu?: boolean
```

dropdown for resolution-selection

#### `Optional` settingsMenu

```ts
settingsMenu?: boolean
```

menu for global chart settings

#### `Optional` templateMenu

```ts
templateMenu?: boolean
```

dropdown for saving and applying templates
