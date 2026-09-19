---
title: "News reader widget"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "MarketDataWidgets"
widget_id: "NewsReaderWidget"
extends: "WidgetBaseOptions"
option_count: 2
options: ["cssURL", "newsItem"]
source_url: "https://doc.infrontfinance.com/v3/MarketDataWidgets#NewsReaderWidget"
---

# News reader widget

```javascript
InfrontWidget = Infront.newsReader(target);
```

Extends [WidgetBaseOptions](../CoreObjects/WidgetOptions.md)

This simple widget works as a slave to the NewsListWidget and is usually instantiated automatically by it. If you wish to, you can do it yourself
by instantiating and linking the widgets manually. This can be used to, for example, place the list and the reader side by side.

Requires a set height on the parent container.

### `cssURL`

- **Type:** `string`
- **Default:** `""`

Allows to use external stylesheet for the widget

### `newsItem`

- **Type:** `any`

Sets news item for the widget

### Example

```html
<script type="text/javascript">
    var opts = new Infront.NewsListWidgetOptions();
    opts.maxItems = 10;
    opts.useLightbox = false;
    var newsListWidget = infront.newsListWidget("newslist", opts);
    var newsReaderWidget = infront.newsReaderWidget("#newsreader");
    newsListWidget.link(newsReaderWidget);
</script>
...
<div id="newslist"></div>            
<div id="newsreader" style="height:400px;"></div>
        
```
