import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const MainFooter = () => {
  return(
    <div className='text-center text-gray-300'>
      <div className="bg-green-500 pt-16 pb-6 px-20">
       <p className="font-semibold text-2xl mb-4">SKAR PRIVATE LIMITED</p>
       <span className='mb-4 leading-7'>
         SKAR private limited is one of best software development company in palnadu to offering software web application development, enterprise application development, development of a software product. We are software development company may include research, new development, prototyping, modification, reuse, re-engineering, maintenance, or any other activities that result in software products and software outsourcing company in Palnadu and DUBAI,USA to assist software development services.
       </span>

       <p className='underline text-xl font-bold mt-8'>GET IN TOUCH</p>
       <ul className="list-none flex flex-row justify-center items-center mt-4">
          <li className="me-4 text-white hover:text-black cursor-pointer"><FaFacebook size={30} /></li>
          <li className="me-4 text-white hover:text-black cursor-pointer"><FaInstagram size={30} /></li>
          <li className="me-4 text-white hover:text-black cursor-pointer"><FaLinkedin size={30} /></li>
          <li className="me-4 text-white hover:text-black cursor-pointer"><FaTwitter size={30} /></li>
        </ul>
        <ul className='mb-4 mt-8 leading-6'>
          <li>SKAR Private Limited</li>
          <li>7-21,RTC cross roads, Barampeta</li>
          <li>Palnadu, 522615</li>
          <li>Andhra Pradesh</li>
        </ul>
        <hr/>
        <p className='mt-4 text-white mb-4'>
          ©Copyright Laalabs 2023. All rights Reserved
        </p>
      </div>
    </div>
  )
};

export default MainFooter;