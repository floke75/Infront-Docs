---
title: "StaticImplements<TClass, UStaticInterface>"
qualified_name: "WTK.StaticImplements"
kind: type-alias
page_type: api-reference
product: "Infront Web Toolkit"
version: "4.3.1"
module: "WTK"
group: "Other"
nav_path: "WTK > Other > StaticImplements"
source_url: "https://docs.infrontfinance.com/docs/types/WTK.StaticImplements.html"
defines: ["StaticImplements"]
reference_count: 1
references: ["WTK.Static"]
---

# StaticImplements<TClass, UStaticInterface>

```ts
StaticImplements: InstanceType<UStaticInterface>
```

Allows to implement static properties from an interface in a class.

Example usage:

interface MandatoryStaticPropInterface {
MandatoryStaticProp1: any;
MandatoryStaticProp2: any;
}

class ClassWithMandatoryStaticProps implements StaticImplements<MandatoryStaticPropInterface, typeof ClassWithMandatoryStaticProps> {
static MandatoryStaticProp1: any; // ERROR, doesn't compile without
static MandatoryStaticProp2: any; // ERROR, doesn't compile without
}

#### Type Parameters

- TClass
- UStaticInterface extends Static<[TClass](#tclass)>
