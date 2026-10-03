"use server";

import { projectTypes, type ContactField, type ContactState } from "@/lib/contact";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

// Sends the enquiry with Resend's HTTP API (no SDK needed).
// Configure RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL; see .env.example.
async function sendEmail(values: Record<ContactField, string>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV === "development") {
      // Lets the form be exercised locally before email is set up.
      console.warn("[contact] Email is not configured; submission logged instead:", values);
      return true;
    }
    console.error("[contact] RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is missing");
    return false;
  }

  // Plain-text body only, so user input is never rendered as HTML.
  const text = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company: ${values.company || "-"}`,
    `Project type: ${values.projectType || "-"}`,
    "",
    values.message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: values.email,
      subject: `New project enquiry from ${values.name.replace(/[\r\n]+/g, " ")}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend responded with", res.status, await res.text());
  }
  return res.ok;
}

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (field(formData, "website", 200)) {
    return { status: "success", submittedAt: Date.now() };
  }

  const values = {
    name: field(formData, "name", 120),
    email: field(formData, "email", 200),
    company: field(formData, "company", 120),
    projectType: field(formData, "projectType", 40),
    message: field(formData, "message", 5000),
  };

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (!values.name) fieldErrors.name = "Please tell us your name.";
  if (!EMAIL_RE.test(values.email)) fieldErrors.email = "Please enter a valid email address.";
  if (values.projectType && !projectTypes.includes(values.projectType)) {
    fieldErrors.projectType = "Please pick one of the options.";
  }
  if (values.message.length < 20) {
    fieldErrors.message = "A couple of sentences about the project helps us reply properly.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors, values, submittedAt: Date.now() };
  }

  try {
    const sent = await sendEmail(values);
    if (!sent) throw new Error("send failed");
  } catch {
    return {
      status: "error",
      message: "Something went wrong on our side and your message was not sent. Please try again in a few minutes.",
      values,
      submittedAt: Date.now(),
    };
  }

  return { status: "success", values: { name: values.name }, submittedAt: Date.now() };
}
