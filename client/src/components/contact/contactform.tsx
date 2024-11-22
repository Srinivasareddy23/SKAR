const ContactForm = () => {

  return(
    <form className="w-full lg:w-2/3 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="firstName" className="text-gray-700 font-medium">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="lastName" className="text-gray-700 font-medium">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-gray-700 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-gray-700 font-medium">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Write your message"
          rows={4}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 hover:bg-blue-800 text-white font-medium rounded-md shadow-md hover:shadow-lg transition duration-300"
      >
        Submit
      </button>
  </form>

  )
};

export default ContactForm;