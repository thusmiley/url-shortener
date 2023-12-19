"use client";
import { useState } from "react";

const UrlCard = ({ longUrl, tinyUrl }) => {
  const [copySuccess, setCopySuccess] = useState("Copy");

  return (
    <div className="bg-white rounded-[5px] pt-[6px] pb-4 px-4 text-[16px] leading-[36px] tracking-[.12px] font-medium relative overflow-hidden lg:py-[18px] lg:px-8 lg:flex lg:items-center xl:text-[20px] xl:tracking-[.15px]">
      <p className="text-almostBlack pb-[6px] lg:pb-0 lg:w-[60%] truncate lg:mr-6">{longUrl}</p>
      <div className="h-[1px] w-[110%] bg-grey/25 mx-auto absolute left-0 right-0 lg:hidden lg:w-[25%]"></div>
      <p className="text-cyan pt-[6px] mb-2 truncate lg:mb-0 lg:pt-0 lg:mr-6">{tinyUrl} </p>
      <button
        className={`pt-[9px] pb-[7px] bg-cyan text-white w-full rounded-[5px] leading-auto tracking-normal font-bold lg:w-[15%] ${
          copySuccess === "Copied!" ? "bg-darkViolet" : ""
        }`}
        onClick={() => {
          setCopySuccess("Copied!");
          navigator.clipboard.writeText(tinyUrl);
        }}
      >
        {copySuccess}
      </button>
    </div>
  );
};

export default UrlCard;
