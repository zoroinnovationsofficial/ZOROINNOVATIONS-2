import React from "react";

export default function ServiceTile({
  icon,
  title,
  description,
  onLearnMoreClick,
  buttonText = "Learn More",
}) {
  // Smart truncation
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    const truncated = text.substring(0, maxLength);
    return truncated.substring(0, truncated.lastIndexOf(" ")) + "...";
  };

  const truncatedDescription = truncateText(description, 100);

  return (
    <div className="bg-white shadow-lg rounded-3xl p-6 flex flex-col justify-between transform transition-transform hover:scale-105 hover:shadow-2xl">
      <div>
        <img src={icon} alt={`${title} Icon`} className="w-16 h-16" />
        <h3 className="font-semibold text-xl mt-8 mb-2">{title}</h3>
        <p className="text-gray-600 text-[16px] font-normal">
          {truncatedDescription}
        </p>
      </div>
      <button
        onClick={onLearnMoreClick}
        aria-label={`Learn more about ${title}`}
        className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-1 rounded-md mt-4 self-start transition-colors duration-300"
      >
        {buttonText}
      </button>
    </div>
  );
}
