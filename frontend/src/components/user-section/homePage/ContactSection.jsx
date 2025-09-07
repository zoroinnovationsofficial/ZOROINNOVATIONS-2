import React from 'react';

const ContactForm = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-12">
        {/* Contact Info */}
        <div className="flex-1 text-gray-700">
          <h2 className="text-4xl text-[#111827] font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-[#4B5563] mb-10">
            Ready to start your next project? Contact us today and let's discuss how we can help transform your business.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <img src="/Homeimages/Overlay-9.svg" alt="Email icon" className="w-10 h-10" />
              <div>
                <p className="text-base"><strong>Email:</strong></p>
                <p className="text-sm text-[#4B5563]">zoroinnovations@yahoo.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src="/Homeimages/Overlay-10.svg" alt="Phone icon" className="w-10 h-10" />
              <div>
                <p className="text-base"><strong>Phone:</strong></p>
                <p className="text-sm text-[#4B5563]">+919481414295</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src="/Homeimages/Overlay-11.svg" alt="Address icon" className="w-10 h-10" />
              <div>
                <p className="text-base"><strong>Address:</strong></p>
                <p className="text-sm text-[#4B5563]">#117 Reddys Colony Street,Thondebhavi, Gowribidanuru Taluk, Chikkaballapur District, KA 561213</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-md">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" id="phone" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
