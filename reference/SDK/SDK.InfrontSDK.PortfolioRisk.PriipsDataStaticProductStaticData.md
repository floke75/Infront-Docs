---
title: "PriipsDataStaticProductStaticData"
qualified_name: "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductStaticData"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.PortfolioRisk"
group: "PortfolioRisk"
nav_path: "SDK > InfrontSDK > Other > PortfolioRisk > PriipsDataStaticProductStaticData"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductStaticData.html"
defines: ["PriipsDataStaticProductStaticData"]
member_count: 13
members: ["basicData", "basicProductDates", "baskets", "creditLinks", "expressData", "minPayoffs", "productComponents", "productEvents", "productIdentifier", "productPayments", "productStatus", "productTypeId", "productTypeName"]
member_groups:
  "Properties": ["basicData", "basicProductDates", "baskets", "creditLinks", "expressData", "minPayoffs", "productComponents", "productEvents", "productIdentifier", "productPayments", "productStatus", "productTypeId", "productTypeName"]
reference_count: 11
references: ["SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicData", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasicProductDates", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticBasket", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticCreditLinks", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticExpressData", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticMinPayoff", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductComponents", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductEvents", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductIdentifier", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductPayment", "SDK.InfrontSDK.PortfolioRisk.PriipsDataStaticProductStaticDataProductStatus"]
---

# PriipsDataStaticProductStaticData

ProductStaticData contains all the static data of a product

#### Remarks

API Schema ID: dev.infrontfinance.priips.data.static.ProductStaticData

```ts
interface PriipsDataStaticProductStaticData {
    basicData: PriipsDataStaticBasicData;
    basicProductDates: PriipsDataStaticBasicProductDates;
    baskets: readonly PriipsDataStaticBasket[];
    creditLinks: PriipsDataStaticCreditLinks;
    expressData: PriipsDataStaticExpressData;
    minPayoffs: readonly PriipsDataStaticMinPayoff[];
    productComponents: PriipsDataStaticProductComponents;
    productEvents: PriipsDataStaticProductEvents;
    productIdentifier: PriipsDataStaticProductIdentifier;
    productPayments: readonly PriipsDataStaticProductPayment[];
    productStatus: PriipsDataStaticProductStaticDataProductStatus;
    productTypeId: number;
    productTypeName: string;
}
```

### Properties

#### `Readonly` basicData

```ts
basicData: PriipsDataStaticBasicData
```

General static data for all product types

#### `Readonly` basicProductDates

```ts
basicProductDates: PriipsDataStaticBasicProductDates
```

Date information

#### `Readonly` baskets

```ts
baskets: readonly PriipsDataStaticBasket[]
```

Underlying information

#### `Readonly` creditLinks

```ts
creditLinks: PriipsDataStaticCreditLinks
```

List of credit links for the product

#### `Readonly` expressData

```ts
expressData: PriipsDataStaticExpressData
```

Deprecated: do not use.

#### `Readonly` minPayoffs

```ts
minPayoffs: readonly PriipsDataStaticMinPayoff[]
```

Minimal payoff of the product

#### `Readonly` productComponents

```ts
productComponents: PriipsDataStaticProductComponents
```

Product components

#### `Readonly` productEvents

```ts
productEvents: PriipsDataStaticProductEvents
```

Events for underlying handling

#### `Readonly` productIdentifier

```ts
productIdentifier: PriipsDataStaticProductIdentifier
```

Product name and IDs

#### `Readonly` productPayments

```ts
productPayments: readonly PriipsDataStaticProductPayment[]
```

Product payments of a bond, such as coupons or autocalls

#### `Readonly` productStatus

```ts
productStatus: PriipsDataStaticProductStaticDataProductStatus
```

Product status

##### Remarks

Format: enum

#### `Readonly` productTypeId

```ts
productTypeId: number
```

INTERNAL: Product type ID, is usually filled with the IQ product type ID corresponds to the IDs the Pricing Engine sets.
PRIIPs calculation engine will not use this ID to determine the product payments, but this field is used for valuation,
e.g. by the process control service to determine the intermediate RHPs for open-end products

##### Remarks

Format: int32

#### `Readonly` productTypeName

```ts
productTypeName: string
```

Name of the product
