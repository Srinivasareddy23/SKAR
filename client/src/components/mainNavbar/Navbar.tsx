import Link from 'next/link';

const NavBar = () => {
  return(
    <div>
      <nav className="flex flex-row justify-between bg-white text-black border-b-2 border-gray-200 p-3">
      <div>
        <Link href={'/'}>
          <p className="font-bold text-3xl text-green-500 sm:text-3xl mt-2 sm:mt-1 sm:pt-0 cursor-pointer">SKAR</p>
        </Link>
        
      </div>
      <div>
        <ul className="flex flex-row justify-between font-semibold list-none">
        <Link href={'/'}>
         <li className="me-4 cursor-pointer hover:underline hover:decoration-2 hover:translate-y-1 transition-all pt-3">Home</li>
        </Link>
       
          <Link href={'/careers'}>
           <li className="me-4 cursor-pointer hover:underline hover:decoration-2 hover:translate-y-1 transition-all pt-3">Careers</li>
          </Link>
         

          <Link href={'/contactus'}>
            <li className="me-4">
              <button className='p-3 bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-700 text-white'>Contact Us</button>
              </li>
          </Link>
        
        </ul>
      </div>
      </nav>
    </div>
  )
};

export default NavBar;

