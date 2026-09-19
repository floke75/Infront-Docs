---
title: "GlobalChartSettings"
qualified_name: "WTK.GlobalChartSettings"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > GlobalChartSettings"
source_url: "https://docs.infrontfinance.com/docs/interfaces/WTK.GlobalChartSettings.html"
defines: ["GlobalChartSettings"]
member_count: 22
members: ["axisDateTimeLabelFormats?", "callbackChartFields?", "chartType", "companyEventSmallDots?", "currentPeriod", "cursorType?", "dataEndDate?", "decimals?", "globalSettingsNavigation?", "hasNavigatorScroll?", "isIntraday?", "labelAlpha?", "mainBackgroundColor?", "secondaryChartType?", "showOrdinate?", "showPulseTrackLine?", "showSplits?", "showTopToolbar?", "streaming?", "updateTimeout?", "volumeType?", "watermarkMaxFontSize?"]
member_groups:
  "Properties": ["axisDateTimeLabelFormats?", "callbackChartFields?", "chartType", "companyEventSmallDots?", "currentPeriod", "cursorType?", "dataEndDate?", "decimals?", "globalSettingsNavigation?", "hasNavigatorScroll?", "isIntraday?", "labelAlpha?", "mainBackgroundColor?", "secondaryChartType?", "showOrdinate?", "showPulseTrackLine?", "showSplits?", "showTopToolbar?", "streaming?", "updateTimeout?", "volumeType?", "watermarkMaxFontSize?"]
related_types: ["WTK.ChartGlobalParams"]
reference_count: 9
references: ["WTK.DateTimeLabelFormats", "WTK.ChartFields", "WTK.ChartType", "WTK.Period", "WTK.CursorType", "WTK.UserParamsNavigationItem", "Utils.InfrontUtil.Observable", "WTK.VolumeType", "WTK.ChartGlobalParams"]
---

# GlobalChartSettings

- Global chart settings, not to be changed by user, only by options

```ts
interface GlobalChartSettings {
    axisDateTimeLabelFormats?: DateTimeLabelFormats;
    callbackChartFields?: (chartFields: ChartFields) => any;
    chartType: ChartType;
    companyEventSmallDots?: boolean;
    currentPeriod: Period;
    cursorType?: CursorType;
    dataEndDate?: Date;
    decimals?: number;
    globalSettingsNavigation?: UserParamsNavigationItem[];
    hasNavigatorScroll?: boolean;
    isIntraday?: boolean;
    labelAlpha?: string;
    mainBackgroundColor?: string;
    secondaryChartType?: ChartType;
    showOrdinate?: boolean;
    showPulseTrackLine?: boolean;
    showSplits?: boolean;
    showTopToolbar?: Observable<boolean>;
    streaming?: boolean;
    updateTimeout?: number;
    volumeType?: VolumeType;
    watermarkMaxFontSize?: number;
}
```

#### Hierarchy ([View Summary](../type-hierarchy.md#WTK.GlobalChartSettings))

- ChartGlobalParams

  - GlobalChartSettings

### Properties

#### `Optional` axisDateTimeLabelFormats

```ts
axisDateTimeLabelFormats?: DateTimeLabelFormats
```

- Axis settings

#### `Optional` callbackChartFields

```ts
callbackChartFields?: (chartFields: ChartFields) => any
```

- Callbacks

#### chartType

```ts
chartType: ChartType
```

- Main Chart settings

Inherited from ChartGlobalParams.chartType

#### `Optional` companyEventSmallDots

```ts
companyEventSmallDots?: boolean
```

- Global company event settings

#### currentPeriod

```ts
currentPeriod: Period
```

- Period & Resolution: user selected

#### `Optional` cursorType

```ts
cursorType?: CursorType
```

- Display settings

Inherited from ChartGlobalParams.cursorType

#### `Optional` dataEndDate

```ts
dataEndDate?: Date
```

- Period & Resolution: data related

#### `Optional` decimals

```ts
decimals?: number
```

Decimals logic

#### `Optional` globalSettingsNavigation

```ts
globalSettingsNavigation?: UserParamsNavigationItem[]
```

- ChartEdit modals

#### `Optional` hasNavigatorScroll

```ts
hasNavigatorScroll?: boolean
```

- Navigator settings

#### `Optional` isIntraday

```ts
isIntraday?: boolean
```

- Data helpers

#### `Optional` labelAlpha

```ts
labelAlpha?: string
```

- Transparency settings

Inherited from ChartGlobalParams.labelAlpha

#### `Optional` mainBackgroundColor

```ts
mainBackgroundColor?: string
```

- Colors

#### `Optional` secondaryChartType

```ts
secondaryChartType?: ChartType
```

- Secondary chart settings

#### `Optional` showOrdinate

```ts
showOrdinate?: boolean
```

- Axis settings

Inherited from ChartGlobalParams.showOrdinate

#### `Optional` showPulseTrackLine

```ts
showPulseTrackLine?: boolean
```

- Pulse line settings

Inherited from ChartGlobalParams.showPulseTrackLine

#### `Optional` showSplits

```ts
showSplits?: boolean
```

- Additional information settings

Inherited from ChartGlobalParams.showSplits

#### `Optional` showTopToolbar

```ts
showTopToolbar?: Observable<boolean>
```

- Chart UI settings

#### `Optional` streaming

```ts
streaming?: boolean
```

- Data settings

Inherited from ChartGlobalParams.streaming

#### `Optional` updateTimeout

```ts
updateTimeout?: number
```

- Throttle times

#### `Optional` volumeType

```ts
volumeType?: VolumeType
```

- Global volume settings

#### `Optional` watermarkMaxFontSize

```ts
watermarkMaxFontSize?: number
```

- Additional information settings
