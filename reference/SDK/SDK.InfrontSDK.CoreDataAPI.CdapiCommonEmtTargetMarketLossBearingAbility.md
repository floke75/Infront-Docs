---
title: "CdapiCommonEmtTargetMarketLossBearingAbility"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketLossBearingAbility"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEmtTargetMarketLossBearingAbility"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketLossBearingAbility.html"
defines: ["CdapiCommonEmtTargetMarketLossBearingAbility"]
member_count: 5
members: ["compatible_with_clients_who_can_bear_limited_capital_loss", "compatible_with_clients_who_can_bear_loss_beyond_capital", "compatible_with_clients_who_can_not_bear_capital_loss", "compatible_with_clients_who_do_not_need_capital_guarantee", "limited_capital_loss_level"]
member_groups:
  "Properties": ["compatible_with_clients_who_can_bear_limited_capital_loss", "compatible_with_clients_who_can_bear_loss_beyond_capital", "compatible_with_clients_who_can_not_bear_capital_loss", "compatible_with_clients_who_do_not_need_capital_guarantee", "limited_capital_loss_level"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketLossBearingAbilityCompatibleWithClientsWhoCanNotBearCapitalLoss", "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEmtTargetMarketLossBearingAbilityCompatibleWithClientsWhoDoNotNeedCapitalGuarantee"]
---

# CdapiCommonEmtTargetMarketLossBearingAbility

LossBearingAbility defines the loss tolerance of the intended investor.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EmtTargetMarket_LossBearingAbility

```ts
interface CdapiCommonEmtTargetMarketLossBearingAbility {
    compatible_with_clients_who_can_bear_limited_capital_loss: string;
    compatible_with_clients_who_can_bear_loss_beyond_capital: string;
    compatible_with_clients_who_can_not_bear_capital_loss: CdapiCommonEmtTargetMarketLossBearingAbilityCompatibleWithClientsWhoCanNotBearCapitalLoss;
    compatible_with_clients_who_do_not_need_capital_guarantee: CdapiCommonEmtTargetMarketLossBearingAbilityCompatibleWithClientsWhoDoNotNeedCapitalGuarantee;
    limited_capital_loss_level: string;
}
```

### Properties

#### `Readonly` compatible_with_clients_who_can_bear_limited_capital_loss

```ts
compatible_with_clients_who_can_bear_limited_capital_loss: string
```

EMT 03020: Compatible with investors who can bear limited capital loss.

#### `Readonly` compatible_with_clients_who_can_bear_loss_beyond_capital

```ts
compatible_with_clients_who_can_bear_loss_beyond_capital: string
```

EMT 03050: Compatible with investors who can bear loss beyond initial capital.

#### `Readonly` compatible_with_clients_who_can_not_bear_capital_loss

```ts
compatible_with_clients_who_can_not_bear_capital_loss: CdapiCommonEmtTargetMarketLossBearingAbilityCompatibleWithClientsWhoCanNotBearCapitalLoss
```

EMT 03010: Compatible with investors who cannot bear any capital loss.

##### Remarks

Format: enum

#### `Readonly` compatible_with_clients_who_do_not_need_capital_guarantee

```ts
compatible_with_clients_who_do_not_need_capital_guarantee: CdapiCommonEmtTargetMarketLossBearingAbilityCompatibleWithClientsWhoDoNotNeedCapitalGuarantee
```

EMT 03040: Compatible with investors who do not need a capital guarantee.

##### Remarks

Format: enum

#### `Readonly` limited_capital_loss_level

```ts
limited_capital_loss_level: string
```

EMT 03030: Threshold level of the limited capital loss.
