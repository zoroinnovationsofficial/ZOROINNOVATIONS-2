import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "How to Verify a Certificate",
      answer:
        "To verify a certificate, enter the employee ID in the provided field and click 'Verify'. The system will then display the employee's details if the ID is valid.",
    },
    {
      id: 2,
      question: "Understanding the Results",
      answer:
        "The results will show the employee's name, role, start date, end date, and type of role. If no details are displayed, the employee ID may be invalid or not found in our system.",
    },
    {
      id: 3,
      question: "How to Verify a Certificate",
      answer:
        "To verify a certificate, enter the employee ID in the provided field and click 'Verify'. The system will then display the employee's details if the ID is valid.",
    },
    {
      id: 4,
      question: "Understanding the Results",
      answer:
        "The results will show the employee's name, role, start date, end date, and type of role. If no details are displayed, the employee ID may be invalid or not found in our system.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Help & FAQs</h2>
      </div>

      <div className="space-y-4">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
            >
              <span className="font-medium text-gray-900 text-lg">
                {faq.question}
              </span>
              <span className="ml-4 flex-shrink-0">
                {openFAQ === faq.id ? (
                  <HiChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <HiChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openFAQ === faq.id
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="px-6 py-4 bg-white border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
