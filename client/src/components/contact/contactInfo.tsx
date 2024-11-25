const ContactInfo = () => {
  return(
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
  )
};

export default ContactInfo;