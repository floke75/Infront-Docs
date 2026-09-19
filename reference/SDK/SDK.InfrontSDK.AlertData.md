---
title: "AlertData"
qualified_name: "SDK.InfrontSDK.AlertData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > AlertData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.AlertData.html"
defines: ["AlertData"]
member_count: 7
members: ["comment", "enabled", "marketDataField", "operator", "symbolId", "triggerType", "value"]
member_groups:
  "Properties": ["comment", "enabled", "marketDataField", "operator", "symbolId", "triggerType", "value"]
reference_count: 4
references: ["SDK.InfrontSDK.AlertMarketDataField", "SDK.InfrontSDK.AlertOperator", "SDK.InfrontSDK.SymbolId", "SDK.InfrontSDK.AlertTriggerType"]
---

# AlertData

Alert data container for creating a simple alert.

```ts
interface AlertData {
    comment: string;
    enabled: boolean;
    marketDataField: AlertMarketDataField;
    operator: AlertOperator;
    symbolId: SymbolId;
    triggerType: AlertTriggerType;
    value: number;
}
```

### Properties

#### comment

```ts
comment: string
```

User provided comment.

#### enabled

```ts
enabled: boolean
```

Set the alert to an enabled / disabled state.

#### marketDataField

```ts
marketDataField: AlertMarketDataField
```

the symbol field to be monitored.

#### operator

```ts
operator: AlertOperator
```

The logical operation to be performed between the marketDataField and the reference value.

#### symbolId

```ts
symbolId: SymbolId
```

The id for the symbol to be monitored.

#### triggerType

```ts
triggerType: AlertTriggerType
```

The action taken for re-enabling the alert when it is triggered.

#### value

```ts
value: number
```

The reference value that the marketDataField is compared to.
