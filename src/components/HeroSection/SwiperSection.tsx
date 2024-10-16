import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperData from './SwiperData';
import SvgIconOne from './svgIconOne';
import SvgIconTwo from './svgIconTwo';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import { useState, useEffect, useRef } from 'react';

const SwiperSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWindowWidth(window.innerWidth);
      setWindowWidth(window.innerWidth);

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (windowWidth === null) return null;
  const coverflowEffect = {
    rotate: 0,
    stretch: windowWidth < 768 ? 180 : 40,
    depth: 100,
    modifier: 2,
  };
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        navigation
        ref={swiperRef}
        grabCursor={true}
        touchRatio={1}
        freeMode={false}
        modules={[EffectCoverflow, Navigation]}
        effect="coverflow"
        coverflowEffect={coverflowEffect}
        initialSlide={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1440: { slidesPerView: 3, spaceBetween: 30 },
        }}>
        {SwiperData.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className={activeIndex === index ? '' : 'mt-20'}>
              <div className="flex flex-col items-center">
                {activeIndex === index && (
                  <div className="text-[#00C696] font-bold text-lg bg-[#E9F7EF] flex items-center m-auto px-4 rounded-lg py-2">
                    <SvgIconOne />
                    <span>{item.topSpan}</span>
                  </div>
                )}
                {activeIndex === index && <SvgIconTwo />}
                <div
                  className={`px-3 py-9 md:p-9 w-[260px] md:w-[295px] flex flex-col items-center rounded-xl shadow-lg ${
                    activeIndex === index ? 'bg-white' : 'bg-[#EDFCFF]'
                  }`}>
                  <Image
                    src={item.proImage}
                    alt={item.name + "'s profile image"}
                    objectFit="contain"
                    quality={100}
                    width={120}
                    height={120}
                  />
                  <h3 className="text-[#24252F] font-black text-2xl mt-4">{item.name}</h3>
                  <p className="font-black text-[#4A77FF] text-base">{item.experience}</p>
                  <div className="mt-9 flex gap-1 items-center justify-center flex-wrap">
                    {item.skills.map((skill, index) => (
                      <p
                        key={index}
                        className="border rounded-md border-[#C1C5CF] text-base w-fit px-3 py-1 flex items-center font-black text-[#5E626F]">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="md:hidden mx-5 mt-8 gap-2 grid grid-cols-[110px_130px]">
        <div className="flex md:hidden gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="bg-[#E8ECFF] w-5 h-5 p-[3px] rounded-md">
            <path
              d="M11.6693 3.5L5.2526 9.91667L2.33594 7"
              stroke="#2C599B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>한국어 능력</span>
        </div>
        <div className="flex md:hidden  gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="bg-[#E8ECFF] w-5 h-5 p-[3px] rounded-md">
            <path
              d="M11.6693 3.5L5.2526 9.91667L2.33594 7"
              stroke="#2C599B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>업무 수행 능력</span>
        </div>
        <div className="flex md:hidden  gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="bg-[#E8ECFF] w-5 h-5 p-[3px] rounded-md">
            <path
              d="M11.6693 3.5L5.2526 9.91667L2.33594 7"
              stroke="#2C599B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>겸업 여부</span>
        </div>
        <div className="flex md:hidden  gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="bg-[#E8ECFF] w-5 h-5 p-[3px] rounded-md">
            <path
              d="M11.6693 3.5L5.2526 9.91667L2.33594 7"
              stroke="#2C599B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>평판 조회</span>
        </div>
      </div>
      <p className="md:hidden mx-5 pt-6 text-[#FBFF23] font-black underline underline-offset-2">
        개발자가 필요하신가요?
      </p>
    </>
  );
};

export default SwiperSection;
