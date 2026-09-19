---
title: "OrderEntrySection"
qualified_name: "WTK.OrderEntrySection"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "OrderEntryWidgetV2"
nav_path: "WTK > OrderEntryWidgetV2 > OrderEntrySection"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.OrderEntrySection.html"
defines: ["OrderEntrySection"]
reference_count: 4
references: ["WTK.OrderEntryRootSection", "WTK.OrderEntrySubSection", "WTK.OrderEntryComponent", "WTK.PredefinedComponent"]
---

# OrderEntrySection

```ts
OrderEntrySection: OrderEntryRootSection | OrderEntrySubSection
```

Union type representing either a root section or a subsection in the order entry.
Sections are used to organize the order entry form into logical groups and control layout.

#### See

OrderEntryComponent | PredefinedComponent

#### Example

```typescript
const sections: OrderEntrySection[] = [
  {
    id: 'instrument-selector',
    title: 'Instrument Section',
    // Disable section during confirmation and modify states
    enabled: (e) => !['CONFIRM', 'MODIFY'].includes(e.orderEntryState?.state),
    components: [
      {
        id: 'instrumentDetails',
        type: 'predefined',
        predefinedType: 'instrumentDetails',
        layout: 'Layout1'
      },
      {
        id: 'instrumentSearch',
        type: 'predefined',
        predefinedType: 'instrumentSearch',
        label: 'Symbol'
      },
    ],
  },
  {
    id: 'order-type-section',
    title: 'Order Type Section',
    // Conditionally show/hide based on order type
    enabled: (e) =>
      e.orderEntryState?.state !== 'CONFIRM' &&
      e.orderTypeChanged !== InfrontSDK.Trading.OrderType.Market,
    components: [
      {
        id: 'orderTypeSelector',
        type: 'predefined',
        predefinedType: 'orderTypeSelector',
        label: 'Order Type',
        subLabel: 'Strategy',
        orderTypeNodes: [
          { label: 'Limit', orderType: InfrontSDK.Trading.OrderType.Normal },
          { label: 'Market', orderType: InfrontSDK.Trading.OrderType.Market },
        ]
      },
    ],
  },
  {
    id: 'actions-section',
    // Show only in new order state
    visible: (e) => e.orderEntryState?.state === 'NEW_ORDER',
    components: [
      {
        id: 'btn-buy',
        type: 'button',
        label: 'Buy',
        event: 'orderAction',
        payload: { buyOrSell: InfrontSDK.Trading.BuyOrSell.Buy }
      },
      {
        id: 'btn-sell',
        type: 'button',
        label: 'Sell',
        event: 'orderAction',
        payload: { buyOrSell: InfrontSDK.Trading.BuyOrSell.Sell }
      },
    ],
  }
];
```
