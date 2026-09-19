---
title: "FastArrayBinding"
qualified_name: "Utils.InfrontUtil.FastArrayBinding"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "Utils"
namespace: "Utils.InfrontUtil"
group: "InfrontUtil"
nav_path: "Utils > InfrontUtil > FastArrayBinding"
source_url: "https://docs.infrontfinance.com/docs/classes/Utils.InfrontUtil.FastArrayBinding.html"
defines: ["FastArrayBinding"]
related_types: ["Utils.InfrontUtil.IArrayBinding"]
reference_count: 1
references: ["Utils.InfrontUtil.IArrayBinding"]
---

# FastArrayBinding

Optimized ArrayBinding that only displays visible rows. This creates a very light-weight dom.
Requirements:

- Must use supported CSS (Particularily, boundEl must have overflow:hidden and be handling scrolling)
- All rows must have constant height, height must be provided in constructor
- topExpandingEl and bottomExpandingEl must be children of boundEl

#### Implements

- [IArrayBinding](./Utils.InfrontUtil.IArrayBinding.md)
