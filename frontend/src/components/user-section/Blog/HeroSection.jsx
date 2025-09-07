import React from 'react';
import '../../../index.css';
import logo from '../../../assets/zoro_white_tm_logo.png';

const HeroSection = () => {
  return (
    <section className="w-full h-[533px] custom-hero-gradient flex flex-col items-center justify-center p-4 text-center">
      <div className="relative w-full flex justify-center">
        <img
          className="w-40 md:w-60 z-10"
          src={logo}
          alt="Innovation Journey"
        />
      </div>
      <div className="max-w-5xl mt-5 mx-auto mb-8 px-2">
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-sans font-bold leading-tight mb-4">
          Start Your Innovation Journey Today
        </h1>
        <p className="text-white/90 text-base sm:text-lg md:text-xl font-normal font-['Inter'] leading-7">
          Partner with Zoro Innovation to turn ideas into powerful digital solutions — designed for growth, speed, and long-term success.
        </p>
      </div>
      <div className="w-full max-w-2xl bg-white rounded-full flex items-center pr-2 shadow-lg">
        <input
          type="text"
          placeholder="Search articles, topics, or authors..."
          aria-label="Search articles, topics, or authors"
          className="flex-grow py-3 px-6 text-gray-700 text-lg font-normal font-['Inter'] rounded-l-full focus:outline-none"
        />
        <button
          aria-label="Search"
          className="w-12 h-12 bg-orange-500 hover:bg-orange-600 transition-colors duration-300 rounded-full flex items-center justify-center"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
