"use client";

import React, { useState } from "react";
import { Mail, User, MessageCircle, Send, CheckCircle2, AlertTriangle } from "lucide-react";

// export const metadata = {
//   title: "Contact Us",
//   description: "Get in touch with Vicious Warfare",
// };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      setSubmitStatus("success");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setSubmitStatus(null);
      }, 3000);
    } else {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="container mx-auto max-w-2xl bg-gray-900 rounded-xl shadow-2xl p-8 border border-gray-800">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-white flex items-center justify-center">
            <MessageCircle className="mr-4 text-blue-500" size={40} />
            Contact Vicious Warfare
          </h1>
          <p className="text-gray-400">
            Complete the form below with your contact information to connect with Vicious Warfare
          </p>
        </div>

        {submitStatus === "success" && (
          <div className="bg-green-900 border border-green-700 text-green-300 p-4 rounded-lg mb-6 flex items-center">
            <CheckCircle2 className="mr-3 text-green-500" />
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-900 border border-red-700 text-red-300 p-4 rounded-lg mb-6 flex items-center">
            <AlertTriangle className="mr-3 text-red-500" />
            Please fill in the form before submitting.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="flex items-center mb-2">
              <User className="mr-2 text-blue-500" />
              <label className="text-gray-300">Name</label>
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 
                ${
                  errors.name
                    ? "border-2 border-red-600 focus:ring-red-500"
                    : "border border-gray-700 focus:ring-blue-500"
                }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <div className="flex items-center mb-2">
              <Mail className="mr-2 text-blue-500" />
              <label className="text-gray-300">Email</label>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={`w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 
                ${
                  errors.email
                    ? "border-2 border-red-600 focus:ring-red-500"
                    : "border border-gray-700 focus:ring-blue-500"
                }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <div className="flex items-center mb-2">
              <MessageCircle className="mr-2 text-blue-500" />
              <label className="text-gray-300">Message</label>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className={`w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 h-32 resize-none
                ${
                  errors.message
                    ? "border-2 border-red-600 focus:ring-red-500"
                    : "border border-gray-700 focus:ring-blue-500"
                }`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
          >
            <Send className="mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
