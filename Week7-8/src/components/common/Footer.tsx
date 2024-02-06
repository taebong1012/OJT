import greyLogo from "@/assets/Footer/ic_logo_grey.svg";

const Footer = () => {
  return (
    <div className="w-full h-[170px] mt-[180px] bg-[#F0F0F7] text-[#666666] text-[11px]">
      <div className="w-[1280px] max-w-[1280px] h-full mx-auto px-5 flex pt-[24px] justify-between">
        <div className="flex gap-[30px]">
          <img src={greyLogo} className="w-[160px] h-[26px]" />
          <div className="flex flex-col">
            <div className="text-[13px] font-bold flex gap-[28px] mb-[20px]">
              <a
                href="https://www.jei.com/controller/customer/privacy.php"
                target="_blank"
                className="text-[#666666] hover:underline hover:cursor-pointer hover:text-footertext"
              >
                개인정보처리방침
              </a>
              <a
                href="https://github.com/taebong1012"
                target="_blank"
                className="text-[#666666] hover:underline hover:cursor-pointer hover:text-footertext"
              >
                이용약관
              </a>
              <a
                href="https://www.jei.com/controller/company/ceo.php"
                target="_blank"
                className="text-[#666666] hover:underline hover:cursor-pointer hover:text-footertext"
              >
                회사소개
              </a>
              <a
                href="https://www.jei.com/controller/customer/sitemap.php"
                target="_blank"
                className="text-[#666666] hover:underline hover:cursor-pointer hover:text-footertext"
              >
                사이트맵
              </a>
            </div>

            <div className="flex flex-col gap-[2px] items-start">
              <span>
                대표자: 박성훈 | 주소: 서울특별시 종로구 창경궁로 293
                (주)재능교육
              </span>
              <span>
                사업자번호: 123-45-67890 | 전화: 1588-1234 | 이메일: aaa@jei.com
              </span>
              <span>통신판매업 신고번호: 제 2040-서울서울-3111호</span>
              <span>Copyright © JEI corporation. All rights reserved.</span>
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            window.open("https://www.instagram.com/taebong10.12/", "_blank")
          }
          className="w-[120px] h-[32px] bg-[#68738C] flex items-center justify-center text-[#FCFCFC] text-[14px] font-bold hover: cursor-pointer"
        >
          My Site
        </div>
      </div>
    </div>
  );
};

export default Footer;
