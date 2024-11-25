import Image from "next/image";
import mainBG from "../../../public/Images/mainBG.jpg";

const HomeContent = () => {
  return (
    <div className="flex w-full h-[calc(100vh+60px)] md:h-[calc(100vh-60px)] dark:bg-gray-900 mt-8 ps-10">

      <div className="flex flex-col md:flex-row h-full overflow-hidden rounded-md">

        <div className="w-full md:w-1/2 h-full">
          <Image
            className="object-cover h-full w-full pe-4 md:pe-0"
            src={mainBG}
            alt="Technology"
            priority={true}
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 text-left">
          <h5 className="mb-4 text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Noteworthy Technology Acquisitions 2024
          </h5>
          <p className="mb-6 text-2xl md:text-lg font-light text-gray-700 dark:text-gray-400">
          Artificial Intelligence (AI) is revolutionizing industries worldwide. From autonomous vehicles to smart healthcare solutions, AI is reshaping how businesses operate and interact with customers. Explore the latest advancements in AI, its potential to transform various sectors, and how it's driving the future of technology.
          </p>
          <button className="self-start px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
