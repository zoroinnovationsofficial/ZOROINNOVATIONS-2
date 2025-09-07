
import React from 'react';
import '../../../index.css';


const LatestArticleCard = ({ imageSrc, category, title, description, author, date }) => {
    return (
        <div className="flex flex-col bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden h-full
                    transform transition-all duration-300 ease-in-out
                    hover:scale-[1.05] hover:shadow-lg hover:border-transparent"> 
            <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
            <div className="p-6 flex flex-col flex-grow">
                <span className={`px-4 py-1 rounded-full text-xs font-medium ${category.color} ${category.textColor} self-start mb-3`}>{category.name}</span>
                <h3 className="text-gray-900 text-xl font-semibold font-['Inter'] leading-7 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm font-normal font-['Inter'] leading-tight mb-6 flex-grow">{description}</p>
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center">
                        <img className="w-8 h-8 rounded-full mr-2" src="https://placehold.co/32x32" alt={author} />
                        <span className="text-gray-700 text-sm font-normal font-['Inter'] leading-tight">{author}</span>
                    </div>
                    <span className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">{date}</span>
                </div>
            </div>
        </div>
    );
};

export default LatestArticleCard;