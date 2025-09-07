import React, { useState } from "react";
import search from "../../assets/Searchicon.svg";

const initialJobs = [
  {
    id: 1,
    title: "AI Research Scientist",
    department: "Research and Development",
    location: "Remote",
    status: "Open",
    date: "2023-11-15",
  },
  {
    id: 2,
    title: "Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    status: "Open",
    date: "2023-11-10",
  },
  {
    id: 3,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    status: "Closed",
    date: "2023-10-20",
  },
  {
    id: 4,
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    status: "Open",
    date: "2023-10-15",
  },
  {
    id: 5,
    title: "Data Analyst",
    department: "Analytics",
    location: "Chicago, IL",
    status: "Closed",
    date: "2023-09-30",
  },
];

const Careers = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingJob, setEditingJob] = useState(null);
  const [newJobModal, setNewJobModal] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    department: "",
    location: "",
    status: "Open",
    date: "",
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  // 🔍 Filter jobs
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // 🗑 Delete job
  const handleDelete = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  // 🔄 Toggle status
  const handleToggleStatus = (id) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id
          ? { ...job, status: job.status === "Open" ? "Closed" : "Open" }
          : job
      )
    );
  };

  // ✏️ Save edit
  const handleSaveEdit = (updatedJob) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
    setEditingJob(null);
  };

  // ➕ Add new job
  const handleAddJob = () => {
    if (!newJob.title || !newJob.department || !newJob.location || !newJob.date) {
      alert("Please fill all fields!");
      return;
    }
    const newEntry = {
      ...newJob,
      id: jobs.length + 1,
    };
    setJobs((prev) => [...prev, newEntry]);
    setNewJob({ title: "", department: "", location: "", status: "Open", date: "" });
    setNewJobModal(false);
  };

  return (
    <div className="min-h-screen mt-10 w-full bg-gradient-to-br from-blue-900 via-blue-500 to-orange-500 py-12 px-4 sm:px-6 lg:px-8">
      <h1
        className="text-3xl font-bold text-white"
        style={{ fontFamily: "'Times New Roman', serif" }}
      >
        Job Postings
      </h1>

      <p className="text-md text-white my-2">
        Manage current job openings and create new ones.
      </p>

      {/* 🔍 Search bar */}
      <div className="flex items-center gap-3 my-6 w-full">
        <div className="flex w-full bg-white rounded-lg overflow-hidden shadow-sm">
          <button className="px-1 text-gray-700">
            <img src={search} alt="search" className="w-6 sm:w-8 px-2" />
          </button>
          <input
            type="text"
            placeholder="Search job titles or departments"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset to first page on new search
            }}
            className="w-full px-2 py-2 outline-none text-md placeholder:text-gray-600 text-black"
          />
        </div>
      </div>

      {/* Jobs table (Desktop) */}
      <div className="hidden md:block w-full mx-auto bg-white rounded-3xl shadow-lg text-black p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-md text-left">
            <thead>
              <tr className="text-black font-bold border-b-2 border-gray-200">
                <th className="py-3 px-4">Job Title</th>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Posted Date</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentJobs.map((job) => (
                <tr
                  key={job.id}
                  className="border-b-2 border-gray-200 hover:bg-gray-100 transition-all"
                >
                  <td className="py-4 px-4 font-medium">{job.title}</td>
                  <td className="py-4 px-4 text-blue-500 underline">
                    {job.department}
                  </td>
                  <td className="py-4 px-4 text-blue-500 underline">
                    {job.location}
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        job.status === "Open"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">{job.date}</td>
                  <td className="py-4 px-4 text-sm text-blue-600 space-x-2">
                    <button
                      className="hover:underline"
                      onClick={() => setEditingJob(job)}
                    >
                      Edit
                    </button>
                    <span>|</span>
                    <button
                      className="hover:underline text-red-600"
                      onClick={() => handleDelete(job.id)}
                    >
                      Delete
                    </button>
                    <span>|</span>
                    <button
                      className="hover:underline text-indigo-600"
                      onClick={() => handleToggleStatus(job.id)}
                    >
                      Toggle Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-8">
        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 rounded-full ${
                currentPage === i + 1
                  ? "bg-white text-black font-bold"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => setNewJobModal(true)}
          className="bg-white text-orange-600 font-bold px-5 py-2 rounded-full hover:bg-orange-600 hover:text-white transition-colors"
        >
          Create New Job
        </button>
      </div>

      {/* Edit Modal */}
      {editingJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Job</h2>
            <input
              type="text"
              value={editingJob.title}
              onChange={(e) =>
                setEditingJob({ ...editingJob, title: e.target.value })
              }
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Job Title"
            />
            <input
              type="text"
              value={editingJob.department}
              onChange={(e) =>
                setEditingJob({ ...editingJob, department: e.target.value })
              }
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Department"
            />
            <input
              type="text"
              value={editingJob.location}
              onChange={(e) =>
                setEditingJob({ ...editingJob, location: e.target.value })
              }
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Location"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditingJob(null)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSaveEdit(editingJob)}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Job Modal */}
      {newJobModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Create New Job</h2>
            <input
              type="text"
              value={newJob.title}
              onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Job Title"
            />
            <input
              type="text"
              value={newJob.department}
              onChange={(e) =>
                setNewJob({ ...newJob, department: e.target.value })
              }
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Department"
            />
            <input
              type="text"
              value={newJob.location}
              onChange={(e) =>
                setNewJob({ ...newJob, location: e.target.value })
              }
              className="w-full mb-3 px-3 py-2 border rounded"
              placeholder="Location"
            />
            <input
              type="date"
              value={newJob.date}
              onChange={(e) => setNewJob({ ...newJob, date: e.target.value })}
              className="w-full mb-3 px-3 py-2 border rounded"
            />
            <select
              value={newJob.status}
              onChange={(e) => setNewJob({ ...newJob, status: e.target.value })}
              className="w-full mb-3 px-3 py-2 border rounded"
            >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setNewJobModal(false)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddJob}
                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
              >
                Add Job
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
