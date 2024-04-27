import React, { useEffect, useState } from "react";

function HeroAbout() {

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



  if (!isMobile) {

    return (
      <div className="flex justify-center pt-14 pb-5">
        <section className="flex items-center justify-center w-[80vw] h-[80vh] overflow-hidden bg-gray-200">
          <div className="flex w-full h-full">
            {/* Image container with controlled sizing and overflow */}
            <div className="flex-1 flex items-center justify-center overflow-hidden px-2 lg:px-4">
              <img
                src="/herovertical.jpeg"
                alt=""
                className="object-contain max-w-full max-h-[60vh] "
              />
            </div>
            {/* Text container adjusted to reduce gap and responsive padding */}
            <div className="flex-1 flex flex-col items-center justify-start pt-28 px-2 lg:px-10">
              <div className="text-4xl font-medium mb-6 pt-5 pb-4 font-serif">KRATI GAUTAM</div>
              <div className="mb-4 pb-10">
                <p className="pr-5 italic pb-4 text-xl font-serif">
                  Welcome to Krati Gautam's world, where fashion meets innovation.
                </p>
                <p className="pr-5 italic pb-4 text-xl font-serif">
                  Krati Gautam is a visionary fashion designer known for her
                  unique blend of traditional elegance and contemporary flair.
                  With a passion for craftsmanship and an eye for detail, she
                  creates one-of-a-kind designs that captivate audiences
                  worldwide.
                </p>
                <p className="pr-5 italic pb-4 text-xl font-serif">
                  Driven by her love for art and fashion, Krati's creations have
                  graced prestigious runways, showcasing her unwavering dedication
                  to pushing the boundaries of style.
                </p>
    
                <div>
                  <img src="/kratiSignature.png" alt="" className="pb-5" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );

  } else { // Render mobile view if screen width is less than 768px
    
    return (
      <div className="flex justify-center pt-14 pb-5">
        <section className="flex flex-col items-center justify-center w-[80vw] h-auto md:h-[80vh] overflow-hidden bg-gray-200">
          {/* Image container with controlled sizing and overflow */}
          <div className="flex items-center justify-center overflow-hidden px-2 lg:px-4">
            <img
              src="/herovertical.jpeg"
              alt=""
              className="object-contain max-w-full h-auto md:max-h-[60vh]"
            />
          </div>
          {/* Text container adjusted to reduce gap and responsive padding */}
          <div className="flex flex-col items-center justify-start pt-5 px-2 lg:px-10 max-w-[80%] md:max-w-[70%]">
            <div className="text-4xl font-medium mb-6 font-serif text-center">
              KRATI GAUTAM
            </div>
            <div className="mb-4 pb-10 text-center">
              <p className="italic pb-4 text-lg md:text-xl font-serif">
                Welcome to Krati Gautam's world, where fashion meets innovation.
              </p>
              <p className="italic pb-4 text-lg md:text-xl font-serif">
                Krati Gautam is a visionary fashion designer known for her unique
                blend of traditional elegance and contemporary flair. With a
                passion for craftsmanship and an eye for detail, she creates
                one-of-a-kind designs that captivate audiences worldwide.
              </p>
              <p className="italic pb-4 text-lg md:text-xl font-serif">
                Driven by her love for art and fashion, Krati's creations have
                graced prestigious runways, showcasing her unwavering dedication
                to pushing the boundaries of style.
              </p>
              <div>
                <img src="/kratiSignature.png" alt="" className="pb-5" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );

  }}

export default HeroAbout;

