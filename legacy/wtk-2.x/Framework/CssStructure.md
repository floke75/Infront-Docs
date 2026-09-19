---
title: "CSS structure"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "Framework"
widget_id: "CssStructure"
source_url: "https://doc.infrontfinance.com/v2/Framework#CssStructure"
---

# CSS structure

The Infront Web Toolkit uses Infront's own CSS/[LESS](http://lesscss.org/) framework called Cell.

Cell features a 12 column grid layout, with optional responsive features. Cell is made to provide maximum flexibility with minimum CSS knowledge.

#### Naming convention

Cell uses BEM (Block, Element, Modifier) notation, and follows this pattern:

```javascript
.block {}
.block__element {}
.block--modifier {}
```

- `.block {}` represents the higher level of an abstraction or component.
- `.block__element {}` represents a descendent of .block that helps form `.block` as a whole.
- `.block--modifier {}` represents a different state or version of `.block`.

For the framework and general markup Cell also uses OOCSS (Object Oriented CSS). By identifying repeated design patterns across different components and abstract them out into reusable classes. These classes can be found in the framework.less file, e.g: `.cell-text-right` and `.cell-no-margin`.

#### Using LESS

[LESS](http://lesscss.org/) is a CSS pre-processor, with a number of powerful and practical extensions to CSS, including variables, mixins and functions.

Cell comes with LESS-files and well as the compiled CSS-files. Using LESS to edit and compile your CSS-files is optional, but recommended.
