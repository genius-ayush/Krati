import React from 'react';

function DenimReuseShow() {
  return (
    <div className="pb-5">
      <div className="container mx-auto mt-8 p-5 md:p-10 bg-gray-200 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center font-serif">
          Denim Reuse Show
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-7">
          <img
            src="./Denim reuse show/denimReuseShow2.jpg"
            alt=""
            className="w-full md:w-[20vw] h-auto shadow-xl"
          />
          <img
            src="./Denim reuse show/denimReuseShow3.jpg"
            alt=""
            className="w-full md:w-[20vw] h-auto shadow-xl"
          />
        </div>

        <div className="p-5 md:p-20">
          <p className="font-serif text-xl font-semibold pb-2">
            Title: Denim Reuse Show: Redefining Fashion Sustainability
          </p>
          <p className="font-serif text-lg font-medium pb-2">
            The Denim Reuse Show is revolutionizing the fashion industry by
            showcasing the power of sustainability and creativity. Through
            innovative design and a commitment to reuse, this event highlights
            the endless possibilities of denim beyond its traditional lifespan.
          </p>
          <p className="font-serif text-lg italic pb-2">
            Featuring garments crafted from repurposed denim, the show
            celebrates the artistry of upcycling while addressing the
            environmental impact of fast fashion. By breathing new life into
            discarded denim, designers inspire a shift towards a more circular
            and eco-conscious fashion economy.
          </p>
          <p className="font-serif text-lg font-medium pb-2">
            From reconstructed jeans to patchwork jackets, each piece tells a
            unique story of resourcefulness and ingenuity. By promoting reuse
            and reducing waste, the Denim Reuse Show paves the way for a more
            sustainable future in fashion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DenimReuseShow;
