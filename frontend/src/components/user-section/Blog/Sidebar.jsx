
import React from 'react';
import '../../../index.css';
import img1 from '../../../assets/Blog/PopularPost1.png';
import img2 from '../../../assets/Blog/PopularPost2.png';
import img3 from '../../../assets/Blog/PopularPost3.png';
const Sidebar = () => {
    return (
        <div className="w-full  flex flex-col space-y-8 p-4">
        
            <div className="bg-gradient-to-br from-orange-500 to-orange-500 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold font-['Inter'] leading-7 mb-3">Stay Informed</h3>
                <p className="opacity-90 text-base font-normal font-['Inter'] leading-normal mb-6">Get weekly insights on AI, SaaS, and digital innovation — right in your inbox.</p>
                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-white rounded-2xl text-gray-700 text-base font-normal font-['Inter'] focus:outline-none"
                    />
                    <button className="w-full py-3 bg-white rounded-lg text-orange-500 text-base font-medium font-['Inter'] hover:bg-gray-100 transition-colors">Subscribe Now</button>
                </div>
                <p className="opacity-75 text-xs font-normal font-['Inter'] leading-none mt-4">No spam. Unsubscribe anytime.</p>
            </div>

           
            <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6">
                <h3 className="text-gray-900 text-lg font-bold font-['Inter'] leading-7 mb-6">Popular Posts</h3>
                <div className="space-y-6">
                    {[
                        { img: img1, title: "Launching Your First AI App: A Beginner's Guide", date: "Dec 12, 2024" },
                        { img: img2, title: "Choosing the Right Tech Stack for Your Startup", date: "Dec 10, 2024" },
                        { img: img3, title: "How to Scale a SaaS Product Efficiently", date: "Dec 8, 2024" },
                    ].map((post, index) => (
                        <div key={index} className="flex items-center">
                            <img className="w-16 h-12 rounded-2xl object-cover mr-4" src={post.img} alt="Popular Post Thumbnail" />
                            <div>
                                <h4 className="text-gray-900 text-sm font-semibold font-['Inter'] leading-tight mb-1">{post.title}</h4>
                                <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">{post.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6">
                <h3 className="text-gray-900 text-lg font-bold font-['Inter'] leading-7 mb-6">Categories</h3>
                <ul className="space-y-3">
                    {[
                        { name: "AI & Machine Learning", count: 42 },
                        { name: "SaaS & Cloud", count: 35 },
                        { name: "Insurance Guide", count: 28 },
                        { name: "Web Development", count: 23 },
                        { name: "Startup Strategy", count: 18 },
                    ].map((cat, index) => (
                        <li key={index} className="flex justify-between items-center">
                            <span className="text-gray-700 text-base font-normal font-['Inter'] leading-normal">{cat.name}</span>
                            <span className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">{cat.count}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;