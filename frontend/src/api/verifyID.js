import { buildApiUrl } from "./config";

function normalizeEmployee(employee) {
  if (!employee) return null;
  return {
    employeeId: employee.employeeId,
    fullName: employee.fullName,
    department: employee.department,
    role: employee.role,
    startDate: employee.startDate,
    status: employee.status,
    certificateIssueDate: employee.certificateIssueDate,
    isVerified: employee.status === "Active",
  };
}

export async function verifyEmployee(employeeId) {
  if (!employeeId || typeof employeeId !== "string") {
    throw new Error("Valid Employee ID is required");
  }

  // First attempt: verify directly with backend
  try {
    const res = await fetch(buildApiUrl("/api/v1/employee/verify-employee-id"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ employeeId }),
    });

    if (res.ok) {
      const data = await res.json();
      const normalized = normalizeEmployee(data.employee);
      if (!normalized) throw new Error("Invalid response from server");
      return normalized;
    }
  } catch (_) {
    // Silent fail - fallback below
  }

  // Fallback: get all employees and find manually
  try {
    const params = new URLSearchParams({ page: "1", limit: "1000" });
    const res = await fetch(
      buildApiUrl(`/api/v1/employee/getemployees?${params.toString()}`),
      { method: "GET" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch employees");
    }
    const data = await res.json();
    const employees = data?.employees || [];
    const found = employees.find((e) => e.employeeId === employeeId);
    if (!found) {
      throw new Error("Employee not found");
    }
    const normalized = normalizeEmployee(found);
    if (!normalized.isVerified) {
      throw new Error("Employee is not active");
    }
    return normalized;
  } catch (err) {
    throw new Error(err?.message || "Verification failed");
  }
}
