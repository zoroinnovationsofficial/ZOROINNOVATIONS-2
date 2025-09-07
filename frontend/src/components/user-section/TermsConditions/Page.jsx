import React from "react";

const TermsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-grow px-6 md:px-20 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800">
            Terms & Conditions
          </h1>
          <p className="text-center text-gray-500 mb-12">
            <strong>Effective Date:</strong> August 28, 2025
          </p>

          {/* Intro */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
            <p className="text-gray-700 leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-gray-900">
                Zoro Innovations
              </span>
              . By using our website and services, you agree to these Terms &
              Conditions.
            </p>
          </div>

          {/* Sections */}
          {[
            {
              title: "1. Acceptance of Terms",
              content:
                "By accessing our site or services, you agree to follow these Terms and our Privacy Policy. If not, please discontinue use.",
            },
            {
              title: "2. Use of Services",
              content: (
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use services only for lawful purposes.</li>
                  <li>No misuse, copying, or reverse-engineering.</li>
                  <li>No attempts to disrupt or interfere with our systems.</li>
                </ul>
              ),
            },
            {
              title: "3. Intellectual Property",
              content:
                "All content, designs, logos, and software are owned by Zoro Innovations. Unauthorized use is prohibited.",
            },
            {
              title: "4. Disclaimer & Limitation of Liability",
              content:
                "We strive for accuracy but do not guarantee error-free services. We are not liable for indirect damages, service downtime, or data loss.",
            },
            {
              title: "5. Third-Party Services",
              content:
                "We may use or link to third-party tools. We are not responsible for their content, terms, or policies.",
            },
            {
              title: "6. Termination",
              content:
                "We may suspend or terminate access if you violate these Terms.",
            },
            {
              title: "7. Governing Law",
              content:
                "These Terms are governed by Indian law. Disputes will be handled in courts of Chikkaballapur, Karnataka.",
            },
            {
              title: "8. Changes",
              content: "We may revise these Terms.",
            },
          ].map((section, index) => (
            <section
              key={index}
              className="bg-white rounded-2xl shadow-sm p-6 mb-6 transition hover:shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                {section.title}
              </h2>
              <div className="text-gray-700 leading-relaxed">
                {section.content}
              </div>
            </section>
          ))}

          {/* Contact */}
          <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-md p-6 mt-10">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              Contact Us
            </h2>
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:zoroinnovations@yahoo.com"
                className="text-blue-600 font-medium underline"
              >
                zoroinnovations@yahoo.com
              </a>
            </p>
            <p className="text-gray-700">Phone: +91 9481414295</p>
            <p className="text-gray-700">
              Location: Chikkaballapur, Karnataka, India
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsPage;
