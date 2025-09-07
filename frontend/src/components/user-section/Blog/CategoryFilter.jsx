
import React from 'react';
import '../../../index.css';
import icon1 from '../../../assets/Blog/icon1.png'
import icon2 from '../../../assets/Blog/icon2.png'
import icon3 from '../../../assets/Blog/icon3.png'
import icon4 from '../../../assets/Blog/icon4.png'
import icon5 from '../../../assets/Blog/icon5.png'

const CategoryFilter = () => {
    const categories = [
        { name: "All Categories", count: 128, bgColor: "bg-orange-500", textColor: "text-white", countBgColor: "bg-white/20", countTextColor: "text-white", icon: icon1}, // Example placeholder icon
        { name: "Web Development", count: 42, bgColor: "bg-gray-100", textColor: "text-gray-700", countBgColor: "bg-gray-300", countTextColor: "text-gray-700", icon: icon2 },
        { name: "AI & Machine Learning", count: 35, bgColor: "bg-gray-100", textColor: "text-gray-700", countBgColor: "bg-gray-300", countTextColor: "text-gray-700", icon:icon3 },
        { name: "Tech Tips", count: 28, bgColor: "bg-gray-100", textColor: "text-gray-700", countBgColor: "bg-gray-300", countTextColor: "text-gray-700", icon: icon4},
        { name: "Digital Strategy", count: 23, bgColor: "bg-gray-100", textColor: "text-gray-700", countBgColor: "bg-gray-300", countTextColor: "text-gray-700", icon:icon5},
    ];

    return (
        <div className="w-full py-8 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 px-4">
                {categories.map((category, index) => (
                    <div key={index} className={`flex items-center px-6 py-3 rounded-full ${category.bgColor}`}>
                        {category.icon && <img src={category.icon} alt={`${category.name} icon`} className="w-4 h-4 mr-2" />}
                        <span className={`text-base font-medium font-['Inter'] ${category.textColor}`}>{category.name}</span>
                        <div className={`ml-3 px-3 py-1 rounded-full ${category.countBgColor}`}>
                            <span className={`text-xs font-medium font-['Inter'] ${category.countTextColor}`}>{category.count}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryFilter;