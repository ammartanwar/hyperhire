import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <Image src="/logo.webp" alt="Logo" className="cursor-pointer" width={171} height={32} />
        </Link>

        <button onClick={toggleMenu} className="text-white md:hidden focus:outline-none">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/*FullScreen Mobile Menu */}
        <div className={`${isOpen ? 'fixed' : 'hidden'} inset-0 bg-sky-500 z-50 flex flex-col p-4 md:hidden`}>
          <div className="flex justify-between items-center mb-8">
            <Link href="/">
              <Image src="/logo.webp" alt="Logo" width={120} height={120} />
            </Link>
            <button onClick={toggleMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <li className="relative group">
            <Link href="#" className="text-white flex items-center">
              채용
              <svg
                className="w-4 h-4 ml-1 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </Link>
            <ul className="w-max absolute hidden group-hover:block bg-white text-blue-600 space-y-2 py-2 shadow-lg rounded-md">
              <li>
                <Link href="#" legacyBehavior>
                  <p className="block px-4 py-2 text-gray-700 hover:font-bold cursor-pointer">채용</p>
                </Link>
              </li>
              <li>
                <Link href="#" legacyBehavior>
                  <p className="block px-4 py-2 text-gray-700 hover:font-bold cursor-pointer">해외 개발자 원격 채용</p>
                </Link>
              </li>
              <li>
                <Link href="#" legacyBehavior>
                  <p className="block px-4 py-2 text-gray-700 hover:font-bold cursor-pointer">
                    외국인 원격 채용 (비개발 직군)
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" legacyBehavior>
                  <p className="block px-4 py-2 text-gray-700 hover:font-bold cursor-pointer border-t-[1px] border-t-[#F2F4F7]">
                    한국어 가능 외국인 채용
                  </p>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#" legacyBehavior>
              <p className="text-white cursor-pointer">해외 개발자 활용 서비스</p>
            </Link>
          </li>
        </div>

        <ul className="hidden md:flex gap-20">
          <li className="relative group">
            <Link href="#" legacyBehavior>
              <p className="text-white flex items-center cursor-pointer font-black">
                채용
                <svg
                  className="w-4 h-4 ml-1 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </p>
            </Link>
            <ul className="w-60 absolute hidden group-hover:block bg-white text-blue-600 space-y-1 py-2 shadow-lg rounded-md">
              <li className="block px-4 py-2 text-gray-700 hover:font-bold cursor-pointer">
                <Link href="#" legacyBehavior>
                  채용
                </Link>
              </li>
              <li className="block px-4 py-2 text-gray-700 hover:font-bold cursor-pointer">
                <Link href="#" legacyBehavior>
                  해외 개발자 원격 채용
                </Link>
              </li>
              <li className="block px-4 py-2 text-gray-700 hover:font-bold cursor-pointer">
                <Link href="#" legacyBehavior>
                  외국인 원격 채용 (비개발 직군)
                </Link>
              </li>
              <li className="block px-4 py-2 text-gray-700 hover:font-bold cursor-pointer border-t-[1px] border-t-[#F2F4F7]">
                <Link href="#" legacyBehavior>
                  한국어 가능 외국인 채용
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#" legacyBehavior>
              <p className="text-white cursor-pointer font-black">해외 개발자 활용 서비스</p>
            </Link>
          </li>
        </ul>
        <Link href="#" legacyBehavior>
          <button className="bg-white text-[#4A77FF] px-6 py-[6px] font-bold rounded-lg hidden md:block">
            문의하기
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
