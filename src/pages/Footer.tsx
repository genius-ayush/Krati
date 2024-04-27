import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex justify-center bg-black">
      <footer className="w-full overflow-hidden px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4"> {/* Flex direction changed for mobile view */}
          {/* Company Name */}
          <div className="text-white font-semibold font-serif text-2xl flex items-center"> {/* Centered company name vertically */}
            {/* Krati Gautam */}
            <a href="/">

            <img src="./K-removebg.png" alt="" className="w-16 h-16" />
            </a>
          </div>
          
          {/* Navigation Links */}
          <div className="flex justify-center md:justify-start space-x-6 md:space-x-12 mb-4 md:mb-0"> {/* Added margin bottom for mobile view */}
            <Link href={"/"} className="text-white font-medium font-serif text-lg">
              Home
            </Link>
            <Link href={"/About"}  className="text-white font-medium font-serif text-lg">
              About
            </Link>
            <Link href={"/ContactUs"} className="text-white font-medium font-serif text-lg ">
              Contact
            </Link>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://www.instagram.com/elixir_aura_/">
            <img src="./instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/elixir_aura_/">
            <img src="./facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/elixir_aura_/">
            <img src="./twitter.svg" alt="Twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>
        {/* Horizontal Line */}
        <div className="border-t border-gray-700">
          <div className="text-white text-center py-4 font-serif text-lg">
            All rights reserved Krati Gautam | <a href="/privacy" className="hover:text-gray-500">Privacy Policy</a> | <a href="/terms" className="hover:text-gray-500">Terms of Service</a> | <a href="/cookies" className="hover:text-gray-500">Cookies Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
