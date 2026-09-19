---
title: "InfrontUI"
kind: legacy-widget
page_type: legacy-reference
product: "Infront Web Toolkit"
library_version: "3.x"
status: "legacy — superseded by the 4.x docs in ../../reference; Infront's own banner says this site is no longer updated"
legacy_page: "CoreObjects"
widget_id: "InfrontUI"
option_count: 10
options: ["options", "language", "dictionary", "user_id", "password", "session_token", "session_urls", "enableLoginDialog", "init", "registerEventObserver"]
source_url: "https://doc.infrontfinance.com/v3/CoreObjects#InfrontUI"
---

# InfrontUI

```javascript
var infrontUI = new Infront.UI(options);
```

### `options`

- **Type:** `Object`

A map of configuration-options.

### Configuration options

#### Language-options

### `language`

- **Type:** `string`

The ISO language-code for the language you wish to use. This language needs to be one of the default languages ("en" or "no") or installed previously installed in the library. If you set this, you should not set dictionary.

### `dictionary`

- **Type:** `Object`

A language-dictionary to use as the primary source of language-dependent strings. If you specify this you should not specify language.

#### Login-options

### `user_id`

- **Type:** `string`

The infront username to login with. If you specify this you need to specify password as well.

### `password`

- **Type:** `string`

The infront password to login with. If you specify this you need to specify user_id as well.

### `session_token`

- **Type:** `string`

A session-token for an already established session. Use this if you login somewhere else (for instance server-side). If you specify this you need to specify session_urls as well, but **not** user_id or password.

### `session_urls`

- **Type:** `string[]`

Url[s] to the server you logged inn. Use this together with session_token.

### `enableLoginDialog`

- **Type:** `boolean`
- **default:** false

If true, the library will prompt the user for an Infront username and password if other login-methods fails.

### Methods

### `init`

```javascript
    void infrontUI.init();
```

Initializes the library. This starts the login-process.

### `registerEventObserver`

```javascript
    void infrontUI.registerEventObserver(eventName, callback);
```

Registers an event-callback with the library. Possible values for eventName are:

- "onReady": Called when the library is logged in.
- "onLoginFailed": Called if login Fails.
- "onDisconnect": Called if the library is disconnected from the server for any reason.

### Example

```html
<script type="text/javascript">
    //Logs in with username and password. Specifies english language.
    var uiOpts = new Infront.InfrontUIOptions();
    uiOpts.language = "en";
    uiOpts.user_id = "fakeUserName";
    uiOpts.password = "fakePassword";
    var infrontUI = new Infront.UI(uiOpts);
    infrontUI.registerEventObserver("onReady", infront_ready);
    infrontUI.init();
    function infront_ready(event) {
        //Instantiate widgets here.
    }
</script>
```
