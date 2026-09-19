---
title: "CdapiGetFundCustomFieldValuesOptions"
qualified_name: "SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCustomFieldValuesOptions"
kind: interface
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "SDK"
namespace: "SDK.InfrontSDK.CoreDataAPI"
group: "CoreDataAPI"
nav_path: "SDK > InfrontSDK > Other > CoreDataAPI > CdapiGetFundCustomFieldValuesOptions"
source_url: "https://docs.infrontfinance.com/docs/interfaces/SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCustomFieldValuesOptions.html"
defines: ["CdapiGetFundCustomFieldValuesOptions"]
member_count: 6
members: ["code?", "field_name?", "fields?", "onData?", "onError?", "onFinally?"]
member_groups:
  "Properties": ["code?", "field_name?", "fields?", "onData?", "onError?", "onFinally?"]
related_types: ["SDK.InfrontSDK.CoreDataAPI.CdapiFundCustomFieldValuesData"]
reference_count: 3
references: ["SDK.InfrontSDK.CoreDataAPI.CdapiGetFundCustomFieldValuesField", "SDK.InfrontSDK.CoreDataAPI.CdapiFundCustomFieldValuesData", "SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCustomFieldValues"]
---

# CdapiGetFundCustomFieldValuesOptions

Request options for [cdapiGetFundCustomFieldValues](./SDK.InfrontSDK.CoreDataAPI.cdapiGetFundCustomFieldValues.md)

```ts
interface CdapiGetFundCustomFieldValuesOptions {
    code?: string | readonly string[];
    field_name?: string;
    fields?: string | readonly CdapiGetFundCustomFieldValuesField[];
    onData?: CoreDataRequestSuccessCallback<CdapiFundCustomFieldValuesData>;
    onError?: CoreDataRequestErrorCallback<CdapiFundCustomFieldValuesData>;
    onFinally?: CoreDataRequestFinallyCallback<CdapiFundCustomFieldValuesData>;
}
```

#### Hierarchy

- CdapiCommonRequestOptions<CdapiFundCustomFieldValuesData>

  - CdapiGetFundCustomFieldValuesOptions

### Properties

#### `Optional` ` Readonly`code

```ts
code?: string | readonly string[]
```

the code of the field value

#### `Optional` ` Readonly`field_name

```ts
field_name?: string
```

the name of the field from which a list of possible values should be returned

#### `Optional` ` Readonly`fields

```ts
fields?: string | readonly CdapiGetFundCustomFieldValuesField[]
```

the field list to be returned

#### `Optional` onData

```ts
onData?: CoreDataRequestSuccessCallback<CdapiFundCustomFieldValuesData>
```

A callback called when a data request has completed succesfully.

Inherited from Infront.CdapiCommonRequestOptions.onData

#### `Optional` onError

```ts
onError?: CoreDataRequestErrorCallback<CdapiFundCustomFieldValuesData>
```

A callback called when an error occurred trying to make the request.

Inherited from Infront.CdapiCommonRequestOptions.onError

#### `Optional` onFinally

```ts
onFinally?: CoreDataRequestFinallyCallback<CdapiFundCustomFieldValuesData>
```

A callback called when the request is finished, either because data was received,
error occurred, or the request was aborted/unsubscribed.

Inherited from Infront.CdapiCommonRequestOptions.onFinally
