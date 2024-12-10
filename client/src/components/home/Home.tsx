import Image from "next/image";
import mainBG from "../../../public/Images/mainBG.jpg";

const HomeContent = () => {
  return (
    <div className="flex w-full h-[calc(100vh+60px)] md:h-[calc(100vh-60px)] mt-8 ps-10">

      <div className="flex flex-col md:flex-row h-full overflow-hidden rounded-lg shadow-lg">

        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 h-full relative">
          <Image
            className="object-cover h-full w-full rounded-t-md md:rounded-none md:rounded-l-lg"
            src={mainBG}
            alt="Technology Image"
            priority={true}
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-10 text-left">
          <h5 className="mb-4 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-800">
            Embracing Tomorrow's Technology
          </h5>
          <p className="mb-6 text-lg md:text-xl font-light leading-relaxed text-gray-600">
            Technology is shaping the future, creating opportunities, and solving real-world challenges. Discover how innovations like AI, blockchain, and IoT are changing industries and driving progress.
          </p>
          <button className="self-start px-8 py-3 text-lg font-semibold text-white bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out">
            Explore More
          </button>
        </div>

      </div>
    </div>
  );
};

export default HomeContent;
