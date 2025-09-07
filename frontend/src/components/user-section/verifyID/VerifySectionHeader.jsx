import React, { useState } from "react";
import zoroLogo from "../../../assets/zoro_white_tm_logo.png";

const VerifySectionHeader = ({ onVerify }) => {
  const [employeeId, setEmployeeId] = useState("");

  const handleVerifyClick = () => {
    if (employeeId) {
      onVerify(employeeId);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#3B82F6] to-[#FF6B35] min-h-[400px]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Verify Employee
              <br />
              Credentials
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed w-2xl">
              Quickly confirm employment and certificate authenticity. Just
              enter the Employee ID to access verified records issued by Zoro
              Innovation.
            </p>

            {/* Employee ID Input Section */}
            <div className="mb-6">
              <label className="block text-white font-medium mb-3 text-lg">
                Employee ID
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  placeholder="Enter Employee ID"
                  className="flex-1 px-4 py-3 rounded-lg border-0 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none text-base"
                />
                <button
                  onClick={handleVerifyClick}
                  className="px-8 py-3 bg-[#FF6B35] text-white font-medium rounded-lg hover:bg-[#e55a2b] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Verify
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="text-right">
              <img
                src={zoroLogo}
                alt="Zoro Innovations"
                className="h-[8rem] sm:h-[10rem] lg:h-[23rem] w-auto mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifySectionHeader;
