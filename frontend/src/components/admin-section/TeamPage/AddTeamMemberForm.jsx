import React, { useRef, useState } from 'react';
// Use a public image available in /public as a placeholder
const placeholder = '/img1.png';

const AddTeamMemberForm = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-6">Add Team Member</h2>
        <div className="space-y-4">
          {['Name', 'Role', 'Department', 'Employee ID'].map((label, idx) => (
            <div key={idx}>
              <label className="font-bold text-gray-800">{label}</label>
              <input className="w-full mt-2 p-3 bg-gray-100 rounded-xl" type="text" />
            </div>
          ))}

          <div>
            <label className="font-bold text-gray-800">Bio</label>
            <textarea className="w-full mt-2 p-3 bg-gray-100 rounded-xl min-h-[120px]" />
          </div>

          <div>
            <label className="font-bold text-gray-800">Profile Image</label>
            <input
              value={fileName}
              placeholder="No file selected"
              className="w-full mt-2 p-3 bg-gray-100 rounded-xl cursor-pointer"
              type="text"
              readOnly
              onClick={handleUploadClick}
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="flex justify-start mt-2">
              <button
                type="button"
                onClick={handleUploadClick}
                className="bg-orange-500 text-white px-4 py-2 rounded-xl font-bold"
              >
                Upload/Crop Image
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-between items-center">
        <div className="w-full flex justify-center">
          <img
            className="w-full max-w-[600px] rounded-xl"
            src={placeholder}
            alt="Form Placeholder"
          />
        </div>
        <div className="flex justify-end w-full mt-4 space-x-4">
          <button className="px-6 py-3 bg-gray-300 rounded-xl font-bold">Cancel</button>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-xl font-bold">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddTeamMemberForm;

