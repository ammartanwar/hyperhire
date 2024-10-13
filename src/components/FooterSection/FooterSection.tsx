import Link from 'next/link';
import Image from 'next/image';

const FooterSection: React.FC = () => {
  return (
    <footer className="pt-16 md:pt-24 px-5 pb-[60px] md:pb-16 bg-[#FBFBFB]">
      <div className="container m-auto block md:grid justify-center">
        <div className="grid md:flex gap-5 md:gap-44">
          <div className=" gap-2 grid">
            <div className="flex justify-between items-center">
              <Link href="/" legacyBehavior>
                <Image src="/footerLogo.webp" alt="HyperHire" width={187} height={34} />
              </Link>
            </div>
            <p className="font-black text-sm text-[#343741] pt-4 pb-4">
              우리는 국가의 장벽을 넘어 최고의 인재를 매<br />
              칭해드립니다.
            </p>
            <p className="font-black text-[13px] text-[#5E626F]">010-0000-0000</p>
            <p className="font-black text-[13px] text-[#5E626F]">aaaaa@naver.com</p>
          </div>
          <div className="grid md:flex grid-cols-2 gap-3 md:gap-6">
            <div className="gap-0 grid bg-[#fff] w-full md:w-[187px] p-4 rounded-xl">
              <Image src="/iconCode.webp" alt="iconCode" width={40} height={40} />
              <p className="font-black text-sm text-[#343741] pt-2 md:pt-0">해외 개발자 원격 채용</p>
              <p className="font-black text-xs text-gray-700 flex gap-2 items-center pt-4 md:pt-0">
                바로가기
                <Image src="/iconArrow.webp" alt="iconArrow" width={20} height={20} />
              </p>
            </div>
            <div className="gap-0 grid bg-[#fff] w-full md:w-[187px] p-4 rounded-xl">
              <Image src="/iconUser.webp" alt="iconUser" width={40} height={40} />
              <p className="font-black text-sm text-[#343741] pt-2 md:pt-0">외국인 원격 채용 (비개발)</p>
              <p className="font-black text-xs text-gray-700 flex gap-2 items-center pt-4 md:pt-0">
                바로가기
                <Image src="/iconArrow.webp" alt="iconArrow" width={20} height={20} />
              </p>
            </div>
            <div className="gap-0 grid bg-[#fff] w-full md:w-[187px] p-4 rounded-xl">
              <Image src="/iconKor.webp" alt="iconKor" width={40} height={40} />
              <p className="font-black text-sm text-[#343741] pt-2 md:pt-0">한국어 가능 외국인 채용</p>
              <p className="font-black text-xs text-gray-700 flex gap-2 items-center pt-4 md:pt-0">
                바로가기
                <Image src="/iconArrow.webp" alt="iconArrow" width={20} height={20} />
              </p>
            </div>
            <div className="gap-0 grid bg-[#fff] w-full md:w-[187px] p-4 rounded-xl">
              <Image src="/iconSetting.webp" alt="iconSetting" width={40} height={40} />
              <p className="font-black text-sm text-[#343741] pt-2 md:pt-0">해외 개발자 활용 서비스</p>
              <p className="font-black text-xs text-gray-700 flex gap-2 items-center pt-4 md:pt-0">
                바로가기
                <Image src="/iconArrow.webp" alt="iconArrow" width={20} height={20} />
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:flex gap-10 md:gap-28 pt-[60px] md:pt-14">
          <div className="flex gap-3">
            <div className="gap-2 grid">
              <p className="font-black text-xs text-[#343741]">상호명</p>
              <p className="font-black text-[13px] text-[#5E626F]">하이퍼하이어</p>
              <p className="font-black text-[13px] text-[#5E626F]">Hyperhire India Private Limited</p>
            </div>
            <div className="gap-2 grid">
              <p className="font-black text-xs text-[#343741]">대표 CEO</p>
              <p className="font-black text-[13px] text-[#5E626F]">김주현</p>
              <p className="font-black text-[13px] text-[#5E626F]">Juhyun Kim</p>
            </div>
          </div>
          <div className="grid md:flex gap-9 md:gap-14">
            <div className="gap-2 grid">
              <p className="font-black text-xs text-[#343741]">사업자등록번호 CIN</p>
              <p className="font-black text-[13px] text-[#5E626F]">427-86-01187</p>
              <p className="font-black text-[13px] text-[#5E626F]">U74110DL2016PTC290812</p>
            </div>
            <div className="gap-2 grid">
              <p className="font-black text-xs text-[#343741]">주소 ADDRESS</p>
              <p className="font-black text-[13px] text-[#5E626F]">서울특별시 강남대로 479, 지하 1층 238호 </p>
              <p className="font-black text-[13px] text-[#5E626F]">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
              </p>
            </div>
          </div>
        </div>
        <p className="font-black text-[13px] text-[#5E626F] pt-9 md:pt-14">ⓒ 2023 Hyperhire</p>
      </div>
    </footer>
  );
};

export default FooterSection;
