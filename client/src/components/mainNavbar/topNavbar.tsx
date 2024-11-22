import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';


const TopNavbar = () => {
  return(
    <nav className="flex flex-row justify-between px-10 bg-green-500 py-2">
    <div className="flex flex-row">
      <a href="mailto:info@skar.com" className="text-white cursor-pointer">info@skar.com</a>
      <span className="ms-4 text-white cursor-pointer">+91 8877654321</span>
    </div>
    <div>
      <ul className="list-none flex flex-row justify-between">
        <li className="me-4 text-white hover:text-black cursor-pointer"><FaFacebook size={20} /></li>
        <li className="me-4 text-white hover:text-black cursor-pointer"><FaInstagram size={20} /></li>
        <li className="me-4 text-white hover:text-black cursor-pointer"><FaLinkedin size={20} /></li>
        <li className="me-4 text-white hover:text-black cursor-pointer"><FaTwitter size={20} /></li>
      </ul>
    </div>
    </nav>    
  )
};

export default TopNavbar