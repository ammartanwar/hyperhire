import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import SwiperBottomData from './SwiperBottomData';
import Image from 'next/image';

const BottomSlider: React.FC = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={4.4}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className={`mySwiper animate-fadeInUp`}
        modules={[Autoplay]}>
        {SwiperBottomData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="p-4 rounded-lg bg-opacity-10 bg-white flex gap-6 items-center">
              <Image src={item.imageSrc} alt={item.title} objectFit="contain" quality={100} width={56} height={56} />
              <p className="text-2xl">{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BottomSlider;
