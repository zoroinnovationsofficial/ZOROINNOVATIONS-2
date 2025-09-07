

import React from 'react';
import LatestArticleCard from './LatestArticleCard';
import '../../../index.css';
import img1 from '../../../assets/Blog/LatestArticleImg1.png'
import img2 from '../../../assets/Blog/LatestArticleImg2.png'
import img3 from '../../../assets/Blog/LatestArticleImg3.png'
import img4 from '../../../assets/Blog/LatestArticleImg4.png'
import img5 from '../../../assets/Blog/LatestArticleImg5.png'
import img6 from '../../../assets/Blog/LatestArticleImg6.png'
const LatestArticles = () => {
    const articles = [
        {
            imageSrc: img1,
            category: { name: "Web development", color: "bg-blue-100", textColor: "text-blue-800" },
            title: "Web Development in 2025: Frameworks to Watch",
            description: "React, Next.js, Svelte? We break down the future of front-end dev and help you decide where to invest your dev time and talent.",
            author: "James Wilson",
            date: "Dec 24, 2024"
        },
        {
            imageSrc: img2,
            category: { name: "AI & ML", color: "bg-yellow-100", textColor: "text-yellow-800" },
            title: "AI Tools for Business: How to Choose the Right One",
            description: "Understand the types of AI solutions (NLP, computer vision, chatbots) and how to select the best fit for your industry, budget, and goals.",
            author: "Sarah Kim",
            date: "Dec 22, 2024"
        },
        {
            imageSrc: img3,
            category: { name: "SaaS", color: "bg-green-100", textColor: "text-green-800" },
            title: "Top 10 SaaS Tools to Boost Team Productivity in 2025",
            description: "Explore the best collaboration, communication, and workflow SaaS platforms that can supercharge your team's efficiency.",
            author: "Michael Chang",
            date: "Dec 20, 2024"
        },
        {
            imageSrc: img4,
            category: { name: "Digital product strategy", color: "bg-orange-100", textColor: "text-orange-800" },
            title: "Digital Transformation for SMBs: A Complete Playbook",
            description: "Learn how small and medium businesses can adopt scalable tech solutions without blowing the budget.",
            author: "Lisa Thompson",
            date: "Dec 18, 2024"
        },
        {
            imageSrc: img5,
            category: { name: "Blockchain & Security", color: "bg-purple-100", textColor: "text-purple-800" },
            title: "Should Your App Use Blockchain? Pros & Pitfalls",
            description: "Blockchain is trending — but should you use it? We break down when it's a good idea (and when it's not).",
            author: "David Park",
            date: "Dec 16, 2024"
        },
        {
            imageSrc: img6,
            category: { name: "Tech stack selection", color: "bg-blue-100", textColor: "text-blue-800" },
            title: "LMS vs Custom eLearning Platform: What to Build?",
            description: "Compare standard Learning Management Systems with fully custom eLearning platforms for startups and training businesses.",
            author: "Jennifer Adams",
            date: "Dec 14, 2024"
        }
    ];

    return (
        <div className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-gray-900 text-2xl font-bold font-['Inter'] leading-loose">Latest Articles</h2>
                    <div className="relative">
                        <select className="appearance-none bg-white border border-gray-300 rounded-2xl py-2 pl-4 pr-10 text-black text-base font-normal font-['Inter'] leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500">
                            <option>Most Recent</option>
                            <option>Most Popular</option>
                            <option>Oldest</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                    {articles.map((article, index) => (
                        <LatestArticleCard key={index} {...article} />
                    ))}
                </div>
                {/* Pagination */}
                <div className="flex justify-center items-center space-x-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-orange-500 rounded-2xl text-white font-normal font-['Inter']">1</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-2xl text-gray-700 hover:bg-gray-100 font-normal font-['Inter']">2</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-2xl text-gray-700 hover:bg-gray-100 font-normal font-['Inter']">3</button>
                    <span className="text-gray-500 font-normal font-['Inter']">...</span>
                    <button className="w-10 h-10 flex items-center justify-center rounded-2xl text-gray-700 hover:bg-gray-100 font-normal font-['Inter']">12</button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LatestArticles;