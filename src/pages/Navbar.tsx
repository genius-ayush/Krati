import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "../../constants";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 firefox:bg-opacity-90">
      <div className="w-full flex justify-between items-center">
        <div className="w-1/4">
          <a href="/">
            <img src="Kwhite-removebg.png" alt="" width={120} height={120} className="pl-5 pb-5" />
          </a>
        </div>
        <div className="sm:text-4xl font-bold font-serif pb-5 text-2xl">
          <Link href="/" className="">
            Krati Gautam
          </Link>
        </div>
        <div className="flex items-center justify-end space-x-5 w-1/4 pr-2">
          <div className="block z-10 sm:hidden">
            {nav ? (
              <AiOutlineClose onClick={handleNav} className="text-black text-2xl " />
            ) : (
              <AiOutlineMenu onClick={handleNav} className="text-black text-2xl pb-1" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={nav ? "sm:hidden block" : "hidden"}>
        <ul className="flex flex-col items-center mt-5 space-y-2">
          <li className="text-balck text-sm hover:text-gray-500">
            <Link href="/">Home</Link>
          </li>
          <li className="text-black text-sm hover:text-gray-500">
            <Link href="/ScrollBarr">Collections</Link>
          </li>
          <li className="text-black text-sm hover:text-gray-500">
            <Link href="/About">About</Link>
          </li>
          <li className="text-black text-sm hover:text-gray-500">
            <Link href="/ContactUs">Contact</Link>
          </li>
        </ul>
      </div>

      <ul className="w-full sm:flex justify-center mt-3 gap-28 pb-2.5 hidden">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className=" pb-1.5 cursor-pointer transition-all hover:font-bold text-xl"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
