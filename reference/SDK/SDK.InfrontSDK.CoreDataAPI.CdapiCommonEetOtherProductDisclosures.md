---
title: "CdapiCommonEetOtherProductDisclosures"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOtherProductDisclosures"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiCommonEetOtherProductDisclosures"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiCommonEetOtherProductDisclosures.html"
defines: ["CdapiCommonEetOtherProductDisclosures"]
member_count: 6
members: ["end_date_of_reporting_period_pdfp", "languages", "link_to_periodic_disclosure_for_financial_products_for_multi_option_products", "link_to_pre_contractual_disclosures_for_financial_products_for_multi_option_products", "link_to_sfdr_website_product_disclosures", "production_date_pre_contractual_disclosures_for_financial_products"]
member_groups:
  "Properties": ["end_date_of_reporting_period_pdfp", "languages", "link_to_periodic_disclosure_for_financial_products_for_multi_option_products", "link_to_pre_contractual_disclosures_for_financial_products_for_multi_option_products", "link_to_sfdr_website_product_disclosures", "production_date_pre_contractual_disclosures_for_financial_products"]
---

# CdapiCommonEetOtherProductDisclosures

ProductDisclosures holds links/dates for SFDR product disclosure documents.

#### Remarks

API Schema ID: dev.infrontfinance.cdapi.common.EetOther_ProductDisclosures

```ts
interface CdapiCommonEetOtherProductDisclosures {
    end_date_of_reporting_period_pdfp: string;
    languages: string;
    link_to_periodic_disclosure_for_financial_products_for_multi_option_products: string;
    link_to_pre_contractual_disclosures_for_financial_products_for_multi_option_products: string;
    link_to_sfdr_website_product_disclosures: string;
    production_date_pre_contractual_disclosures_for_financial_products: readonly string[];
}
```

### Properties

#### `Readonly` end_date_of_reporting_period_pdfp

```ts
end_date_of_reporting_period_pdfp: string
```

EET 20150: End date of the SFDR periodic reporting period.

#### `Readonly` languages

```ts
languages: string
```

EET 20110: Languages in which pre-contractual disclosures are available.

#### `Readonly` link_to_periodic_disclosure_for_financial_products_for_multi_option_products

```ts
link_to_periodic_disclosure_for_financial_products_for_multi_option_products: string
```

EET 20140: Link to periodic disclosure for financial products (PDFP) for MOPs.

#### `Readonly` link_to_pre_contractual_disclosures_for_financial_products_for_multi_option_products

```ts
link_to_pre_contractual_disclosures_for_financial_products_for_multi_option_products: string
```

EET 20120: Link to pre-contractual disclosures for financial products (PCDFP) for MOPs.

#### `Readonly` link_to_sfdr_website_product_disclosures

```ts
link_to_sfdr_website_product_disclosures: string
```

EET 20160: Link to SFDR website product disclosures.

#### `Readonly` production_date_pre_contractual_disclosures_for_financial_products

```ts
production_date_pre_contractual_disclosures_for_financial_products: readonly string[]
```

EET 20130: Production date(s) of the pre-contractual disclosures.
