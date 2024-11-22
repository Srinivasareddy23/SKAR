import clientBg from '../../../public/Images/clientsBg.jpg';
import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">
        About Skar Company
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src={clientBg}
            alt="Skar Company"
            className="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700 uppercase">
              WHO WE ARE
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Skar Company is a global leader in software development with <span className="">1000+ talented employees</span> dedicated to crafting innovative digital solutions. We specialize in Web and Mobile Development, AI, and Machine Learning, transforming businesses with cutting-edge technology.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-green-500 uppercase">
              OUR MISSION
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to EMPOWER BUSINESSES with innovative technology solutions that enhance efficiency, drive growth, and create exceptional customer experiences.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-600 uppercase">
              OUR CORE VALUES
            </h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>Integrity and Transparency</li>
              <li>Commitment to Excellence</li>
              <li>Collaboration and Innovation</li>
              <li>Customer-Centric Approach</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
