import React from "react";

const AwardCard = ({ image, title, source, year }) => {
  return (
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-6">
        <img
          src={image}
          alt={`${title} Award`}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-2">{source}</p>
      <p className="text-gray-500 text-sm">{year}</p>
    </div>
  );
};

export default AwardCard;
