---
title: "SymbolField"
qualified_name: "SDK.InfrontSDK.SymbolField"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK"
group: "Other"
nav_path: "SDK > InfrontSDK > Other > SymbolField"
source_url: "https://docs.infrontfinance.com/docs/types/SDK.InfrontSDK.SymbolField.html"
defines: ["SymbolField"]
reference_count: 16
references: ["SDK.InfrontSDK.BasicField", "SDK.InfrontSDK.HistPerformanceField", "SDK.InfrontSDK.FundDetailField", "SDK.InfrontSDK", "SDK.InfrontSDK.CompanyMetadataField", "SDK.InfrontSDK.FundamentalField", "SDK.InfrontSDK.KeyfigureField", "SDK.InfrontSDK.EstimatesField", "SDK.InfrontSDK.AdditionalDataField", "SDK.InfrontSDK.CalculatedHistField", "SDK.InfrontSDK.TechnicalAnalysisField", "SDK.InfrontSDK.EsgField", "SDK.InfrontSDK.CalendarEventField", "SDK.InfrontSDK.ListingDetailsField", "SDK.InfrontSDK.SymbolData", "SDK.InfrontSDK.symbolData"]
---

# SymbolField

```ts
SymbolField:
    | BasicField
    | HistPerformanceField
    | FundDetailField
    | InfrontSDK.CompanyMetadataField
    | InfrontSDK.FundamentalField
    | KeyfigureField
    | InfrontSDK.EstimatesField
    | AdditionalDataField
    | CalculatedHistField
    | TechnicalAnalysisField
    | EsgField
    | CalendarEventField
    | CdapiCorporateActionsField
    | ListingDetailsField
```

Enumeration type used to represent all available symbol fields.
This can be used with [SymbolData.get](./SDK.InfrontSDK.SymbolData.md#get) and [SymbolData.observe](./SDK.InfrontSDK.SymbolData.md#observe).

#### Remarks

Not all fields are going to be available. Requested content, user access, and symbol type can determine what is available and what is not.

#### See

[symbolData](./SDK.InfrontSDK.symbolData.md)
