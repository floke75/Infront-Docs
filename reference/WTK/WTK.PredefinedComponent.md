---
title: "PredefinedComponent"
qualified_name: "WTK.PredefinedComponent"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > PredefinedComponent"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.PredefinedComponent.html"
defines: ["PredefinedComponent"]
reference_count: 19
references: ["WTK.InstrumentDetailsComponent", "WTK.InstrumentSearchComponent", "WTK.PortfolioSelectorComponent", "WTK.PortfolioValueComponent", "WTK.CurrentPositionComponent", "WTK.AlgoParamsComponent", "WTK.OrderTypeSelectorComponent", "WTK.OrderTypeComponent", "WTK.StrategyComponent", "WTK.PriceComponent", "WTK.VolumeComponent", "WTK.GrossAmountComponent", "WTK.ActiveToggleComponent", "WTK.OpenVolumeComponent", "WTK.CustomFieldsComponent", "WTK.OrderSummaryComponent", "WTK.AlgoDescriptionComponent", "WTK.MarketToggleComponent", "WTK.OrderEntryComponent"]
---

# PredefinedComponent

```ts
PredefinedComponent:
    | InstrumentDetailsComponent
    | InstrumentSearchComponent
    | PortfolioSelectorComponent
    | PortfolioValueComponent
    | CurrentPositionComponent
    | AlgoParamsComponent
    | OrderTypeSelectorComponent
    | OrderTypeComponent
    | StrategyComponent
    | PriceComponent
    | AlgoParamPriceComponent
    | VolumeComponent
    | GrossAmountComponent
    | ActiveToggleComponent
    | OpenVolumeComponent
    | CustomFieldsComponent
    | OrderSummaryComponent
    | AlgoDescriptionComponent
    | ValidationMessagesComponent
    | MarketToggleComponent
```

Union type of all predefined (complex) order entry components.
These are specialized components with built-in business logic for trading workflows.

#### See

- OrderEntryComponent
- InstrumentDetailsComponent
- InstrumentSearchComponent
- PortfolioSelectorComponent
- PortfolioValueComponent
- CurrentPositionComponent
- OrderTypeSelectorComponent
- AlgoParamsComponent
- OrderTypeComponent
- StrategyComponent
- PriceComponent
- VolumeComponent
- GrossAmountComponent
- ActiveToggleComponent
- OpenVolumeComponent
- CustomFieldsComponent
- MarketToggleComponent
- OrderSummaryComponent

#### Example

```typescript
// Instrument components
const instrumentDetails: PredefinedComponent = {
  id: 'instrumentDetails',
  type: 'predefined',
  predefinedType: 'instrumentDetails',
  layout: 'Layout1',
  label: undefined
};

const instrumentSearch: PredefinedComponent = {
  id: 'instrumentSearch',
  type: 'predefined',
  predefinedType: 'instrumentSearch',
  label: 'Symbol'
};

// Portfolio components
const portfolioSelector: PredefinedComponent = {
  id: 'portfolioSelector',
  type: 'predefined',
  predefinedType: 'portfolioSelector',
  label: 'Select Portfolio'
};

const tradingPower: PredefinedComponent = {
  id: 'tradingPower',
  type: 'predefined',
  predefinedType: 'portfolioValue',
  valueKey: 'TradingPower',
  label: 'Trading Power'
};

const currentPosition: PredefinedComponent = {
  id: 'currentPosition',
  type: 'predefined',
  predefinedType: 'currentPosition',
  label: 'Current Position'
};

// Order type components
const orderTypeSelector: PredefinedComponent = {
  id: 'orderTypeSelector',
  type: 'predefined',
  predefinedType: 'orderTypeSelector',
  label: 'Order Type',
  subLabel: 'Strategy',
  orderTypeNodes: [
    { label: 'Limit', orderType: InfrontSDK.Trading.OrderType.Normal },
    { label: 'Fill or Kill', orderType: InfrontSDK.Trading.OrderType.FillOrKill },
    {
      label: 'Algorithm',
      orderType: InfrontSDK.Trading.OrderType.Strategy,
      children: [
        { label: 'VWAP', orderType: InfrontSDK.Trading.OrderType.Strategy, algoId: 'VWAP' },
        { label: 'Stealth', orderType: InfrontSDK.Trading.OrderType.Strategy, algoId: 'Stealth' }
      ]
    },
    {
      label: 'Stop Loss',
      orderType: InfrontSDK.Trading.OrderType.Strategy,
      children: [
        { label: 'Stop Loss Limit', orderType: InfrontSDK.Trading.OrderType.Strategy, algoId: 'InfrontCondor_StopLmt' },
        { label: 'Trailing Stop (%) 1', orderType: InfrontSDK.Trading.OrderType.Strategy, algoId: 'InfrontCondor_TrailPct' }
      ]
    }
  ]
};

const algoParams: PredefinedComponent = {
  id: 'algoParams',
  type: 'predefined',
  predefinedType: 'algoParams',
  exclude: ['40', '59'],
  hideSingleItemSelections: false
};

// Order field components
const price: PredefinedComponent = {
  id: 'price',
  type: 'predefined',
  predefinedType: 'price',
  label: 'Price',
  visible: (e) => ![InfrontSDK.Trading.OrderType.Strategy, InfrontSDK.Trading.OrderType.Market].includes(e.orderTypeChanged)
};

const volume: PredefinedComponent = {
  id: 'volume',
  type: 'predefined',
  predefinedType: 'volume',
  label: 'Volume'
};

const grossAmount: PredefinedComponent = {
  id: 'gross-amount',
  type: 'predefined',
  predefinedType: 'grossAmount',
  label: 'Gross amount',
  estimatedLabel: 'Est. gross amount',
  visible: (e) => ![InfrontSDK.Trading.OrderType.Market].includes(e.orderTypeChanged)
};

// Custom fields and toggles
const customFields: PredefinedComponent = {
  id: 'customFields',
  type: 'predefined',
  predefinedType: 'customFields',
  include: ['validity'],
  labelOverrides: [{ id: '2', value: '(Translated) Validity' }]
};

const activeToggle: PredefinedComponent = {
  id: 'activeToggle',
  type: 'predefined',
  predefinedType: 'activeToggle',
  label: 'Active'
};

const marketToggle: PredefinedComponent = {
  id: 'marketToggle',
  type: 'predefined',
  predefinedType: 'marketToggle',
  label: 'Market',
  renderAs: 'switch'
};

// Order summary
const orderSummary: PredefinedComponent = {
  id: 'order-summary',
  type: 'predefined',
  predefinedType: 'orderSummary'
};
```
