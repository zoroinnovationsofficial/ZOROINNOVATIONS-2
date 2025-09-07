import React from "react";
import { Shield, User, Lock, Share2, FileText, Link as LinkIcon, RefreshCw, Mail, Phone, MapPin } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-10 border border-gray-200">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Effective Date: August 28, 2025</p>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
            <User className="w-6 h-6 text-blue-600 mr-2" /> 1. Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-6">
            <li><strong>Personal Information:</strong> Name, email, phone number, company details.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, device info, pages visited.</li>
            <li><strong>Cookies:</strong> Used to improve user experience and analyze traffic.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
            <Shield className="w-6 h-6 text-green-600 mr-2" /> 2. How We Use Information
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-6">
            <li>Provide and improve services.</li>
            <li>Respond to inquiries and customer support.</li>
            <li>Send updates, offers, and marketing (with consent).</li>
            <li>Analyze site performance.</li>
            <li>Comply with legal requirements.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
            <Lock className="w-6 h-6 text-red-600 mr-2" /> 3. Data Protection
          </h2>
          <p className="text-gray-700">
            We implement industry-standard security measures but cannot guarantee absolute security.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
            <Share2 className="w-6 h-6 text-purple-600 mr-2" /> 4. Sharing of Information
          </h2>
          <p className="text-gray-700">
            We do not sell your data. We may share information with trusted providers or legal authorities if required by law.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
            <FileText className="w-6 h-6 text-yellow-600 mr-2" /> 5. Your Rights
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-6">
            <li>Request access, correction, or deletion of your data.</li>
            <li>Opt out of marketing communications.</li>
            <li>Manage cookies in your browser settings.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
            <LinkIcon className="w-6 h-6 text-indigo-600 mr-2" /> 6. Third-Party Links
          </h2>
          <p className="text-gray-700">
            We are not responsible for the privacy practices of external websites linked from our site.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
            <RefreshCw className="w-6 h-6 text-teal-600 mr-2" /> 7. Updates
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy. Updates will appear with a new “Effective Date.”
          </p>
        </section>

        {/* Contact */}
        <section className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📩 Contact Us</h2>
          <p className="flex items-center text-gray-700 mb-2">
            <Mail className="w-5 h-5 text-blue-600 mr-2" /> 
            <a href="mailto:zoroinnovations@yahoo.com" className="text-blue-600 hover:underline">
              zoroinnovations@yahoo.com
            </a>
          </p>
          <p className="flex items-center text-gray-700 mb-2">
            <Phone className="w-5 h-5 text-green-600 mr-2" /> +91 9481414295
          </p>
          <p className="flex items-center text-gray-700">
            <MapPin className="w-5 h-5 text-red-600 mr-2" /> Chikkaballapur, Karnataka, India
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
