import { useState } from "react";
import { useNavigate } from "react-router-dom";
import employeeData from "../../Data/employeeData";

export default function EmployeeVer() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState(employeeData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchId, setSearchId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const [editData, setEditData] = useState({});
  const [newData, setNewData] = useState({
    id: "",
    name: "",
    department: "",
    role: "",
    startDate: "",
    status: "",
    certificateDate: "",
  });

  const employeesPerPage = 10;
  const indexOfLast = currentPage * employeesPerPage;
  const indexOfFirst = indexOfLast - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(employees.length / employeesPerPage);

  // --- Verify ---
  const handleVerify = () => {
    const found = employees.find((emp) => emp.id === searchId);
    setSelectedEmployee(found || null);
    if (!found) alert("No employee found with this ID");
  };

  // --- Edit ---
  function handleEdit(emp) {
    setEditData(emp);
    setEditModalOpen(true);
  }
  function handleEditChange(e) {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  }
  function handleEditSubmit() {
    const updatedEmployees = employees.map((emp) =>
      emp.id === editData.id ? { ...editData } : emp
    );
    setEmployees(updatedEmployees);
    setEditModalOpen(false);
  }

  // --- Delete ---
  function handleDelete(id) {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
  }

  // --- Add New Employee ---
  function handleNewChange(e) {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  }
  function handleNewSubmit() {
    if (!newData.id || !newData.name || !newData.department) {
      alert("Please fill required fields");
      return;
    }
    setEmployees([...employees, { ...newData }]);
    setNewData({
      id: "",
      name: "",
      department: "",
      role: "",
      startDate: "",
      status: "",
      certificateDate: "",
    });
    setAddModalOpen(false);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0047ab] via-[#5d6bd9] to-[#ff7e5f]">
      <div className="flex-1 p-6">
        <div className="bg-white rounded-xl shadow-lg p-3 w-full max-w-6xl mx-auto text-sm">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold p-1">Employee Verification Records</h2>
            <button
              onClick={() => setAddModalOpen(true)}
              className="bg-[#ff6531] text-white px-4 py-1 rounded text-sm font-medium"
            >
              + Add New
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border-2 rounded-xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f5f5f5]">
                <tr>
                  <th className="p-2">Employee ID</th>
                  <th className="p-1">Full Name</th>
                  <th className="p-1">Department</th>
                  <th className="p-1">Role</th>
                  <th className="p-1">Start Date</th>
                  <th className="p-1">Status</th>
                  <th className="p-1">Certificate Issue Date</th>
                  <th className="p-1">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentEmployees.map((emp) => (
                  <tr key={emp.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">{emp.id}</td>
                    <td className="p-1">{emp.name}</td>
                    <td className="p-1">{emp.department}</td>
                    <td className="p-1">{emp.role}</td>
                    <td className="p-1">{emp.startDate}</td>
                    <td className="p-1">
                      <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                        {emp.status}
                      </span>
                    </td>
                    <td className="p-1">{emp.certificateDate}</td>
                    <td className="p-1 space-x-2 text-xs">
                      <button
                        onClick={() => handleEdit(emp)}
                        className="text-blue-600 cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(emp.id)}
                        className="text-red-500 cursor-pointer"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          setSelectedEmployee(emp);
                          setViewModalOpen(true);
                        }}
                        className="text-green-500 cursor-pointer"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4 text-xs gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`border px-2 py-1 rounded ${
                  currentPage === i + 1 ? "bg-[#ff6531] text-white" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Search Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-start">
            <div className="w-full">
              <label className="text-sm font-semibold mb-2 block">Employee ID</label>
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Enter Employee ID"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                />
                <button
                  onClick={handleVerify}
                  className="bg-[#ff6531] text-white font-medium px-5 py-2 rounded text-sm"
                >
                  Verify
                </button>
              </div>

              {selectedEmployee && (
                <div className="mb-4 border p-3 rounded-lg bg-gray-50">
                  <p className="text-sm font-semibold mb-2">Employee Details</p>
                  <p className="text-xs text-gray-500 mb-3">
                    Please find the details of the employee below.
                  </p>
                  <p><strong>Name:</strong> {selectedEmployee.name}</p>
                  <p><strong>Role:</strong> {selectedEmployee.role}</p>
                  <p><strong>Department:</strong> {selectedEmployee.department}</p>
                  <p><strong>Status:</strong> {selectedEmployee.status}</p>
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <img
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=employee"
                alt="avatar"
                className="w-[230px] rounded-xl border border-gray-200"
              />
            </div>
          </div>
        </div>

        {/* View Modal */}
        {viewModalOpen && selectedEmployee && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md text-sm">
              <h3 className="text-lg font-semibold mb-4">Employee Details</h3>
              {Object.entries(selectedEmployee).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {value}
                </p>
              ))}
              <div className="mt-4 text-right">
                <button
                  onClick={() => setViewModalOpen(false)}
                  className="bg-[#ff6531] text-white px-4 py-2 rounded text-sm cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {editModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md text-sm">
              <h3 className="text-lg font-semibold mb-4">Edit Employee</h3>
              {Object.keys(editData).map(
                (key) =>
                  key !== "id" && (
                    <div className="mb-3" key={key}>
                      <label className="block text-xs font-medium mb-1 capitalize">
                        {key}
                      </label>
                      <input
                        type="text"
                        name={key}
                        value={editData[key]}
                        onChange={handleEditChange}
                        className="w-full border px-3 py-1 rounded"
                      />
                    </div>
                  )
              )}
              <div className="mt-4 flex justify-between">
                <button
                  onClick={handleEditSubmit}
                  className="bg-[#ff6531] text-white px-4 py-2 rounded cursor-pointer"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditModalOpen(false)}
                  className="bg-gray-300 px-4 py-2 rounded cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Modal */}
        {addModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md text-sm">
              <h3 className="text-lg font-semibold mb-4">Add New Employee</h3>
              {Object.keys(newData).map((key) => (
                <div className="mb-3" key={key}>
                  <label className="block text-xs font-medium mb-1 capitalize">
                    {key}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={newData[key]}
                    onChange={handleNewChange}
                    className="w-full border px-3 py-1 rounded"
                  />
                </div>
              ))}
              <div className="mt-4 flex justify-between">
                <button
                  onClick={handleNewSubmit}
                  className="bg-[#ff6531] text-white px-4 py-2 rounded cursor-pointer"
                >
                  Add Employee
                </button>
                <button
                  onClick={() => setAddModalOpen(false)}
                  className="bg-gray-300 px-4 py-2 rounded cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
