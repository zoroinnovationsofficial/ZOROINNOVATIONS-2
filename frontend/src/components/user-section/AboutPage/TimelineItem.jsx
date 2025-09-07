import React from "react";

const TimelineItem = ({ image, year, title, description, isFuture }) => {
  return (
    <div className="flex items-start space-x-8">
      <div className="relative z-10">
        <img
          src={image}
          alt={year}
          className={`w-16 h-16 rounded-full ${
            isFuture ? "bg-gray-400" : "bg-orange-500"
          } text-white font-bold text-lg flex items-center justify-center`}
        />
      </div>
      <div className="flex-1 pt-2">
        {isFuture ? (
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
