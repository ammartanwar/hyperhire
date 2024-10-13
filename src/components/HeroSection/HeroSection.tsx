import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import SwiperSection from './SwiperSection';
import BottomSlider from './BottomSlider';

interface Profile {
  span: string;
  h1: string;
  h2: string;
  h3: string;
  mDesc1: string;
  mDesc2: string;
  description: string;
  underlineCont: string;
}

const HeroSection: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/sample');
      const data = await res.json();
      setProfile(data.profile);
    };

    fetchData();
  }, []);

  const contentData = [
    {
      title: '평균 월 120만원',
      description: '임금을 해당 국가를 기준으로 계산합니다.',
    },
    {
      title: '최대 3회 인력교체',
      description: '막상 채용해보니 맞지 않아도 걱정하지 마세요.',
    },
    {
      title: '평균 3일, 최대 10일',
      description: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
    },
  ];

  return (
    <section className="relative pb-[60px] md:pb-20 w-auto">
      <div className="absolute inset-0">
        <Image src="/HeroBg.webp" alt="Background" layout="fill" objectFit="cover" quality={100} />
      </div>
      <Navbar />
      <div className="relative pt-16 md:pt-20 container block md:grid m-auto my-auto grid-cols-2 grid-flow-col gap-4 items-center justify-center">
        <div className="text-white space-y-4">
          {profile ? (
            <>
              <div className={`mb-4 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-[#fff] md:text-[#40E2E8] mx-5 md:mx-0 font-black md:font-bold bg-[#8BC4FF] md:bg-white px-3 py-[6px] rounded-lg w-fit text-lg">
                  {profile.span}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  className="relative left-3 top-[3px] hidden md:block">
                  <path
                    d="M6.43301 10.25C6.24056 10.5833 5.75944 10.5833 5.56699 10.25L0.370836 1.25C0.178386 0.916665 0.418949 0.499999 0.803849 0.499999L11.1962 0.5C11.5811 0.5 11.8216 0.916667 11.6292 1.25L6.43301 10.25Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  className="relative left-3 top-[3px] md:hidden block mx-5 md:mx-0">
                  <path
                    d="M6.43301 10.25C6.24056 10.5833 5.75944 10.5833 5.56699 10.25L0.370836 1.25C0.178386 0.916665 0.418949 0.499999 0.803849 0.499999L11.1962 0.5C11.5811 0.5 11.8216 0.916667 11.6292 1.25L6.43301 10.25Z"
                    fill="#8BC4FF"
                  />
                </svg>
              </div>
              <h1 className="text-[36px] mx-5 sm:mx-0 md:text-5xl leading-tight font-black animate-fadeInUp">
                {profile.h1}
                <span className="text-[#FFFFFFE5]">{profile.h2}</span>
                <br />
                {profile.h3}
              </h1>
              <p className="hidden md:block text-lg md:text-2xl font-black text-[#FFFFFFE5] animate-fadeInUp">
                {profile.mDesc1} <br /> {profile.mDesc2}
              </p>
              <p className="mx-5 sm:mx-0 block md:hidden text-lg md:text-2xl font-black text-[#FFFFFFE5] animate-fadeInUp">
                {profile.description}
              </p>
              <p className="text-lg underline underline-offset-2 pt-3 font-black hidden md:block">
                {profile.underlineCont}
              </p>
              <div className="gap-12 pt-11 hidden md:flex">
                {contentData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-2 transition-opacity duration-500 ${
                      fadeIn ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <span className="w-[129px] border-t-2 h-1 block"></span>
                    <p className="font-black text-lg">{item.title}</p>
                    <p className="font-black text-[#FFFFFFCC]">{item.description}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-lg text-white">로딩 중...</p>
          )}
        </div>
        <div className="mt-10 md:m-auto w-full animate-fadeInUp">
          <SwiperSection />
        </div>
      </div>
      <div className="m-auto mt-24 ml-32 hidden md:block">
        <BottomSlider />
      </div>
    </section>
  );
};

export default HeroSection;
