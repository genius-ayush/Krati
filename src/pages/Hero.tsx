function Hero() {
  return (
    <div className="flex justify-center pt-7">
      <div className="w-full overflow-y-auto">
        <section className="flex bg-gray-200 items-center justify-center mx-auto w-full md:w-[80vw] h-[80vh]">
          <div className="bg-gray-100 w-full md:w-[75vw] h-[70vh] flex items-center justify-center border-2">
            <div className="flex flex-col md:flex-row w-full h-full">
              {/* Text section */}
              <div className="md:w-[50%] h-full flex flex-col justify-center px-6 md:px-12 py-4 md:py-6 order-2 md:order-1">
                <div className="text-4xl font-medium pb-2 md:pb-4 text-center md:text-left">Discover the latest fashion trends and style.</div>
                <div className="text-base pb-4 text-center md:text-left">Experience the art of fashion through our exquisite collections and designs.</div>
                {/* Buttons */}
                <div className="flex justify-center md:justify-start">
                  <button className="bg-white text-black border border-black px-5 py-2 hover:bg-black hover:text-white transition-colors duration-300 mr-4">
                    Explore
                  </button>
                  <button className="bg-white text-black border border-black px-5 py-2 hover:bg-black hover:text-white transition-colors duration-300">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Image section */}
              <div className="md:w-[50%] h-full order-1 md:order-2">
                <img src="./hero.jpg" alt="Fashion trends" className="w-full h-full object-cover md:object-contain" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
