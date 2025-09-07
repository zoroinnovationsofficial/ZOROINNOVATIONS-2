import React, { useState } from "react";
import VerifySectionHeader from "../../components/user-section/verifyID/VerifySectionHeader.jsx";
import EmployeeDetails from "../../components/user-section/verifyID/EmployeeDetails.jsx";
import FAQs from "../../components/user-section/verifyID/FAQs.jsx";
import { verifyEmployee } from "../../api/verifyID.js";
import Shimmer from "../../components/user-section/verifyID/Shimmer.jsx";
import ErrorCard from "../../components/user-section/verifyID/ErrorCard.jsx";

const VerifyIDPage = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleVerify = async (employeeId) => {
    setIsLoading(true);
    setError(null);
    setEmployeeData(null);
    try {
      const data = await verifyEmployee(employeeId);
      setEmployeeData(data);
    } catch (err) {
      if (/not found/i.test(err.message)) {
        setError("Employee not found. Please check the ID and try again.");
      } else if (/not active/i.test(err.message)) {
        setError("This employee is not active.");
      } else if (/Valid Employee ID/i.test(err.message)) {
        setError("Please enter a valid Employee ID.");
      } else {
        setError("We couldn’t verify this ID right now. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <VerifySectionHeader onVerify={handleVerify} />
      {isLoading && <Shimmer />}
      {error && (
        <ErrorCard
          title="Employee not found"
          message={error}
          onRetry={() => setError(null)}
        />
      )}
      {employeeData && (
        <EmployeeDetails
          employee={employeeData}
          isVerified={employeeData.isVerified}
        />
      )}
      <FAQs />
    </>
  );
};

export default VerifyIDPage;
