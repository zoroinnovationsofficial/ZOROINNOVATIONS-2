export default function PricingPackages() {
  const packages = [
    {
      title: "Starter",
      price: "$15,000",
      description: "Perfect for small businesses",
      features: [
        "Basic web application",
        "Responsive design",
        "Basic SEO optimization",
        "3 months support",
      ],
      cta: "Get Started",
    },
    {
      title: "Professional",
      price: "$15,000",
      description: "Ideal for growing companies",
      features: [
        "Advanced web application",
        "Custom features & integrations",
        "Performance optimization",
        "6 months support",
        "Analytics & reporting",
      ],
      cta: "Get Started",
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "$35,000+",
      description: "For large organizations",
      features: [
        "Complex web platform",
        "Multi-system integrations",
        "Scalable architecture",
        "12 months support",
        "Dedicated project manager",
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    <section id="pricing-packages" className="px-6 py-20 mx-auto mt-20 max-w-7xl">
      <h2 className="text-[36px] font-bold text-center mb-2">
        Service Packages & Pricing
      </h2>
      <p className="text-center text-[20px] mb-8 text-gray-600">
        Choose the perfect package for your business needs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className={`relative border-4 ${
              pkg.highlight
                ? "border-orange-500"
                : "border-transparent hover:border-orange-500"
            } rounded-3xl shadow-md p-8 flex flex-col items-center min-h-[460px] transform hover:scale-105 transition-all duration-300 w-full max-w-sm`}
          >
            {pkg.highlight && (
              <div className="absolute -top-3 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Most Popular
              </div>
            )}
            <div className="font-bold text-2xl mb-2">{pkg.title}</div>
            <div className="text-3xl font-bold text-orange-500 mb-2">
              {pkg.price}
            </div>
            <div className="mb-4 text-gray-600 text-sm text-center">
              {pkg.description}
            </div>

            <ul className="text-gray-700 text-sm mb-6 space-y-6 text-left w-full">
              {pkg.features.map((text, index) => (
                <li key={index} className="flex items-start gap-2 leading-6">
                  <img
                    src="/Serviceimages/Overlay.png"
                    alt="check"
                    className="w-4 h-4 mt-1"
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <button
              href="/contact"
              className={`px-6 py-2 w-full rounded-md font-semibold transition-colors duration-300 ${
                pkg.highlight
                  ? "bg-orange-300 hover:bg-orange-600 text-black"
                  : "bg-gray-300 hover:bg-orange-600 text-black"
              }`}
            >
              {pkg.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
