
import React from 'react';
import '../../../index.css';
import image from '../../../assets/Blog/Image.png'
const NewsletterCTA = () => {
    return (
        <div className="w-full bg-orange-500 py-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <img className="absolute inset-0 w-full h-full object-cover opacity-10" src={image} alt="Background pattern" />
            <div className="relative z-10 max-w-4xl px-4">
                <h2 className="text-white text-4xl font-bold font-['Inter'] leading-tight mb-6">Never Miss a Tech Insight</h2>
                <p className="opacity-90 text-white text-xl font-normal font-['Inter'] leading-7 mb-10">Join 50,000+ tech enthusiasts, developers, and founders who rely on our expert analysis, tutorials, and digital strategy updates to stay ahead in the innovation game.</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-grow min-w-0 sm:min-w-[auto] px-6 py-3 bg-white rounded-2xl text-gray-700 text-lg font-normal font-['Inter'] focus:outline-none"
                    />
                    <button className="w-full sm:w-auto px-8 py-3 bg-white rounded-lg text-orange-500 text-lg font-medium font-['Inter'] hover:bg-gray-100 transition-colors">Subscribe Free</button>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white text-sm font-semibold font-['Inter'] opacity-80">
                    <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        Weekly market updates
                    </div>
                    <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        Expert financial tips
                    </div>
                    <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        Exclusive insights
                    </div>
                    <div className="flex items-center">
                        <svg className="w-3.5 h-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        No spam, unsubscribe anytime
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsletterCTA;