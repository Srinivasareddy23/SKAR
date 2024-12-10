import Image from "next/image";
import Link from "next/link";
import innovationBG from "../../../public/Images/innovation.png";

import { FaRobot, FaGem, FaNetworkWired } from 'react-icons/fa';

const Pioneering = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-blue-500 to-purple-700">
      <div className="absolute inset-0 z-0">
        <Image
          src={innovationBG}
          alt="Innovation Background"
          className="object-cover w-full h-full opacity-30"
          priority={true}
        />
      </div>

      <div className="relative z-0 container mx-auto px-6 py-16 md:py-24 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          Innovating the Future
        </h2>
        
        <p className="text-lg md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto">
          Discover the cutting-edge technologies driving the world forward. From AI to blockchain, these innovations are transforming industries, enhancing lives, and paving the way for the future.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-all hover:scale-105 transform duration-300">
            <FaRobot className="text-5xl text-purple-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Artificial Intelligence</h3>
            <p className="text-gray-600 mb-4">
              AI is revolutionizing industries by automating tasks, enhancing decision-making, and personalizing experiences. 
            </p>
            <p className="text-gray-500">
              From healthcare to finance, AI is streamlining processes, increasing productivity, and improving user experiences. The potential of AI is boundless, making it a cornerstone of technological innovation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-all hover:scale-105 transform duration-300">
            <FaGem className="text-5xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Blockchain</h3>
            <p className="text-gray-600 mb-4">
              Blockchain ensures transparency, security, and decentralization, reshaping finance and beyond. 
            </p>
            <p className="text-gray-500">
              By allowing secure and immutable transactions, blockchain is enhancing industries such as banking, supply chain, and even digital art. It’s changing how we trust systems and exchange value across the globe.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-all hover:scale-105 transform duration-300">
            <FaNetworkWired className="text-5xl text-green-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Internet of Things (IoT)</h3>
            <p className="text-gray-600 mb-4">
              IoT connects devices, making everyday objects smarter and more responsive, improving efficiency.
            </p>
            <p className="text-gray-500">
              From smart homes to industrial IoT, this technology is creating new opportunities in automation, energy management, and healthcare. It’s enabling a more connected and efficient world by turning everyday objects into intelligent devices.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link href="/">
            <button className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pioneering;
