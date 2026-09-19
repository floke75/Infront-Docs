---
title: "CdapiEtpInstrumentEtcVolume"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEtpInstrumentEtcVolume"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEtpInstrumentEtcVolume"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEtpInstrumentEtcVolume.html"
defines: ["CdapiEtpInstrumentEtcVolume"]
member_count: 3
members: ["currency_code", "date", "value"]
member_groups:
  "Properties": ["currency_code", "date", "value"]
---

# CdapiEtpInstrumentEtcVolume

Volume holds the traded volume of the ETC at a specific point in time.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.etp.InstrumentEtc_Volume

```ts
interface CdapiEtpInstrumentEtcVolume {
    currency_code: string;
    date: string;
    value: number;
}
```

### Properties

#### `Readonly` currency_code

```ts
currency_code: string
```

ISO 4217 currency code in which the volume is denominated (e.g. "EUR", "USD").

#### `Readonly` date

```ts
date: string
```

Date the volume was recorded. ISO-8601 format recommended (e.g. "2024-01-15").

#### `Readonly` value

```ts
value: number
```

Traded volume as a numeric value.

##### Remarks

Format: double
