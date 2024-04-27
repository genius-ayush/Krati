import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonials = () => {
  return (
    <div className="flex justify-center pt-12">
      <div className="h-auto md:h-96 w-full md:w-4/5 flex-col justify-center items-center bg-gray-100 rounded-xl">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide text-center font-medium text-xl bg-gray-100 flex justify-center items-center rounded-2xl">
            <div className="flex justify-center p-8">
              <img
                src="/chotabaccha.webp"
                alt=""
                className="rounded-full object-cover w-24 h-24"
              />
            </div>
            <div className="text-base font-light pt-4 pl-4 pr-4 pb-5 md:pl-28 md:pr-28">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Facere sed nemo nesciunt vel, dignissimos rem est cumque fuga
              quas perspiciatis praesentium saepe, iusto velit modi incidunt,
              maxime soluta itaque quia!
            </div>
            <div className="text-base">Ayush Rawal</div>
            <div className="text-base font-light">Software Developer</div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide text-center font-medium text-xl bg-gray-100 flex justify-center items-center rounded-2xl">
            <div className="flex justify-center p-8">
              <img
                src="/chotabaccha.webp"
                alt=""
                className="rounded-full object-cover w-24 h-24"
              />
            </div>
            <div className="text-base font-light pt-4 pl-4 pr-4 pb-5 md:pl-28 md:pr-28">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Facere sed nemo nesciunt vel, dignissimos rem est cumque fuga
              quas perspiciatis praesentium saepe, iusto velit modi incidunt,
              maxime soluta itaque quia!
            </div>
            <div className="text-base">Ayush Rawal</div>
            <div className="text-base font-light">Software Developer</div>
          </SwiperSlide>  

          <SwiperSlide className="swiper-slide text-center font-medium text-xl bg-gray-100 flex justify-center items-center rounded-2xl">
            <div className="flex justify-center p-8">
              <img
                src="/chotabaccha.webp"
                alt=""
                className="rounded-full object-cover w-24 h-24"
              />
            </div>
            <div className="text-base font-light pt-4 pl-4 pr-4 pb-5 md:pl-28 md:pr-28">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Facere sed nemo nesciunt vel, dignissimos rem est cumque fuga
              quas perspiciatis praesentium saepe, iusto velit modi incidunt,
              maxime soluta itaque quia!
            </div>
            <div className="text-base">Ayush Rawal</div>
            <div className="text-base font-light">Software Developer</div>
          </SwiperSlide>
          {/* Add more slides here */}
        </Swiper>
        {/* <div className="swiper-button-prev"></div> */}
        {/* <div className="swiper-button-next"></div> */}
      </div>
    </div>
  );
};

export default Testimonials;
