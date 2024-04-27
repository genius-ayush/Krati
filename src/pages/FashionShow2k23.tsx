import React from "react";

function FashionShow() {
  return (
    <div className="pb-5">
      <div className="container mx-auto mt-8 p-5 md:p-10 bg-gray-200 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center font-serif">
          Fashion Show 2k23
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-7">
          <img
            src="./Show2k23/img1.jpg"
            alt=""
            className="w-full md:w-[20vw] h-auto max-w-full rounded-lg"
          />
          <img
            src="./Show2k23/img2.jpg"
            alt=""
            className="w-full md:w-[20vw] h-auto max-w-full rounded-lg"
          />
          <img
            src="./Show2k23/img3.jpg"
            alt=""
            className="w-full md:w-[20vw] h-auto max-w-full rounded-lg"
          />
          <img
            src="./Show2k23/img4.jpg"
            alt=""
            className="w-full md:w-[20vw] h-auto max-w-full rounded-lg"
          />
        </div>

        <div className="p-5 md:p-20">
          <p className="font-serif text-xl font-semibold pb-2">
            Title: Enchanting Elegance: Mystical Woodland Fashion Show 2023
          </p>

          <p className="font-serif text-lg font-medium pb-2">
            Transporting the audience into a realm of enchantment and wonder,
            the Mystical Woodland Fashion Show 2023 captivated hearts and minds
            with its ethereal designs and magical ambiance. Inspired by the
            mysteries of the forest, each garment was a masterpiece of
            imagination, weaving together elements of nature and fantasy in a
            captivating tapestry of style.
          </p>

          <p className="font-serif text-lg italic pb-2">
            Featuring garments crafted from repurposed denim, the show
            celebrates the artistry of upcycling while addressing the
            environmental impact of fast fashion. By breathing new life into
            discarded denim, designers inspire a shift towards a more circular
            and eco-conscious fashion economy.
          </p>

          <p className="font-serif text-lg font-medium pb-2">
            From flowing gowns adorned with intricate leaf motifs to embellished
            capes reminiscent of woodland creatures, every ensemble captured the
            essence of the mystical woodland theme. Rich earthy tones, verdant
            greens, and shimmering golds created a palette that echoed the hues
            of the forest, while delicate fabrics and intricate textures evoked
            the soft rustle of leaves and the gentle whisper of the breeze.
          </p>

          <p className="font-serif text-lg italic pb-2">
            The designers behind the collection embraced sustainability,
            incorporating eco-friendly materials and ethical practices into
            their creations. From organic cotton to recycled fabrics, each
            garment was a testament to the importance of preserving the natural
            world that inspired it.
          </p>

          <p className="font-serif text-lg font-medium pb-2">
            As models glided down the runway amidst an enchanted forest
            backdrop, the audience was transported on a journey of imagination
            and beauty. The Mystical Woodland Fashion Show 2023 proved that
            fashion can be not only a reflection of style but also a celebration
            of nature's boundless creativity and magic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FashionShow;
