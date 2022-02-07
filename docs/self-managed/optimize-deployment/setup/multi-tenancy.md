---
id: multi-tenancy
title: "Multi-Tenancy"
description: "Learn about the supported multi-tenancy scenarios."
---

<span class="badge badge--platform">Platform only</span>

Learn how to set up Multi-Tenancy with Optimize.

## Possible Multi-Tenancy scenarios

As described in the [Camunda Platform documentation](https://docs.camunda.org/manual/latest/user-guide/process-engine/multi-tenancy/), there are two possible Multi-Tenant scenarios which are also supported by Optimize:

- [Possible Multi-Tenancy scenarios](#possible-multi-tenancy-scenarios)
  - [Single Process Engine With Tenant-Identifiers](#single-process-engine-with-tenant-identifiers)
  - [One Process Engine Per Tenant](#one-process-engine-per-tenant)

### Single Process Engine With Tenant-Identifiers

Tenant-Identifiers available in the Camunda Platform Engine are automatically imported into Optimize and tenant-based access authorization is enforced based on the configured `Tenant Authorizations` within the Camunda Platform. This means there is no additional setup required for Optimize in order to support this Multi-Tenancy scenario.
Users granted tenant access via the Camunda Platform will be able to create and see reports for that particular tenant in Optimize. In the following screenshot the user `demo` is granted access to data of the tenant with the id `firstTenant` and will be able to select that tenant in the report builder. Other users, without the particular firstTenant authorization, will not be able to select that tenant in the report builder nor be able to see results of reports that are based on that tenant.

![Tenant Authorization](img/admin-tenant-authorization.png)

### One Process Engine Per Tenant

In the case of a Multi-Engine scenario where tenant specific data is isolated by deploying to dedicated engines there are no Tenant-Identifiers present in the particular engines themselves. In order for a single Optimize instance that is configured to import from each of those engines to support this scenario it is required to configure a `defaultTenant` for each of those engines.


The effect of configuring a `defaultTenant` per engine is that all data records imported from the particular engine where no engine-side Tenant-Identifier is present this `defaultTenant` will be added automatically. Optimize users will be authorized to those default tenants based on whether they are authorized to access the particular engine the data originates from. So in this scenario it is not necessary to configure any `Tenant Authorizations` in the Camunda Platform itself.

The following `environment-config.yaml` configuration snippet illustrates the configuration of this `defaultTenant` on two different engines.
```
...
engines:
  "engineTenant1":
    name: engineTenant1
    defaultTenant:
      # the id used for this default tenant on persisted entities
      id: tenant1
      # the name used for this tenant when displayed in the UI
      name: First Tenant
  ...
  "engineTenant2":
    name: engineTenant2
    defaultTenant:
      # the id used for this default tenant on persisted entities
      id: tenant2
      # the name used for this tenant when displayed in the UI
      name: Second Tenant
...
```
Optimize users who have an `Optimize Application Authorization` on both engines will be able to distinguish between data of both engines by selecting the corresponding tenant in the report builder.

:::note Heads up!
Once a `defaultTenant.id` is configured and data imported, you cannot change it anymore without doing a [full reimport](./../migration-update/instructions.md/#force-reimport-of-engine-data-in-optimize) as any changes to the configuration cannot be applied to already imported data records.
:::