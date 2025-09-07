import React from "react";
import { HiShieldCheck, HiCheck } from "react-icons/hi";

const VerificationHeader = React.memo(({ isVerified }) => (
  <div className="text-center mb-8">
    <div className="flex items-center justify-center mb-4">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-2 mr-3">
        <HiShieldCheck className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        Employee Verification
      </h2>
    </div>
    {isVerified && (
      <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
        <HiCheck className="w-4 h-4 mr-2" />
        Verified Employee
      </div>
    )}
  </div>
));

VerificationHeader.displayName = "VerificationHeader";

export default VerificationHeader;
