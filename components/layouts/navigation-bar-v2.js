import Link from "next/link";
//import classes from './main-navigation.module.css';
import Image from "next/image";
import { useState } from "react";

function NavigationBarV2() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-[#ffe6c5] fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/../image/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/../icon/close.svg"
                      width={30}
                      height={30}
                      alt="logo"
                    />
                  ) : (
                    <Image
                      src="/../icon/menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 md:mt-8 md:block rounded-full md:bg-[#ffffff] md:pb-0 md:mt-0  ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-cover md:h-auto items-center justify-center md:flex w-full">
                <li className="text-xl text-primary-40 md:bg-white py-2 md:px-10 py-2 text-center border-b-2 md: py-auto md:border md:rounded-full hover:bg-primary-40 hover:text-[#FFFFFF] hover:font-semibold ">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="text-xl text-primary-40 md:bg-white py-2 md:px-10 py-2 text-center border-b-2 md: py-auto md:border md:rounded-full hover:bg-primary-40 hover:text-[#FFFFFF] hover:font-semibold ">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="text-xl text-primary-40 md:bg-white py-2 md:px-10 py-2 text-center border-b-2 md: py-auto md:border md:rounded-full hover:bg-primary-40 hover:text-[#FFFFFF] hover:font-semibold">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="text-xl text-primary-40 md:bg-white py-2 md:px-10 py-2 text-center border-b-2 md: py-auto md:border md:rounded-full hover:bg-primary-40 hover:text-[#FFFFFF] hover:font-semibold ">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavigationBarV2;
{
  /* <div className="flex items-center gap-6">
            <button onClick={toggle}>
                {navbar ? <Image className="text-3xl cursor-pointer" src="/../icon/close.svg" width={50} height={50} alt="toggle menu"></Image> : <Image className="text-3xl cursor-pointer md:hidden" src="/../icon/menu.svg" width={50} height={50} alt="toggle menu"></Image>}
            </button>
        </div> */
}
