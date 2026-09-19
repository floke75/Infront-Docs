---
title: "Browser support"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "2.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "BrowserSupport"
widget_id: "About"
source_url: "https://doc.infrontfinance.com/v2/BrowserSupport#About"
---

# Browser support

Heads up! These docs are for v2. Check out the latest version of Infront Web Toolkit!

Infront Web Toolkit and the Cell framework is supported by all modern browsers. The Cell framework uses CSS3, and gracefully falls back to CSS2. Browsers that do not support web sockets will not display streaming data, and will automatically fall back to using http and snapshot data. This is largely limited to Internet Explorer 9 and lower.

Internet Explorer version 8 and lower has functionality issues with the Cell framework. In August 2015, this group make up less than [1% of website visits world wide](http://www.w3schools.com/browsers/browsers_explorer.asp).

## Web toolkit support

| IE | Edge | Firefox | Chrome | Safari |
|---|---|---|---|---|
| 9 |  |  |  |  |
| 10* |  |  |  |  |
| 11+ | 12+ | 21+ | 23+ | 7+ |

* IE9 does not support streaming and will fall back to http (snapshot data).

## Cell framework support

| IE | Edge | Firefox | Chrome | Safari |
|---|---|---|---|---|
| 9* |  |  |  |  |
| 10+ | 12+ | 21+ | 23+ | 7+ |

* Cell framework is made to be easy to modify in any way, directly or by a custom CSS file.
