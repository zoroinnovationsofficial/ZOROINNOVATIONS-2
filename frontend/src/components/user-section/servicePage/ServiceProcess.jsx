export default function ServiceProcess() {
  const steps = [
    { iconPath: "/Serviceimages/Background-6.svg", title: "Discovery", desc: "Understanding your business needs and requirements" },
    { iconPath: "/Serviceimages/Background-7.svg", title: "Planning", desc: "Creating detailed project roadmap and timeline" },
    { iconPath: "/Serviceimages/Background-8.svg", title: "Development", desc: "Building your solution with regular progress updates" },
    { iconPath: "/Serviceimages/Background-9.svg", title: "Testing", desc: "Rigorous quality assurance and performance testing" },
    { iconPath: "/Serviceimages/Background-10.svg", title: "Launch", desc: "Deployment and ongoing support for your success" },
  ];

  return (
    <section className="bg-white py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center">Our Service Process</h2>
      <p className="text-center text-xl text-gray-600 mt-4">
        A structured approach to delivering exceptional results
      </p>

      <div className="relative mt-16">
        {/* Connecting line for desktop screens */}
        <div className="hidden md:block absolute top-8 left-0 right-0 mx-auto h-1 bg-orange-100 w-[90%]"></div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 relative z-10">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white shadow-lg rounded-full p-4">
                <img src={step.iconPath} alt={step.title} className="w-16 h-16" />
              </div>
              <h3 className="font-semibold text-lg mt-4">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-1 max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
