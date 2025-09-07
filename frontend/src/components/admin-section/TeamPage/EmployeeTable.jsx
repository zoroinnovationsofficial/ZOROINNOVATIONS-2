import React, { useState, useRef } from "react";
const placeholder = "/img1.png";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([
    {
      name: "Ethan Harper",
      role: "Lead Developer",
      bio: "Ethan leads the development team, ensuring high-quality code and timely project delivery.",
      id: "1234",
      profileImage: placeholder,
    },
    {
      name: "Olivia Bennett",
      role: "Product Manager",
      bio: "Olivia oversees product development, ensuring alignment with market needs and customer satisfaction.",
      id: "2345",
      profileImage: placeholder,
    },
    {
      name: "Noah Carter",
      role: "AI Specialist",
      bio: "Noah focuses on AI research and development, creating innovative solutions for complex problems.",
      id: "6789",
      profileImage: placeholder,
    },
    {
      name: "Ava Thompson",
      role: "UX/UI Designer",
      bio: "Ava designs intuitive and engaging user interfaces, enhancing user experience and satisfaction.",
      id: "5454",
      profileImage: placeholder,
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    role: "",
    bio: "",
    id: "",
  });

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    department: "",
    employeeId: "",
    bio: "",
  });
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  // --- Add Employee Handlers ---
  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSaveNew = () => {
    if (!formData.name || !formData.role || !formData.employeeId) {
      alert("Please fill in required fields");
      return;
    }
    setEmployees([
      ...employees,
      {
        name: formData.name,
        role: formData.role,
        bio: formData.bio,
        id: formData.employeeId,
        profileImage: placeholder,
      },
    ]);
    setFormData({
      name: "",
      role: "",
      department: "",
      employeeId: "",
      bio: "",
    });
    setFileName("");
    setShowForm(false);
  };

  // --- Edit Handlers ---
  const handleEdit = (idx) => {
    setEditIndex(idx);
    setEditData(employees[idx]);
  };
  const handleSave = (idx) => {
    const updatedEmployees = [...employees];
    updatedEmployees[idx] = editData;
    setEmployees(updatedEmployees);
    setEditIndex(null);
  };
  const handleChange = (e) =>
    setEditData({ ...editData, [e.target.name]: e.target.value });

  // --- Delete Handler ---
  const handleDelete = (idx) => {
    const updatedEmployees = employees.filter((_, i) => i !== idx);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="overflow-x-auto mb-12">
      <h2 className="text-2xl font-bold mb-6">Employee Management</h2>

      {/* Add New Employee Button */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="mb-6 px-6 py-3 bg-orange-500 text-white rounded-lg font-bold"
        >
          + Add Team Member
        </button>
      )}

      {/* Add Employee Form with Image Preview */}
      {showForm && (
        <div className="flex flex-col md:flex-row gap-8 border p-6 rounded-xl shadow mb-8">
          {/* Left side: Form */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Add Team Member</h3>
            {["name", "role", "department", "employeeId"].map((field, i) => (
              <div key={i} className="mb-3">
                <label className="font-bold text-gray-800 capitalize">
                  {field}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleFormChange}
                  className="w-full mt-2 p-3 bg-gray-100 rounded-xl"
                />
              </div>
            ))}
            <div>
              <label className="font-bold text-gray-800">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleFormChange}
                className="w-full mt-2 p-3 bg-gray-100 rounded-xl min-h-[120px]"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowForm(false)}
                className="px-6 py-3 bg-gray-300 rounded-xl font-bold"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNew}
                className="px-6 py-3 bg-orange-500 text-white rounded-xl font-bold"
              >
                Save
              </button>
            </div>
          </div>

          {/* Right side: Image Preview */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src={placeholder}
              alt="Preview"
              className="max-h-85 object-contain rounded-xl shadow"
            />
          </div>
        </div>
      )}

      {/* Employee Table */}
      <table className="hidden md:table w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-800">
            <th className="p-6 font-bold">Name</th>
            <th className="p-6 font-bold">Role</th>
            <th className="p-6 font-bold">Bio</th>
            <th className="p-6 font-bold">Emp. ID</th>
            <th className="p-6 font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-200 transition">
              {editIndex === idx ? (
                <>
                  <td className="p-6">
                    <input
                      name="name"
                      value={editData.name}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full rounded"
                    />
                  </td>
                  <td className="p-6">
                    <input
                      name="role"
                      value={editData.role}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full rounded"
                    />
                  </td>
                  <td className="p-6">
                    <textarea
                      name="bio"
                      value={editData.bio}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full rounded"
                    />
                  </td>
                  <td className="p-6">
                    <input
                      name="id"
                      value={editData.id}
                      onChange={handleChange}
                      className="border px-2 py-1 w-full rounded"
                    />
                  </td>
                  <td className="p-6 flex gap-2">
                    <button
                      onClick={() => handleSave(idx)}
                      className="px-3 py-1 bg-green-500 text-white rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditIndex(null)}
                      className="px-3 py-1 bg-gray-400 text-white rounded"
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="p-6">{emp.name}</td>
                  <td className="p-6 text-gray-600">{emp.role}</td>
                  <td className="p-6 text-gray-600">{emp.bio}</td>
                  <td className="p-6">{emp.id}</td>
                  <td className="p-6 flex gap-2">
                    <button
                      onClick={() => handleEdit(idx)}
                      className="px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-green-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(idx)}
                      className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
