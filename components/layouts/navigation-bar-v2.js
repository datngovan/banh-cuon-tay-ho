import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function NavigationBar() {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Update the state based on the screen size
      setMenuOpen(window.innerWidth >= 768);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="p-5 flex flex-col bg-[#ffe6c5] md:flex-row justify-center z-10">
      <div className="flex">
        <Image src="/../icon/menu.svg" alt="menu_icon"
          width={35}
          height={35}
          onClick={toggleMenu}
          className={`md:hidden ${isMenuOpen ? "menu-open" : ""}`}
        />
        <div className="flex justify-center items-center mb-4 md:mb-0 mx-auto md:absolute md:left-8">
          <span className="text-2xl font-[Poppins] cursor-pointer">
            <Link href="/">
              <Image
                alt="banh cuon logo"
                className="inline"
                width={160}
                height={60}
                src="/../image/logo.png"
              />
            </Link>
          </span>
        </div>
      </div>

      <div>
      <nav
        className={`md:bg-white md:py-2 md:px-11  md:rounded-full right-auto absolute md:static ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row">
          <li className="bg-white w-48 mb-5 text-center px-2 py-2 md:my-0 hover:bg-primary-40 hover:text-[#FFFFFF] hover:font-semibold rounded-full">
            <Link href="/" className="text-xl hover:text-cyan-500 duration-300">
              Trang Chủ
            </Link>
          </li>
          <li className="bg-white w-48 mb-5 text-center px-2 py-2 md:my-0 hover:bg-primary-40 hover:text-[#FFFFFF] hover:font-semibold rounded-full">
            <Link
              href="/menu"
              className="text-xl hover:text-cyan-500 duration-300"
            >
              Thực Đơn
            </Link>
          </li>
          <li className="bg-white w-48 mb-5 text-center px-2 py-2 md:my-0 hover:bg-primary-40 hover:text-[#FFFFFF] hover:font-semibold rounded-full">
            <Link
              href="/recruitment"
              className="text-xl hover:text-cyan-500 duration-300"
            >
              Tuyển Dụng
            </Link>
          </li>
          <li className="bg-white w-48 mb-5 text-center px-2 py-2 md:my-0 hover:bg-primary-40 hover:text-[#FFFFFF] hover:font-semibold rounded-full">
            <Link
              href="/contacts"
              className="text-xl hover:text-cyan-500 duration-300"
            >
              Liên Hệ
            </Link>
          </li>
        </ul>
      </nav>
      </div>

      <style jsx>{`
        .menu-open {
          display: flex !important;
          
        }
      `}</style>
    </div>
  );
}

export default NavigationBar;
