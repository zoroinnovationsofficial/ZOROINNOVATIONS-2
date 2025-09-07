import React from "react";

const EmployeeField = React.memo(({ icon: Icon, label, value, subtitle }) => (
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-gray-600" />
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  </div>
));

EmployeeField.displayName = "EmployeeField";

export default EmployeeField;
