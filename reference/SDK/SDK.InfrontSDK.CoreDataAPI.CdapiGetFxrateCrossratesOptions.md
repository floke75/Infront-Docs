---
title: "CdapiGetFxrateCrossratesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetFxrateCrossratesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetFxrateCrossratesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetFxrateCrossratesOptions.html"
defines: ["CdapiGetFxrateCrossratesOptions"]
member_count: 6
members: ["date?", "from_currency_code?", "onData?", "onError?", "onFinally?", "to_currency_code?"]
member_groups:
  "Properties": ["date?", "from_currency_code?", "onData?", "onError?", "onFinally?", "to_currency_code?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiFxrateCrossrateData"]
reference_count: 2
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiFxrateCrossrateData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetFxrateCrossrates"]
---

# CdapiGetFxrateCrossratesOptions

Request options for [cdapiGetFxrateCrossrates](./SDK.InfrontSDK.CoreDataAPI.cdapiGetFxrateCrossrates.md)

```ts
interface CdapiGetFxrateCrossratesOptions {
    date?: string;
    from_currency_code?: string;
    onData?: CoreDataRequestSuccessCallback<CdapiFxrateCrossrateData>;
    onError?: CoreDataRequestErrorCallback<CdapiFxrateCrossrateData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiFxrateCrossrateData>;
    to_currency_code?: string | readonly string[];
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiFxrateCrossrateData>

  - CdapiGetFxrateCrossratesOptions

### Properties

#### `Optional` ` Readonly`date

```ts
date?: string
```

date: if "today" -> intraday snapquote, if historical -> latest within a timespan of 7 days (nearest)

#### `Optional` ` Readonly`from_currency_code

```ts
from_currency_code?: string
```

from currency

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiFxrateCrossrateData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiFxrateCrossrateData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiFxrateCrossrateData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally

#### `Optional` ` Readonly`to_currency_code

```ts
to_currency_code?: string | readonly string[]
```

to currency
