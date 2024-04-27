import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card2 from './Card2';
import { useEffect, useState } from 'react';

export default () => {

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

  const imagePath1: string = '/images/anarkali.jpg';
  const heading1 : string = "Anarkali" ; 
  const content1 : string =  "Anarkali is the ....."
  const imagePath2: string = '/images/asymmetric.jpeg';
  const heading2 : string = "AsymmetricTop"
  const content2 : string = "Asymmetric"
  const imagePath3: string = '/images/champagne_gown.jpg';
  // const heading3 : string = "ChampagneGown"
  // const content3 : string = "Champagne Gown is a ..."
  const imagePath4: string = '/images/denim.jpg';
  const heading4 : string = "DenimReuseShow"
  const content4 : string = "Denim Show .. "
  const imagePath5: string = '/images/fashionshow_2k23.jpg'; 
  const heading5 : string = "FashionShow2k23"
  const content5 : string = "Fashion Show 2k23"
  const imagePath6: string = '/Kurta plazzo/Plazzo kurta.jpg'; 
  const heading6 : string = "KurtaPlazzo"
  const content6 : string = "KurtaPlazzo"

  if (!isMobile) {

    return (
      <div className='flex justify-center items-center pt-20'>
        <div className='w-4/5'>
          <div className='pb-5 font-bold text-xl font-serif'>Collections</div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={3}
            slidesPerView={4}
            loop={true}
            // navigation
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide><Card2 imagePath={imagePath1} heading= {heading1} content = {content1} /></SwiperSlide>
            <SwiperSlide><Card2 imagePath={imagePath2} heading= {heading2} content = {content2} /></SwiperSlide>
            {/* <SwiperSlide><Card2 imagePath={imagePath3} heading= {heading3} content = {content3} /></SwiperSlide> */}
            <SwiperSlide><Card2 imagePath={imagePath4} heading= {heading4} content = {content4} /></SwiperSlide>
            <SwiperSlide><Card2 imagePath={imagePath5} heading= {heading5} content = {content5} /></SwiperSlide>
            <SwiperSlide><Card2 imagePath={imagePath6} heading= {heading6} content = {content6} /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
    
  } else { // Render mobile view if screen width is less than 768px
    return (
      <div className='flex justify-center items-center pt-20'>
        <div className='w-4/5'>
          <div className='pb-5 font-bold text-xl font-serif'>Collections</div>
          <Swiper
            slidesPerView={1}
            loop={true}
            scrollbar={{ draggable: true }}
            className="swiper-container" // Add a class to target the Swiper container
          >
            <SwiperSlide><Card2 imagePath={imagePath1} heading={heading1} content={content1} /></SwiperSlide>
            <SwiperSlide><Card2 imagePath={imagePath2} heading= {heading2} content = {content2} /></SwiperSlide>
            {/* <SwiperSlide><Card2 imagePath={imagePath3} heading= {heading3} content = {content3} /></SwiperSlide> */}
            <SwiperSlide><Card2 imagePath={imagePath4} heading= {heading4} content = {content4} /></SwiperSlide>
            <SwiperSlide><Card2 imagePath={imagePath5} heading= {heading5} content = {content5} /></SwiperSlide>
            <SwiperSlide><Card2 imagePath={imagePath6} heading= {heading6} content = {content6} /></SwiperSlide>
            {/* Add other SwiperSlides similarly... */}
          </Swiper>
        </div>
      </div>
    );
  }


  

};


