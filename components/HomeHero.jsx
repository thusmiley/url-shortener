import Image from "next/image";
import heroBg from "../public/images/illustration-working.svg";

const HomeHero = () => {
  return (
    <section className="pt-[115px] pb-[90px] overflow-hidden w-full lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:pt-[23px] lg:pb-[68px] hero-bg-xl xl:pl-[165px] xl:max-w-[1536px] xl:mx-auto xl:pt-[78px]">
      <Image
        src={heroBg}
        alt="illustration of a person using a computer"
        className="h-auto w-full object-cover object-left ml-6 md:object-contain md:object-center md:mx-8 lg:ml-0 lg:mr-[-250px] max-h-[482px] xl:hidden"
        priority={true}
      />

      <div className="mt-10 px-6 mx-auto text-center lg:text-left lg:mt-0 lg:mr-[20px] lg:pl-10 xl:py-[65px] xl:ml-0 xl:w-full xl:px-0 xl:mr-0">
        <h1 className="text-[42px] leading-[48px] tracking-[-1.05px] xl:text-[80px] xl:leading-[90px] xl:tracking-[-2px] xl:max-w-[567px]">More than just shorter links</h1>
        <p className="text-[18px] leading-[30px] tracking-[.12px] mt-[15px] mb-8 xl:text-[22px] xl:leading-[36px] xl:tracking-[.15px] xl:mt-[5px] xl:mb-[38px] xl:max-w-[567px]">
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <a href="/" className="cta text-[20px]">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HomeHero;
