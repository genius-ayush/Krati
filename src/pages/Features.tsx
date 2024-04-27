import React, { useState, useEffect } from 'react';

function Features() {
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
        <section className="flex items-center justify-center w-[80vw] h-[80vh] overflow-hidden">
          <div className="flex w-full h-full">
            {/* Image container with controlled sizing and overflow */}
            <div className="flex-1 flex items-center justify-center overflow-hidden px-2 lg:px-4">  
              <img src="./feature.jpeg" alt="Feature" className='max-w-full max-h-full object-contain shadow-2xl' />
            </div>
            {/* Text container adjusted to reduce gap and responsive padding */}
            <div className="flex-1 flex flex-col justify-center px-2 lg:px-10 py-6 lg:py-10">  
              <div className="text-4xl font-medium mb-6">Discover the Unique Approach of Krati's Fashion Design Philosophy</div>
              <div className="mb-4 pb-6 lg:pb-10">We believe in pushing boundaries and creating fashion that is truly one-of-a-kind. Our designs are a reflection of our passion for innovation and our commitment to craftsmanship.</div>
              {/* Feature points container displayed horizontally */}
              <div className="flex flex-col lg:flex-row"> 
                <div className="flex-1 mr-4 mb-4 lg:mb-0">
                  <div className="font-semibold">Innovative Approach</div>
                  <div className='font-light'>We combine traditional techniques with modern aesthetics to create stunning and timeless pieces.</div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Quality Craftsmanship</div>
                  <div className='font-light'>Each garment is meticulously crafted with attention to detail and a focus on quality.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else { // Render mobile view if screen width is less than 768px
    return (
      <div className="flex justify-center pt-14">
        <section className="flex flex-col items-center justify-center w-full px-4">
          <div className="w-full md:w-[80vw] max-w-screen-lg">
            <div className="flex flex-col md:flex-row items-center justify-center">
              {/* Image container with controlled sizing and overflow */}
              <div className="flex-1 flex items-center justify-center overflow-hidden px-2 md:px-4 mb-4 md:mb-0">  
                <img src="./feature.jpeg" alt="Feature" className='max-w-full max-h-[40vh] md:max-h-full object-contain shadow-2xl' />
              </div>
              {/* Text container adjusted to reduce gap and responsive padding */}
              <div className="flex-1 flex flex-col justify-center px-2 lg:px-10 py-4 md:py-6 lg:py-10">  
                <div className="text-3xl md:text-4xl font-medium mb-4 md:mb-6">Discover the Unique Approach of Krati's Fashion Design Philosophy</div>
                <div className="mb-2 md:mb-4">We believe in pushing boundaries and creating fashion that is truly one-of-a-kind. Our designs are a reflection of our passion for innovation and our commitment to craftsmanship.</div>
                {/* Feature points container displayed horizontally */}
                <div className="flex flex-col md:flex-row"> 
                  <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <div className="font-semibold">Innovative Approach</div>
                    <div className='font-light'>We combine traditional techniques with modern aesthetics to create stunning and timeless pieces.</div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="font-semibold">Quality Craftsmanship</div>
                    <div className='font-light'>Each garment is meticulously crafted with attention to detail and a focus on quality.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Features;
