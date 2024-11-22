'use client'
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
      } else {
        setStatus(result.error || "Failed to send message.");
      }
    } catch (error) {
      setStatus("Error occurred. Please try again.");
    }
  };

  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="max-w-4xl w-full rounded-lg p-8 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>

            {/* Name Field */}
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Email Field */}
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Message Field */}
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {status && (
            <div className="mt-4 text-center text-gray-700">{status}</div>
          )}
        </div>

        {/* Contact Info Section */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <h3 className="text-xl font-bold text-gray-800">Contact Info</h3>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
              📞
            </div>
            <p className="text-gray-700">+91 8877654321</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
              📍
            </div>
            <p className="text-gray-700">7-21, RTC Cross Roads, Barampeta</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
              ✉️
            </div>
            <p className="text-gray-700">skarhelp@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
