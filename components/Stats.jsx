import Image from "next/image";
import iconBrand from "../public/images/icon-brand-recognition.svg";
import iconDetailed from "../public/images/icon-detailed-records.svg";
import iconFully from "../public/images/icon-fully-customizable.svg";

const Stats = () => {
  return (
    <section className="bg-lightGrey py-20 text-center z-0 lg:pt-[120px] lg:pb-[208px] lg:text-left">
      <h2 className="text-[28px] leading-[48px] tracking-[-.7px] lg:text-center xl:text-[40px] xl:tracking-[-1px]">Advanced Statistics</h2>
      <p className="text-[16px] leading-[28px] tracking-[.11px] mt-4 px-6 mx-auto lg:max-w-[540px] lg:mt-[18px] lg:text-center xl:text-[18px] xl:leading-[32px] xl:tracking-[.12px]">
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>

      <div className="mt-[92px] stats-bg space-y-[92px] px-6 mx-auto lg:px-10 lg:flex lg:justify-between lg:items-start lg:space-y-0 lg:mt-[100px] lg:space-x-[30px] xl:px-[165px] xl:max-w-[1440px]">
        <div className="bg-white rounded-[5px] px-8 pb-10 relative">
          <div className="w-[88px] h-[88px] bg-darkViolet rounded-full grid place-content-center absolute top-[-44px] left-0 right-0 mx-auto lg:left-8 lg:mx-0">
            <Image src={iconBrand} alt="" className="w-10 h-10 object-contain object-center" />
          </div>
          <h3 className="text-[22px] pt-[77px] mb-3 text-almostBlack">Brand Recognition</h3>
          <p className="text-[15px] leading-[26px]">
            Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="bg-white rounded-[5px] px-8 pb-10 relative lg:top-[44px]">
          <div className="w-[88px] h-[88px] bg-darkViolet rounded-full grid place-content-center absolute top-[-44px] left-0 right-0 mx-auto lg:left-8 lg:mx-0">
            <Image src={iconDetailed} alt="" className="w-10 h-10 object-contain object-center" />
          </div>
          <h3 className="text-[22px] pt-[77px] mb-3 text-almostBlack">Detailed Records</h3>
          <p className="text-[15px] leading-[26px]">
            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="bg-white rounded-[5px] px-8 pb-10 relative lg:top-[88px]">
          <div className="w-[88px] h-[88px] bg-darkViolet rounded-full grid place-content-center absolute top-[-44px] left-0 right-0 mx-auto lg:left-8 lg:mx-0">
            <Image src={iconFully} alt="" className="w-10 h-10 object-contain object-center" />
          </div>
          <h3 className="text-[22px] pt-[77px] mb-3 text-almostBlack">Fully Customizable</h3>
          <p className="text-[15px] leading-[26px]">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
