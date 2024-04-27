import React, { useEffect, useState } from "react";

function KurtiPlazo() {

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
      <div className="container mx-auto mt-8 p-10 bg-gray-200 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center font-serif ">Kurti Plazo</h1>
        <div className="flex justify-center mb-4">
          <div className="flex justify-between gap-12">
            <img
              src="./Kurta plazzo/Plazzo kurta.jpg" // Replace 'kurti_plazo_photo.jpg' with the path to your photo
              alt="Kurti Plazo"
              className="w-full max-w-xs max-h-xs mr-2 shadow-xl"
            />
            <img
              src="./Kurta plazzo/Plazzo kurta2.jpg" // Replace 'kurti_plazo_photo.jpg' with the path to your photo
              alt="Kurti Plazo"
              className="w-full max-w-xs max-h-xs ml-2 shadow-xl"
            />
          </div>
        </div>
        <div className="p-20">
        <p className="font-serif text-xl font-semibold ">
        Radiant Yellow: The Charm of Kurti Plazo Sets
        </p>
  
        <p className="font-serif text-lg italic	pb-2">
        In ethnic fashion, Kurti Plazo sets stand out for their comfort and elegance. Yellow, known for its positivity and warmth, adds vibrancy to this ensemble.  
        </p>
  
        <p className="font-serif text-xl	font-semibold	">
        The Kurti:
        </p>
  
        <p className="font-serif text-lg italic	pb-2">
        A yellow Kurti, with its hues reminiscent of sunflowers, brings sophistication. Intricate embroidery or delicate prints enhance its appeal.
        </p>
  
        <p className="font-serif text-xl	font-semibold	">
        The Plazo:
        </p>
  
        <p className="font-serif text-lg italic	pb-2">
        Complementing the Kurti, the yellow Plazo offers style and comfort. Its flowing silhouette suits casual outings and formal events alike.
        </p>
  
        <p className="font-serif text-xl	font-semibold	">
        Styling Tips:
        </p>
  
        <p className="font-serif text-lg italic">
        Adding contrast accessories like turquoise or coral accents can enhance the vibrancy of the yellow ensemble. Similarly, incorporating floral or geometric patterns in the print play can elevate visual interest, perfectly complementing the sunny disposition of the outfit. Additionally, layering with sheer fabrics such as chiffon or georgette adds depth to the ensemble. Completing the look with a lightweight dupatta or shrug in a matching shade provides both style and coverage, ensuring a seamless and sophisticated appearance.
        </p>
  
        </div>
      </div>
    );
  }else{
    return (
      <div className="container mx-auto mt-8 p-10 bg-gray-200 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center font-serif">
          Kurti Plazo
        </h1>
        <div className="flex flex-col items-center mb-4">
          <img
            src="./Kurta plazzo/Plazzo kurta.jpg"
            alt="Kurti Plazo"
            className="w-full max-w-[80vw] max-h-[50vh] mb-2 md:mb-0 shadow-xl"
          />
          <img
            src="./Kurta plazzo/Plazzo kurta2.jpg"
            alt="Kurti Plazo"
            className="w-full max-w-[80vw] max-h-[50vh] shadow-xl"
          />
        </div>
        <div className="p-10">
          <p className="font-serif text-xl font-semibold">
            Radiant Yellow: The Charm of Kurti Plazo Sets
          </p>
  
          <p className="font-serif text-lg italic pb-2">
            In ethnic fashion, Kurti Plazo sets stand out for their comfort and
            elegance. Yellow, known for its positivity and warmth, adds vibrancy
            to this ensemble.
          </p>
  
          <p className="font-serif text-xl font-semibold">The Kurti:</p>
  
          <p className="font-serif text-lg italic pb-2">
            A yellow Kurti, with its hues reminiscent of sunflowers, brings
            sophistication. Intricate embroidery or delicate prints enhance its
            appeal.
          </p>
  
          <p className="font-serif text-xl font-semibold">The Plazo:</p>
  
          <p className="font-serif text-lg italic pb-2">
            Complementing the Kurti, the yellow Plazo offers style and comfort.
            Its flowing silhouette suits casual outings and formal events alike.
          </p>
  
          <p className="font-serif text-xl font-semibold">Styling Tips:</p>
  
          <p className="font-serif text-lg italic">
            Adding contrast accessories like turquoise or coral accents can
            enhance the vibrancy of the yellow ensemble. Similarly, incorporating
            floral or geometric patterns in the print play can elevate visual
            interest, perfectly complementing the sunny disposition of the
            outfit. Additionally, layering with sheer fabrics such as chiffon or
            georgette adds depth to the ensemble. Completing the look with a
            lightweight dupatta or shrug in a matching shade provides both style
            and coverage, ensuring a seamless and sophisticated appearance.
          </p>
        </div>
      </div>
    );
  }

  
}

export default KurtiPlazo;

