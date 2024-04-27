import React, { useEffect, useState } from "react";

function AsymetricTop() {

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
          AsymetricTop
          </h1>
          <div className="flex justify-center">
          
          <img src="./Asymmetrictop/Asymmetric top2.jpeg" alt="" className="w-[20vw] h-[25vw] shadow-xl" />
          </div>
    
          <div className="p-20">
    
    
          <p className="font-serif text-xl font-semibold pb-2">
          Title: Embracing Asymmetry: The Rise of Asymmetric Tops in Fashion
          </p> 
    
          <p className="font-serif text-lg font-medium pb-2">
          Asymmetric tops have swiftly emerged as the go-to choice for those seeking a fresh, contemporary twist in their wardrobe. With their dynamic lines and unexpected silhouettes, these tops effortlessly inject an element of intrigue and individuality into any ensemble.:
          </p>
          <p className="font-serif text-lg italic	pb-2">
          Unlike traditional tops, which often adhere to symmetrical designs, asymmetric tops challenge conventions with their uneven hems, off-center necklines, and asymmetrical draping. This departure from the norm adds a sense of movement and fluidity, elevating the overall aesthetic appeal.
          </p>
          <p className="font-serif text-lg font-medium pb-2">
          One of the key attractions of asymmetric tops lies in their versatility. Whether paired with tailored trousers for a sophisticated office look or matched with distressed denim for a casual outing, these tops seamlessly transition from day to night, offering endless styling possibilities.
          </p>
    
          <p className="font-serif text-lg italic	pb-2">
          Furthermore, asymmetric tops cater to a wide range of tastes and body types. From subtle asymmetry to bold, statement-making designs, there's a style to suit every preference. Additionally, the asymmetrical cut can cleverly camouflage any perceived flaws, making it a flattering choice for all shapes and sizes.
          </p>
    
          <p className="font-serif text-lg font-medium pb-2">
          In the realm of fashion, embracing asymmetry is not merely a trend but a reflection of individuality and self-expression. Asymmetric tops empower wearers to embrace their uniqueness and stand out from the crowd, making a bold sartorial statement with every outfit.
    
    
          </p>
    
          <p className="font-serif text-lg italic	pb-2">
          In conclusion, asymmetric tops have firmly established themselves as a must-have staple in contemporary fashion. With their modern aesthetic, versatility, and ability to flatter any figure, these tops are undoubtedly a wardrobe essential for those looking to infuse their style with a touch of unconventional charm.
          </p>
    
         
          </div>
        </div>
      </div>
    );
  }else{

    return (
      <div className="pb-5">
        <div className="container mx-auto mt-8 p-5 md:p-10 bg-gray-200 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-4 text-center font-serif">
            AsymetricTop
          </h1>
          <div className="flex justify-center">
            <img
              src="./Asymmetrictop/Asymmetric top2.jpeg"
              alt=""
              className="w-full md:w-[40vw] h-auto shadow-xl"
            />
          </div>
          <div className="p-5 md:p-20">
            <p className="font-serif text-xl font-semibold pb-2">
              Title: Embracing Asymmetry: The Rise of Asymmetric Tops in Fashion
            </p>
            <p className="font-serif text-lg font-medium pb-2">
              Asymmetric tops have swiftly emerged as the go-to choice for those
              seeking a fresh, contemporary twist in their wardrobe. With their
              dynamic lines and unexpected silhouettes, these tops effortlessly
              inject an element of intrigue and individuality into any ensemble.
            </p>
            <p className="font-serif text-lg italic pb-2">
              Unlike traditional tops, which often adhere to symmetrical designs,
              asymmetric tops challenge conventions with their uneven hems,
              off-center necklines, and asymmetrical draping. This departure from
              the norm adds a sense of movement and fluidity, elevating the
              overall aesthetic appeal.
            </p>
            <p className="font-serif text-lg font-medium pb-2">
              One of the key attractions of asymmetric tops lies in their
              versatility. Whether paired with tailored trousers for a
              sophisticated office look or matched with distressed denim for a
              casual outing, these tops seamlessly transition from day to night,
              offering endless styling possibilities.
            </p>
            <p className="font-serif text-lg italic pb-2">
              Furthermore, asymmetric tops cater to a wide range of tastes and
              body types. From subtle asymmetry to bold, statement-making
              designs, there's a style to suit every preference. Additionally,
              the asymmetrical cut can cleverly camouflage any perceived flaws,
              making it a flattering choice for all shapes and sizes.
            </p>
            <p className="font-serif text-lg font-medium pb-2">
              In the realm of fashion, embracing asymmetry is not merely a trend
              but a reflection of individuality and self-expression. Asymmetric
              tops empower wearers to embrace their uniqueness and stand out from
              the crowd, making a bold sartorial statement with every outfit.
            </p>
            <p className="font-serif text-lg italic pb-2">
              In conclusion, asymmetric tops have firmly established themselves as
              a must-have staple in contemporary fashion. With their modern
              aesthetic, versatility, and ability to flatter any figure, these
              tops are undoubtedly a wardrobe essential for those looking to
              infuse their style with a touch of unconventional charm.
            </p>
          </div>
        </div>
      </div>
    );  
  }

}

export default AsymetricTop;

