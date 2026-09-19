---
title: "CdapiCommonInstrumentNsin"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonInstrumentNsin"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonInstrumentNsin"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonInstrumentNsin.html"
defines: ["CdapiCommonInstrumentNsin"]
member_count: 2
members: ["valor", "wkn"]
member_groups:
  "Properties": ["valor", "wkn"]
---

# CdapiCommonInstrumentNsin

Nsin holds national security identification numbers.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.Instrument_Nsin

```ts
interface CdapiCommonInstrumentNsin {
    valor: string;
    wkn: string;
}
```

### Properties

#### `Readonly` valor

```ts
valor: string
```

VALOR — Swiss securities identification code, analogous to WKN or CUSIP.

#### `Readonly` wkn

```ts
wkn: string
```

WKN (Wertpapierkennnummer) — German 6-character securities identification code.
