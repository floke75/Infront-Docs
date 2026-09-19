---
title: "Language support"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "Languages"
widget_id: "About"
option_count: 1
options: ["language"]
source_url: "https://doc.infrontfinance.com/v3/Languages#About"
---

# Language support

The Infront web toolkit can easily be translated to new languages. We deliver the the toolkit with translations for the following languages:

- English (default)
- Norwegian
- Swedish
- Danish
- Finnish

## Implementation Basics

### 1. Add your required files

English is the default language for the web toolkit. However, any language listed above can be set as the default language with one of the supported language files. (Note: A custom language file can be created using the translation tool)

```html
<script type="text/javascript" src="//wtk.infrontservices.com/languages/no.js"></script>  // Norwegian 
<script type="text/javascript" src="//wtk.infrontservices.com/languages/da.js"></script> // Danish 
<script type="text/javascript" src="//wtk.infrontservices.com/languages/sv.js"></script> // Swedish 
<script type="text/javascript" src="//wtk.infrontservices.com/languages/fi.js"></script> // Finnish 
```

### 2. Adjusting UI settings

To set the default language, you must instantiate a new object of InfrontUIOptions() and specify language.

### `language`

- **Type:** `string`

The ISO language-code for the language you wish to use. This language needs to be one of the default languages ("en" or "no") or installed previously installed in the library. If you set this, you should not set dictionary.

```javascript
var uiOpts = new Infront.InfrontUIOptions(); 
uiOpts.language = "no";
```

The object and the specified configuration is passed into the UI.

```javascript
var infrontUI = new Infront.UI(uiOpts); 
```

### Example

```html
<script>
var uiOpts = new Infront.InfrontUIOptions();
uiOpts.language = "no";

/* ... other configuration options ... */

var infrontUI = new Infront.UI(uiOpts);
infrontUI.registerEventObserver("onReady", infrontReady);
infrontUI.init();

function infrontReady() {
    /* instantiate widgets here.... */
}
</script>
```
