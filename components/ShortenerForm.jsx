import React from "react";

const ShortenerForm = () => {
  return (
    <section className="bg-gradient-to-b from-white from-[91px] to-lightGrey to-[91px] flex flex-col items-center justify-center lg:from-[84px] lg:to-[84px]">
      <form action="" className="px-6 lg:px-10 w-full xl:px-[165px] xl:max-w-[1440px]">
        <div className="form-bg p-6 rounded-[10px] lg:flex lg:items-center lg:px-[64px] lg:py-[52px]">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="py-[6px] px-4 bg-white w-full text-[16px] font-medium leading-[36px] tracking-[.12px] text-almostBlack outline-[1px] outline-darkViolet caret-almostBlack placeholder:text-almostBlack/50 rounded-[5px] lg:w-[80%] lg:mr-6 xl:text-[20px]  xl:tracking-[.15px] xl:py-[14px] xl:px-8"
          />
          <input type="button" value="Shorten It!" className="cta rounded-[5px] w-full mt-4 text-[18px] lg:mt-0 lg:w-[20%] xl:py-[14px] xl:text-[20px] xl:leading-[36px]" />
        </div>
      </form>

      <div className="mt-6 space-y-6 px-6 mx-auto lg:px-10 lg:space-y-4 w-full xl:px-[165px] xl:max-w-[1440px]">
        <div className="bg-white rounded-[5px] pt-[6px] pb-4 px-4 text-[16px] leading-[36px] tracking-[.12px] font-medium relative overflow-hidden lg:py-[18px] lg:px-8 lg:flex lg:items-center xl:text-[20px] xl:tracking-[.15px]">
          <p className="text-almostBlack pb-[6px] lg:pb-0 lg:w-[60%] truncate lg:mr-6">https://www.openai.io</p>
          <div className="h-[1px] w-[110%] bg-grey/25 mx-auto absolute left-0 right-0 lg:hidden lg:w-[25%]" />
          <p className="text-cyan pt-[6px] mb-2 lg:mb-0 lg:pt-0 lg:mr-6">https://rel.ink/k4lKyk </p>
          <button className="pt-[9px] pb-[7px] bg-cyan text-white w-full rounded-[5px] leading-auto tracking-normal font-bold lg:w-[15%]">Copy</button>
        </div>
      </div>
    </section>
  );
};

export default ShortenerForm;
