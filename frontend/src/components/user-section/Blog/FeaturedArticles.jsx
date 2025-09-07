import React from 'react';
import FeaturedArticleCard from './FeaturedArticleCard';
import '../../../index.css';
import img1 from '../../../assets/Blog/FeaturedAtricleImg1.png'
import img2 from '../../../assets/Blog/FeaturedAtricleImg2.png'
const FeaturedArticles = () => {
    const articles = [
        {
            imageSrc: img1,
            category: { name: "AI & Automation", color: "bg-green-100", textColor: "text-green-800" },
            title: "Top Tech Trends for 2025: What to Expect in AI & Software",
            description: "Discover the most promising investment opportunities for the coming year, backed by comprehensive market analysis and expert insights from our senior financial advisors.",
            author: "Robert Chen",
            authorTitle: "Lead AI Strategist",
            readTime: "8 min read",
            date: "Dec 28, 2024"
        },
        {
            imageSrc: img2,
            category: { name: "SaaS Strategy", color: "bg-purple-100", textColor: "text-purple-800" },
            title: "The Complete Guide to Launching a SaaS Product",
            description: "Step-by-step playbook on validating, designing, building, and scaling your SaaS app — based on lessons from real startup founders and our product consultants.",
            author: "Maria Rodriguez",
            authorTitle: "SaaS Product Specialist",
            readTime: "12 min read",
            date: "Dec 26, 2024"
        }
    ];

    return (
        <div className="w-full py-16 bg-gray-50">
            <div className="w-9/10 mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-gray-900 text-3xl font-bold font-['Inter'] leading-9 mb-4">Featured Articles</h2>
                    <p className="text-gray-600 text-base font-normal font-['Inter'] leading-normal max-w-2xl mx-auto">Our most popular and insightful content, handpicked by our tech editors to help you stay ahead in digital innovation.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FeaturedArticleCard {...articles[0]} />
                    <FeaturedArticleCard {...articles[1]} />
                </div>
            </div>
        </div>
    );
}

export default FeaturedArticles;