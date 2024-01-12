import Link from "next/link";
//import classes from './main-navigation.module.css';
import { useState } from "react";
import Image from "next/image";
function NavigationBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="p-5 flex bg-[#ffe6c5]">
      <div className="flex justify-between items-center">
          <span className="text-2xl font-[Poppins] cursor-pointer ">
            <Link href="/">
            <Image alt="banh cuon logo" className="inline"
              width={160}
              height={60}
              src="/../image/logo.png"
            />
            </Link>
          </span>
        </div>
      <nav className=" md:m-auto md:p-2 bg-white shadow md:flex md:justify-center md:rounded-full">
        <ul className="md:flex md:items-center md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 rounded-full grid gap-x-10">
          <li className=" md:my-0 px-10 py-2 hover:bg-primary-40 hover:text-[#FFFFFF] hover:font-semibold rounded-full">
            <Link href="/" className="text-xl hover:text-cyan-500 duration-300">
              Trang Chủ
            </Link>
          </li>
          <li className=" md:my-0 px-10 py-2 hover:bg-primary-40 hover:text-[#FFFFFF] hover:font-semibold rounded-full">
            <Link href="/menu" className="text-xl hover:text-cyan-500 duration-300">Thực Đơn</Link>
          </li>
          <li className=" md:my-0 px-10 py-2 hover:bg-primary-40 hover:text-[#FFFFFF] hover:font-semibold rounded-full">
            <Link href="/recruitment" className="text-xl hover:text-cyan-500 duration-300">
              Tuyển Dụng
            </Link>
          </li>
          <li className=" md:my-0 px-10 py-2 hover:bg-primary-40 hover:text-[#FFFFFF] hover:font-semibold rounded-full">
            <Link href="/contacts" className="text-xl hover:text-cyan-500 duration-300">
              Liên Hệ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default NavigationBar;
