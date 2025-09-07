import { buildApiUrl } from "./config";

export async function sendContactMessage(formData) {
  if (!formData?.name || !formData?.email || !formData?.message) {
    throw new Error("All required fields must be filled");
  }

  const response = await fetch(buildApiUrl("/api/v1/contacts"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to submit message");
  }

  return await response.json();
}
