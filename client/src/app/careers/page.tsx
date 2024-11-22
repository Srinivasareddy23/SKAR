'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

const Careers: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (!selectedExperience || !file) {
      alert('Please complete all the fields before submitting!');
      return;
    }

    const formData = new FormData();
    formData.append('experience', selectedExperience);
    formData.append('resume', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Application submitted successfully!');
        setIsModalOpen(true); // Open the modal
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      setStatus('Error submitting application. Please try again.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
          Careers at Skar Company
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          "Your Growth is Our Mission. Join a workplace where innovation meets collaboration."
        </p>
        <p className="text-sm text-gray-500 italic mt-2">
          *We never ask for money during any stage of recruitment.*
        </p>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-500 space-y-6"
      >
        {/* Experience Dropdown */}
        <div className="space-y-2">
          <label htmlFor="experience" className="text-gray-700 font-semibold">
            Select Your Experience:
          </label>
          <select
            id="experience"
            value={selectedExperience}
            onChange={(e) => setSelectedExperience(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>
              -- Select Experience Range --
            </option>
            <option value="0-2">0-2 Years</option>
            <option value="2-4">2-4 Years</option>
            <option value="4-8">4-8 Years</option>
            <option value="8+">Above 8 Years</option>
          </select>
        </div>

        {/* Resume Upload */}
        <div className="space-y-2">
          <label htmlFor="resume" className="text-gray-700 font-semibold">
            Upload Your Resume:
          </label>
          <input
            type="file"
            id="resume"
            onChange={handleFileChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            accept=".pdf,.doc,.docx"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition duration-300"
        >
          Submit Your Application
        </button>
      </form>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm text-center">
            <img
              src="/thank-you.png"
              alt="Thank You"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">
              Thank you for applying to Skar Company!
            </h3>
            <p className="text-gray-600 mt-2">
              We will review your application and get back to you shortly.
            </p>
            <button
              onClick={closeModal}
              className="mt-6 bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700">
          Be part of a team that thrives on <span className="text-green-600 font-semibold">innovation</span>, values{' '}
          <span className="text-blue-600 font-semibold">collaboration</span>, and builds the future together.
        </p>
        <p className="text-gray-500 mt-2">
          For any queries, contact us at{' '}
          <a href="mailto:careers@skar.com" className="text-blue-600 underline">
            careers@skar.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Careers;
