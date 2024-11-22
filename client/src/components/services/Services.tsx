const Services = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-red-500 text-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300">
          <div className="mb-4 text-blue-500">
            {/* Icon - You can replace with your own */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16V4H4zm0 0h16M4 20V4m0 0h16" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Software Development</h3>
          <p className="text-gray-200">We build scalable, secure, and efficient software solutions tailored to your business needs, from web to mobile apps.</p>
        </div>

        {/* Service 2 */}
        <div className="bg-violet-500 text-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300">
          <div className="mb-4 text-green-500">
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l5 5L21 4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
          <p className="text-gray-200">Transform raw data into actionable insights with advanced analytics, machine learning, and data visualization techniques.</p>
        </div>

        {/* Service 3 */}
        <div className="bg-gray-600 text-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300">
          <div className="mb-4 text-purple-500">
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
          <p className="text-gray-200">Leverage cloud technology for scalable, cost-effective, and secure solutions that power your business growth.</p>
        </div>

        {/* Service 4 */}
        <div className="bg-green-500 text-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300">
          <div className="mb-4 text-yellow-500">
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12l-7-7-7 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
          <p className="text-gray-200">Crafting user-friendly, aesthetically pleasing designs that offer the best user experience across devices and platforms.</p>
        </div>

        {/* Service 5 */}
        <div className="bg-blue-500 text-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300">
          <div className="mb-4 text-red-500">
            {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m6 4H9m3 4H9m3-16H9" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
          <p className="text-gray-200">Grow your business with targeted digital marketing strategies, from SEO to social media campaigns and paid ads.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
