---
title: "CdapiEquityCompanyShareholder"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyShareholder"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiEquityCompanyShareholder"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyShareholder.html"
defines: ["CdapiEquityCompanyShareholder"]
member_count: 5
members: ["_meta", "date", "id", "owners", "source"]
member_groups:
  "Properties": ["_meta", "date", "id", "owners", "source"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.BasedefEntityMeta", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyShareholderOwners", "SDK.InfrontSDK.CoreDataAPI.CdapiEquityCompanyShareholderSource"]
---

# CdapiEquityCompanyShareholder

CompanyShareholder holds the shareholder structure of a company.
Available for sources INFRONT, EURONEXT_VPS, and STANDARD_AND_POORS.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.equity.CompanyShareholder

```ts
interface CdapiEquityCompanyShareholder {
    _meta: BasedefEntityMeta;
    date: string;
    id: string;
    owners: readonly CdapiEquityCompanyShareholderOwners[];
    source: CdapiEquityCompanyShareholderSource;
}
```

### Properties

#### `Readonly` _meta

```ts
_meta: BasedefEntityMeta
```

Entity metadata (creation time, update time, version, etc.).

#### `Readonly` date

```ts
date: string
```

Date on which this shareholder data was generated. ISO-8601 recommended.

#### `Readonly` id

```ts
id: string
```

Internal unique identifier for this record (= issuer_id).

#### `Readonly` owners

```ts
owners: readonly CdapiEquityCompanyShareholderOwners[]
```

List of shareholders and their respective ownership details.

#### `Readonly` source

```ts
source: CdapiEquityCompanyShareholderSource
```

Data source — reuses CompanyBasic.Source enum.

##### Remarks

Format: enum
