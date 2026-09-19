---
title: "OrderEntryComponent"
qualified_name: "WTK.OrderEntryComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > OrderEntryComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.OrderEntryComponent.html"
defines: ["OrderEntryComponent"]
reference_count: 14
references: ["WTK.ButtonComponent", "WTK.NumberComponent", "WTK.TextComponent", "WTK.TextareaComponent", "WTK.CheckboxComponent", "WTK.RadioComponent", "WTK.LabelComponent", "WTK.IconComponent", "WTK.ImageComponent", "WTK.ListComponent", "WTK.DateComponent", "WTK.TimeComponent", "WTK.DateTimeComponent", "WTK.PredefinedComponent"]
---

# OrderEntryComponent

```ts
OrderEntryComponent:
    | ButtonComponent
    | ButtonGroupComponent
    | DropdownComponent
    | NumberComponent
    | TextComponent
    | TextareaComponent
    | CheckboxComponent
    | RadioComponent
    | LabelComponent
    | IconComponent
    | ImageComponent
    | ListComponent
    | DateComponent
    | TimeComponent
    | DateTimeComponent
    | PredefinedComponent
```

Union type of all order entry components (both simple and predefined).
This is the primary type used when defining order entry form layouts.

#### Example

```typescript
// Simple components
const textInput: OrderEntryComponent = {
  id: 'note',
  type: 'text',
  label: 'Order Note',
  value: ''
};

const checkbox: OrderEntryComponent = {
  id: 'marketToggle',
  type: 'checkbox',
  label: 'Market Order',
  renderAs: 'switch',
  value: false
};

const button: OrderEntryComponent = {
  id: 'btn-buy',
  type: 'button',
  label: 'Buy',
  event: 'orderAction',
  payload: { buyOrSell: InfrontSDK.Trading.BuyOrSell.Buy }
};

// Predefined components
const instrumentSearch: OrderEntryComponent = {
  id: 'instrumentSearch',
  type: 'predefined',
  predefinedType: 'instrumentSearch',
  label: 'Symbol'
};

const price: OrderEntryComponent = {
  id: 'price',
  type: 'predefined',
  predefinedType: 'price',
  label: 'Price',
  visible: (e) => e.orderTypeChanged !== InfrontSDK.Trading.OrderType.Market
};

const volume: OrderEntryComponent = {
  id: 'volume',
  type: 'predefined',
  predefinedType: 'volume',
  label: 'Volume'
};

const orderTypeSelector: OrderEntryComponent = {
  id: 'orderTypeSelector',
  type: 'predefined',
  predefinedType: 'orderTypeSelector',
  label: 'Order Type',
  subLabel: 'Strategy',
  orderTypeNodes: [
    { label: 'Limit', orderType: InfrontSDK.Trading.OrderType.Normal },
    { label: 'Market', orderType: InfrontSDK.Trading.OrderType.Market },
    {
      label: 'Algorithm',
      orderType: InfrontSDK.Trading.OrderType.Strategy,
      children: [
        { label: 'VWAP', orderType: InfrontSDK.Trading.OrderType.Strategy, algoId: 'VWAP' },
        { label: 'TWAP', orderType: InfrontSDK.Trading.OrderType.Strategy, algoId: 'TWAP' }
      ]
    }
  ]
};

const customFields: OrderEntryComponent = {
  id: 'customFields',
  type: 'predefined',
  predefinedType: 'customFields',
  include: ['validity'],
  labelOverrides: [{ id: '2', value: '(Translated) Validity' }]
};
```
