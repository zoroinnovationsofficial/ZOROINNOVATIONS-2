import React from "react";

const EmployeeIDSection = React.memo(({ employeeId }) => (
  <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
    <div className="flex items-center">
      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
        <span className="text-white font-bold text-sm">ID</span>
      </div>
      <div>
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          Employee ID
        </p>
        <p className="text-lg font-bold text-blue-900">{employeeId || "-"}</p>
      </div>
    </div>
  </div>
));

EmployeeIDSection.displayName = "EmployeeIDSection";

export default EmployeeIDSection;
