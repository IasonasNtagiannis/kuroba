// Shared between the contact server action and the form.
export type ContactField = "name" | "email" | "company" | "projectType" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
  values?: Partial<Record<ContactField, string>>;
  // Changes on every submission so the client can remount the form with the returned values.
  submittedAt?: number;
};

// Mirrors the project shapes in the "How we work" tabs.
export const projectTypes = ["MVP", "Product build", "AI feature", "Scale-up", "Not sure yet"];
