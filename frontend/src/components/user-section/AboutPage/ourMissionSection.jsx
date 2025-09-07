import React from "react";

const OurStorySection = () => {
  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "10K+", label: "Happy Clients" },
    { value: "$2.5B", label: "Assets Under Management" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2021 by tech enthusiast Narendra Babu, Zoro Innovations began with a bold mission: to create innovative and accessible technology solutions that drive real impact. What started as a small vision to build meaningful software has grown into a registered MSME company working across web development, AR/VR, research, and emerging technologies.

                </p>
                <p>
                  Our journey is fueled by creativity, problem-solving, and a passion for innovation. From developing custom digital solutions to experimenting with next-generation technologies, we have always focused on empowering individuals, students, and businesses to achieve more.

                </p>
                <p>At Zoro Innovations, we believe technology should not just solve today’s challenges—it should unlock tomorrow’s possibilities. With a culture built on innovation, transparency, and collaboration, we continue to shape the future, one project at a time.
              </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team meeting discussing financial strategies"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
