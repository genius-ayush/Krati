import React, { useEffect, useState } from "react";

function Anarkali() {

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

  if(!isMobile){
    return (
      <div className="pb-5">
        <div className="container mx-auto mt-8 p-10 bg-gray-200 shadow-lg rounded-lg pb-10">
          <h1 className="text-3xl font-bold mb-4 text-center font-serif">
            Anarkali
          </h1>
          <div className="flex justify-center">
          
          <img src="./Anarkali/Anarkali.jpg" alt="" className="w-[20vw] h-[25vw] shadow-xl pr-5" />
          <img src="./Anarkali/Anarkali2.jpg" alt="" className="w-[20vw] h-[25vw] shadow-xl" />
          </div>
    
          <div className="p-20">
    
    
          <p className="font-serif text-xl font-semibold ">
          Title: Anarkali Dresses: Timeless Elegance, Modern Appeal
          </p> 
    
          <p className="font-serif text-xl font-medium ">
          Origin:
          </p>
          <p className="font-serif text-lg italic	pb-2">
          Named after Mughal courtesan Anarkali, these dresses epitomize royal charm.
          </p>
          <p className="font-serif text-xl font-medium ">
          Silhouette:
          </p>
    
          <p className="font-serif text-lg italic	pb-2">
          Flattering fitted bodice flowing into a voluminous skirt, adorned with intricate details.
          </p>
    
          <p className="font-serif text-xl font-medium ">
          Design Evolution:
          </p>
    
          <p className="font-serif text-lg italic	pb-2">
          Traditional meets modern with contemporary cuts, innovative fabrics, and embellishments.
          </p>
    
          <p className="font-serif text-xl font-medium ">
          Versatility:
          </p>
    
          <p className="font-serif text-lg italic	pb-2">
          From casual cotton to embellished ensembles, Anarkalis effortlessly transition from day to night.
          </p>
    
          <p className="font-serif text-xl font-medium ">
          Conclusion:
          </p>
    
          <p className="font-serif text-lg italic	pb-2">
          Anarkali dresses embody timeless elegance, blending heritage with contemporary allure.
          </p>
          </div>
        </div>
      </div>
    );
  }else{
    return (
      <div className="pb-5">
        <div className="container mx-auto mt-8 p-10 bg-gray-200 shadow-lg rounded-lg pb-10">
          <h1 className="text-3xl font-bold mb-4 text-center font-serif">
            Anarkali
          </h1>
          <div className="flex justify-center flex-col items-center mb-5">
            <img
              src="./Anarkali/Anarkali.jpg"
              alt=""
              className="w-full md:max-w-[20vw] h-auto shadow-xl mb-5"
            />
            <img
              src="./Anarkali/Anarkali2.jpg"
              alt=""
              className="w-full md:max-w-[20vw] h-auto shadow-xl"
            />
          </div>
  
          <div className="p-10">
            <p className="font-serif text-xl font-semibold">
              Title: Anarkali Dresses: Timeless Elegance, Modern Appeal
            </p>
  
            <p className="font-serif text-lg font-medium">Origin:</p>
            <p className="font-serif text-lg italic pb-2">
              Named after Mughal courtesan Anarkali, these dresses epitomize royal
              charm.
            </p>
            <p className="font-serif text-lg font-medium">Silhouette:</p>
  
            <p className="font-serif text-lg italic pb-2">
              Flattering fitted bodice flowing into a voluminous skirt, adorned
              with intricate details.
            </p>
  
            <p className="font-serif text-lg font-medium">Design Evolution:</p>
  
            <p className="font-serif text-lg italic pb-2">
              Traditional meets modern with contemporary cuts, innovative fabrics,
              and embellishments.
            </p>
  
            <p className="font-serif text-lg font-medium">Versatility:</p>
  
            <p className="font-serif text-lg italic pb-2">
              From casual cotton to embellished ensembles, Anarkalis effortlessly
              transition from day to night.
            </p>
  
            <p className="font-serif text-lg font-medium">Conclusion:</p>
  
            <p className="font-serif text-lg italic pb-2">
              Anarkali dresses embody timeless elegance, blending heritage with
              contemporary allure.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Anarkali;



