import React from "react";

export default function SuccessStories() {
  const successStories = [
    {
      bg: "bg-purple-100",
      img: "/Serviceimages/Background-12.svg",
      title: "E-commerce Platform Transformation",
      desc: "Complete redesign and development of a multi-vendor marketplace platform serving over 50,000 users.",
      stats: [
        { label: "Revenue Increase", value: "+340%" },
        { label: "Page Load Speed", value: "+65%" },
        { label: "User Engagement", value: "+180%" },
      ],
      footer: "RealTech Solutions · 6 months",
    },
    {
      bg: "bg-green-100",
      img: "/Serviceimages/Background-13.svg",
      title: "AI-Powered Analytics Platform",
      desc: "Custom machine learning solution for predictive maintenance in manufacturing operations.",
      stats: [
        { label: "Downtime Reduction", value: "-78%" },
        { label: "Cost Savings", value: "$2.4M" },
        { label: "Accuracy Rate", value: "99.2%" },
      ],
      footer: "Industrial Dynamics Corp · 8 months",
    },
    {
      bg: "bg-orange-100",
      img: "/Serviceimages/Background-14.svg",
      title: "Healthcare Management System",
      desc: "Comprehensive patient management and telemedicine platform for a regional healthcare network.",
      stats: [
        { label: "Patient Satisfaction", value: "+95%" },
        { label: "Processing Time", value: "-60%" },
        { label: "Cost Efficiency", value: "+45%" },
      ],
      footer: "MediCare Network · 10 months",
    },
  ];

  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-2">Success Stories</h2>
      <p className="text-center mb-20 text-xl font-normal text-gray-600">
        Real results from real clients across different industries
      </p>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {successStories.map((story, idx) => (
          <div
            key={idx}
            className={`${story.bg} rounded-3xl shadow-md p-6 flex flex-col items-start w-[384px] h-[452px] hover:scale-105 transition-transform duration-300`}
          >
            <img
              src={story.img}
              alt={story.title}
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="font-semibold text-[20px] leading-[28px]">
              {story.title}
            </h3>
            <p className="text-gray-600 mb-2 mt-3 text-[16px] leading-[24px] font-normal">
              {story.desc}
            </p>
            <ul className="text-gray-700 mb-2 mt-5 space-y-1 w-full">
              {story.stats.map((stat, i) => (
                <li
                  key={i}
                  className="flex w-full justify-between text-[16px] leading-[24px]"
                >
                  <span>{stat.label}</span>
                  <span className="font-bold text-green-600 text-right">
                    {stat.value}
                  </span>
                </li>
              ))}
            </ul>
            <div className="text-xs text-gray-500 mt-auto font-normal text-[14px] leading-[20px]">
              {story.footer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
