import { useState, useEffect } from "react";

export default function ServiceQuoteForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    services: [],
    budget: "",
    timeline: "",
    projectDescription: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  // Auto-hide status message after 5 seconds
  useEffect(() => {
    if (status.info.msg) {
      const timer = setTimeout(() => {
        setStatus((prev) => ({ ...prev, info: { error: false, msg: null } }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status.info.msg]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const { services } = prevData;
      return {
        ...prevData,
        services: checked
          ? [...services, value]
          : services.filter((s) => s !== value),
      };
    });
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return "Full name is required.";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      return "Please enter a valid email address.";
    if (formData.services.length === 0)
      return "Please select at least one service.";
    if (!formData.budget) return "Please select a budget range.";
    if (!formData.timeline) return "Please select a timeline.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: validationError },
      });
      return;
    }

    setStatus({
      submitting: true,
      submitted: false,
      info: { error: false, msg: null },
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMessage = data.errors
          ? data.errors.map((err) => err.msg).join(", ")
          : "An unexpected error occurred.";
        throw new Error(errorMessage);
      }

      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: "✅ Your quote request has been sent successfully!",
        },
      });

      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        phoneNumber: "",
        services: [],
        budget: "",
        timeline: "",
        projectDescription: "",
      });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: error.message },
      });
    }
  };

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-2">
        Request a Service Quote
      </h2>
      <p className="text-center text-xl font-normal mb-8 text-gray-600">
        Tell us about your project and we'll provide a detailed proposal
      </p>

      <form
        onSubmit={handleSubmit}
        className="border bg-white shadow-xl rounded-3xl p-8 grid grid-cols-1 gap-4 mx-auto"
      >
        {/* Full Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border rounded-2xl px-4 py-2"
            type="text"
            placeholder="Full Name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-2xl px-4 py-2"
            type="email"
            placeholder="Email Address"
            required
          />
        </div>

        {/* Company Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="border rounded-2xl px-4 py-2"
            type="text"
            placeholder="Company Name"
          />
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border rounded-2xl px-4 py-2"
            type="text"
            placeholder="Phone Number"
          />
        </div>

        {/* Service Interest */}
        <div className="flex flex-col">
          <div className="mb-2 font-semibold text-sm">Service Interest</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {[
              "Web Development",
              "Custom Software",
              "SaaS Applications",
              "AI Applications",
              "Managed IT",
              "IT Consultancy",
            ].map((service) => (
              <label key={service} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={service}
                  checked={formData.services.includes(service)}
                  onChange={handleCheckboxChange}
                  className="rounded border-gray-400"
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        {/* Budget & Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="border text-sm rounded-2xl px-4 py-2"
            required
          >
            <option value="">Select budget range</option>
            <option value="<5k">Less than $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-20k">$10,000 - $20,000</option>
            <option value=">20k">More than $20,000</option>
          </select>

          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="border text-sm rounded-2xl px-4 py-2"
            required
          >
            <option value="">Select timeline</option>
            <option value="1-2-weeks">1-2 Weeks</option>
            <option value="1-month">1 Month</option>
            <option value="2-3-months">2-3 Months</option>
            <option value="3+ months">3+ Months</option>
          </select>
        </div>

        {/* Project Description */}
        <textarea
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          className="border rounded-2xl px-4 py-2"
          rows="4"
          placeholder="Tell us about your project requirements, goals, and any specific features you need..."
          required
        />

        {/* Status Message */}
        {status.info.msg && (
          <div
            className={`text-center p-2 rounded-lg ${
              status.info.error
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {status.info.msg}
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={status.submitting}
            className="w-[179px] bg-orange-500 text-white px-6 py-2 rounded-3xl font-semibold mt-2 disabled:bg-orange-300 flex justify-center items-center gap-2"
          >
            {status.submitting ? (
              <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
            ) : null}
            {status.submitting ? "Submitting..." : "Submit Request"}
          </button>
        </div>
      </form>
    </section>
  );
}
