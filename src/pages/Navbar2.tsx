import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "../../constants";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar2() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  

  return (
    <nav className="sticky top-0  backdrop-filter backdrop-blur-lg bg-opacity-0  border-b border-gray-100  firefox:bg-opacity-10 shadow-xl border-2 w-[100vw] flex flex-col items-center px-5 pt-5  z-30 bg-black">
      <div className="w-full flex justify-between items-center">

        <div className="w-1/4">
          {/* Empty div for symmetry, optional use for future elements */}
          <a href="/">
            <img
              src="Kwhite-removebg.png"
              alt=""
              width={120}
              height={120}
              className="pl-5 pb-5"
            />
          </a>
        </div>

        <div className="sm:text-4xl font-bold font-serif pb-5 text-2xl">
          <Link href="/" className="">
            Krati Gautam
          </Link>
        </div>

        <div className="flex items-center justify-end space-x-5 w-1/4 pr-2 ">
          
          <div className="  block z-10 sm:hidden">
            {nav ? (
              <AiOutlineClose onClick={handleNav} className="text-white" />
            ) : (
              <AiOutlineMenu onClick={handleNav}  className="" />
            )}
          </div>

          {/* mobile menu */}

          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-110%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white text-center ease-in duration-300"
            }
          >
            <ul>
              <li className="p-4 text-4xl hover:text-gray-500">home</li>
              <li className="p-4 text-4xl hover:text-gray-500">collections</li>
              <li className="p-4 text-4xl hover:text-gray-500">About</li>
              <li className="p-4 text-4xl hover:text-gray-500">Contact</li>
            </ul>
          </div>


        </div>
      </div>

        <ul className="w-full sm:flex justify-center mt-3 gap-28 pb-2.5 hidden">
          {NAV_LINKS.map((link) => (
            <li
              key={link.key}
              className=" pb-1.5 cursor-pointer transition-all hover:font-bold"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
    </nav>
  );
}

export default Navbar2;
