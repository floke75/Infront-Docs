---
title: "SettleType"
qualified_name: "SDK.InfrontSDK.Trading.SettleType"
kind: enum
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.Trading"
group: "RFQ Trading"
nav_path: "SDK > InfrontSDK > Other > Trading > RFQ Trading > SettleType"
source_url: "https://docs.infrontfinance.com/docs/enums/SDK.InfrontSDK.Trading.SettleType.html"
defines: ["SettleType"]
member_count: 33
members: ["Cash", "Date", "NextDay", "TenorPlus10", "TenorPlus11", "TenorPlus12", "TenorPlus13", "TenorPlus14", "TenorPlus15", "TenorPlus16", "TenorPlus17", "TenorPlus18", "TenorPlus19", "TenorPlus2", "TenorPlus20", "TenorPlus21", "TenorPlus22", "TenorPlus23", "TenorPlus24", "TenorPlus25", "TenorPlus26", "TenorPlus27", "TenorPlus28", "TenorPlus29", "TenorPlus3", "TenorPlus30", "TenorPlus4", "TenorPlus5", "TenorPlus6", "TenorPlus7", "TenorPlus8", "TenorPlus9", "Undefined"]
member_groups:
  "Enumeration Members": ["Cash", "Date", "NextDay", "TenorPlus10", "TenorPlus11", "TenorPlus12", "TenorPlus13", "TenorPlus14", "TenorPlus15", "TenorPlus16", "TenorPlus17", "TenorPlus18", "TenorPlus19", "TenorPlus2", "TenorPlus20", "TenorPlus21", "TenorPlus22", "TenorPlus23", "TenorPlus24", "TenorPlus25", "TenorPlus26", "TenorPlus27", "TenorPlus28", "TenorPlus29", "TenorPlus3", "TenorPlus30", "TenorPlus4", "TenorPlus5", "TenorPlus6", "TenorPlus7", "TenorPlus8", "TenorPlus9", "Undefined"]
---

# SettleType

Enumeration of settlement types for RFQ trades. The settlement type indicates how the settlement date is determined for a trade.

For example, "NextDay" means the trade settles on the next business day, while "TenorPlus2" means the settlement date is two business days after the trade date.

### Enumeration Members

#### Cash

```ts
Cash: "Cash"
```

Overnight settlement

#### Date

```ts
Date: "Date"
```

Specific date, as specified by the settlementDate field

#### NextDay

```ts
NextDay: "NextDay"
```

Next day, or T+1 settlement

#### TenorPlus10

```ts
TenorPlus10: "TenorPlus10"
```

T+10 settlement

#### TenorPlus11

```ts
TenorPlus11: "TenorPlus11"
```

T+11 settlement

#### TenorPlus12

```ts
TenorPlus12: "TenorPlus12"
```

T+12 settlement

#### TenorPlus13

```ts
TenorPlus13: "TenorPlus13"
```

T+13 settlement

#### TenorPlus14

```ts
TenorPlus14: "TenorPlus14"
```

T+14 settlement

#### TenorPlus15

```ts
TenorPlus15: "TenorPlus15"
```

T+15 settlement

#### TenorPlus16

```ts
TenorPlus16: "TenorPlus16"
```

T+16 settlement

#### TenorPlus17

```ts
TenorPlus17: "TenorPlus17"
```

T+17 settlement

#### TenorPlus18

```ts
TenorPlus18: "TenorPlus18"
```

T+18 settlement

#### TenorPlus19

```ts
TenorPlus19: "TenorPlus19"
```

T+19 settlement

#### TenorPlus2

```ts
TenorPlus2: "TenorPlus2"
```

Spot, T+2 settlement

#### TenorPlus20

```ts
TenorPlus20: "TenorPlus20"
```

T+20 settlement

#### TenorPlus21

```ts
TenorPlus21: "TenorPlus21"
```

T+21 settlement

#### TenorPlus22

```ts
TenorPlus22: "TenorPlus22"
```

T+22 settlement

#### TenorPlus23

```ts
TenorPlus23: "TenorPlus23"
```

T+23 settlement

#### TenorPlus24

```ts
TenorPlus24: "TenorPlus24"
```

T+24 settlement

#### TenorPlus25

```ts
TenorPlus25: "TenorPlus25"
```

T+25 settlement

#### TenorPlus26

```ts
TenorPlus26: "TenorPlus26"
```

T+26 settlement

#### TenorPlus27

```ts
TenorPlus27: "TenorPlus27"
```

T+27 settlement

#### TenorPlus28

```ts
TenorPlus28: "TenorPlus28"
```

T+28 settlement

#### TenorPlus29

```ts
TenorPlus29: "TenorPlus29"
```

T+29 settlement

#### TenorPlus3

```ts
TenorPlus3: "TenorPlus3"
```

Spot next, or T+3 settlement

#### TenorPlus30

```ts
TenorPlus30: "TenorPlus30"
```

T+30 settlement

#### TenorPlus4

```ts
TenorPlus4: "TenorPlus4"
```

T+4 settlement

#### TenorPlus5

```ts
TenorPlus5: "TenorPlus5"
```

T+5 settlement

#### TenorPlus6

```ts
TenorPlus6: "TenorPlus6"
```

T+6 settlement

#### TenorPlus7

```ts
TenorPlus7: "TenorPlus7"
```

T+7 settlement

#### TenorPlus8

```ts
TenorPlus8: "TenorPlus8"
```

T+8 settlement

#### TenorPlus9

```ts
TenorPlus9: "TenorPlus9"
```

T+9 settlement

#### Undefined

```ts
Undefined: "Undefined"
```

No settlement type specified
