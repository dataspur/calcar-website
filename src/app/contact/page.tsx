"use client";

import Navigation from "../components/Navigation";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            category: "",
            message: "",
          });
        }, 3000);
      } else {
        alert(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-[#fbfbf5]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-[#292726] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-wide">JOIN CALCAR</h1>
          <p className="text-xl md:text-2xl text-[#c5b358] italic font-serif mb-6">
            Take your career to the next level.
          </p>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            Fill out the form below and our team will review your application.
            We work with world-class talent across sports, music, and entertainment.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-green-50 border-2 border-green-500 p-12 text-center">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h2 className="text-3xl font-light mb-4">Thank You!</h2>
              <p className="text-xl text-gray-700">
                Your application has been submitted. Our team will review it and get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl font-light mb-8 pb-4 border-b border-gray-200">Application Form</h2>

              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#c5b358] focus:outline-none transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#c5b358] focus:outline-none transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#c5b358] focus:outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#c5b358] focus:outline-none transition"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Category */}
              <div className="mb-6">
                <label htmlFor="category" className="block text-sm font-medium mb-2">
                  Talent Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#c5b358] focus:outline-none transition"
                >
                  <option value="">Select a category</option>
                  <option value="sports">Sports Talent</option>
                  <option value="music">Music Artist</option>
                  <option value="entertainment">Entertainment (Actor/Creator)</option>
                  <option value="creator">Digital Creator</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell Us About Yourself <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#c5b358] focus:outline-none transition resize-none"
                  placeholder="Share your background, achievements, and why you'd like to work with CALCAR..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#292726] text-white py-4 px-8 text-lg tracking-wider hover:bg-[#c5b358] hover:text-[#292726] transition-colors"
              >
                SUBMIT APPLICATION
              </button>

              <p className="mt-6 text-sm text-gray-600 text-center">
                By submitting this form, you agree to our Terms of Use and Privacy Policy.
              </p>
            </form>
          )}

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-[#c5b358] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-2">Email Us</h3>
              <p className="text-gray-600">info@calcar.com</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-[#c5b358] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-[#c5b358] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-2">Visit Us</h3>
              <p className="text-gray-600">Los Angeles, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fbfbf5] px-6 py-12 border-t border-[#292726]/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <img
              src="/calcar-logo.png"
              alt="CALCAR"
              className="h-20 w-auto"
            />
          </div>

          <div className="border-t border-[#292726]/10 pt-8">
            <p className="text-sm">Copyright © 2025 CALCAR.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
