
import React from 'react';
import '../../../index.css';


const FeaturedArticleCard = ({ imageSrc, category, title, description, author, authorTitle, readTime, date }) => {
    return (
        <div className="flex flex-col bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden h-full">
            <img className="w-full h-64 object-cover" src={imageSrc} alt={title} />
            <div className="p-6 flex flex-col flex-grow">
                <span className={`px-4 py-1 rounded-full text-xs font-medium ${category.color} ${category.textColor} self-start mb-3`}>{category.name}</span>
                <h3 className="text-gray-900 text-2xl font-bold font-['Inter'] leading-tight mb-3">{title}</h3>
                <p className="text-gray-600 text-base font-normal font-['Inter'] leading-normal mb-6 flex-grow">{description}</p>
                <div className="flex items-center mt-auto">
                    <img className="w-10 h-10 rounded-full mr-3" src="https://placehold.co/40x40" alt={author} />
                    <div>
                        <p className="text-gray-900 text-sm font-semibold font-['Inter'] leading-tight">{author}</p>
                        <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">{authorTitle}</p>
                    </div>
                    <p className="ml-auto text-gray-500 text-sm font-normal font-['Inter'] leading-tight">{readTime} • {date}</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedArticleCard;