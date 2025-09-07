import React from "react";
import { HiFlag } from "react-icons/hi";

const MissionCard = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 h-[274px] w-full max-w-[608px]">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
        <HiFlag className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>

      <p className="text-gray-600 text-base leading-6 font-normal">
        To empower individuals and businesses to achieve financial security and
        prosperity through personalized advisory services, innovative solutions,
        and unwavering commitment to their success.
      </p>
    </div>
  );
};

export default MissionCard;
