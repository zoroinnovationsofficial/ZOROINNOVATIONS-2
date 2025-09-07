import React, { useState } from "react";
import "./EmployeeDetails.css";

import VerificationHeader from "./employee/VerificationHeader.jsx";
import ProfileImage from "./employee/ProfileImage.jsx";
import EmployeeIDSection from "./employee/EmployeeIDSection.jsx";
import EmployeeField from "./employee/EmployeeField.jsx";

import {
  HiUserGroup,
  HiBriefcase,
  HiCalendar,
  HiDocumentText,
  HiCheckCircle,
} from "react-icons/hi";

const formatDate = (d) => (d ? new Date(d).toLocaleDateString() : "-");

const EmployeeDetails = ({ employee, isVerified }) => {
  // ✅ Hooks must always be called, even if employee is null
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!employee) return null;

  return (
    <div className={`employee-card ${isVerified ? "verified" : "unverified"}`}>
      <VerificationHeader isVerified={isVerified} />

      <div className="employee-content">
        <div className="employee-left">
          <h2>{employee.fullName || "Employee"}</h2>
          <p>Status: {employee.status}</p>

          <div className="employee-panel">
            <EmployeeIDSection employeeId={employee.employeeId} />

            <div className="employee-fields">
              <EmployeeField
                icon={HiUserGroup}
                label="Department"
                value={employee.department || "-"}
              />
              <EmployeeField
                icon={HiBriefcase}
                label="Role"
                value={employee.role || "-"}
              />
              <EmployeeField
                icon={HiCalendar}
                label="Start Date"
                value={formatDate(employee.startDate)}
              />
              {employee.certificateIssueDate && (
                <EmployeeField
                  icon={HiDocumentText}
                  label="Certificate Issued"
                  value={formatDate(employee.certificateIssueDate)}
                />
              )}
              <EmployeeField
                icon={HiCheckCircle}
                label="Verification"
                value={isVerified ? "Verified" : "Not Verified"}
                subtitle={
                  isVerified
                    ? "Employee record is active"
                    : "Employee record is not active"
                }
              />
            </div>
          </div>
        </div>

        <div className="employee-right">
          <div className="employee-photo-panel">
            <ProfileImage
              employeeData={{
                profileImage: employee.profileImage,
                fullName: employee.fullName,
              }}
              imageLoaded={imageLoaded}
              setImageLoaded={setImageLoaded}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
