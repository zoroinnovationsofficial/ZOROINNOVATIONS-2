import React from "react";
import { Linkedin, Mail } from "lucide-react";

const LeadershipCard = ({ image, name, title, bio }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-blue-600 font-medium mb-3">{title}</p>
      <p className="text-gray-600 text-sm mb-4">{bio}</p>
      <div className="flex space-x-3">
        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
          <Linkedin size={20} />
        </button>
        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
          <Mail size={20} />
        </button>
      </div>
    </div>
  );
};

export default LeadershipCard;
