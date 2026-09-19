---
title: "InfrontUIOptions"
qualified_name: "WTK.InfrontUIOptions"
kind: class
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Core Objects"
nav_path: "WTK > Core Objects > InfrontUIOptions"
source_url: "https://docs.infrontfinance.com/docs/classes/WTK.InfrontUIOptions.html"
defines: ["InfrontUIOptions"]
member_count: 21
members: ["dictionary", "enableAlertNotification", "enableHighlightUpDownChanges", "enableLoginDialog", "enableMobileOAuth", "fallbackLanguage", "language", "newDictionary", "oAuthCallbackURL", "oAuthMobileCallbackURL", "useBrowserLanguage", "useLocaleFallback", "password", "session_token", "session_urls", "user_id", "allowHTMLInjection?", "environment", "highcharts?", "imageRootPath?", "realm"]
member_groups:
  "InfrontUI": ["dictionary", "enableAlertNotification", "enableHighlightUpDownChanges", "enableLoginDialog", "enableMobileOAuth", "fallbackLanguage", "language", "newDictionary", "oAuthCallbackURL", "oAuthMobileCallbackURL", "useBrowserLanguage", "useLocaleFallback"]
  "Login": ["password", "session_token", "session_urls", "user_id"]
  "Other": ["allowHTMLInjection?", "environment", "highcharts?", "imageRootPath?", "realm"]
reference_count: 2
references: ["WTK.Dictionary", "WTK.UI"]
---

# InfrontUIOptions

InfrontUIOptions class extending Infront.InfrontOptions class.

Set options for the UI.

#### See

UI | Infront.InfrontOptions | Infront.LoginOptions

#### Hierarchy

- InfrontOptions

  - InfrontUIOptions

### InfrontUI

#### dictionary

```ts
dictionary: object = null
```

A language-dictionary to use as the primary source of language-dependent strings.

##### Remarks

If you specify this you should not specify language.

##### Default Value

`null`

#### enableAlertNotification

```ts
enableAlertNotification: boolean = false
```

Enable alert notification.

##### Default Value

`false`

#### enableHighlightUpDownChanges

```ts
enableHighlightUpDownChanges: boolean = false
```

Enable highlighting of up/down changes.

##### Default Value

`false`

#### enableLoginDialog

```ts
enableLoginDialog: boolean = false
```

Whether or not login-dialog should be enabled.

##### Default Value

`false`

#### enableMobileOAuth

```ts
enableMobileOAuth: boolean = false
```

Enable mobile OAuth login.

##### Default Value

`false`

#### fallbackLanguage

```ts
fallbackLanguage: string = 'en'
```

The ISO language-code of the fallback in case translations for the language don't exist.

##### Default Value

`'en'`

#### language

```ts
language: string = 'en'
```

The ISO language-code for the language you wish to use.

This language needs to be one of the default languages ("en" or "no") or installed previously installed in the library

##### Remarks

If you set this, you should not set dictionary.

##### Default Value

`'en'`

Overrides Infront.InfrontOptions.language

#### newDictionary

```ts
newDictionary: Dictionary = null
```

A language-dictionary to use as the primary source of language-dependent strings.

##### Remarks

only applies to Svelte widgets

##### Default Value

`null`

#### oAuthCallbackURL

```ts
oAuthCallbackURL: string = 'https://wtk.infrontservices.com/containers/auth/callback/index.html'
```

Whether or not login-dialog should be enabled.

##### Default Value

`'https://wtk.infrontservices.com/containers/auth/callback/index.html'`

#### oAuthMobileCallbackURL

```ts
oAuthMobileCallbackURL: string = 'https://wtk.infrontservices.com/containers/auth/mobile-callback/index.html'
```

Whether or not login-dialog should be enabled.

##### Default Value

`'https://wtk.infrontservices.com/containers/auth/mobile-callback/index.html'`

#### useBrowserLanguage

```ts
useBrowserLanguage: boolean = false
```

A flag to disregard the language and instead use the browsers language.

##### Remarks

Will enforce window.navigator.language as locale

##### Default Value

`false`

#### useLocaleFallback

```ts
useLocaleFallback: boolean = true
```

If the language is a locale e. g. 'en-US', 'en-GB' instead of using the fallbackLanguage,
it will use the locale base 'en'.

##### Default Value

`true`

### Login

#### password

```ts
password: string
```

The infront password to login with.

If you specify this you need to specify [user_id](#user_id) as well.

##### Default Value

`undefined`

Inherited from Infront.InfrontOptions.password

#### session_token

```ts
session_token: string
```

A session-token for an already established session.

Use this if you login somewhere else (for instance server-side).

If you specify this you need to specify [session_urls](#session_urls) as well, but not [user_id](#user_id) or [password](#password).

##### Default Value

`undefined`

Inherited from Infront.InfrontOptions.session_token

#### session_urls

```ts
session_urls: string[]
```

A session-token for an already established session.

##### Default Value

`undefined`

Inherited from Infront.InfrontOptions.session_urls

#### user_id

```ts
user_id: string
```

The infront username to login with.

If you specify this you need to specify [password](#password) as well.

##### Default Value

`undefined`

Inherited from Infront.InfrontOptions.user_id

### Other

#### `Optional` allowHTMLInjection

```ts
allowHTMLInjection?: boolean | "allowed" | "disallowed" | "warn" = defaultAllowHTMLInjection
```

Indicates whether innerHTML injection for raw strings should be disabled.

#### environment

```ts
environment: string
```

Set the default work environment. This must be used in combination with [user_id](#user_id) and [password](#password) to set the default work environment.

##### Remarks

Using this option when login using token will have no effect.

Inherited from Infront.InfrontOptions.environment

#### `Optional` highcharts

```ts
highcharts?: { navigation: { iconsURL: string } }
```

Global override of Highcharts options

navigation.iconsURL - the location of the highcharts stock-icons can be changed with [iconsURL](https://api.highcharts.com/highcharts/navigation.iconsURL)

#### `Optional` imageRootPath

```ts
imageRootPath?: string
```

Override to indicate where WTK images (like flags) should be loaded from

#### realm

```ts
realm: string
```

Default realm. This must be used in combination with [user_id](#user_id) and [password](#password) to set the default realm.

##### Remarks

Using this option when login using token will have no effect.

Inherited from Infront.InfrontOptions.realm
