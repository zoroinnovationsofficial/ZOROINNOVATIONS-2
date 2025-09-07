export default function WebDevelopmentExcellence() {
  return (
    <section className="bg-white py-20 px-6 md:px-20 max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Left Side Content */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Web Development Excellence
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          We create modern, responsive, and high-performance web applications
          that deliver exceptional user experiences across all devices and
          platforms.
        </p>

        {/* Feature List */}
        <ul className="space-y-4 text-gray-700">
          {[
            {
              title: "Frontend Development",
              desc: "React, Vue, Angular with modern UI/UX design principles",
            },
            {
              title: "Backend Development",
              desc: "Node.js, Python, PHP with robust API architecture",
            },
            {
              title: "Performance Optimization",
              desc: "Fast loading times and SEO-optimized solutions",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 hover:translate-x-1 transition-transform"
            >
              <img
                src="/Serviceimages/Overlay.png"
                alt="icon"
                className="w-5 h-5 mt-1"
              />
              <div>
                <div className="text-base font-semibold">{item.title}</div>
                <div className="text-sm leading-snug">{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>

        {/* Case Study Box */}
        <div className="bg-gray-100 rounded-3xl px-6 py-6 mt-8 shadow-md hover:shadow-xl transition-shadow max-w-xl">
          <div className="font-semibold text-lg mb-2">
            Case Study: E-commerce Platform
          </div>
          <p className="text-sm mb-4 leading-relaxed">
            Developed a comprehensive e-commerce platform that increased client
            sales by 340% within 6 months.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div>Client: RealTech Solutions</div>
            <div>Timeline: 4 months</div>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/Serviceimages/Web Development.png"
          alt="Web Development"
          className="max-h-[480px] w-full max-w-[584px] object-contain"
        />
      </div>
    </section>
  );
}
