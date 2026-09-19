---
title: "CdapiFundInstrumentVolume"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiFundInstrumentVolume"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiFundInstrumentVolume"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiFundInstrumentVolume.html"
defines: ["CdapiFundInstrumentVolume"]
member_count: 3
members: ["currency_code", "date", "value"]
member_groups:
  "Properties": ["currency_code", "date", "value"]
---

# CdapiFundInstrumentVolume

Volume holds a fund AUM (Assets Under Management) snapshot.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.fund.Instrument_Volume

```ts
interface CdapiFundInstrumentVolume {
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

ISO 4217 currency code in which AUM is expressed.

#### `Readonly` date

```ts
date: string
```

Date of the AUM snapshot. ISO-8601 recommended.

#### `Readonly` value

```ts
value: number
```

Total net asset value (TNA) in the given currency.

##### Remarks

Format: double
