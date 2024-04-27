import React, { useState } from "react";
import { useEffect } from "react";

function ContactUs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial screen width
    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  // Render desktop view if screen width is greater than or equal to 768px
  if (!isMobile) {
    return (
      <div className="flex justify-center pt-14">
      <section className="flex items-center justify-center w-[80vw] h-auto md:h-[40vh] overflow-hidden bg-white shadow p-4 rounded-lg">
        <div className="grid grid-cols-3 gap-6 w-full text-center">
          {/* Email Section */}
          <div>
            <img src="./email.svg" alt="Email Icon" className="w-12 h-12 mx-auto"/>
            <div className="mt-4 flex-row justify-left">
              <div className="font-semibold">Email</div>
              <div className="font-light">Feel free to reach out to us for any exclusive fashion inquiries</div>
              <a href="mailto:hello@krati.com" className="font-light hover:text-gray-500  ">
                hello@krati.com
              </a>
            </div>
          </div>
          {/* Phone Section */}
          <div>
            <img src="./phone.svg" alt="Phone Icon" className="w-12 h-12 mx-auto"/>
            <div className="mt-4">
              <div className="font-semibold">Phone</div>
              <div className="font-light">Call us to discuss your fashion needs.</div>
              <a href="tel:+917999780471" className=" font-light hover:text-gray-500">
                +91 7999780471
              </a>
            </div>
          </div>
          {/* Location Section */}
          <div>
            <img src="./location.svg" alt="Location Icon" className="w-12 h-12 mx-auto"/>
            <div className="mt-4">
              <div className="font-semibold">Office</div>
              <div className="font-light">Visit our office for a personalized fashion experience.</div>
              <div className="font-light">E-10 Maral Overseas Kota RJ</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  } else { // Render mobile view if screen width is less than 768px
    return (
      <div className="flex justify-center pt-14">
      <section className="flex flex-col items-center justify-center w-[80vw] h-auto md:h-[40vh] overflow-hidden bg-white shadow p-4 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-center md:text-left">
          {/* Email Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src="./email.svg" alt="Email Icon" className="w-12 h-12 mx-auto mb-2 md:mb-0"/>
            <div className="mt-2">
              <div className="font-semibold">Email</div>
              <div className="font-light">Feel free to reach out to us for any exclusive fashion inquiries</div>
              <a href="mailto:hello@krati.com" className="font-light hover:text-gray-500 block md:inline-block">
                hello@krati.com
              </a>
            </div>
          </div>
          {/* Phone Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src="./phone.svg" alt="Phone Icon" className="w-12 h-12 mx-auto mb-2 md:mb-0"/>
            <div className="mt-2">
              <div className="font-semibold">Phone</div>
              <div className="font-light">Call us to discuss your fashion needs.</div>
              <a href="tel:+917999780471" className="font-light hover:text-gray-500 block md:inline-block">
                +91 7999780471
              </a>
            </div>
          </div>
          {/* Location Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src="./location.svg" alt="Location Icon" className="w-12 h-12 mx-auto mb-2 md:mb-0"/>
            <div className="mt-2">
              <div className="font-semibold">Office</div>
              <div className="font-light">Visit our office for a personalized fashion experience.</div>
              <div className="font-light">E-10 Maral Overseas Kota RJ</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
    }}

export default ContactUs;