import {
  onPostAuthenticationEvent,
  WorkflowSettings,
  WorkflowTrigger,
  createKindeAPI,
} from "@kinde/infrastructure";

export const workflowSettings: WorkflowSettings = {
  id: "trialStartWorkflow",
  name: "Stamp trial start date",
  failurePolicy: { action: "continue" },
  bindings: {
    "kinde.fetch": {},
  },
  trigger: WorkflowTrigger.PostAuthentication,
};

export default async function Workflow(event: onPostAuthenticationEvent) {
  if (event.context.isExistingUser) {
    return;
  }

  const userId = event.context.user.id;
  const trialStart = Math.floor(Date.now() / 1000).toString();

  const kindeAPI = await createKindeAPI(event);

  await kindeAPI.patch({
    endpoint: `user`,
    params: { id: userId },
    requestBody: {
      properties: {
        trial_start: trialStart,
      },
    },
  });
}
