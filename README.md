# ⚙️ Kinde Workflow base template

This repository contains a base template **TypeScript workflows** for [Kinde](https://kinde.com).

## 🧠 What Are Kinde Workflows?

Kinde Workflows let you run custom JavaScript/TypeScript logic **during the authentication process**, giving you full control over:

- User onboarding
- Role and permission assignment
- Profile enrichment
- Custom validation or access control
- Third-party service integration

All code is executed **server-side on Kinde**, meaning you don’t need to host or deploy anything yourself.

## What is included in this repo?

This is the simplest example of a Kinde workflow. It is triggered on the [user post authentication](https://docs.kinde.com/workflows/example-workflows/workflow-user-post-auth/) event and logs "Hello world" to the console.

## Get started

1. Clone this repo
2. Log into your Kinde account
3. [Connect this repo](https://docs.kinde.com/workflows/about-workflows/connect-repo-for-workflows/#connect-your-repo-and-branch) to Kinde
4. Log a user into your app
5. Check the runtime logs for the workflow

## Example workflow files

Use these files as a starting point for your workflows

- [Drip feed migration](https://github.com/kinde-starter-kits/workflow-examples/blob/main/existingPassword/dripFeedMigrationWorkflow.ts) - Shows how to check a password against an external database before creating the user in Kinde.
- [Sync passwords to another system](https://github.com/kinde-starter-kits/workflow-examples/blob/main/newPassword/securelySyncPasswordWorkflow.ts) - Use encryption keys to securely keep passwords in sync between systems.
- [Custom password validation](https://github.com/kinde-starter-kits/workflow-examples/blob/main/newPassword/customPasswordValidationWorkflow.ts) - Shows how to validate a password against your own rules.
- [Sync new user data to Hubspot](https://github.com/kinde-starter-kits/workflow-examples/blob/main/postUserAuthentication/syncNewUserToHubspotWorkflow.ts) - Send user data and UTM tags to Hubspot when a new user record is created in Kinde.
- [Set a grace period for MFA](https://github.com/kinde-starter-kits/workflow-examples/blob/main/preMFA/gracePeriodWorkflow.ts) - Don't ask for MFA for a set period of time after a user has logged in.
- [Add custom claims to access token](https://github.com/kinde-starter-kits/workflow-examples/blob/main/userTokens/customClaimsAccessTokenWorkflow.ts) - Call an external API to get data to add as custom claims to the user access token.
- [Map M2M applications to organizations](https://github.com/kinde-starter-kits/workflow-examples/blob/main/m2mToken/mapOrgToM2MApplicationWorkflow.ts) - Shows how to map M2M applications to organizations. Useful if using Kinde for B2B API key management
- [Deny plan change](https://github.com/kinde-starter-kits/workflow-examples/blob/main/planSelection/denyPlanChangeWorkflow.ts) - Prevent a user from changing plans. Useful if they aren't eligible to if in breach of limits
- [Deny plan cancellation](https://github.com/kinde-starter-kits/workflow-examples/blob/main/planCancellationRequest/denyPlanCancellation.ts) - Prevent a user from cancelling their plan. Useful if you need to do manual deprovisioning
