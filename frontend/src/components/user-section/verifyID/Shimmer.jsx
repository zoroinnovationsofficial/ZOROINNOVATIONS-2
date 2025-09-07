import React from "react";

const Shimmer = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-white animate-pulse">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="p-8">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="p-8 space-y-6">
            <div className="mb-6">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
            <div className="space-y-4">
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 flex flex-col justify-between items-center">
            <div className="w-80 h-80 rounded-2xl bg-gray-200"></div>
            <div className="w-full mt-4">
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
